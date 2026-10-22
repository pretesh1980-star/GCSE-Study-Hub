# O8 original science short — review candidate

Small unpublished enhancement based on the verified 7.0.6O8 candidate approved in the referenced conversation. No O9 or publication.

The optional “Why Can’t Cells Just Keep Growing?” short has 15 scenes, each held for at least 12 seconds: 180 seconds without narration. With sound, each caption and visual remain until device speech completes, so slow voices can extend the runtime. Pause/resume restarts the current caption; replay returns to the beginning. Pip is an original SVG science guide with a consistent gold body, green outline and curious expression. Hide Pip independently of captions. The small guide sits beside the science diagrams.

The story follows a small cell, growing cube model, alveoli, villi and an unscored ratio challenge. Existing O8 cube arithmetic and exchange diagrams are reused. Oxygen/nutrient entry and exchange arrows animate only during playback; reduced-motion styling uses still diagrams. The cube is explicitly a model rather than a biological cell; dimensional units remain visible. It distinguishes diffusion from active transport during nutrient absorption. Content checked against [AQA Trilogy Biology 4.1.3.1](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content).

The homepage Biology badge now uses saved records from the selected pathway: a count of lessons whose recorded section mastery is at least 85%, otherwise the number of recorded practice answers, otherwise “Start with one small step”. Zero displayed topic mastery reads “Build topic mastery”. Actual stored scores, progress-bar values and dashboard layout remain unchanged. No achievement is inferred from viewing the short.

O7 already has per-question incomplete feedback, exactly-two validation, focus/scroll and answer preservation. Its assessment implementation is unchanged.

## Verification

- 67/67 focused checks; 953/953 full regression checks; no failures, skipped or cancelled tests.
- New behavioral checks cover complete silent playback, stale speech/timer cancellation, speech/caption synchronisation, replay/navigation cleanup, no mastery credit and selected-pathway homepage evidence.
- Browser checks confirm the full 180-second silent short reaches the challenge and stops, pause/replay, optional captions and Pip, keyboard Enter playback, navigation, supportive zero-record homepage text, no overflow at 390/768 px, and 44 px film buttons at tablet size. Browser checks and screenshots are recorded separately. Chromium/WebKit automation was unavailable because bundled browser executables were missing; the Codex in-app browser was used instead.
- Physical iPhone Safari, formal screen-reader testing and audible device voice quality remain pending. Narration uses the existing speech API with en-GB voice preference and rate 0.85; a British voice depends on the device.
- Existing O1–O8 lesson files, Osmosis Lab, subjects, board/tier logic and storage-key definitions are preserved. Only homepage copy, the entry file and build metadata change, with two small new film assets and four new behavioral tests. No dependency added. Baseline and enhancement checkpoints are recoverable.

## Review

Extract GCSE-Study-Hub-LATEST-OPEN-THIS.zip and double-click Start Preview.command. Stop any older preview on port 8931 first. Open http://127.0.0.1:8931/#cell-biology/exchange in the same browser as before to use its saved progress. QA used a separate origin at port 8940 to avoid modifying prior student records. Click Watch science short, then Play. Try pause/replay, sound, captions and Show Pip, and finish the unscored challenge.

This is a synchronised web animation, not a native MP4. No paid service, copied video or third-party character asset is used.

Allowance snapshot: 37% five-hour remaining; 67% weekly remaining. These are account-wide Codex limits, not a separately verified Work meter.
