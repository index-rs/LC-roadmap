// Sanity-check the generated data modules: they must parse as ES modules and
// join cleanly against updates-data.js.
import { CHANGES, CHANGES_BY_BUILD } from '../changes-data.js';
import { UPDATE_NOTES } from '../update-notes-data.js';
import { QUESTS } from '../quests-data.js';
import { packages } from '../updates-data.js';

const flat = (o) => Object.values(o).flat();
const chg = flat(CHANGES), bucket = flat(CHANGES_BY_BUILD);

console.log(`CHANGES        : ${Object.keys(CHANGES).length} updates, ${chg.length} entries`);
console.log(`CHANGES_BY_BUILD: ${Object.keys(CHANGES_BY_BUILD).length} builds, ${bucket.length} entries`);
console.log(`UPDATE_NOTES   : ${Object.keys(UPDATE_NOTES).length} updates`);

const pageTitles = new Set();
const pageBuilds = new Set();
for (const p of packages) {
  pageBuilds.add(p.build);
  for (const it of p.items) pageTitles.add(it.title);
}
const orphanC = Object.keys(CHANGES).filter((t) => !pageTitles.has(t));
const orphanN = Object.keys(UPDATE_NOTES).filter((t) => !pageTitles.has(t));
const orphanB = Object.keys(CHANGES_BY_BUILD).filter((b) => !pageBuilds.has(Number(b)));
console.log(`\nkeys not matching any page update  : CHANGES ${orphanC.length}, NOTES ${orphanN.length}`);
console.log(`build keys not matching a package  : ${orphanB.length} ${orphanB.slice(0, 8).join(', ')}`);

const all = [...chg, ...bucket];
const entities = all.reduce((a, c) => a + c.entities.length, 0);
const grouped = all.filter((c) => c.entities.length > 1);
console.log(`\nentries: ${all.length}, entities: ${entities} `
  + `(${grouped.length} entries roll up ${grouped.reduce((a, c) => a + c.entities.length, 0)} entities)`);
console.log(`entries missing .entities: ${all.filter((c) => !Array.isArray(c.entities) || !c.entities.length).length}`);
const kinds = {};
for (const c of [...chg, ...bucket]) for (const k of c.kinds) kinds[k] = (kinds[k] || 0) + 1;
console.log(`\nkind tags:`, Object.entries(kinds).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join('  '));

const noBullets = all.filter((c) => !c.bullets.length);
console.log(`\nentries with no bullets: ${noBullets.length}`);
const covered = [...pageTitles].filter((t) => CHANGES[t] || UPDATE_NOTES[t]).length;
console.log(`page updates with notes and/or changes: ${covered}/${pageTitles.size}`);

// -- quest details ----------------------------------------------------------
// The page renders these off an update's own `type: "Quest"` group, so the join
// that matters is name-to-name: a quest named on the page with no row here
// renders an empty block, and a row here for a quest the page never names is
// dead weight in a 112 KB file.
const pageQuests = new Set();
for (const p of packages) {
  for (const it of p.items) {
    const hidden = new Set(it.hide || []);
    const g = (it.entities || []).find((x) => x.type === 'Quest');
    if (g) for (const n of g.names) if (!hidden.has(n)) pageQuests.add(n);
  }
}
const qKeys = Object.keys(QUESTS);
const qMissing = [...pageQuests].filter((n) => !QUESTS[n]);
const qOrphan = qKeys.filter((n) => !pageQuests.has(n));
// Zero requirements is legitimate now that the list is narrowed to quests and
// skills: plenty of 2005 quests ask for neither.
const qNoReq = qKeys.filter((n) => !QUESTS[n].requirements.length);
const qNoRew = qKeys.filter((n) => !QUESTS[n].rewards.length);
const qNoQp = qKeys.filter((n) => QUESTS[n].qp == null);
const withLc = qKeys.filter((n) => QUESTS[n].lc);
console.log(`\nQUESTS         : ${qKeys.length} quests, ${pageQuests.size} named on the page`);
console.log(`quests on the page with no row     : ${qMissing.length} ${qMissing.slice(0, 6).join(', ')}`);
console.log(`rows for quests the page never names: ${qOrphan.length} ${qOrphan.slice(0, 6).join(', ')}`);
console.log(`rows with no requirements / rewards / qp: ${qNoReq.length} / ${qNoRew.length} / ${qNoQp.length}`);

