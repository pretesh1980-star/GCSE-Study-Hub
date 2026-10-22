# Subtitle layout fix · Build 7.0.6H

The screenshot showed the native narration-caption overlay obscuring the teaching text at the bottom of the original 960 × 540 animation.

The corrected video preserves the complete animation and adds a dedicated 180-pixel panel below it (960 × 720 total). All 41 spoken-caption cues are rendered into this panel, with fitted line wrapping, no overlapping cue intervals and white text on navy. The encoded audio is copied unchanged. The teaching labels and existing summary captions remain visible above the new panel. The new video decodes fully without errors, and an extracted frame matching the user's cell scene was visually checked.

The app selects the corrected video and does not automatically overlay a second native caption track. Optional native captions and the full transcript remain available. Video layout reserves the 4:3 aspect ratio. Captions are always visible in the new video; native captions can be enabled separately if wanted, which duplicates them inside the added panel.

G and earlier builds and ZIPs are preserved. Only the video source/player wording, scoped aspect ratio, candidate version and relevant caption assertions change, plus the added corrected video. Curriculum, narration, questions and progress storage are unchanged. Safari/mobile playback remains a device verification task.

Verification: 567/567 tests pass, zero failures; existing 78/78 coverage retained.
