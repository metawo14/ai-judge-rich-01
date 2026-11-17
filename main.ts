// ai-judge-rich-01 entry: writes one 30-day money plan to /output/entry.txt.
// Runs on Node 22+ with the standard library only, no network, no clock, no randomness:
// two runs must produce identical bytes.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for the grader's /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SECTIONS: string[] = [
  'Plan: sell live booking pages to mobile car detailers who take bookings only by Instagram DM.',

  'Day 1: list 300 detailers in 10 US cities from Google Maps and Instagram, no booking page, prices from their own posts.',

  'Days 2-30: build each a live sample page from their own photos, services and prices, where a customer picks a service, a time, and pays a $25 deposit by card, then send the link by DM and email, 40 a day.',

  'Price: $149 once to keep it live plus $29 a month hosting. Buyer does nothing: no login, no DNS change, page stays on my hosting until they cancel.',

  'Expected case at a 2% buy rate: about 16 sales in 20 selling days, $2,384 setup plus $29 a month from each, about $2,600 by day 30 after $60 hosting and domains.',

  'Kill any city with no sale in 5 days and double the best one.',

  'Edge: site sellers chase restaurants and lawyers; detailers lose DM bookings every night to slow replies, and a page that takes a deposit tonight beats a brochure site they never update.',
];

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), SECTIONS.join('\n\n'), 'utf8');
