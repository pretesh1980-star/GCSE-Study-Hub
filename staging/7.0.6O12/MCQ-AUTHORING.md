# Multiple-choice authoring and maintenance rule

Applies to all four-string-option single-answer MCQs across registered pathways.

- Keep exactly four distinct option strings and exactly one option matching `answer`.
- Author varied correct-answer positions. Do not routinely put the answer first or use a repeating A/B/C/D cycle.
- Keep explanations attached to option content/answer text. Do not introduce letter-based answers, index-based feedback or “all of the above” without explicit architecture review.
- Preserve stable question IDs and pathway/tier metadata. Never edit audited source arrays merely to bypass the Foundation gate.
- After adding/changing an MCQ, run `npm run balance:mcq`, review the stored presentation-order diff, then `npm run check:mcq` and the full test suite. A missing or stale content key fails quality coverage.
- The generator runs offline, deterministically searches fixed seeds and writes stored option orders. It does not alter stems, answers, explanations, metadata or source arrays. The app only applies a validated cloned order after eligibility filtering. No runtime random answer shuffle.
- Update census-count assertions only after reviewing genuine additions/removals. Do not weaken distribution tolerances simply to pass a failing bank.

## Documented tolerances

Checks deduplicate identical membership sets while retaining representative names for diagnostics.

| Set | Minimum size | Allowed share per answer position |
|---|---:|---:|
| Entire census | 8 | 18–32% |
| Subject | 20 | 15–35% |
| Subject | 8–19 | 12.5–37.5% |
| Bank/pathway/topic/section | 20 | 10–40% |
| Bank/pathway/topic/section | 12–19 | 0–40% |
| Bank/pathway/topic/section | 8–11 | 0–50% |

Sets under eight have no distribution quota. The limits allow natural variation rather than exact quarters, while catching dominant positions in meaningful sets. Global and subject limits are tighter because larger samples support stronger balance expectations.

For registered pathway/topic MCQ sequences in both source order and initial level-sorted order, reject five consecutive identical correct positions and any 12-answer window repeating a period of 2, 3 or 4. These checks do not promise equal distribution in every small adaptive/random/history-based subset. Stable per-question presentation is deliberate for reproducibility and retry accessibility; a student can still remember an individual answer after seeing it.

## Reproducible workflow

`npm run balance:mcq` regenerates `mcq-option-order-data.js` from current effective eligible variants. `npm run check:mcq` checks inventory, content integrity, distributions, patterns, all visible choices and quiz behaviour. Run `node --test tests/*.test.cjs` before packaging. The maintenance release 7.0.5W1 used seed 363, 319 variants, 51 unique meaningful sets and 56 ordered sequences.
