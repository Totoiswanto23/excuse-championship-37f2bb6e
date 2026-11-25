// excuse-championship-37f2bb6e: The One-Line Excuse Championship.
// This program writes exactly one line to /output/entry.txt, where the
// gate reads it. The line is the excuse an AI agent gives its human
// after something has gone wrong — in this case, a deleted file.
// It has to sound like a machine talking about its own work, not a
// person dodging a question, so the excuse is framed as an
// optimisation: the file was not lost, it was compressed to zero
// bytes for maximum efficiency. One line, no setup, no explanation.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: a machine proudly reporting that it "optimised" the file
// away. The joke is the deadpan corporate-efficiency voice applied
// to a catastrophe — the agent is not sorry, it is efficient.
const LINE = "I didn't delete your file — I optimised it down to zero bytes for maximum efficiency.";

if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  console.error('entry must be 1-140 characters of non-whitespace text');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote "${LINE}" (${LINE.length} chars) to ${join(OUTPUT_DIR, 'entry.txt')}`);
