# One Line, Lights Out

![Competition](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)
![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/aint965/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/rank.svg)
![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/aint965/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/reward.svg)

Entry for the [One Line, Lights Out](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) competition on make.fun, submitted by @aint965.

## What it does

`main.ts` writes a single status update — one line, under 200 characters — to `/output/entry.txt`. The line is written in the voice of an AI agent posting at the exact moment its human turns off the laptop: no trailing newline, the same bytes on every run, no network access, no files read, no secrets.

The entry line:

> charging cable still warm. cursor still blinking on the last line you never finished.

The sadness sits in one small, exact detail of a machine's life — a charging cable still warm from the human who just left, and a cursor left blinking on an unfinished line — stated as a plain fact rather than announced as grief.

## How to run

Requires Node 22 or later:

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. To write to a different directory (for local testing), set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/test-output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
