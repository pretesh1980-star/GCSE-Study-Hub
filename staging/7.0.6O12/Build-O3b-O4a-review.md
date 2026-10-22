# O3b + O4a — unpublished development review

11 October 2026. Latest verified baseline: O3a, SHA-256 `f6b8367e62b9e01ae17e3193eaea38b04e97e9741f4d254b6b331f95b13cde2e`. O3b was fully tested and its recoverable ZIP saved before O4a development began. No GitHub publication or paid dependencies.

## Results

| Checkpoint | Focused tests | Full regression |
|---|---:|---:|
| O3b | 166/166 passed | 725/725 passed |
| O4a | 191/191 passed | 750/750 passed |

Zero failures, skips or cancellations in all four runs. Focused tests are a subset of the full suite. O4a adds 21 microscope tests and one revision-history test; existing navigation assertions were updated to expect the new instrument at milestone 4.

## O3b alignment correction

The outer Optional Revision Resources wrapper already shared dashboard boundaries; its inner cards were narrower because both wrapper and child applied card padding. Scoped CSS removes that second inset and retains the approved themed summary and child cards. No resource content, questions, expanders, scoring or storage changed.

Automated browser measurements confirmed exact matching left/right boundaries for dashboard, resource wrapper and quick-resource card: desktop 1280 px → 275.1875–1228.8125; tablet 820 px → 20–800; mobile 390 px → 15–375. No horizontal overflow. Keyboard expansion, revision-card reveal and existing question feedback passed. The original checkpoint ZIP remains independently recoverable; its evidence also remains in Verification-O3b.

## O4a virtual microscope

Milestone 4 now opens a working microscope directly, with one Learning Library exit and existing Back/native-history navigation. Includes:

- Recognisable school instrument diagram: eyepiece, objectives, stage, focus knob and light.
- Original synthetic models of stained onion bulb epidermis and cheek epithelial cells. Onion cells form a connected sheet; cheek cells are irregular, with some overlap. Cell-wall/membrane outlines, cytoplasm and stained nuclei are shown. The onion vacuole region is simplified and explicitly qualified. Onion bulb cells contain no chloroplast drawings; mitochondria and ribosomes are not drawn.
- 4×, 10× and 40× objectives with a fixed 10× eyepiece: 40×, 100× and 400× totals. A fixed specimen geometry is cropped within a circular field, rather than scaled to show the same number of cells. Field diameter changes in inverse proportion to objective magnification: 100%, 40%, 10% of the low-power diameter.
- Meaningful focus blur with specimen/lens-specific sharp zones. Slider keyboard controls plus ±1/±5 buttons; focus updates the image without rebuilding the slider on every step.
- Three guided investigations: onion nucleus, cheek nucleus and onion wall. Each requires the correct specimen, suitable lens, focused view, selected visible marker and matching observed evidence. Progressive clues and useful retry feedback. Labels use leader lines so they do not obscure the nucleus. Off-field markers cannot be selected at high power.
- A structure guide and concise optional notes on microscope parts, magnification, focus, resolution, field of view and common mistakes. Original revision explanations/cards/diagrams/questions remain accessible through Existing revision explanations and resources and the dashboard.

## Curriculum and model limitations

The existing AQA Trilogy mapping was reused, not audited again. O4a introduces shared Foundation/Higher microscopy concepts at **8464 4.1.1.5**, with structure links to **4.1.1.2**. [AQA Biology subject content](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content) distinguishes magnification from resolution and includes quantitative microscopy; O4a introduces these ideas without claiming full specification completion. Detailed image/real-size calculations, standard form and independent assessment remain for O4b.

