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
need no page changes. `update-notes-data.js` and `changes-data.js` are imported the same way but
with `.catch(() => {})` — if either is missing the roadmap still renders in full. Keep it that way.

## Conventions to keep

- **Inline styles only.** No stylesheets, no classes. The only CSS in `<helmet>` is body resets,
  font links and link colours.
- **Dark palette in oklch**, not hex: background `oklch(0.17 0.014 55)`, cards `oklch(0.225 0.016 55)`,
  borders `oklch(0.32 0.02 55)`, gold accent `oklch(0.78 0.15 75)`, blue accent `oklch(0.72 0.1 210)`.
  Per-type colours live in `TYPE_COLORS`.
- **Type**: Space Grotesk for headings and update titles, IBM Plex Sans for body, IBM Plex Mono for
  build numbers, dates, counts and type labels.
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
5. **Below 700px the header is deliberately *not* sticky.** The SHOW row wraps into a ~460px
   header at phone widths; pinned, that eats most of the viewport. `stickyStyle` switches to
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
10. **The two SHOW chips for Patch notes / Changes carry two controls each.** The label
   shows/hides the layer (`showNotes` / `showChanges`); the caret expands or collapses every
   block of that kind (`allNotesOpen` / `allChangesOpen` via `toggleAllSub`). `toggleAllSub`
   **drops per-block `subOpen` overrides for that kind** — without that, a block the user had
   already toggled ignores the command and the button looks broken. They are `<span>`s inside a
   `<div>`, not nested `<button>`s, which would be invalid HTML.

## Roadmap of the roadmap

Planned additions, per the project owner:

- Per-item change data: nerfs, buffs, price and spec adjustments from individual patch notes. Not in
  the wiki release-timeline dataset; needs a manual pass. Likely shape: a `changes: [...]` array on
  an update, rendered like `note` but repeatable and tone-coded.
- More pinning as the interesting content gets identified.
- Boundaries past 319 may shift if the live roadmap changes.
