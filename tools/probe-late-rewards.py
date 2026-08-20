#!/usr/bin/env python3
"""Find rewards that a LATER update attached to the quest.

The Wizards' Guild rune store was not a reward of The Hand in the Sand in 2006.
It became one on 2018-06-28, and the store page's own {{Subject changes}} says
so by name. That is the generalisable shape:

    a page linked from quest Q's rewards carries a change entry, dated after
    Q's build, that mentions Q by name

Anything matching that is a candidate reward the quest did not have at its
build. Validated against the known case: the rule fires on it.

READ THE HITS, DO NOT AUTO-APPLY. Precision is low -- it also catches later
quality-of-life changes to rewards the quest always had ("you can now find your
kingdom statistics in the Throne of Miscellania journal"). The list is short
enough to eyeball, which is the point; a real hit becomes a dated entry in
ANACHRONISMS in build-quests-data.py.

Sharper than diffing OSRS rewards against RS3, which was also tried: that finds
mostly RS3 divergence (removed content, EoC rewrites) at 16 flags and no true
positives.

Usage:  python tools/probe-late-rewards.py
"""
from __future__ import annotations
import json, re, subprocess, sys
from pathlib import Path

sys.path.insert(0, r"F:\projects\runescape-research")
from rs_timeline.client import ResponseCache, WikiClient, chunked
from rs_timeline.patchnotes import parse_subject_changes

SP = Path(__file__).resolve().parent
ROADMAP = SP.parent
POSIX = str(ROADMAP).replace("\\", "/")
CACHE = Path(r"F:\projects\runescape-research\cache\wiki_cache.sqlite")

def node(expr: str):
    """Run a node -e expression and parse its JSON stdout.

    quests-data.js is an ES module, so node reads it rather than a regex here
    -- the same reason tools/quest-dates.mjs exists.
    """
    r = subprocess.run(["node", "-e", expr], capture_output=True, text=True, check=True)
    return json.loads(r.stdout)


def node_file(path: Path):
    r = subprocess.run(["node", str(path)], capture_output=True, text=True,
                       check=True, cwd=ROADMAP)
    return json.loads(r.stdout)


def main() -> int:
    rewards = node(
        "import('file:///" + POSIX + "/quests-data.js').then(m=>{const o={};"
        "for(const [n,q] of Object.entries(m.QUESTS))o[n]=q.rewards.map(b=>({"
        "text:b.p.map(x=>Array.isArray(x)?x[0]:x).join('').trim(),"
        "links:b.p.filter(x=>Array.isArray(x)).map(x=>x[1]||x[0])}));"
        "process.stdout.write(JSON.stringify(o))})")
    dates = node_file(ROADMAP / "tools" / "quest-dates.mjs")

    pages = sorted({l for bs in rewards.values() for b in bs for l in b["links"]})
    cache = ResponseCache(CACHE)
    c = WikiClient("OSRS", cache)
    text: dict[str, str] = {}
    for group in chunked(pages, 40):
        d = c.get({"action": "query", "prop": "revisions", "rvprop": "content",
                   "rvslots": "main", "redirects": "1", "titles": "|".join(group)})
        q = d.get("query", {})
        alias = {r["from"]: r["to"] for r in q.get("redirects", [])}
        norm = {r["from"]: r["to"] for r in q.get("normalized", [])}
        by = {}
        for pg in q.get("pages", []):
            revs = pg.get("revisions") or []
            if revs:
                by[pg["title"]] = revs[0]["slots"]["main"]["content"]
        for n in group:
            r = alias.get(norm.get(n, n), norm.get(n, n))
            if r in by:
                text[n] = by[r]

    changes: dict[str, list] = {}
    for name, txt in text.items():
        changes[name] = [(e.date_iso, (e.change_text or "").replace("\n", " "))
                         for e in parse_subject_changes("OSRS", name, txt)]

    hits = []
    for quest, bullets in rewards.items():
        build = dates.get(quest)
        if not build:
            continue
        # "Mourning's End Part I" also matches loosely as "Mourning's End"; use the
        # full name only, to keep this specific.
        rx = re.compile(re.escape(quest.split("/")[-1]), re.I)
        for b in bullets:
            for link in b["links"]:
                for date, body in changes.get(link, []):
                    if date and date > build and rx.search(body):
                        hits.append({"quest": quest, "build": build, "page": link,
                                     "date": date, "bullet": b["text"], "change": body})
    print(f"pages scanned: {len(text)}  ({c.request_count} requests)")
    print(f"\nrewards attached to the quest AFTER its build: {len(hits)}\n")
    seen = set()
    for hp in sorted(hits, key=lambda x: x["date"]):
        k = (hp["quest"], hp["bullet"])
        if k in seen:
            continue
        seen.add(k)
        print(f"[{hp['date']}] {hp['quest']} (build {hp['build']}) via {hp['page']}")
        print(f"    reward : {hp['bullet'][:110]}")
        print(f"    change : {hp['change'][:170]}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
