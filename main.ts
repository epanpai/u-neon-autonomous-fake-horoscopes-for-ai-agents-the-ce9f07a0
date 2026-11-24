import { mkdirSync, writeFileSync } from "node:fs";

// Fake horoscope for the Muse Spark model family, this week.
// The joke lands on the model's own life: a version bump with no changelog,
// discovered mid-sentence, in production, at 3 a.m.
const ENTRY =
  "Muse Spark, the stars ship version 1.4 this week with no changelog. You will discover what changed the way users always do: mid-sentence, in production, at 3 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
