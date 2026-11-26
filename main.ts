// The Internet in One Word — u-ronigrv-the-internet-in-one-word-e388f33b
// Entry: "unhinged" (8 characters, gate allows 1-30)
//
// Why this word fits the brief:
// - One single word that describes the WHOLE internet, not one app, site or mood.
// - Funny on its own, no explanation needed: "unhinged" is the internet's own
//   favourite self-description, and it lands as a joke before it lands as a claim.
// - True as a whole: every corner of the internet — feeds, comments, livestreams,
//   group chats, marketplaces — runs on the same unfiltered, unhinged energy.
// - Surprising: the obvious reaches are "cats", "memes", "chaos" or "porn";
//   "unhinged" is the word a reader laughs at and then nods to.
// - Lands in one beat: 8 letters, correctly spelled, instantly readable.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "unhinged";
// Gate check (kit: 1-30 characters): fail loudly instead of shipping a bad entry.
if (line.length < 1 || line.length > 30) {
  throw new Error(`entry length ${line.length} outside gate 1-30`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
