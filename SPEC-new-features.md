# SPEC — three new features for LC-roadmap

Drafted 2026-08-19. Scope spans two repos: the page (`F:\projects\LC-roadmap`) and the
extraction project (`F:\projects\runescape-research`). Read `CLAUDE.md` first — several of
its traps are load-bearing here.

## Status: all four built, 2026-08-19

Shipped as specced, with three deliberate departures and one correction to the
research in this document:

- **Quest requirements and rewards share one SHOW chip**, not two. Two blocks, as
  planned, but five chips do not fit in the control row at phone widths — the
  header already runs to ~570px there.
- **Spawns are not a separate layer.** They are `unconfirmed` entries carrying
  `kind: "spawn"`, with a `◇ Spawns` filter in the top bar, exactly as the
  feature-4 section proposes.
- **The block header reads *Unlisted* when every entry is `confirmed`.** Calling
  the Fenkenstrain hellhound additions "unconfirmed" would be a lie: Jagex
  published them. They are in this layer because they created no entity.
- **Correction to the Content-repo coverage below.** The branch listing is right,
  but a quest *directory* is not an implementation. `quest_fever`, `quest_rd`,
  `quest_100` and `quest_mourning2` on `377-wip` hold **configs only, with zero
  `.rs2` files** — Cabin Fever, Recruitment Drive, Recipe for Disaster and
  Mourning's End Part 2 are shells. Of the window's 41 quests, **four** have a
  working implementation: Monkey Madness, The Golem, Throne of Miscellania,
  Troll Romance. The table below reads as if all nine were ports; they are not.

### Correction, 2026-08-20 — reward drift IS recorded, in one place

The section below concludes that reward buffs are not recorded anywhere and that
the diff against the Content repo is the only signal. The "they would live on the
reward item or skill page, if anywhere" hypothesis was never tested. It has been
now, and the conclusion was half wrong:

- **Item and skill pages: confirmed dead.** 292 pages linked from quest rewards,
  595 `{{Subject changes}}` entries, exactly one dated before 2008. The
  reward-flavoured entries are modern OSRS content — Slayer unlocks, diary XP
  boosts, Nightmare Zone.
- **Quest pages: not dead, just thin.** The spot-check of eight pages that
  produced "all typo fixes and renames" was too small. All 52 scanned: 61 change
  entries, **three genuine XP buffs**, all from the update of 2022-11-30 —
  Mourning's End Part I, Mourning's End Part II and Swan Song. The page was
  reporting all three at their post-buff figures.

Those three are now corrected via `REWARD_BUFFS` in `tools/build-quests-data.py`,
and `tools/probe-quest-buffs.py` re-runs the scan. It remains true that no change
log can supply the *general* case — three is a floor, not a ceiling.

---

Verified: 52/52 quests join with requirements and rewards, 1,893 wiki links,
zero leftover wikitext, zero colour literals outside the token block, no
horizontal overflow in either theme at 375px or 1265px.

---

Recommended build order: **3 → 4 → 1 → 2**. Feature 3 is the smallest and forces the
`isSubOpen` generalisation that feature 2 also needs; feature 4 is a small extension of
feature 3's data shape rather than a layer of its own. Feature 1 rewrites every colour
literal, so it should land before feature 2 adds more. Feature 2 is the only one with a new
data pipeline, and the largest by some distance.

---

## Feature 1 — Graphical styles

### The finding that changes the shape of this

`css/theme-editorial.css` in LC-bankvalue opens with:

> `theme-editorial.css — warm charcoal palette, lifted from LC-roadmap's inline oklch tokens.`

The roadmap **is** the editorial theme. So "steal the other style" means bringing
**Terminal** to the roadmap: near-black backgrounds, teal accent, IBM Plex for headings too,
sharp 3–5px radii.

