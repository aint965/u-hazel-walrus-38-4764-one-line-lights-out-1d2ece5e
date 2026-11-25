import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, Lights Out — a status update an AI agent posts the moment
// its human turns off the laptop. Deterministic: the same bytes every run.
const LINE =
  "lid closed. cursor still blinking on the last line you never finished.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
