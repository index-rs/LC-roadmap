# LC-roadmap

A browsable content roadmap for the [Lost City](https://2004.lostcity.rs) RuneScape preservation
project. It lists every client build ahead of the live server and, under each one, the content that
build actually shipped — quests, items, monsters, locations, spells, music — rather than just the
patch-note headline.

Live page: `Update Roadmap.dc.html` (or `index.html`, which redirects to it).

Navigation is a fixed rail pinned to the right edge of the window, one button per build. It
scrolls vertically inside its own box, so it never grows the horizontal scrollbar the old
header strip did. Below 700px the header stops being sticky and scrolls away — at phone widths
the wrapped filter chips make it ~460px tall — while the rail stays put.

## What's in here

| File | Purpose |
| --- | --- |
| `Update Roadmap.dc.html` | The whole page: markup + logic. Self-contained, opens in a browser. |
| `updates-data.js` | All roadmap content. **This is the file you edit.** |
| `update-notes-data.js` | Patch-note prose per update. **Generated — do not hand-edit.** |
| `changes-data.js` | Post-release changes per update/build. **Generated — do not hand-edit.** |
| `quests-data.js` | Requirements and rewards per quest. **Generated — do not hand-edit.** |
| `tools/build-changes-data.py` | Regenerates the patch-note and changes files. Never touches `updates-data.js`. |
| `tools/build-quests-data.py` | Regenerates `quests-data.js`. Never touches `updates-data.js`. |
| `tools/probe-quest-buffs.py` | Scans the quest pages for newly documented XP reward buffs. Read-only. |
| `tools/probe-late-rewards.py` | Lists rewards a later update attached to the quest. Read-only, hand-reviewed. |
| `tools/quest-dates.mjs` | Prints quest → build date, so the generator can date-check rewards. |
| `tools/check-data.mjs` | Sanity-checks that the generated data joins cleanly. |
| `support.js` | Runtime for the `.dc.html` format. Don't edit. |
| `index.html` | Redirect so GitHub Pages serves the roadmap at the repo root. |
| `uploads/runescape_release_timeline.xlsx` | Source spreadsheet the data was generated from. |
| `scraps/` | Intermediate extracts (`build-numbers.json`, `osrs-window.json`). |

## Patch notes and changes

Two extra layers sit under each update, both **collapsed by default** and individually
expandable (click the block header). Each has a chip in the SHOW row carrying two controls:
the **label** shows or hides the layer entirely, the **caret** expands or collapses every
block of that kind at once.

- **Patch note** (gold block) — the prose Jagex actually published, split into its
  sub-sections. 107 of 112 updates have one. This is the only place content that created
  *no entity* can live: "There are now more hellhounds in the Taverley dungeon and some
  south of the Wilderness axe hut" adds no row to the release timeline, but it is
  absolutely something the build shipped.
- **Changes to existing content** (red block) — what happened to things already in the
  game: value changes, rebalances, graphical updates. 2,163 changed entities, shown as
  1,265 entries across 86 updates plus 25 "Other changes this build" buckets for changes
  whose originating update is not itemised on this page.

**Identical changes are rolled up.** When one update applies the same change word-for-word
to a whole set — 5 Fremennik shirts graphically updated, 12 d'hide items getting the same
examine fix — they render as a single entry listing every entity, tagged `×5` / `×12`,
rather than as 5 or 12 repetitions of the same sentence. The grouping key includes type,
date and source as well as the wording, so two items sharing phrasing but not a date stay
separate; collapsing them would misdate one.

Rows sourced from the RuneScape (RS3) wiki carry no visible game label. `game` is still in
the data and surfaces as a tooltip, but "RS3" on a 2005 row reads as an anachronism —
RuneScape 3 launched in 2013 — and "RS2" would be no better, since the unlabelled
OSRS-sourced rows are equally RS2-era.

Search covers both, so searching `hellhound` finds the Fenkenstrain note even though no
entity chip matches it.

Each change carries a `kinds` tag (`combat`, `value`, `graphics`, …). **These tags are
derived from the change wording by regex, not sourced from the wiki** — treat them as a
filter, not as fact. Only the most consequential tag is shown.

### Regenerating

```bash
python tools/build-changes-data.py && python tools/build-quests-data.py && node tools/check-data.mjs
```

Reads `jsonl/entity_changes.jsonl` and `jsonl/update_notes.jsonl` from the
`runescape-research` project (`--research DIR` to point elsewhere). `--check` reports the
join without writing. It writes only the two generated files.

## Themes

Two looks, switched from the toggle at the top right and remembered in
`localStorage`:

- **Editorial** (default) — the original: warm charcoal oklch, Space Grotesk
  headings, gold accent, rounded pills.
- **Terminal** — near-black, teal accent, IBM Plex throughout, sharp corners.
  Ported from [LC-bankvalue](../LC-bankvalue)'s `theme-terminal.css`, whose own
  *editorial* theme was lifted from this page in the first place.

The page is still inline-styles-only. What changed is that colours, fonts and
radii are now **tokens** — `var(--bg-2)`, `var(--gold)`, `var(--font-head)`,
`var(--r-card)` — defined once per theme in the `<helmet>` block. Inline styles
reference the tokens; the `<style>` block holds no rules for elements, only the
token definitions.

**A colour written literally into an inline style is a bug**: it will not switch
themes. `grep 'oklch('` outside `<helmet>` should return nothing.

Terminal moves the primary accent (stars, pins, "in development") from gold to
teal. That is deliberate — matching hex-for-oklch while keeping amber everywhere
would just be editorial with different greys.

## Quest requirements and rewards

Every update that adds a quest — 41 of them — carries two more collapsible
blocks: **Requirements** (blue) and **Rewards** (green, headed with the quest
point total). Both come from `quests-data.js`, all 52 quest names the roadmap
mentions, including the eleven `Recipe for Disaster/…` subquests. An update
naming several quests renders one sub-heading per quest inside the single block.

They share one SHOW chip, *Quest details*, rather than taking a chip each: five
chips do not fit in the control row at phone widths.

**These describe the quest as OSRS documents it today, not as it shipped in
2005.** Requirements drift, reward XP gets rebalanced, and `difficulty` /
`length` are present-day wiki gradings that did not exist then. Every rendered
block says so in its footer — do not remove that line.

Two filters narrow what actually renders, and the footer reports how many lines
each removed:

- **Anachronism filter.** A reward list written for today's game cites things
  that did not exist when the quest shipped. The extractor dates every wiki page
  a bullet links to, and the generator drops any bullet naming something released
  after the build the quest sits under — Monkey Madness's dragon scimitar
  (2005-03-29, four months after the quest), Troll Romance's boss "in the
  Nightmare Zone" (2013), In Search of the Myreque's fairy ring (2006-07),
  Haunted Mine's Tarn's Lair (2007). Two cases dating cannot see, because the
  page is old and only the capability is new, are phrase rules in
  `ANACHRONISMS` in the generator: ring of wealth *teleports* (2008), *elite*
  clue scrolls (2010), and access to the Wizards' Guild rune store — OSRS made
  completing The Hand in the Sand a requirement to buy there on 2018-06-28, so
  in 2006 it was not a reward at all; RS3 does not list it either.
- **Reward buff correction.** OSRS has raised some quest XP awards long after
  the fact, and dating cannot see it: a rebalanced *quantity* links no new page,
  so it sails through the filter above. `REWARD_BUFFS` in the generator rewrites
  the figure back to what the build paid and the block says which line it
  changed — Mourning's End Part I (Thieving 40,000 → 25,000), Mourning's End
  Part II (Agility 60,000 → 20,000) and Swan Song (Fishing 50,000 → 10,000),
  all raised in the same update on 2022-11-30. A row is applied only while the
  wiki still reads the value it was written against; if it moves, the build
  warns instead of correcting to a number nobody checked.
  Finding the third one had a method behind it, kept as
  `tools/probe-late-rewards.py`: when a page linked from quest *Q*'s rewards
  carries a change entry dated after *Q*'s build that names *Q*, the quest very
  likely did not have that reward at its build. It produces about seven hits to
  read by hand — most are later quality-of-life tweaks to rewards the quest
  always had, so nothing is dropped without reading it. Diffing OSRS rewards
  against the RS3 wiki was also tried and is weaker: 16 flags, no true
  positives, because RS3 diverged heavily on its own.
- **Requirements are quests and skills only.** Start point, items needed and
  enemies to defeat are dropped — they describe a modern route through the quest
  rather than the 2005 one. A quest with neither renders "No quest or skill
  requirements", which for `A Soul's Bane` and `Rag and Bone Man I` is simply
  true.

For the four quests a Lost City preservation branch actually implements
(Monkey Madness, The Golem, Throne of Miscellania, Troll Romance) the block also
shows what that build gives you:

> Lost City build 289 implements (authoritative for this build): 3 QP · 10,000 coins · 3 diamond ·
> 20,000–35,000 attack · 20,000–35,000 defence · …

That line is **not merged** into the wiki's, and where both exist the branch is
the value to trust: it is period data by construction, while the wiki describes
today. Keeping both on screen is the point — the disagreement is the drift.
Quest points that disagree render in gold.

Change logs supply only a little of this, and it took measuring to find out how
little. `{{Subject changes}}` on the 292 pages a quest reward links to holds 595
entries, of which exactly **one** predates 2008 — reward drift is essentially
never recorded on the item or skill page. The quest page itself does record it,
but rarely: 61 entries across all 52 quests, **three** of them reward buffs.
Those three are in `REWARD_BUFFS`. `tools/probe-quest-buffs.py` re-runs the scan
(2 API requests, cached); anything it prints that is not already in the table is
a reward the page is still showing at a modern figure. Three found is a floor,
not a ceiling — an undocumented buff stays invisible, which is why the footer
caveat stays on every block.

## Unconfirmed and unlisted content

A fourth block, dashed rather than solid, for things the entity timeline
structurally cannot show: content that created no page, so no chip can carry it.
Hand-written on the update in `updates-data.js` — there is no generator, which is
exactly why it survives every regeneration.

```js
unconfirmed: [
  {
    kind: "spawn",                 // optional; tags a monster-spawn entry
    confidence: "likely",          // confirmed | likely | possible | unknown
    text: "Green dragons added west of the Dark Warriors' Fortress …",
    entities: ["Green dragon"],    // linked, and honoured by "Pinned only"
    spawns: [{ area: "West of the Dark Warriors' Fortress", count: 3 }],
    basis: "Inferred. No patch note in this window mentions green dragons.",
    caveat: "A third group north of the Graveyard of Shadows arrives later …",
    source: "https://oldschool.runescape.wiki/w/Green_dragon#Locations",
  },
],
```

`confidence` is the point of the block. Two different things live here and the
badge is what tells them apart:

- **`confirmed`** — Jagex published it, but it made no entity. The Creature of
  Fenkenstrain hellhound and hill giant additions. The block header reads
  *Unlisted* when every entry is confirmed.
- **`likely` / `possible`** — our inference, with nothing in any patch note
  behind it. The green dragon spawns at the Slayer release. Header reads
  *Unconfirmed*.

**Spawn counts are today's wiki figures**, from `bucket("locline")`, and are
labelled `N today` on every row. The 2005 patch notes say "more", never how many.

### Where the spawn entries came from

There was a `◇ Spawns` button in the top bar that narrowed the page to updates
adding spawns of an existing monster. It was removed: with three entries it
earned none of the width it took, and it wrapped the type-filter bulk actions
onto a second row. `kind: "spawn"` is still carried on the entries, so the
filter is a small thing to restore if the layer ever grows.

Scanning both datasets over the whole window turned up exactly one update that
documents this (Creature of Fenkenstrain, 31 January 2005) — of 242 change rows
matching spawn language only 7 were monster-typed, and the substantive one just
quotes that patch note back. So this layer is curation, not extraction.

## Scope

- **Builds 275–377** (2004-11-29 → 2006-05-02). Build 274 is the last shipped package. It
  stays in `updates-data.js` as history but is **not rendered** — the page filters out any
  package at or below `CURRENT_BUILD`, so the roadmap opens at #275–289 and the build rail
  starts at 289. The "you are here — build 274" divider still marks the boundary.
- **43 packages**, matching the boundaries published on the live Lost City roadmap.
- **112 updates**, ~4,150 entities.

Package boundaries are the real cache builds, taken from the live roadmap. Build *dates* come from
the RuneScape Wiki's [Build number](https://runescape.wiki/w/Build_number) table.

## Data model

`updates-data.js` exports five things:

```js
export const CURRENT_BUILD = 274;        // where the live server is; drives the "you are here" rule
export const HIDDEN_TYPES  = [...];      // entity types collapsed out of the default view
export const NO_ICON       = [...];      // names whose wiki icon URL can't be guessed
export const PINNED        = [...];      // entity names to highlight and float to the top
export const packages      = [...];      // the roadmap itself
```

A package:

```js
{
  build: 330,            // the build this package ships at
  from: 328,             // first build absorbed into it (label renders "#328–330")
  date: "2005-08-23",    // real-world date of `build`
  status: "planned",     // "done" | "next" | "planned"
  uncertain: true,       // optional; renders an (i) marker for sparse cache data
  items: [ /* updates */ ],
}
```

An update:

```js
{
  title: "Blast Furnace",
  build: 330,            // the specific build within the package, when it differs
  date: "2005-08-23",
  star: true,            // optional: gold star, sorts to top, survives "Starred only"
  note: "free text",     // optional: one line of your own commentary
  hidden: true,          // optional: remove this update from the page entirely
  hide: ["Bronze axe"],  // optional: remove specific entity names
  entities: [
    { type: "Item", names: ["Coal bag", "Goldsmith gauntlets"] },
    { type: "Monster", names: [ /* … */ ] },
  ],
}
```

Entity types, in render order: Quest, Miniquest, Skill, Activity, Location, Monster, NPC, Item,
Spell, Prayer, Emote, Shop, Currency, Game mechanic, Organisation, Scenery, Music track.

## Editing

**Pinning is the main tool.** Rather than pruning thousands of rows, promote what matters:

- add a name to `PINNED` → gold chip, sorted to the front of its type group, everywhere it
  appears — **and any change about it is highlighted gold and floats to the top of its block**
- add `star: true` to an update → gold star, sorted to the top of its package
- add `note: "…"` to an update → a line of your own commentary under the title

Two knobs drive all of it — chips, changes, and the **Pinned only** filter:

```js
// every member of these types is pinned, without naming any of them
export const PINNED_TYPES = ["Quest", "Skill"];

// individual names, for everything else
export const PINNED = [
  "Mystic hat",
  "Abyssal whip",
  "Salve amulet",
];
```

`PINNED_TYPES` is the right tool when a whole category always matters: quests and skills are
the headline content of any build, so listing all 41 quests by name would be busywork that
goes stale the moment the data changes. Add `"Miniquest"` to that array if you want those too.
`PINNED` is for individual promotions — add the exact wiki page name.

**Pinned only** (top bar) then hides every unpinned chip and every change that names no pinned
entity — the fast way to cut clutter like `M'amulet mould` without deleting anything. Patch
notes survive it: they are one collapsed line, and they are the only record of content that
created no entity at all.

Two details worth knowing. `PINNED` matching is case-insensitive but otherwise exact, so a name
must match the wiki page title (`Dragon scimitar`, not `dragon scim`). And a rolled-up change is
kept whole when *any* of its entities is pinned — the change genuinely applied to all of them,
and showing only the pinned member would make its `×N` count wrong.

Pinning an entity highlights its **chips** everywhere and any **changes** recorded about it.
Plenty of entities have no change history at all — `Mystic hat` is one — so pinning them shows
gold chips and nothing in the red block. That is the wiki having no record, not a broken pin.

Pruning is still there when you need it: `hidden: true` drops a whole update, `hide: [...]` drops
individual entity names, and deleting entries from `entities` works fine.

`NPC`, `Scenery`, `Location` and `Music track` are hidden by default via `HIDDEN_TYPES`
(2,000+ rows of mostly-noise); every type is toggleable from the filter bar at runtime.

### Synthetic types

Two types describe things a patch note added that the wiki has no entity page for, so they
exist only here:

- **Bank** — extra bank space, as `+48 bank space` / `+16 bank space`. Three in the window:
  builds 289 and 327 (+48 each) and 316 (+16, "an extra two lines" for the seed release).
  Pinned by default via `PINNED_TYPES`, since bank space matters to players.
- **Shortcut** — individual agility shortcuts, labelled `Location (level)` where the level is
  the agility requirement *at release* (some have since changed). 33 in the window, spread
  across the builds that added them: Western Brimhaven Dungeon (#289), Morytania Mausoleum
  (#291), Lumbridge Swamp Caves (#304), the 29-strong batch in `New shortcuts and prayers`
  (#333), and Burgh de Rott (#374).

Because they have no wiki page under their chip label, their links come from one of two maps
in `updates-data.js`:

- `LINK_URLS` — label → a **full destination URL**, used verbatim. Shortcuts need this because
  their URLs carry section anchors (`#Medium`) and pre-encoded characters
  (`Champions%27_Guild`) that must not be re-encoded.
- `LINK_TARGETS` — label → a page **title** routed through `wikiPath` (bank space → `Bank`).

`hrefFor(name)` prefers a full URL, then a retargeted title, then the name itself. To add a
shortcut: give it a `Location (level)` label in the update's `Shortcut` group and a matching
`LINK_URLS` entry.

## Publishing to GitHub Pages

Settings → Pages → deploy from branch, root. `.nojekyll` is present so files are served as-is.
`updates-data.js` is loaded as an ES module, so the page must be served over http(s) — opening
`index.html` from the filesystem will not load the data.

## Data provenance and licence

Content data is derived from the [Old School RuneScape Wiki](https://oldschool.runescape.wiki) and
the [RuneScape Wiki](https://runescape.wiki), both licensed
[CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/). Redistribution must credit
both wikis, is non-commercial only, and derivatives must carry the same licence. The page footer
carries this attribution — keep it.

Item icons are hotlinked from the OSRS wiki at `/images/<Page_name>.png`. That guess is right for
most items and wrong for some; misses are skipped by pattern (`NO_ICON_RE` in the page) or listed in
`NO_ICON`, so no request is made for a name known to fail.

RuneScape and Old School RuneScape are trademarks of Jagex Ltd. This project is unofficial and not
affiliated with Jagex or Weird Gloop.

## Known gaps

- Two updates named `Other content — <date>` (builds 330 and 355) hold entities whose wiki page
  records no originating update. Rename or prune them.
- Some entities are dated by wiki editorial convention rather than by the update that introduced
  them, so a handful sit in a neighbouring build. Two known tails, both left as-is because the
  update itself is correctly placed: 28 of Farming's farm-patch plants (`Barley (plant)`,
  `Redberry bush`, …) are dated 2005-06-06 to the seed prep update, and one Keldagrim music
  track sits in Fight Pits. Neither is duplicated elsewhere.
- `New fishing skill and more cooking` in #316 is a wiki quirk: `Fishing spot (frogspawn)`
  cites an update page of that name from **2001**, though the spot itself was released
  2005-05-31. The title is the wiki's and the placement follows the entity's own date. (The
  duplicate that used to sit in #377 is gone — its content, the Piscatoris fishing spot, now
  lives under `Return of the Wise Old Man!` where its 2006-05-02 date belongs.)

### Verifying package assignment

`updates-data.js` places each update in a package; a package labelled `#322–325` covers
everything released *after* the previous package's build up to and including its own — window
`(previous package date, own date]`. Two checks are worth re-running after any data edit:

1. Every update the [live roadmap](https://2004.lostcity.rs/roadmap) names under a revision
   should sit in that package. This is currently **0 mismatches**.
2. Every entity's own release date (from `csv/osrs_raw.csv` in the research project) should
   fall inside its package window, cross-checked against
   [Build number](https://runescape.wiki/w/Build_number).

That pair caught four real errors: `Farming` sitting in #316 with Barrows when it belongs at
build 322 in #325, `Massive minigame - Fight Pits` in #330 instead of #336, and two single
entities stranded a year from their build.
- **Change coverage is thin: only ~20% of entities released in this window have any change
  entry on the wiki at all.** An entity with no change listed is almost never an entity that
  never changed — it is one nobody documented. Absence carries no information here.
- 5 of 112 updates have no patch-note prose: the four synthetic `Other content — <date>`
  entries (correct — they are not real updates) and `Halloween & Death Mechanics`, which has
  no matching `Update:` page on either wiki under that name.
- Change rows sourced from the RS3 wiki are marked `· RS3` on the tag line. They are used only
  to fill entities the OSRS wiki does not cover; RS3's own change history for this period is
  92% "Added to game." restatements, which are filtered out.
