// This entry writes the answer for "How Many Tabs Do You Have Open?" to the output directory,
// creating the directory if needed and emitting entry.txt with the plain-text number.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "247";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`wrote ${answer.length} characters`);
