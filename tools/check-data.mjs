// Sanity-check the generated data modules: they must parse as ES modules and
// join cleanly against updates-data.js.
import { CHANGES, CHANGES_BY_BUILD } from '../changes-data.js';
import { UPDATE_NOTES } from '../update-notes-data.js';
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

const noType = [...chg, ...bucket].filter((c) => !c.type || c.type === 'Item').length;
const kinds = {};
for (const c of [...chg, ...bucket]) for (const k of c.kinds) kinds[k] = (kinds[k] || 0) + 1;
console.log(`\nkind tags:`, Object.entries(kinds).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join('  '));

const noBullets = [...chg, ...bucket].filter((c) => !c.bullets.length);
console.log(`\nentries with no bullets: ${noBullets.length}`);
const covered = [...pageTitles].filter((t) => CHANGES[t] || UPDATE_NOTES[t]).length;
console.log(`page updates with notes and/or changes: ${covered}/${pageTitles.size}`);
