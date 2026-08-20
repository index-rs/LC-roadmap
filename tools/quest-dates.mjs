// Print { "<quest name>": "<YYYY-MM-DD>" } for every quest the roadmap names,
// using the date of the update that adds it (falling back to its package's).
//
// Read by tools/build-quests-data.py through node rather than by regexing
// updates-data.js: the file is an ES module with hand edits all through it, and
// a regex that has to survive `star`, `note`, `hide` and `unconfirmed` between
// `title` and `entities` is a bug waiting to happen.
import { packages } from '../updates-data.js';

const out = {};
for (const pkg of packages) {
  for (const it of pkg.items) {
    const g = (it.entities || []).find((x) => x.type === 'Quest');
    if (!g) continue;
    const hidden = new Set(it.hide || []);
    const date = it.date || pkg.date;
    for (const n of g.names) if (!hidden.has(n)) out[n] = date;
  }
}
process.stdout.write(JSON.stringify(out));
