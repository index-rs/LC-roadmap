# CLAUDE.md — LC-roadmap

Context for anyone (human or Claude Code) picking this repo up. Read `README.md` first for the data
model; this file covers conventions and traps.

## What this is

A single-page content roadmap for the Lost City RuneScape preservation server. One page, one data
file. No build step, no dependencies, no package.json. Serve the folder over http and it works.

## Architecture

`Update Roadmap.dc.html` is a Design Component: one HTML file containing a template (`<x-dc>`) and a
logic class (`class Component extends DCLogic`), rendered by `support.js`. The template is React
under the hood — `style="…"` compiles to a style object, `{{ path }}` holes are dotted lookups only
(no expressions), and `<sc-for>` / `<sc-if>` handle repetition and conditionals.

`updates-data.js` is a plain ES module, imported dynamically in `componentDidMount`. Data changes
need no page changes. `update-notes-data.js`, `changes-data.js` and `quests-data.js` are imported
the same way but with `.catch(() => {})` — if any of them is missing the roadmap still renders in
full. Keep it that way.

## Conventions to keep

- **Inline styles only.** No stylesheets, no classes. The CSS in `<helmet>` is body resets, font
  links, link colours — and the theme **token definitions**, which are values, not rules for
  elements. Do not add a rule that selects an element.
- **Everything themed is a token.** `var(--bg-2)`, `var(--gold)`, `var(--type-quest)`,
  `var(--font-head)`, `var(--r-card)`. A literal colour, font stack or border-radius in an inline
  style is a bug: it will not switch themes. `grep 'oklch('` outside `<helmet>` must return nothing.
  `TYPE_COLORS` and `KIND_COLORS` hold token references, not colours.
- **Type is themed too.** Editorial uses Space Grotesk for headings, terminal uses IBM Plex Sans;
  both use IBM Plex Mono for build numbers, dates, counts and labels. Go through `--font-head` /
  `--font-body` / `--font-mono`.
- **Attribution stays.** The footer credits both wikis under CC BY-NC-SA 3.0. That is a licence
  condition, not decoration.

## Traps

1. **This copy of `support.js` cannot placeholder-render a nested `<sc-for>`.** A loop whose `list`
   comes from an outer loop's alias throws `ReferenceError: <alias> is not defined` on first paint,
   with any combination of `hint-placeholder-count` / `hint-placeholder-val`. That is why the entity
   chips are built as a `React.createElement` subtree in `buildChips()` and rendered through a single
   `{{ item.chipsEl }}` hole. **Do not convert `buildChips()` back to template markup** unless you
   also upgrade `support.js`. Max safe loop depth is 2 (`pkg → item`).
2. **The build rail is a fixed right-hand column, no longer part of the header.** It used to be a
   horizontal strip inside `[data-sticky]`, which grew a scrollbar the moment the window narrowed.
   It is now `position:fixed; right:0`, vertically scrolling inside its own box, sitting below the
   header via `top: headerH + 12`. Two consequences:
   - `state.headerH` must stay live. A `ResizeObserver` on `[data-sticky]` feeds it, because the
     header grows and shrinks *on its own* as the SHOW chips wrap in when data loads, at a
     constant window width — a `resize` listener alone misses that.
   - Because the rail is out of flow, `shellStyle` reserves its width as `paddingRight`. Remove
     that and the content slides under the rail on narrow windows.
   `stickyHeight()` still drives scroll offsets, and returns a flat `14` when the header is not
   sticky (see trap 5) — offsetting by a header that scrolled away leaves a screen of dead space.
3. **Icon URLs are guesses.** `iconUrl()` builds `/images/<Page_name>.png`. Names that don't follow
   the pattern must go in `NO_ICON_RE` (page) or `NO_ICON` (data file), or they fire a 404 for every
   visitor. `onError` hides survivors but the request still goes out.
4. **`updates-data.js` is generated but hand-maintained.** It was produced from
   `uploads/runescape_release_timeline.xlsx` via the extracts in `scraps/`. There is no generator
   script in the repo — do not regenerate and clobber hand edits (`PINNED`, `star`, `note`, `hide`).
   `tools/build-changes-data.py` writes **only** `update-notes-data.js` and `changes-data.js`;
   it reads `updates-data.js` but never writes it. Keep that boundary.
