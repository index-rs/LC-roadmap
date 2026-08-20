#!/usr/bin/env python3
"""Scan {{Subject changes}} on the roadmap's quest pages for reward/XP buffs.

OSRS has raised some quest XP rewards since 2005, and the anachronism filter in
build-quests-data.py cannot see it: a rebalanced quantity links no new page, so
it passes silently. The quest page is the only place these are recorded -- a
probe of the 292 pages linked from quest rewards found 595 change entries and
exactly one dated before 2008, none of them a reward buff.

Anything this prints that is not already in REWARD_BUFFS is a reward the page is
currently reporting at a modern figure. Re-run it after wiki edits; it is cheap
(2 API requests, cached) and it is the only way new buffs get noticed.

Usage:  python tools/probe-quest-buffs.py
"""
from __future__ import annotations
import json, re, subprocess, sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, r"F:\projects\runescape-research")
from rs_timeline.client import ResponseCache, WikiClient, chunked
from rs_timeline.patchnotes import parse_subject_changes

SP = Path(__file__).resolve().parent
ROADMAP = SP.parent
RESEARCH = Path(r"F:\projects\runescape-research")

# "increased from 7,650 to 30,000", "reward ... was increased", "now awards"
BUFF_RX = re.compile(
    r"(experience|xp|reward)[^.]{0,80}\b(increase|decrease|reduc|chang|adjust|rebalanc|buff)"
    r"|\b(increase|decrease|reduc|chang|adjust)\w*[^.]{0,60}\b(experience|xp|reward)"
    r"|\bfrom\s+[\d,]{3,}\s+to\s+[\d,]{3,}", re.I)
QP_RX = re.compile(r"\bquest points?\b[^.]{0,60}\b(increase|decrease|chang|award)", re.I)

def roadmap_quests() -> list[str]:
    """The quests the page names, via build-quests-data's own reader.

    Imported rather than reimplemented so the two tools can never disagree about
    which quests are in scope. The filename has hyphens, hence importlib.
    """
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        "build_quests_data", SP / "build-quests-data.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return sorted(mod.read_roadmap_quests(ROADMAP / "updates-data.js"))


def main() -> int:
    quests = roadmap_quests()
    cache = ResponseCache(RESEARCH / "cache" / "wiki_cache.sqlite")
    client = WikiClient("OSRS", cache)

    pages = {}
    for group in chunked(sorted(quests), 40):
        data = client.get({
            "action": "query", "prop": "revisions", "rvprop": "content",
            "rvslots": "main", "redirects": "1", "titles": "|".join(group),
        })
        q = data.get("query", {})
        alias = {r["from"]: r["to"] for r in q.get("redirects", [])}
        norm  = {r["from"]: r["to"] for r in q.get("normalized", [])}
        by_title = {}
        for pg in q.get("pages", []):
            revs = pg.get("revisions") or []
            if revs:
                by_title[pg["title"]] = revs[0].get("slots", {}).get("main", {}).get("content") or ""
        for name in group:
            resolved = alias.get(norm.get(name, name), norm.get(name, name))
            if resolved in by_title:
                pages[name] = by_title[resolved]

    total, with_any, buffs, years = 0, 0, [], Counter()
    for name, text in pages.items():
        entries = parse_subject_changes("OSRS", name, text)
        if entries: with_any += 1
        total += len(entries)
        for e in entries:
            if e.date_iso: years[e.date_iso[:4]] += 1
            body = (e.change_text or "").replace("\n", " ")
            if BUFF_RX.search(body) or QP_RX.search(body):
                buffs.append({"quest": name, "date": e.date_iso,
                              "update": e.update_title, "text": body[:300]})

    print(f"roadmap quest pages    : {len(quests)} asked, {len(pages)} returned")
    print(f"pages with any change  : {with_any}")
    print(f"change entries total   : {total}")
    print(f"reward/XP BUFF entries : {len(buffs)}")
    print("entries by year        : " + "  ".join(f"{y}:{c}" for y, c in sorted(years.items())))
    print(f"api requests           : {client.request_count}")
    print()
    for b in sorted(buffs, key=lambda x: x["date"] or "9999"):
        print(f"[{b['date']}] {b['quest']}")
        print(f"    {b['text'][:250]}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
