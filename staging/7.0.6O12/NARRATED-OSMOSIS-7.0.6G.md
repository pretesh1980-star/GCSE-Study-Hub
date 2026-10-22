# Narrated osmosis explainer · Build 7.0.6G

The silent one-minute film is now expanded into an approximately 3 minute 20 second narrated beginner explanation. The six visual scenes are slowed to match the spoken explanation. The British-English synthetic voice explains blue water molecules, gold sugar particles, dilute and concentrated solutions, the grey membrane, net flow, equilibrium, plant/animal cells and potato mass. No prior terminology is assumed: specialist words are introduced after everyday explanations.

## Access

Play `osmosis-explainer-narrated.mp4` directly, or open the extracted G build's `index.html` and choose AQA Trilogy Biology → Cell Biology → Learn. The narrated player is visible before the starting questions and is repeated in the Explore the membrane stage. Turn sound on and use native play/pause controls. `osmosis-narration.mp3` is an audio-only copy. The full spoken transcript is linked beside the app player. The 41 sentence-level English caption cues are generated from speech timing and enabled by default; the original short teaching captions also remain in the picture.

## Production and checks

Original script, original rendered animation, British-English synthetic narration. Speech was generated once during production; there is no speech-service call, paid AI API or network dependency during student playback. The local Mac speech service returned empty files, so production used the edge-tts tool with the en-GB-RyanNeural voice. No user data or student answers were sent for speech generation; the input was the original explanation script.

H.264/yuv420p video with AAC audio and fast-start MP4 metadata. Speech volume is normalised to a −16 LUFS target and −1.5 dB true-peak ceiling. Full audio/video decode checks pass; pre-normalisation speech was nonempty and peaked below clipping. No music competes with the teaching. The final encoded video has been decoded successfully. Native Safari/mobile playback and subjective listening quality have not been directly reviewed in this environment.

This remains a qualitative, diagram-style particle model. It is not a physical simulation, and illustrated particle rates/sizes do not represent measurements. Equal concentration is shown as a separate case, rather than dynamically reached from the previous case. An animal cell may burst in sufficiently dilute surroundings; the illustration shows swelling and the narration states the possibility.

## Preservation

Original D, E and F builds and ZIPs are untouched. G adds the narrated MP4, timed VTT and full transcript; updates the tutor player/text, package version and one focused test. Existing curriculum, question bank, pathways, original progress keys and separate tutor storage remain unchanged. The older silent asset is retained in G's media folder but the teaching player selects the narrated file. Historical E/F reports describe those earlier versions; this note records the G changes.

**567/567 tests pass (555 original + 12 focused), zero failures. Coverage remains 78/78.** Test output, changed-file hashes and archive checksum accompany the G build. Learning effectiveness and the full journey's beginner completion time remain unverified until a learner pilot and written-answer review.
