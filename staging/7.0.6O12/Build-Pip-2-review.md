# Pip 2.0 — 7.0.6O8-pip2

Unpublished review candidate, 13 October 2026. Awaiting user approval.

## Open the preview

1. Extract `GCSE-Study-Hub-LATEST-OPEN-THIS.zip`.
2. Stop an older preview using port 8931 with Control+C in its Terminal window.
3. Double-click `Start Preview.command` in the extracted folder. Keep its Terminal window open. If macOS requires it, right-click the file and choose Open.
4. Open **http://127.0.0.1:8931/#cell-biology/exchange** in your browser.
5. Click **Watch science short**, then **Play**.

Use the same browser, browser profile and address/origin as your previous preview to see its saved progress. A different port, `localhost` instead of `127.0.0.1`, private browsing or opening `index.html` directly uses a different storage location; it does not transfer the earlier progress. No saved-progress keys were changed.

## What changed

Pip is an original female presenter drawn with lightweight SVG, wearing a lab coat. She waves in the introduction, blinks and breathes subtly during playback, nods while explaining, reacts to the growing model cube, guides the lung/intestine transitions, and celebrates a correct unscored answer. Her pointing connector ends at the relevant cell boundary, model cube, alveolus or blood route, with its position measured from the displayed diagram. She stays beside the diagrams. Hiding Pip hides the pointer too.

Each of the 15 cues has a pose, expression and short teaching prompt. Existing film captions and scientific content are unchanged. Muted playback keeps the diagrams, prompts, pointer and captions meaningful. Pause stops narration and playback movement; resuming restarts the current short caption. Replay resets to the introduction. Leaving the lesson or hiding the page cancels narration and timers. Reduced motion uses static poses and diagrams, including a static mouth.

Talking is an approximate visual indication driven by actual speech start/end/pause/error events, with stale events ignored after cancellation. It is not phoneme lip sync. Queued or unavailable speech does not animate her mouth. Speech failures or missing completion events fall back to captions rather than trapping playback. The browser event behaviour follows the documented [speech start event](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/start_event).

Voice discovery runs initially, on Play and when [voiceschanged](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event) fires. Automatic selection recognises a conservative list of British female voice names, preferring names marked Natural, Premium or Enhanced. Gender and quality are inferred from names, not guaranteed by the speech API. If no recognised voice is present, automatic mode continues silently with an explanation and a native voice selector. Selecting any listed voice explicitly overrides automatic selection. Selection lasts for this page session; existing storage keys remain untouched. No paid voice service is used.

This Mac's native preview exposed Daniel and several British character voices, but no recognised natural British female option. Automatic mode correctly used captions. Manually selecting Samantha (US English) produced real speech events and correctly started/stopped the mouth animation. This verifies event handling; it does **not** establish audible voice quality, a British accent, or identical voice availability on other browsers/devices.

## Exact verification results

| Verification | Result | Scope |
|---|---:|---|
| Focused automated tests | **51/51 passed** | Film, O8 teaching/assessment and O7 diffusion assessment; subset of full suite |
| Full regression | **958/958 passed** | Existing complete automated suite; zero failures/skips |
| Native WebKit browser harness | **66/66 passed** | Native DOM, all 15 cues, mocked speech events, choice/fallback/error paths, pointer geometry and overflow at 320/390/768/1365 px |
| Live native preview observations | **14/14 passed** | Keyboard playback, visible wave/breathing/growth, real-time full silent playback, mobile layout, challenge/controls and actual speech start/pause with Samantha |

Reduced-motion browser verification activated the exact stylesheet's reduced-motion rules in the harness. It did not change macOS accessibility settings. Responsive widths are emulated; they do not replace testing physical devices. Standalone Chromium/WebKit automation could not launch because this session blocks their native process permissions, so no standalone-browser pass is claimed. The native browser tool emitted an instrumentation warning during iframe inspection; the harness itself completed all 66 checks.

The native browser harness is included at `tests/pip-browser.html`. With the preview running, open **http://127.0.0.1:8931/tests/pip-browser.html**, then click Run Pip browser checks. It uses simulated voices/timers and a temporary preference-rule override for silent testing. Automated tests can be rerun with `npm test` when Node.js is available. Detailed results are in `Verification-Pip2/`.

## Preservation and recovery

The starting point was the exact O8-film1 review ZIP from the 12 October conversation, SHA-256 `3edc17847a9375b860c123a8ada622298853ca8d08b07ad1cebf52676e27a719`. All original 15 film caption texts are byte-identical. Lesson data, O1–O8 teaching and assessment code, the O7 incomplete-answer correction, encouraging homepage messaging, saved progress/board/tier keys, other subjects and Osmosis Lab are preserved. Only Pip film code/styles/tests, cache/build identification and current review records changed; no baseline file was removed. See `preservation.json` for the exact file comparison.

A copy of the verified baseline ZIP and small implementation/final overlay checkpoints are saved under `outputs/Archive/` outside the main preview ZIP. Each overlay contains only changed/new files and can be applied over the baseline. The final ZIP was checked for corruption and every packaged file compared with the working candidate. No O9 work or publication was performed.

## Hands-on approval review

- Watch with sound off: do Pip's pointing, surprise and transitions help you follow the science?
- Try Play/Pause, Replay, Captions and Show Pip using keyboard and touch where available.
- Turn on sound. If automatic mode reports no recognised British female voice, choose a suitable voice from the list. Listen for naturalness, accent, pace and whether the approximate talking indication feels appropriate.
- Test a physical iPhone/iPad in Safari, including landscape, interruptions, mute/resume and Reduce Motion. Screen-reader behaviour also remains unverified by a human.

Audible human review, physical mobile Safari, OS-level Reduce Motion and screen-reader verification remain pending. Approval of this candidate is requested before further lesson work or publication.

Latest account allowance snapshot: **91% of the five-hour window remaining** (9% used; shared account allowance). Starting allowance was 100%. This is the account reading, not a conversion from elapsed working time.