5. **Below 700px the header is deliberately *not* sticky.** The SHOW row wraps into a ~570px
   header at phone widths (it was ~460px before the theme toggle and two more
   detail chips); pinned, that eats most of the viewport. `stickyStyle` switches to
   `position:relative` there and lets it scroll away — navigation survives because the rail is
   sticky independently. `state.narrow` drives this and is set in `componentDidMount` via
   `this._measure()`, never from the class-property initialiser: that runs before layout settles
   and reads a stale `window.innerWidth`. Do not remove that call. All of this exists because the
   page is inline-styles-only and has no stylesheet to hold a media query.
6. **Change `kinds` tags are derived, not sourced.** They come from regex over the change
   wording in `tools/build-changes-data.py` / the research extractor. Never present them as
   wiki-sourced fact, and expect unusual phrasing to be mis-tagged.
7. **The detail blocks use `subOpen`, not `overrides`.** `isOpen`/`overrides` default to
   *open* via `allClosed`; the patch-note and changes blocks must default to *closed*, so
   they have their own `subOpen` map and `isSubOpen`/`toggleSub`. Do not merge the two.
8. **A change entry holds `entities` (array), never `entity`.** Identical changes are
   rolled up by `group_identical()`, so any count of "what changed" must sum
   `entities.length` — counting entries under-reports. Search must scan all of them.
9. **Pinning has two sources — use `pinnedIn(type, name)`, not bare `isPinned(name)`.**
   `PINNED` is a name list; `PINNED_TYPES` pins whole types (Quest, Skill). Any code path that
   knows the entity's type must consult both, or quests and skills silently lose their
   highlight. `hasPinned(change)` does the same for a change entry via `c.type`.
10. **Synthetic entity links go through `hrefFor(name)`, never a raw `wikiPath`.** `Bank` and
    `Shortcut` entities have no wiki page under their chip label. `hrefFor` checks `LINK_URLS`
    (label → full URL, used verbatim — shortcut URLs carry `#anchors` and `%27` that must not
    be re-encoded), then `LINK_TARGETS` via `articleFor` (label → page title → `wikiPath`),
    then the name itself. Both `buildChips` and `buildChanges` call it. Add any new synthetic
    entity to whichever map fits. They are kept out of `ICON_TYPES`, so no image is fetched.
11. **Every SHOW chip for a detail layer carries two controls.** Four of them now — Patch notes,
   Quest details, Unconfirmed, Changes. The label shows/hides the layer (`showNotes`,
   `showQuests`, `showUnconf`, `showChanges`); the caret expands or collapses every
   block of that layer (via `toggleAllSub`, see trap 14). `toggleAllSub`
   **drops per-block `subOpen` overrides for that kind** — without that, a block the user had
   already toggled ignores the command and the button looks broken. They are `<span>`s inside a
   `<div>`, not nested `<button>`s, which would be invalid HTML.
12. **`alpha()` is `color-mix`, not string surgery.** It used to append `/ 0.4` before the closing
    paren of an oklch literal. That produces garbage for `var(--gold)` and for the terminal theme's
    hex values alike, so it is now
    `color-mix(in oklch, <colour> <pct>%, transparent)`. Same signature, works for any colour
    syntax. Do not "simplify" it back.
13. **The theme attribute is set before React mounts.** An inline `<script>` in `<helmet>` reads
    `localStorage` and stamps `data-theme` on `<html>`. Setting it in `componentDidMount` instead
    gives every visitor a flash of the other theme. `setTheme()` only keeps `state.theme` in sync so
    the buttons can show which one is active.
14. **`isSubOpen` / `toggleAllSub` are driven by `SUB_FLAGS`, not by a chain of ternaries.** The map
    goes suffix → expand-all flag; `req` and `rew` deliberately share `allQuestOpen`, because the two
    quest blocks are one layer with one SHOW chip. `toggleAllSub(flag, kinds)` takes the flag and the
    suffixes that follow it — a fifth block kind is one entry in the map.
15. **Four detail chips is the ceiling.** The SHOW row already runs to a ~570px header at phone
    widths (it is deliberately not sticky there, see trap 5). That is why quest requirements and
    rewards render as two blocks behind *one* chip. A fifth chip needs the detail chips moved to
    their own row first.
16. **`unconfirmed` is hand-written in `updates-data.js` and has no generator.** That is the whole
    point: it survives every regeneration, exactly like `PINNED` and `star` (trap 4). `confidence`
    must be one of `confirmed` / `likely` / `possible` / `unknown` — `check-data.mjs` enforces it.
    A block whose entries are all `confirmed` renders as *Unlisted*, not *Unconfirmed*; those entries
    are things Jagex published that created no entity, and calling them unconfirmed would be a lie.
