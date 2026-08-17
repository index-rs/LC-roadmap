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
| `tools/build-changes-data.py` | Regenerates the two files above. Never touches `updates-data.js`. |
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
python tools/build-changes-data.py && node tools/check-data.mjs
```

Reads `jsonl/entity_changes.jsonl` and `jsonl/update_notes.jsonl` from the
`runescape-research` project (`--research DIR` to point elsewhere). `--check` reports the
join without writing. It writes only the two generated files.

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
- **Shortcut** — the agility shortcuts from `New shortcuts and prayers` (2005-09-06, #333).

Because they have no wiki page, their chips would link to a 404. `LINK_TARGETS` in
`updates-data.js` redirects them to the nearest real article (`Bank`, `Shortcuts`); anything
absent from that map links to its own name as usual.

**On the shortcut list:** the [Shortcuts](https://oldschool.runescape.wiki/w/Shortcuts) wiki
page is a 633-row modern list whose own Changes section only documents 2024-and-later
additions, so it cannot say which shortcuts are from 2005. The patch note can: it enumerates
them by area, and that is what is recorded here. It claims **30** shortcuts, describes **22**
across 11 areas, and explicitly leaves 8 undocumented ("a handful of extras which we'll let
you discover for yourself") — so 11 entities cover the 22 that are actually attributable, and
the update's `note` records the rest. Nothing was invented to reach 30.

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
