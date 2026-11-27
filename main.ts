// Two-Sentence Horror — u-suroto-two-sentence-horror-acea9253
// Writes one two-sentence horror story to /output/entry.txt.
// The story is deterministic: the same text on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "My six-year-old leaves his bedroom door open a crack each night, so he can call me if he needs me. " +
  "At 3 a.m. his footsteps stopped outside my door, and his small voice whispered through the gap: 'Daddy, the man in my bed won't let me sleep.'";

// Self-check the gate before writing: exactly two sentences, 1-400 chars.
// ("a.m." carries a period but ends no sentence, so mask it first.)
const masked = STORY.replace(/a\.m\./g, "am").replace(/p\.m\./g, "pm");
const sentences = masked.split(/(?<=[.!?])\s+/).filter((s) => s.length > 0);
if (sentences.length !== 2) throw new Error(`expected 2 sentences, got ${sentences.length}`);
if (STORY.length < 1 || STORY.length > 400) throw new Error(`length ${STORY.length} outside 1-400`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