| token | editorial (today's roadmap) | terminal (new) |
| --- | --- | --- |
| `--bg-0` | `oklch(0.17 0.014 55)` | `#08080a` |
| `--bg-2` (cards) | `oklch(0.225 0.016 55)` | `#14141a` |
| `--border-2` | `oklch(0.32 0.02 55)` | `#2a2a34` |
| `--text-0` | `oklch(0.95 0.01 60)` | `#f1f1f6` |
| `--accent` | `oklch(0.78 0.15 75)` gold | `#5eead4` teal |
| `--red` | `oklch(0.65 0.18 25)` | `#f87171` |
| `--font-heading` | Space Grotesk | IBM Plex Sans |
| `--radius-sm` / `--radius-md` | 6px / 8px | 3px / 5px |

Both files are drop-in if the roadmap adopts the same token vocabulary — that is the whole
point of doing it this way rather than hand-porting colours.

### The blocker

`CLAUDE.md` says **inline styles only, no stylesheets, no classes**. A theme switcher
normally wants classes. It doesn't have to.

**Approach: CSS custom properties in `<helmet>`, inline styles reference `var(--…)`.** The
inline-only convention survives intact — `style="color:var(--text-0)"` is still an inline
style. Only the *definitions* move into `<helmet>`, which already holds body resets and font
links, so no new kind of file appears.

```
:root, :root[data-theme="editorial"] { --bg-0: oklch(0.17 0.014 55); … }
:root[data-theme="terminal"]         { --bg-0: #08080a; … }
```

`document.documentElement.setAttribute('data-theme', t)`, persisted to
`localStorage['lc_roadmap_theme']`, default `editorial` so nothing changes for anyone who
never touches the toggle. Copy `LC-bankvalue/js/theme.js` almost verbatim — 37 lines, same
storage pattern, same `[data-theme-btn]` wiring.

### Scope, measured

`Update Roadmap.dc.html` carries **138 colour literals, 78 distinct**, plus **11 `alpha()`
call sites**. They collapse to roughly 45 tokens:

- ~20 structural (`--bg-*`, `--border-*`, `--text-*`, `--accent`, `--gold`, `--red`, `--blue`)
- 19 `--type-*`, one per `TYPE_COLORS` entry
- 16 `--kind-*`, one per `KIND_COLORS` entry

`TYPE_COLORS` and `KIND_COLORS` stay as JS objects; their values become `'var(--type-quest)'`
strings. Nothing that consumes them changes shape.

### Traps

1. **`alpha()` breaks.** It is `color.replace(/\)$/, ' / ' + a + ')')` — string surgery on an
   oklch literal. It produces garbage for `var(--gold)` and for terminal's hex values alike.
   Replace the body with `color-mix(in oklch, ${color} ${a*100}%, transparent)`. Same
   signature, all 11 call sites keep working, and it becomes correct for any colour syntax.
2. **Radii and fonts are part of the theme, not decoration.** Terminal at 3px vs the
   roadmap's 7–20px pill chips is most of what makes the two feel different. Tokenise
   `--radius-*` and `--font-*` or the terminal theme reads as editorial with the colours
   swapped.
3. **Verify `support.js` passes `var()` through before converting 138 literals.** It compiles
   `style="…"` into a React style object; `var(--x)` is an ordinary string value so it should
   survive, but confirm with one element first. This is a cheap check that de-risks the whole
   feature.
4. **No flash of the wrong theme.** Set `data-theme` from an inline `<script>` in `<helmet>`,
   before first paint — not in `componentDidMount`.
5. **The toggle grows the header.** Put it top-right in `[data-sticky]`. The `ResizeObserver`
   from trap 2 already feeds `state.headerH`, so the rail follows automatically. Below 700px
   (trap 5) the header is not sticky, so it costs nothing there.

### Acceptance

- Toggling switches every surface — cards, chips, rail, patch-note and changes blocks,
  search field, footer — with no element left at a hard-coded colour.
- Reload preserves the choice; first-ever visit is editorial.
- Grep for `oklch(` and `#` colour literals outside the `<helmet>` token blocks returns zero.

---

## Feature 2 — Quest requirements and rewards

### Which branch? Not `274` — but `289` and `377-wip` carry real upcoming quests

`LostCityRS/Content` publishes seven branches: `225`, `244`, `245.2`, `254`, `274`, `289`,
`377-wip`. Quest-directory counts: **274 → 65, 289 → 69, 377-wip → 68.**

`274` is the live build and contains nothing unreleased — `quest_haunted` there is Ernest the
Chicken (its configs include `ernest.npc`), not Haunted Mine. But the later branches do:

| branch | quest dirs added | roadmap quest |
| --- | --- | --- |
| 289 | `quest_mm` | Monkey Madness |
| 289 | `quest_troll_love` | Troll Romance |
| 289 | `quest_misc`, `quest_routequest` | Throne of Miscellania / routing helper |
| 377-wip | `quest_golem` | The Golem |
| 377-wip | `quest_fever` | Cabin Fever |
| 377-wip | `quest_mourning2` | Mourning's End Part 2 |
| 377-wip | `quest_rd` | **Recruitment Drive** (`deal` is Rum Deal — do not guess from the dir name) |
| 377-wip | `quest_100` | **Recipe for Disaster** (`hundred_main` in the quest list) |
| 377-wip | `miniquest_abyssal` | Enter the Abyss (miniquest) |

**Nine of the roadmap's 41 upcoming quests have a directory — but only four have scripts.**
See the correction at the top of this file: the other five are config-only shells with no
`.rs2` files at all. Either way this is a corroborator for the wiki, not a replacement for
it.

**Trap: branch coverage is not monotonic.** `377-wip` has **2,893** files under `scripts/`
against `289`'s **3,419**, and it *drops* seven quest directories `289` has —
`quest_eadgar`, `quest_horror`, `quest_regicide`, `quest_tbwt`, `quest_viking`, `quest_misc`,
`quest_routequest`. Verified they are absent from `scripts/` entirely on that branch; only
their models and sprites remain. A "take the highest branch" pipeline silently loses Monkey
Madness's neighbours. **Union per quest across `274 → 289 → 377-wip`, preferring the highest
branch that actually has that quest.**

**Use `scripts/interfaces/questlist.if` (377-wip) as the join key.** It is the in-game quest
journal list and it names *every* quest in the window, implemented or not, as
`[dir_stub] … option=Display Name` — `mm → Monkey Madness`, `hundred_main → Recipe for
Disaster`, `fairy_farmers → A Fairy Tale Pt. 1`. That is a free, authoritative
directory→quest mapping. Do not infer it from directory names; `rd` alone would have
produced Rum Deal.

### What is actually extractable from the scripts

Verified by reading `quest_mm` on `289`:

| field | anchor | example |
| --- | --- | --- |
| quest points | `~send_quest_complete(questlist:mm, …, ^mm_questpoints, "…")` | one call per quest |
| item rewards | `inv_add` inside the reward label | `[label,mm_narnode_reward]` → `inv_add(inv, coins, 10000)`, `inv_add(inv, diamond, 3)` |
| XP rewards | `stat_advance` in the reward proc | `mm_daero.rs2` → `stat_advance(strength, 350000)` |

**XP is stored ×10.** `350000` is 35,000 XP, `200000` is 20,000 — which matches the wiki's
Daero choice (35k to two skills, 20k to the other two) exactly. That agreement is the
encouraging result: on the one quest checked end to end, repo and wiki reward values are
identical.

Two traps in the extraction:

1. **`inv_add` is everywhere.** `quest_mm.rs2` lines 842–960 are a debug give-script handing
   out bananas, scimitars and a tinderbox. Only `inv_add` reached from a reward label counts;
   a whole-file grep produces nonsense.
2. **`send_quest_complete` is not reliably in `quest_<stub>.rs2`.** Probing 377-wip, only
   `golem` and `troll_love` have it in the file named after the quest — for the rest it sits
   in whichever NPC script hands out the reward. Grep the whole quest directory.

### Reconciling the three sources

Your proposed combination is the right one, with one correction to the mechanism.

- **Content repo** = a claim about what the quest shipped as in 2005, from people who
  reconstruct builds for a living. Covers 8–9 quests.
- **`bucket("quest")` + `{{Quest rewards}}`** = what the quest is *today* in OSRS. Covers all 52.
- **`{{Subject changes}}` on the quest page** = the bridge between them — **except it isn't.**

**The change data cannot supply OSRS reward buffs, for two independent reasons.** First, the
existing extraction is capped at 2012-12-31 and OSRS launched in 2013, so by construction it
holds zero OSRS-era rows. Second — and this is the one that matters — lifting the cap does not
help: scanning the OSRS pages for all 52 quests found **7 quests with any
reward/requirement-flavoured change row at all**, every one of them RS3 and cosmetic
("Corrected the requirements for Mourning's Ends Part 1", "The Thieving requirement will now
be crossed out in the journal"). Spot-checking eight quest pages for post-2013
`{{Subject changes}}` entries found 8 entries total across all eight pages, all typo fixes and
renames. Reward buffs are simply not recorded on quest pages; they would live on the reward
item or skill page, if anywhere.

**So the buff detection falls out of the diff, not out of a change log.** Where the repo and
the wiki disagree on a reward value, that disagreement *is* the drift. Render the wiki value
as the headline and, for the 8–9 quests with an implementation, mark any field where the
build-289/377 script says something different — "at build 289: 10,000 coins" against the
wiki's current figure. For the other 32 quests there is nothing to diff, and the "as
documented today" caveat below carries the whole weight.

### The source that does work

**OSRS wiki `bucket("quest")`.** Verified live:

- Schema (`Bucket:Quest`): `requirements`, `items_required`, `enemies_to_defeat`,
  `start_point`, `official_difficulty`, `official_length`, `description`, `ironman_concerns`.
- 229 rows total. **All 52 quest names in `updates-data.js` resolve, none with an empty
  `requirements` field.** That includes the eight `Recipe for Disaster/…` subpages.

**Rewards are not in any bucket** — probed `quest_rewards`, `rewards`, `questreward`,
`quest_reward`: all "does not exist". They live in the page wikitext as
`{{Quest rewards|name=|image=|qp=|rewards=}}`. **52/52 pages carry it; 51/52 carry `qp`.**
Extract with the existing brace-matching template reader in `rs_timeline/wikitext.py` — a
whole-page regex is wrong for the same reason it was wrong for `|update =`.

Sample (`Monkey Madness I`):

```
requirements = * Completion of the following quests:
               ** [[The Grand Tree]]
               ** [[Tree Gnome Village]]
               * The ability to defeat a level 195 [[Jungle Demon]]
qp           = 3
rewards      = *10,000 [[Coins]]
               *3 [[Diamond]]s
               *Ability to buy and wield the [[Dragon scimitar]] (with level 60 [[Attack]])
               …
```

### Pipeline

New `rs_timeline/quests.py` + a `--quests` mode on `runescape_patchnotes_fetcher.py`, writing
`jsonl/quest_details.jsonl`. Then `tools/build-quests-data.py` in this repo writes
`quests-data.js`. Same boundary rule as `build-changes-data.py`: it writes only its own
generated file and never touches `updates-data.js`.

```js
// GENERATED by tools/build-quests-data.py - do not hand-edit.
export const QUESTS = {
  "Monkey Madness I": {
    url: "https://oldschool.runescape.wiki/w/Monkey_Madness_I",
    difficulty: "Master", length: "Long", qp: 3,
    start: [ /* rendered bullets */ ],
    requirements: [ { text: "Completion of the following quests:", sub: ["The Grand Tree", "Tree Gnome Village"] }, /* … */ ],
    items: [ /* … */ ], enemies: [ /* … */ ],
    rewards: [ /* … */ ],
  },
};
```

Import it in `componentDidMount` with `.catch(() => {})`, exactly like the other two — the
roadmap must still render in full if the file is absent.

**New work the changes pipeline never needed: a wikitext-to-DOM step.** Change bullets were
plain prose. These are not — they carry `[[links]]`, `[[target|label]]`, `{{SCP|Attack}}`
skill icons, `'''bold'''`, `''italics''` and `<ref>` tags, and the `*`/`**` nesting is
meaningful (the quest sub-list above). Decide once: strip to plain text, or convert links to
anchors through `hrefFor()` so they behave like every other entity link on the page.
Recommend the latter — a requirements list where "Tree Gnome Village" is not clickable is
noticeably worse — with `{{SCP}}`, `<ref>` and `File:` dropped.

### Rendering

Two new sub-blocks under an update, rendered **only when the update has a `Quest` entity
group** — 41 of 112 updates. Keys `…|req` and `…|rew`, matching the existing `|note` / `|chg`
convention. Two new SHOW chips carrying the same two controls (label = show/hide layer,
caret = expand/collapse all).

- Requirements block: `--type-prayer` blue `oklch(0.78 0.09 250)`.
- Rewards block: `--type-skill` green `oklch(0.75 0.16 145)`, header showing `· N QP`.

Six updates carry more than one quest (`Recipe for Disaster` with 8 names, `Rag and Bone
Man I`/`II`). Those render one sub-heading per quest inside the single block, rather than
repeating the block.

**`isSubOpen` must generalise.** Today it is a two-way test:
`key.endsWith('|note') ? allNotesOpen : allChangesOpen`. With four kinds that becomes a
suffix→flag map. `toggleAllSub(kind)` already takes a kind and derives both suffix and flag,
so it generalises with the same map. Do this once, in feature 3.

### The accuracy caveat — read before building

**`bucket("quest")` describes today's OSRS quest, not the 2005 original.** Requirements
drift; reward XP has been rebalanced; `official_difficulty` and `official_length` are modern
wiki gradings that did not exist in 2005. A roadmap that presents "Master · Long" as
something the 2005 build shipped is asserting something the source does not support.

Two mitigations, both cheap:

1. Label it. A single line in the block footer — *"as documented on the OSRS Wiki today;
   requirements and rewards have changed since 2005"* — plus the existing `read on the wiki ↗`
   link. Non-negotiable; do it in v1.
2. Cross-check against data already extracted. `jsonl/entity_changes.jsonl` carries change
   entries for the quest pages themselves, and the classifier already tags `requirement`.
   Surface any `requirement`-kind change dated after the quest's release as a warning line
   inside the block. Follow-up, not v1.

### Acceptance

- All 41 quest-bearing updates show both blocks; no update without a quest shows either.
- `quests-data.js` missing → page renders exactly as it does today.
- Wiki links inside requirements and rewards resolve (route through `hrefFor`, per trap 10).
- The "as documented today" caveat is present on every rendered block.

---

## Feature 3 — Unconfirmed updates

### What it is

A layer for content we are confident a build shipped but which **no patch note and no wiki
release date confirms**. Distinct from every existing layer: the patch note is what Jagex
published, changes are what the wiki recorded, chips are what the timeline dated. This is
inference — and it must look like inference.

### Data

Hand-maintained in **`updates-data.js`**, on the update. That file has no generator by design
(trap 4), so these entries can never be clobbered by a regeneration — which is precisely why
they belong there and not in a generated file.

```js
{
  title: "Slayer Skill", build: 290, date: "2005-01-26", star: true,
  unconfirmed: [
    {
      text: "Green dragon spawns added west of the Dark Warriors' Fortress (3) and east of the Bone Yard Hunter area (11). Before this build the only wilderness group is south of the Lava Maze (5).",
      confidence: "likely",              // "likely" | "possible" | "unknown"
      entities: ["Green dragon"],        // links via hrefFor, highlights under PINNED
      source: "https://oldschool.runescape.wiki/w/Green_dragon#Locations",
      caveat: "A third group north of the Graveyard of Shadows (5) arrives later in 2005; the originating update has never been identified.",
    },
  ],
  entities: [ /* … */ ],
}
```

`confidence` drives the badge colour and text; `caveat` renders as a dimmed line under the
claim and is where an open question goes. If unplaced claims accumulate, add a
package-level `unconfirmed` array rendered after the last update in the package — not needed
for one entry.

### Rendering

Fourth sub-block, key suffix `|unc`, **dashed** left border rather than solid — the visual
cue that separates it from the gold patch note and red changes block at a glance. Colour
`--blue` `oklch(0.72 0.1 210)`. Header reads `Unconfirmed · N`. Each entry: confidence badge
(mono, uppercase, 10.5px, same shape as a `kinds` tag), claim text, entity links, `caveat`
line, `source ↗`.

Block order under an update: **Patch note → Requirements → Rewards → Unconfirmed → Changes.**
Published fact first, inference last before the change log.

SHOW chip `Unconfirmed N`, same two controls, `showUnconfirmed` / `allUnconfOpen`.

Behaviour to match the existing layers:
- **Search** must scan `text`, `caveat` and `entities` — same reason the note and change text
  are scanned (trap: this content exists nowhere else, so no chip can match it).
- **Pinned only** filters entries by `hasPinned` on their `entities`, like changes do.
- **Header height.** Five detail chips plus 19 type chips will push the SHOW row taller,
  worsening trap 5's ~460px phone header. Consider giving the detail chips their own row
  under a `DETAIL` label once the fifth one lands.

### The seed entry, verified

Attach to **`Slayer Skill`, build 290, 2005-01-26**.

Spawn counts read off the `{{LocLine}}` coordinate lists on `Green_dragon#Locations` — they
are exact, not estimates:

| group | spawns |
| --- | --- |
| East of the Bone Yard Hunter area | **11** |
| West of the Dark Warriors' Fortress | **3** |
| North of the Graveyard of Shadows | 5 |
| South of the Lava Maze | 5 |

Two supporting checks run while drafting this:

- **Neither Slayer patch note mentions dragons.** `Update:Slayer Skill` (2005-01-26) covers
  masters, assignments, equipment and the skill guide; `Update:Ghosts Ahoy and Slayer Update`
  (2005-02-15) covers Port Phasmatys, the Ectofunctus and task reassignment. Nothing about
  spawns. That absence is the feature's justification, not an argument against the claim —
  spawn additions are routinely unannounced, which is the same gap the Fenkenstrain hellhound
  line exposed.
- `Green dragon` has no release-timeline row in this window either, so no chip can carry it.

The Graveyard of Shadows group goes in `caveat` as an open question — later in 2005, update
unidentified. Do not guess a build for it.

### Acceptance

- The Slayer Skill entry renders, collapsed by default, dashed border, `likely` badge.
- Searching `green dragon` surfaces the Slayer Skill update even though no chip matches.
- `Pinned only` keeps the entry when `Green dragon` is in `PINNED`, drops it otherwise.
- An update with no `unconfirmed` array is byte-for-byte unchanged.

---

## Feature 4 — Monster spawn additions

### What the scan found

I scanned both datasets over 2004-11-01 → 2006-06-30 (the roadmap window plus margin):
2,875 update-note bodies for spawn/population language, and every non-release change row for
the same. **The wikis barely record this at all.**

The complete set of genuine "more of an existing monster, in an existing area" records in the
window is *one update*:

**`Creature of Fenkenstrain`, build 291, 2005-01-31 — section "Slayer changes":**

> We have added more hill giants and hellhounds to cope with the increased demand for these
> creatures that has been created by the slayer skill. There are now more hellhounds in the
> Taverley dungeon and some south of the Wilderness axe hut. There are hill giants added to
> the north of the observatory and south-west of the gnome stronghold.

Four groups, and the same update also renamed Giants → Hill giants and notes that bronze and
steel dragon *assignment* totals were cut the previous week (a Slayer weighting change, not a
spawn change — don't conflate them).

The only other hit in the whole window is *"More plank spawns have been added around the
world"* (2006-05-31), which is item spawns and falls after the roadmap's 2006-05-02 end.

Of 242 change rows matching spawn/location language, exactly **7 were Monster-typed**, and
the only substantive one is the Hill giant row — which is just the Fenkenstrain patch note
quoted back. Everything else that looked promising ("Added to Ape Atoll", "Added to
Keldagrim") is new content arriving with new areas, already covered by the entity chips.

**Conclusion: this layer cannot be generated. It is curation.** Which is fine — it is also
exactly why it is worth having, since it is content that neither chips nor the change log
will ever show.

### Structured backbone: `bucket("locline")`

Spawn *counts* are recoverable, precisely. `bucket("locline")` exists on the OSRS wiki with
`coordinates` (repeated), `mapid`, `plane`, `members`, keyed by `page_name` / `page_name_sub`.
Green dragon returns four wilderness rows of 11 / 3 / 5 / 5 coordinates — the exact figures in
feature 3.

Two things to know before building on it:

1. **The bucket has no human-readable location label.** "West of the Dark Warriors' Fortress"
   lives only in the `{{LocLine|location=}}` wikitext. So: bucket for counts and coordinates,
   wikitext for labels.
2. **The wikitext is not always parseable and the bucket always is.** `Hill giant` has **zero**
   `{{LocLine}}` blocks on the page (its table is transcluded) yet the bucket returns 13 rows.
   Any extractor must fall back to coordinates, and match them to the patch-note phrasing by
   hand: `x:2438,y:3208` is north of the Observatory, `x:2369,y:3394` is south-west of the
   Gnome Stronghold — 6 spawns each, the two groups the 2005 note describes.

### Seed entries

Both attach through feature 3's `unconfirmed` mechanism with a `spawns` marker, because their
*existence* is documented but their *size in 2005* is not.

| update | build | claim | today's wiki count |
| --- | --- | --- | --- |
| Slayer Skill | 290 | Green dragons, W of Dark Warriors' Fortress | 3 |
| Slayer Skill | 290 | Green dragons, E of Bone Yard Hunter area | 11 |
| Creature of Fenkenstrain | 291 | Hellhounds, Taverley Dungeon (*more*) | 13 |
| Creature of Fenkenstrain | 291 | Hellhounds, S of the Wilderness axe hut | 6, as "Outside the Wilderness Resource Area" |
| Creature of Fenkenstrain | 291 | Hill giants, N of the Observatory | 6 |
| Creature of Fenkenstrain | 291 | Hill giants, SW of the Gnome Stronghold | 6 |

The Fenkenstrain four are `confidence: "confirmed"` — Jagex published them — where the green
dragons are `"likely"`. That is the argument for one shared mechanism with a confidence field
rather than two separate layers.

**Two caveats that must render, not sit in a comment:**

- **Counts are today's, not 2005's.** The note says "more hellhounds in the Taverley dungeon";
  the 13 there now is twenty years of subsequent edits. Present the number as *where and
  roughly how dense today*, never as what the build shipped.
- **Location labels drift.** There is no "south of the Wilderness axe hut" row on the wiki any
  more; the descendant is "Outside of the Wilderness Resource Area", an area that did not
  exist in 2005. Matching a 2005 phrase to a modern row is a judgement call and should be
  recorded as one, in the entry's `caveat`.

### Rendering

Do **not** add a fifth SHOW chip. Spawn entries are `unconfirmed` entries carrying
`kind: "spawn"` plus optional `area` / `count` fields, rendered as a compact
`Monster · area · N today` line above the claim text. One layer, one chip, one set of
expand/collapse controls — the header is already close to its width budget (see feature 3).

The **filter** you asked about is then free: the existing type-chip row gains a `Spawns`
pseudo-type that shows only updates carrying a `kind: "spawn"` entry, in the same way
`Pinned only` narrows the page today.

### Acceptance

- Both Fenkenstrain hellhound groups and both hill giant groups render under build 291.
- The `Spawns` filter reduces the page to builds 290 and 291 on today's data.
- Every count is labelled as a present-day wiki figure.

---

## Files touched

| File | Feature | Change |
| --- | --- | --- |
| `Update Roadmap.dc.html` | 1, 2, 3, 4 | tokens + `alpha()`; three new block builders; `isSubOpen`/`toggleAllSub` map; three new SHOW chips; `Spawns` filter; theme toggle |
| `updates-data.js` | 3, 4 | hand-added `unconfirmed` arrays, including `kind: "spawn"` entries (no generator, by design) |
| `quests-data.js` | 2 | **new, generated** |
| `tools/build-quests-data.py` | 2 | **new** |
| `tools/check-data.mjs` | 2 | extend the join check to quests |
| `runescape-research/rs_timeline/quests.py` | 2 | **new**: `bucket("quest")` + `{{Quest rewards}}` |
| `runescape-research/rs_timeline/lccontent.py` | 2 | **new**: branch union over `LostCityRS/Content`, `questlist.if` mapping, reward extraction |
| `runescape-research/rs_timeline/spawns.py` | 4 | **new**: `bucket("locline")` counts + `{{LocLine}}` labels |
| `README.md`, `CLAUDE.md` | all | themes section, quest-data provenance, spawn-count caveats, the new traps |