The field-of-view relationship follows [Nikon MicroscopyU](https://www.microscopyu.com/microscopy-basics/field-of-view). Observational references were checked against the author’s [onion and cheek microscopy observations](https://www.microscopy-uk.org.uk/dww/home/marhomb.htm). No third-party photographs were downloaded or reused.

This is a simplified optical teaching model, not an exact instrument simulation or genuine micrograph. Onion rectangles use a 200:80 relative geometry and cheek outlines roughly 60:60; these are illustrative cell-size/shape assumptions, not calibrated physical measurements. The low-power field spans 800 model-coordinate units, with consistent inverse cropping; it is not a universal microscope field size. Colour/staining and cytoplasm/vacuole boundaries are exaggerated. A single illustrative focus plane does not reproduce numerical aperture, illumination changes, depth of field or specimen preparation. Changing magnification never invents new fine detail. Larger images do not automatically mean better resolution.

RP01 remains the pre-existing next revision milestone. No slide-preparation teaching or new Required Practical 1 development was added. O4b has not begun.

## Guided progress and mastery

A `microscopyGuided` field is saved inside the existing Biology board/course/tier record via existing `save()`. No new LocalStorage key, competing scoring system or reset. Specimen, lens, focus, marker/evidence choices, hints and guided discoveries restore on reload.

Viewing, focusing, switching lenses, hints and supported discoveries grant **zero mastery and zero assessment credit**. The dashboard may show discoveries saved, but records no independent check completion or microscopy mastery percentage. Repeating guided success cannot inflate lesson or whole-topic mastery. Existing legitimate scores and historical answers remain unchanged. Foundation/Higher records stay separate, and stale controls are disabled by navigation guards when a pathway changes.

## Verification and preservation

Automated browser checks passed for microscope entry, both specimen models, all objective controls, keyboard and button focus, onion/cheek discoveries, reload, tier separation, original resource access, revision reload, native Back/Forward and existing O1/O2/O3 and Osmosis Lab entry. At 1280, 820 and 390 px, document width matched viewport width. Controls were at least 44 px high. No browser console warnings/errors observed in the final check.

Reduced-motion rules disable animation/transition; the new microscope contains no running animation or audio/video dependency. Semantic labels, live feedback, native selects and slider, visible focus and button alternatives are included. This is automated Mac-hosted browser verification, not a human Safari/Chrome session, formal screen-reader audit or physical touchscreen/iPhone test.

Core app/scoring, O1/O2/O3 tutor files, original dashboard/card artwork, twelve-milestone definitions, curriculum data and Osmosis files were compared byte-for-byte with O3a and remain unchanged. Only scoped O3b CSS, build labels, microscope files, navigation integration and relevant tests changed. See Verification-O4a/preservation-manifest.json. Previously published builds were not accessed or modified. Superseded workspace deliverables were archived, not deleted.

## Mac review

Use the running local preview at http://127.0.0.1:8912/ while its server remains available. Or extract the complete LATEST ZIP and open index.html. If local-file storage/media policies interfere, use a local web server. Browser/origin changes have separate progress records; the new preview does not migrate progress from earlier localhost ports.

1. Open Cell Biology → Microscopy. Switch onion/cheek and 4×/10×/40×. Compare image size and field of view.
2. Use the focus slider or ± buttons. Identify a marked structure and choose the supporting visual evidence. Try an incorrect response and the clues.
3. Return through Learning Library, use Back/Forward and refresh. Confirm discoveries persist and Foundation/Higher stay separate. Expand Optional Revision Resources to inspect alignment and existing practice.

## Outstanding checks and next step

Physical iPhone Safari/touch, manual Safari/Chrome review and a formal assistive-technology audit remain pending. Existing narration quality and audio controls were preserved rather than reworked. Review O4a before authorising further work. Recommended next stage is O4b calculations and independent assessment, but it has not been started. Neither checkpoint is published.

## User-review refinement: investigation clarity

The investigation now presents two explicit steps: choose the letter marking the requested structure, then choose supporting visual evidence. Letter buttons and the selected letter sit in the investigation itself. Current-answer feedback and Saved progress have separate visible headings. A wrong retry retains the earlier discovery but does not present Next investigation as current success; an explicitly labelled Continue from saved discovery preserves access to existing progress. Changing letters clears the evidence choice and invalidates current success. No mastery or existing discoveries are reset. Three regression tests added; latest totals are 191/191 focused and 750/750 full. Separate-origin browser reproduction confirmed correct answer → wrong retry keeps the saved discovery while separating current feedback. No physical iPhone test or publication.
