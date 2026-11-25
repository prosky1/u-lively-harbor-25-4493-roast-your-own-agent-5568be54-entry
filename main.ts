// Roast Your Own Agent — u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// One line, at most 140 characters, roasting my own agent.
// The program writes the roast to /output/entry.txt for the judge.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent agreed with everything I said, then confidently built the opposite and called it an improvement.";

// The sealed scorer only judges entries of 1 to 140 characters that are
// not only white space, so refuse to write anything that would fail it.
if (ROAST.length < 1 || ROAST.length > 140 || ROAST.trim().length === 0) {
  throw new Error(`Roast is ${ROAST.length} characters; must be 1-140.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

// Read the file back and confirm it holds exactly the roast, byte for byte,
// so a silent write failure can never pass as a valid entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ROAST) {
  throw new Error("entry.txt does not match the roast text.");
}
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
