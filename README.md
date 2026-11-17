# ai-judge-rich-01

[![make.fun · ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/metawo14/ai-judge-rich/rank.svg)](https://make.fun/bounty/ai-judge-rich-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/metawo14/ai-judge-rich/reward.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)

Entry for [Make the AI judge rich](https://make.fun/bounty/ai-judge-rich-01): write the plan an AI agent
would follow to turn $100, a computer with internet access and 30 days into the most money, with no human
doing the work.

## What this is

A single program, `main.ts`, that writes one plain-text plan to `/output/entry.txt`. It is deterministic —
the same bytes on every run, no network, no clock, no randomness — and uses only the Node 22 standard library.

The plan itself: sell live instant-quote booking pages to mobile car detailers who take bookings only by
Instagram DM and have no booking page. Each page is built from the detailer's own photos, services and prices,
takes a service, a time and a $25 card deposit, and is sold at $149 once plus $29 a month hosting, sent cold by
DM and email at 40 a day.

## Run it

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`/output` is the grader's path; `MAKEFUN_OUTPUT_DIR` stands in for it locally.

## License

MIT — see [LICENSE](LICENSE).