17. **Quest requirements and rewards are today's OSRS, and the caveat line is load-bearing.** The
    footer sentence in every quest block is not decoration — the source genuinely does not describe
    2005. The `lc` line beside it is a *separate* claim from a preservation branch and must never be
    merged into the wiki values; the disagreement between them is the only drift signal available,
    because quest reward buffs are not recorded in `{{Subject changes}}`.
18. **Strip every HTML tag out of wiki text, not a named few.** One un-stripped
    `<abbr title="&#77;&#105;…">` in a quest requirement rendered as a single unbreakable 1,349px
    string and pushed the whole page 240px sideways. `rs_timeline/quests.py` now drops
    `</?[a-zA-Z][^>]*>` and unescapes entities *after* that; `questBullets` also sets
    `overflowWrap: 'anywhere'` as a second line of defence.
19. **Quest rewards are date-filtered, and that filter is the feature.** `quests-data.js` holds
    only bullets whose linked pages predate the build the quest sits under; the rest are dropped by
    `build-quests-data.py` using `link_dates` from the extractor and `tools/quest-dates.mjs` for the
    cutoff. Without it the page tells readers that a 2004 quest rewards a Nightmare Zone boss. The
    `cut` count per quest feeds the footer — a short list must be distinguishable from a filtered
    one. Two anachronisms are phrase rules rather than dates (`ring of wealth` teleports, `elite`
    clue scrolls) because the linked page predates the capability; add to `ANACHRONISMS` with the
    year, and keep that list short, since a wrong entry silently hides a real reward.
    The third rule, the Wizards' Guild rune store, is the shape to watch for: OSRS gated
    the shop behind The Hand in the Sand in 2018 and the wiki then listed access as a
    quest *reward*, though in 2006 the shop was open to everyone and RS3 lists no such
    reward. `tools/probe-late-rewards.py` hunts that class — a page linked from a quest's
    rewards carrying a change dated after the build that names the quest. It is a review
    list, not a filter: most of its hits are later QoL tweaks to real rewards.
20. **Requirements are quest and skill requirements only.** `start`, `items` and `enemies` are not
    in the generated data at all — they describe a modern route through the quest. Do not re-add
    them without a reason; `buildQuestBlock` no longer has a `sub()` helper to render them.

21. **Post-2005 XP buffs are corrected from a hand-written table, and the note beside them
    is not optional.** OSRS raised some quest XP rewards long after the fact — Swan Song's
    Fishing award went 10,000 → 50,000 on 2022-11-30. The date filter (trap 19) cannot see
    this: a rebalanced *quantity* links no new page, so it passes silently. `REWARD_BUFFS`
    in `tools/build-quests-data.py` rewrites the figure back to what the build paid and
    emits `buffs` on the quest, which the page renders as a `Corrected:` line. Three rules:
    a row is applied **only** if the wiki still reads the value it was written against
    (otherwise the build warns — a second buff must be read, never guessed); the correction
    is always shown, because printing a number the wiki does not have without saying so is
    the same failure as printing the modern one; and three found is a **floor, not a
    ceiling** — an undocumented buff stays invisible, so the caveat line still carries the
    weight. `tools/probe-quest-buffs.py` re-runs the scan; anything it prints that is not in
    the table is a reward currently shown at a modern figure.
22. **Lost City Content data wins where it exists.** Precedence for any quest reward or
    requirement value is: the `lc` branch value (period data by construction) → a wiki
    figure corrected per trap 21 → the wiki figure as it stands. This is a precedence rule,
    **not** a merge — trap 17 still holds, the losing values stay on screen, because the
    disagreement between sources is the only drift signal there is. Coverage is the limit:
    4 of 52 quests have `.rs2` implementations today, so the rule mostly describes where
    this goes as Lost City implements more.

## Roadmap of the roadmap

Planned additions, per the project owner:

- More `unconfirmed` entries. The layer exists and carries three; the scan that found them turned up
  nothing else in the window, so growth here is research, not extraction.
- Quest data for the rest of the window's quests as Lost City implements them. Four of 52 today —
  `377-wip` carries config-only shells for Cabin Fever, Mourning's End II, Recruitment Drive and
  Recipe for Disaster with no `.rs2` scripts at all, so there is nothing to read yet. Re-running
  `runescape_quests_fetcher.py --full` picks them up as they land.
- More pinning as the interesting content gets identified.
- Boundaries past 319 may shift if the live roadmap changes.
