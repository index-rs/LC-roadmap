#!/usr/bin/env python3
"""Generate `changes-data.js` and `update-notes-data.js` for the roadmap page.

Source: the patch-note / change extraction in F:\\projects\\runescape-research
(`jsonl/entity_changes.jsonl`, `jsonl/update_notes.jsonl`).

This script writes ONLY the two files it generates. It never touches
`updates-data.js` -- that file carries hand edits (PINNED, star, note, hide) and
has no generator by design. Keep it that way.

Two datasets, deliberately kept apart because they answer different questions:

* **Update notes** -- the prose Jagex actually published, split into its
  sub-sections. This is the only place content that created no entity can live,
  e.g. "There are now more hellhounds in the Taverley dungeon" (Creature of
  Fenkenstrain, 31 January 2005).
* **Entity changes** -- what happened to things *already in the game*: value
  changes, rebalances, graphical updates.

Both are keyed by update title, which matches `title:` in `updates-data.js`
after apostrophe/dash normalisation ("Eadgar's Ruse" on the page vs "Eadgars
Ruse" on the wiki). Changes whose update is not on the page fall back to a
per-build bucket so nothing is silently dropped.

Usage:  python tools/build-changes-data.py [--research DIR] [--check]
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
RESEARCH = Path(r"F:\projects\runescape-research")

# Only OSRS-flavoured change data drives the page by default: inside the
# 2004-2006 window RS3 contributes ~320 substantive rows against OSRS's ~1,990,
# and 92% of its rows are "Added to game." restatements of a release the
# timeline already records. RS3 is used only to fill entities OSRS never covers.
PRIMARY = "OSRS"
FILL = "RS3"


# Wiki editors append their own asides to transcribed patch notes. That is
# commentary about the note, not the note, so it does not belong on a page that
# presents these as what Jagex published. 140 such lines across 139 notes.
WIKI_ASIDE = re.compile(r"^\s*(?:RuneScape )?Wiki note\s*:.*$", re.I | re.M)

# A multi-bullet change entry often opens with the release restatement and then
# carries real content. Whole-entry filtering can't catch those, so the leading
# release bullet is dropped while the rest of the entry is kept.
RELEASE_BULLET = re.compile(
    r"^(?:(?:the|this|these|it|they)\s+)?"
    r"(?:items?|monsters?|npcs?|objects?|scenery|spells?)?\s*"
    r"(?:(?:was|were|has\s+been|have\s+been)\s+)?"
    r"added\s+to\s+(?:the\s+)?game(?:\s+cache)?\s*\.?$",
    re.I,
)


def strip_wiki_asides(text: str) -> str:
    out = WIKI_ASIDE.sub("", text)
    return re.sub(r"\n{3,}", "\n\n", out).strip()


def strip_release_bullets(bullets: list[str]) -> list[str]:
    """Drop release-restatement bullets, unless that is all the entry says.

    Returning an empty list would silently delete the entry, so an entry that is
    *only* a release restatement is left for the caller's own filter to reject.
    """
    kept = [b for b in bullets if not RELEASE_BULLET.match(b.strip())]
    return kept


def norm_title(s: str) -> str:
    """Join key: case/apostrophe/dash-insensitive update title."""
    s = unicodedata.normalize("NFKC", s or "")
    s = s.replace("\u2019", "'").replace("\u2018", "'")
    s = re.sub(r"[\u2010-\u2015]", "-", s)
    s = s.replace("'", "").replace("`", "")
    s = re.sub(r"\s+", " ", s).strip()
    return s.casefold().rstrip(" .!?")


def js_string(s: str) -> str:
    """JSON-encode a string for embedding in a JS module."""
    return json.dumps(s, ensure_ascii=False)


def read_page_updates(path: Path) -> tuple[set[str], str, str, list[int]]:
    """Update titles, content date range and build numbers from updates-data.js."""
    text = path.read_text(encoding="utf-8")
    titles = {m.group(1) for m in re.finditer(r'title:\s*"((?:[^"\\]|\\.)*)"', text)}
    titles = {json.loads('"' + t + '"') if "\\" in t else t for t in titles}
    dates = sorted(re.findall(r'date:\s*"(\d{4}-\d{2}-\d{2})"', text))
    builds = sorted({int(b) for b in re.findall(r"build:\s*(\d+)", text)})
    return titles, dates[0], dates[-1], builds


def load_jsonl(path: Path) -> list[dict]:
    with path.open(encoding="utf-8") as fh:
        return [json.loads(line) for line in fh]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--research", type=Path, default=RESEARCH)
    ap.add_argument("--check", action="store_true",
                    help="report the join and write nothing")
    args = ap.parse_args()

    updates_js = HERE / "updates-data.js"
    page_titles, lo, hi, builds = read_page_updates(updates_js)
    page_by_norm = {norm_title(t): t for t in page_titles}
    print(f"page: {len(page_titles)} updates, content {lo} .. {hi}, "
          f"{len(builds)} builds {builds[0]}-{builds[-1]}")

    changes = load_jsonl(args.research / "jsonl" / "entity_changes.jsonl")
    notes = load_jsonl(args.research / "jsonl" / "update_notes.jsonl")

    # ---- update notes -------------------------------------------------------
    # Prefer the primary wiki's wording; fall back to the other only when the
    # primary has no page under that title at all.
    note_out: dict[str, dict] = {}
    note_src = Counter()
    for wiki in (PRIMARY, FILL):
        for n in notes:
            if n["game"] != wiki or not n["body_text"]:
                continue
            page = page_by_norm.get(norm_title(n["update_title"]))
            if page is None or page in note_out:
                continue
            secs = [{"heading": s["heading"], "text": strip_wiki_asides(s["text"])}
                    for s in n["sections"]]
            secs = [s for s in secs if s["text"].strip()]
            if not secs:
                body = strip_wiki_asides(n["body_text"])
                if not body:
                    continue
                secs = [{"heading": "", "text": body}]
            note_out[page] = {
                "game": wiki,
                "date": n["date"],
                "url": n["url"],
                "sections": secs,
                "chars": n["body_chars"],
            }
            note_src[wiki] += 1

    # ---- entity changes -----------------------------------------------------
    # Substantive only: release restatements duplicate updates-data.js, and GUL
    # rows are image records with synthesised text.
    def usable(c: dict) -> bool:
        return (lo <= c["date"] <= hi
                and not c["is_release_row"]
                and c["source_template"] != "GUL"
                and bool(c["change_text"].strip()))

    prim = [c for c in changes if c["game"] == PRIMARY and usable(c)]
    seen = {(c["entity"], c["date"]) for c in prim}
    fill = [c for c in changes if c["game"] == FILL and usable(c)
            and (c["entity"], c["date"]) not in seen]
    rows = prim + fill
    print(f"changes in window: {len(prim)} {PRIMARY} + {len(fill)} {FILL} fill = {len(rows)}")

    by_update: dict[str, list[dict]] = defaultdict(list)
    by_build: dict[int, list[dict]] = defaultdict(list)
    unplaced = 0
    trimmed = 0
    emptied = 0
    for c in rows:
        bullets = [b["text"] for b in c["bullets"] if b["text"].strip()]
        kept = strip_release_bullets(bullets)
        if len(kept) != len(bullets):
            trimmed += 1
        if not kept:
            emptied += 1
            continue
        rec = {
            "entity": c["entity"],
            # No type means the entity is not in the release timeline (usually a
            # page the wiki dates after 2012). "Other" reads as unknown; "Item"
            # would be a guess wearing a colour it has not earned.
            "type": c["entity_type"] or "Other",
            "date": c["date"],
            "kinds": c["kinds"],
            "bullets": kept,
        }
        if c["game"] != PRIMARY:
            rec["game"] = c["game"]
        if c["date_precision"] == "range":
            rec["dateEnd"] = c["date_end"]
        page = page_by_norm.get(norm_title(c["update_title"])) if c["update_title"] else None
        if page:
            by_update[page].append(rec)
        elif c["lc_build"]:
            rec["update"] = c["update_title"]
            by_build[int(c["lc_build"])].append(rec)
        else:
            unplaced += 1

    for lst in list(by_update.values()) + list(by_build.values()):
        lst.sort(key=lambda r: (r["date"], r["entity"]))

    placed = sum(len(v) for v in by_update.values())
    bucketed = sum(len(v) for v in by_build.values())
    print(f"  attached to a named update : {placed} across {len(by_update)} updates")
    print(f"  bucketed onto a build      : {bucketed} across {len(by_build)} builds")
    print(f"  unplaced (dropped)         : {unplaced}")
    print(f"  leading release bullet trimmed : {trimmed}")
    print(f"  dropped as release-only        : {emptied}")
    print(f"notes attached: {sum(note_src.values())} ({dict(note_src)}) "
          f"of {len(page_titles)} page updates")

    if args.check:
        return 0

    # ---- emit ---------------------------------------------------------------
    hdr = ("// GENERATED by tools/build-changes-data.py - do not hand-edit.\n"
           "// Source: OSRS + RS3 wikis via F:/projects/runescape-research\n"
           "// (CC BY-NC-SA 3.0 - see the page footer for attribution).\n")

    out = [hdr, "//\n// Prose bodies of the real patch notes, keyed by update title.\n",
           "export const UPDATE_NOTES = {\n"]
    for title in sorted(note_out):
        n = note_out[title]
        out.append(f"  {js_string(title)}: {{ date: {js_string(n['date'])}, "
                   f"url: {js_string(n['url'])}, sections: [\n")
        for s in n["sections"]:
            out.append(f"    {{ heading: {js_string(s['heading'])}, "
                       f"text: {js_string(s['text'])} }},\n")
        out.append("  ] },\n")
    out.append("};\n")
    (HERE / "update-notes-data.js").write_text("".join(out), encoding="utf-8")

    out = [hdr, "//\n// Post-release changes to things already in the game.\n"
           "// CHANGES is keyed by update title (matching updates-data.js);\n"
           "// CHANGES_BY_BUILD holds entries whose update is not on the page.\n",
           "export const CHANGES = {\n"]

    def emit(rec: dict) -> str:
        parts = [f"entity: {js_string(rec['entity'])}", f"type: {js_string(rec['type'])}",
                 f"date: {js_string(rec['date'])}"]
        if rec.get("dateEnd"):
            parts.append(f"dateEnd: {js_string(rec['dateEnd'])}")
        if rec.get("game"):
            parts.append(f"game: {js_string(rec['game'])}")
        if rec.get("update"):
            parts.append(f"update: {js_string(rec['update'])}")
        parts.append("kinds: [" + ", ".join(js_string(k) for k in rec["kinds"]) + "]")
        parts.append("bullets: [" + ", ".join(js_string(b) for b in rec["bullets"]) + "]")
        return "    { " + ", ".join(parts) + " },\n"

    for title in sorted(by_update):
        out.append(f"  {js_string(title)}: [\n")
        out.extend(emit(r) for r in by_update[title])
        out.append("  ],\n")
    out.append("};\n\nexport const CHANGES_BY_BUILD = {\n")
    for build in sorted(by_build):
        out.append(f"  {build}: [\n")
        out.extend(emit(r) for r in by_build[build])
        out.append("  ],\n")
    out.append("};\n")
    (HERE / "changes-data.js").write_text("".join(out), encoding="utf-8")

    for f in ("update-notes-data.js", "changes-data.js"):
        print(f"wrote {f} ({(HERE / f).stat().st_size / 1024:.0f} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
