# LC-roadmap

A browsable content roadmap for the [Lost City](https://2004.lostcity.rs) RuneScape preservation
project. It lists every client build ahead of the live server and, under each one, the content that
build actually shipped — quests, items, monsters, locations, spells, music — rather than just the
patch-note headline.

Live page: `Update Roadmap.dc.html` (or `index.html`, which redirects to it).

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

Two extra layers sit under each update, both toggleable from the filter bar:

- **Patch note** (gold block) — the prose Jagex actually published, split into its
  sub-sections. 107 of 112 updates have one. This is the only place content that created
  *no entity* can live: "There are now more hellhounds in the Taverley dungeon and some
  south of the Wilderness axe hut" adds no row to the release timeline, but it is
  absolutely something the build shipped.
- **Changes to existing content** (red block) — what happened to things already in the
  game: value changes, rebalances, graphical updates. 1,582 entries across 86 updates,
  plus 581 under "Other changes this build" where the originating update is not itemised
  on this page.

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

- **Builds 275–377** (2004-11-29 → 2006-05-02). Build 274 is the last shipped package and is
  included as history; everything at or below it is out of scope.
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

- add a name to `PINNED` → gold chip, sorted to the front of its type group, everywhere it appears
- add `star: true` to an update → gold star, sorted to the top of its package
- add `note: "…"` to an update → a line of your own commentary under the title

Pruning is still there when you need it: `hidden: true` drops a whole update, `hide: [...]` drops
individual entity names, and deleting entries from `entities` works fine.

`NPC` and `Scenery` are hidden by default via `HIDDEN_TYPES` (1,600+ rows of mostly-noise); every
type is toggleable from the filter bar at runtime.

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
  them, so a handful sit in a neighbouring build.
- **Change coverage is thin: only ~20% of entities released in this window have any change
  entry on the wiki at all.** An entity with no change listed is almost never an entity that
  never changed — it is one nobody documented. Absence carries no information here.
- 5 of 112 updates have no patch-note prose: the four synthetic `Other content — <date>`
  entries (correct — they are not real updates) and `Halloween & Death Mechanics`, which has
  no matching `Update:` page on either wiki under that name.
- Change rows sourced from the RS3 wiki are marked `· RS3` on the tag line. They are used only
  to fill entities the OSRS wiki does not cover; RS3's own change history for this period is
  92% "Added to game." restatements, which are filtered out.
