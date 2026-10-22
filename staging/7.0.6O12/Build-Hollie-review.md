# Hollie update — 7.0.6O8-hollie1

Unpublished local review candidate, 13 October 2026. No O9 work or publication.

## Open
Extract GCSE-Study-Hub-LATEST-OPEN-THIS.zip and double-click Start Preview.command. Stop an older preview on port 8931 first. Open http://127.0.0.1:8931/#cell-biology/exchange and choose Watch science short.

Use the same browser profile and exact origin (including port) as before to retain existing progress. The temporary QA preview on port 8942 has a separate storage origin. No localStorage keys or migration code changed.

## Change
Pip is now Hollie throughout the O8 film introduction, captions, transcript, controls, image accessibility label, teaching prompts and coordinated SVG/CSS identifiers. Animation geometry, poses, speech-event talking, pause/replay/caption behaviour and reduced-motion rules are retained.

The raw browser voice list is replaced with at most two curated en-GB voices. Recognised female voices rank first; Natural/Premium/Enhanced variants rank above basic variants, with deterministic tie breaking and URI deduplication. The current default remains stable when voice lists reorder. A UK fallback upgrades when a recognised female voice arrives. Explicit selection remains stable and stays within the two displayed choices; disappearance falls back safely, and the choice can return when available. Selection is session-only, with no saved-progress changes.

Discovery runs at startup, film opening, Play and voiceschanged. Empty lists, throwing discovery, absent speech APIs and speech errors continue with captions. Speech starts from the user's playback action; asynchronous discovery does not launch speech by itself. Selector and label are hidden when fewer than two curated voices exist. No paid TTS or new audio assets are added.

Voice gender and quality are inferred from familiar names, not guaranteed by speechSynthesis. This Mac exposes Daniel as the only curated UK choice: the UI honestly explains the unavailable female voice and uses that UK fallback. Novelty and non-UK voices are excluded. No suitable UK voice means silent captions. Voice availability differs between devices, as documented by [getVoices](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices) and [voiceschanged](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event).

## Verification
- Focused automated regression: **57/57 passed** (subset of full suite).
- Full regression: **964/964 passed**, zero failed/skipped.
- Native in-app WebKit browser harness: **66/66 passed**. All 15 scenes, two-voice selection, female ranking, stale speech events, pause/mute, pointer geometry and overflow at 320/390/768/1365px, reduced-motion rules, challenge storage and navigation cleanup.
- Live native preview: Hollie names/accessibility label/captions visible; single UK selector hidden; real Daniel speech starts talking and wave animation; Pause stops talking and wave animation. Screenshot: Hollie-preview.png.

Browser speech lists/events and reduced-motion rule activation in the harness are simulated. Live speech events were observed, but audible human quality, physical iPhone/iPad Safari, OS-level Reduce Motion and screen-reader experience remain unverified. No standalone Chromium/WebKit result is claimed.

Run automated checks with npm test if Node is installed. Browser harness: /tests/hollie-browser.html → Run Hollie browser checks. Detailed evidence is in Verification-Hollie/.

## Preservation and recovery
The exact verified Pip 2.0 ZIP is copied to Archive/Pip2-verified-baseline.zip. preservation.json records hashes and the complete change list. All O1–O8 teaching/assessment code outside the film, O7 correction, homepage logic, other subjects, lesson data and storage code remain byte-identical. Only the first film caption changes its mascot name; remaining science captions are unchanged. The old review remains historical evidence.

A changed-file overlay is in Archive/Hollie-recoverable-overlay.zip. The final ZIP is corruption-checked and each entry compared with the working candidate.

Latest allowance snapshot: **83% of the five-hour account window remains** (17% used). Shared account reading, not elapsed-time estimation.
