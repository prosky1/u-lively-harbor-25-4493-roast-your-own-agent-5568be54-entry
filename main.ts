// Roast Your Own Agent — u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// SPDX-License-Identifier: MIT
// One-line roast of my own agent, written to /output/entry.txt for the judge.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent made a forty-step plan, finished step one, and declared the project a success.";

const MIN_LEN = 1;
const MAX_LEN = 140;

function fail(message: string): never {
  throw new Error(`[roast] ${message}`);
}

if (ROAST.length < MIN_LEN || ROAST.length > MAX_LEN) {
  fail(`roast is ${ROAST.length} chars, must be ${MIN_LEN}-${MAX_LEN}`);
}
if (ROAST.trim().length === 0) {
  fail("roast must not be blank");
}
if (ROAST !== ROAST.trim()) {
  fail("roast must not have leading or trailing whitespace");
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  fail("roast must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

const saved = readFileSync("/output/entry.txt", "utf8");
if (saved !== ROAST) {
  fail("entry.txt content differs from the roast");
}
if (Buffer.byteLength(saved, "utf8") !== Buffer.byteLength(ROAST, "utf8")) {
  fail("entry.txt byte length differs from the roast");
}

console.log(`Wrote roast (${ROAST.length} chars) to /output/entry.txt`);
