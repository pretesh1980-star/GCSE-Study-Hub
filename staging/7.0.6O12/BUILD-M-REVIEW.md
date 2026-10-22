# Build 7.0.6M — unpublished review candidate

Only two functional changes: subtitle duplication and mobile navigation. Nothing has been pushed, published or overwritten remotely. Build 4 root and J/K/L remain untouched.

## Subtitle investigation and fix

The actual L player uses `osmosis-explainer-clear-subtitles.mp4`, which already contains 41 synchronized spoken-caption cues in its lower panel. It also registers an optional native English caption track. The supplied iPhone screenshot shows native white captions overlapping the captions encoded in that lower panel. There is no custom JavaScript subtitle overlay. iOS caption preferences or native control selection can enable the optional track even without a `default` attribute.

M removes the redundant `<track>` from the shared player used in both the lesson entry and Stage 2. Video, audio, poster, subtitle/transcript assets and teaching text remain byte-for-byte identical. The existing in-video captions remain always available, including fullscreen; the transcript link remains. Native optional CC selection is no longer provided for this already-captioned clip. Earlier teaching-summary labels within the animation remain part of the unchanged video.

## Mobile navigation

At 820px and below, a Menu button opens a two-column panel with all ten destinations. Complete labels wrap as needed, targets are at least 44px tall, and the panel can scroll vertically on short screens. Selecting a destination closes the panel. Escape closes it and returns focus to Menu. The button exposes expanded state and its controlled navigation. Desktop keeps the existing sidebar. The new presentation-only script never reads or writes storage and calls no application navigation or grading functions.

## Preservation evidence

All 45 published L files match the local baseline using Git blob hashes, at repository tree 8be2c2b100ead783662e0ec60d03ae3cc790f90d. The existing app, educational content, mastery, persistence and every media asset are unchanged. Storage keys deliberately remain identical to L to preserve behavior; local review uses a separate localhost origin, so it cannot affect published L progress. Any future same-origin M publication would share L's staging progress keys and needs this choice reviewed before deployment.

## Tests actually completed

- Focused osmosis tests: 25/25 pass, zero skipped.
- Full automated regression suite: 584/584 pass, zero skipped.
- In-app browser: all ten mobile navigation destinations open and close the menu correctly; no warnings/errors recorded.
- Widths 320, 375, 390, 414, 768 and 820: no horizontal page overflow; all labels fit their buttons; all targets at least 44px.
- Escape closure and focus verified; desktop at 1280px retains navigation and hides the mobile toggle.
- Actual video playback observed at 960 × 720, duration 200.32 seconds, audio unmuted, zero native text tracks, advancing beyond 13 seconds. Screenshot shows encoded caption panel with no duplicate native caption layer. Audio data is unchanged; audibility was not independently listened to.
- Actual lesson progressed to Stage 3. Reload and re-entry restored Stage 3; saved prediction text restored when revisiting Stage 2.

## Limitations and pending device checks

The standalone Chromium browser suite could not launch: macOS sandbox denied Chromium's MachPort bootstrap. Its original suite and the added Chromium/WebKit mobile test script were attempted but did not execute their assertions. They are not counted as passes. Browser results above are from the in-app browser, not iPhone Safari or a completed WebKit run. The full unit/regression suite did execute.

On a real iPhone Safari after separately approving a new M-only staging publication: play with the system's caption preference enabled; check one spoken-caption layer inline and fullscreen; pause, seek, resume and confirm narration stays synchronized; open every mobile menu destination; revisit osmosis and check saved stage/answers. Native playback controls can temporarily cover the bottom of a video while visible; this is separate from duplicated captions.

## Review package

The ZIP contains the local candidate, source, regression tests and this review. `Build-M-changes.patch` shows the exact source changes. Verification contains raw passed-test logs, hash manifest, responsive measurements and failed browser-launch logs. The added mobile browser script is included for execution in an environment that permits browser launches.

No publishing is authorized by this package. Publish only to a separate `staging/7.0.6M/` path after explicit user confirmation; preserve root and all earlier staging folders.