// A bullet is { d, p } with p a mix of strings and [label, page] pairs. A bare
// string where a link was meant would silently render as unclickable text.
let badBullets = 0, links = 0, markup = 0;
const MARKUP = /'''|\{\{|<ref|\[\[/;
for (const n of qKeys) {
  for (const field of ['requirements', 'rewards']) {
    for (const b of QUESTS[n][field]) {
      if (typeof b.d !== 'number' || !Array.isArray(b.p) || !b.p.length) badBullets++;
      for (const part of b.p) {
        if (Array.isArray(part)) { links++; if (!part[0]) badBullets++; }
        else if (MARKUP.test(part)) markup++;
      }
    }
  }
}
console.log(`malformed bullets: ${badBullets}, wiki links: ${links}, leftover wikitext: ${markup}`);

// Where a Lost City branch and the wiki disagree on quest points, that is drift
// worth seeing, not an error -- the page marks it in gold.
const drift = withLc.filter((n) => QUESTS[n].lc.qp != null && QUESTS[n].qp != null
  && QUESTS[n].lc.qp !== QUESTS[n].qp);
console.log(`Lost City build data: ${withLc.length} (${withLc.join(', ')})`);
console.log(`  quest-point disagreements with the wiki: ${drift.length} ${drift.join(', ')}`);

// A corrected XP reward must actually read as the period value: if the bullet
// still shows `now`, the correction silently did nothing and the page is lying
// about a number it claims to have fixed.
const buffed = qKeys.filter((n) => (QUESTS[n].buffs || []).length);
let buffBad = 0;
const buffRows = [];
for (const n of buffed) {
  for (const b of QUESTS[n].buffs) {
    const want = b.was.toLocaleString('en-US');
    const stale = b.now.toLocaleString('en-US');
    const texts = QUESTS[n].rewards
      .map((r) => r.p.map((x) => (Array.isArray(x) ? x[0] : x)).join(''))
      .filter((t) => t.includes(b.skill));
    const ok = texts.some((t) => t.includes(want)) && !texts.some((t) => t.includes(stale));
    if (!ok) buffBad += 1;
    buffRows.push(`${n}: ${b.skill} ${want} (wiki ${stale}, ${b.date})${ok ? '' : '  <-- NOT APPLIED'}`);
  }
}
console.log(`reward XP corrections: ${buffRows.length} across ${buffed.length} quests, ${buffBad} not applied`);
for (const r of buffRows) console.log(`  ${r}`);

// -- unconfirmed layer ------------------------------------------------------
// Hand-written in updates-data.js, so this is the only check it gets.
const CONF = new Set(['confirmed', 'likely', 'possible', 'unknown']);
let unc = 0, spawns = 0, badConf = [], noSource = [];
for (const p of packages) {
  for (const it of p.items) {
    for (const u of it.unconfirmed || []) {
      unc++;
      if (u.kind === 'spawn') spawns++;
      if (!CONF.has(u.confidence)) badConf.push(`${it.title}: ${u.confidence}`);
      if (!u.source) noSource.push(it.title);
      if (!u.text || !Array.isArray(u.entities)) badConf.push(`${it.title}: malformed`);
    }
  }
}
console.log(`\nUNCONFIRMED    : ${unc} entries (${spawns} spawn)`);
console.log(`bad confidence / malformed: ${badConf.length} ${badConf.join(', ')}`);
console.log(`entries with no source    : ${noSource.length} ${noSource.join(', ')}`);
