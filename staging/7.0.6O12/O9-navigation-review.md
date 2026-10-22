# O9 urgent navigation fix — 14 October 2026

Ready for review; unpublished. No commit, RP02/O10 work or additional mass-change practice.

## Reproduced problem

Tested the exact supplied ZIP in the native in-app browser using a separate local QA address. At 390px and 1365px, both new and returning students with blank predictions remained on Stage 1 after Continue. The original Continue button was about 2,875px / 2,778px down the page in an 844px viewport. The message was “Try your starting explanation before continuing.” No JavaScript errors were recorded. Later practice calculations and repair checks also gated navigation; Stage 5 had no Continue button.

## Fix

Previous/Continue controls appear immediately below the heading and after the activity. Stage 1 Previous is visibly disabled; Stage 6 offers the independent check. The overview names all six unlocked learning stages and explicitly labels Stage 3 with the +10%, 0%, −10% graph examples. Navigation saves drafts, restores the last visited stage for unfinished labs, focuses the heading and scrolls it into view. Predictions, watching the film, calculations and repair checks cannot block guided stage access.

All six original stage bodies, media, graph examples, original practice benchmark and day-seven flow remain. Visiting Stage 6 does not create a completion timestamp or score, and its text explains this. The original benchmark submission requirements remain. The independent O9 check hides teaching and stage navigation; unanswered submissions cannot score; returning to teaching still makes a pending attempt assisted practice. Fresh-form, repeat-form, tier and mastery safeguards remain.

The fix is a small separate navigation script and stylesheet loaded after O9. Comparison against the supplied ZIP confirmed every original file except index.html was byte-identical before adding these review documents. This preserves O1–O8, Hollie, original lab code and all media. Storage keys and the normal preview address are unchanged. No live student data was migrated or cleared; browser test harnesses restore the QA origin's saved data afterwards.

## Verification

- 51 focused tests passed, covering original lab, enhancements, discovery, O9 assessment and four new navigation tests.
- 990 full automated tests passed (986 inherited plus four navigation tests).
- 137 navigation browser checks passed at 320, 390, 768 and 1365px. New and returning journeys, all six stage headings, both controls, overview, saved explanation/reload, cell exploration, inline video presence, three mass examples, assessment access, no navigation-based mastery/completion, no horizontal overflow and no browser errors.
- 64 existing O9 browser checks passed, including graph keyboard access, assessment scoring, independent reload, repeat/assisted safeguards and tier separation.
- Mobile and desktop screenshots inspected. Visual review caught inherited global navigation styling compressing the overview on mobile; the final stylesheet explicitly overrides it. Responsive checks were repeated successfully after this correction.

Raw results and screenshots: `GCSE-Study-Hub-O9-navigation-fix/Verification-O9-navigation/`. Browser harnesses are included under `tests/` for rerunning.

The terminal Playwright runner could not launch Chromium because the macOS sandbox rejected its process bootstrap. Browser checks were therefore run through the native in-app browser's HTML harnesses, rather than claiming the terminal browser suite passed. These are responsive browser checks, not physical-device Safari/iPhone tests. Full-film playback, audible narration and subtitle timing remain unverified; inline media and transcript reachability were checked. No new media changes were made.

## Open this version

1. Stop the older preview with Control+C in its Terminal window.
2. Open `GCSE-Study-Hub-O9-navigation-fix/Start Preview.command`.
3. Open http://127.0.0.1:8931/#cell-biology/osmosis in the same normal browser you previously used. Keeping the exact address and browser preserves that browser's existing progress.
4. On Stage 1, click Continue without typing a prediction or playing the film. Use Stage 3 in the overview to reach the mass examples directly.

The ZIP includes the complete app, original media, launcher, sources, tests and review evidence. It is recoverable app source, not a backup of browser-local student progress. Review notes within inherited build records describe older versions; this note is the current handover.
