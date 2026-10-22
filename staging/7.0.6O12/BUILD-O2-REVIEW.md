# Latest review update

See BUILD-O2-REVIEW-UPDATE.md: Pause corrected, slower narration and direct teaching links. Current tests: 80/80 focused, 680/680 full.

---

# Build 7.0.6O2 — unpublished review candidate

Completed O2 and the targeted O1 introduction/player improvements. No deployment, paid service or O3 development. Original O1a candidate and all published builds remain untouched.

## What changed

- O1 retains its six scenes and automatic Person → Skin → Tissue → Cell progression. Layered shading, skin cutaway, tissue detail, repeated cell shapes and gentle camera entry provide more depth and continuity. These remain lightweight SVG/CSS illustrations, not photorealistic CGI.
- One combined Play/Pause control; compact Replay, Mute, Subtitles and Skip controls. Still frames and the device voice selector sit inside accessible secondary options. The labelled tracker highlights the current stage and supports optional revisits.
- Conversational British-English narration wording and normal speech rate. Short captions, complete transcript, mute/replay/pause and reduced-motion behaviour are preserved.
- O2: interactive animal, plant and bacterial schematics with numbered keyboard/touch controls, highlighted parts and short function/analogy explanations. Four supported “Cell detectives” missions cover protein synthesis, plant respiration, bacterial DNA and plant-cell exceptions. Three progressive clues per mission, misconception feedback and retries.
- Two fresh independent forms, six questions each: two cell-function, two plant and two bacterial questions. Plausible distractors, rotating correct-answer positions, saved choices and feedback after submission. No hints during checks. Revisiting teaching during a pending check makes it unscored practice. Starting a new check resumes an unfinished one.

## Narration: unresolved quality requirement

Browser inspection exposed Daniel and the basic British system voices in this Mac’s in-app browser. There is no demonstrated human-quality teacher voice. Students may choose an available British voice, but delivery can still sound robotic and varies by browser/device. Voices may appear after the browser loads its voice list; reopen the options if necessary.

A free prerecorded approach was investigated: [Piper](https://github.com/OHF-Voice/piper1-gpl) with [Alba’s model card](https://huggingface.co/rhasspy/piper-voices/blob/main/en/en_GB/alba/medium/MODEL_CARD), which lists a CC BY 4.0 training dataset. A separate local generation environment installed successfully, but the Mac speech package failed while locating its bundled phoneme data, including after a targeted version/path check. No incomplete audio, model, generator dependency or third-party service is included in the candidate. No narration text was uploaded to a synthesis service.

**Natural teacher narration is not achieved or claimed.** This remains a review limitation. A permitted prerecorded replacement can later use the same caption/player interface; it should be auditioned on Mac before approval.

Device speech boundaries synchronise short captions when available. Silent/unavailable-voice playback uses estimated caption timing. If a device supplies no speech boundaries, resuming narration may repeat part of the current paragraph. The complete transcript remains accessible.

## Mastery and preservation

The existing O1a scoring architecture is retained. O1 questions use `What are cells?`; new O2 questions use `Cell structures and types`. Both set `masteryScope: section` and pass through the existing grading engine, which applies +12 for a correct answer and −10 for an incorrect answer, clamped to 0–100, only to their subsection. Existing status thresholds are unchanged.

| Evidence | Subsection result | Whole-topic Cell Biology |
|---|---|---|
| Exploring diagrams, watching O1 or using clues | Saved learning progress; no mastery | Unchanged |
| Six correct fresh O2 answers | 72%, Developing | Unchanged |
| Twelve correct distinct O2 answers | 100%, Secure **for this subsection** | Unchanged |
| Duplicate submission or previously recorded question | No extra credit | Unchanged |
| Teaching revisited during a pending independent check | Saved unscored practice | Unchanged |

Accuracy, mistakes, SRS and answer evidence continue through the existing records. No second scoring framework, storage-key change or destructive reset. Foundation/Higher use distinct existing contexts. Existing legitimate topic scores, original `Inside a cell` subsection scores, O1 evidence and unrelated saved records are preserved. O1a’s disclosed legacy-recovery behaviour remains unchanged; O2 does not add another recovery or reduce prior scores.

There are two finite fresh O2 check forms. Used or abandoned questions are not recycled for fresh credit. Supported missions remain available for unlimited practice. Subsection Secure is limited evidence and does not certify every curriculum skill or the whole topic.

197 baseline files are byte-identical. Eight existing files changed for the introduction, integration, transcript, package metadata, tests and documentation; four files were added for the lesson, its styles/tests and this review. `app.js`, the curriculum, Foundation rules, navigation module, twelve-milestone definitions, Osmosis code/styles/video and other teaching files are unchanged. See the preservation manifest.

## Curriculum mapping

Checked against [AQA Combined Science: Trilogy 8464, Cell Biology](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content).

| Point | O2 teaching | Scope |
|---|---|---|
| 4.1.1.1 Eukaryotes and prokaryotes | Nucleus-enclosed DNA in plant/animal cells; bacterial DNA loop outside a nucleus; membrane, cytoplasm, wall; optional plasmids; bacteria typically smaller | Shared Foundation/Higher. Standard-form/order-of-magnitude calculations remain in the original curriculum; this lesson does not claim to assess them. |
| 4.1.1.2 Animal and plant cells | Nucleus, membrane, cytoplasm, mitochondria, ribosomes; cellulose wall, chloroplast/chlorophyll, permanent vacuole/cell sap; structures linked to functions, including bacterial plasmids | Shared Foundation/Higher. Models support interpretation; size/area estimation and physical drawings are not independently assessed here. |
| Preparation for 4.1.1.3 | Root-hair exception illustrates that structure varies with function | Full specialisation teaching is the next milestone, not developed here. |
| RP01 | Original microscopy practical remains milestone 5 after microscopy theory at milestone 4 | O2 does not substitute for a physical practical. |
| RP02 | Original osmosis practical remains milestone 10 after Osmosis at milestone 9 | Osmosis Lab and physical-practical guidance preserved. |

No Higher-only content is incorrectly moved into Foundation. Both receive the shared O2 teaching with separate records; other pathways retain their original content.

## Verification

- **74/74 focused tests passed; 0 failures.** Includes all 47 existing O1 checks and 27 new O2/player tests.
- **674/674 full regression tests passed; 0 failures.** Original 600 baseline tests plus 74 focused tests.
- Browser checks on the Mac’s in-app browser: diagrams and keyboard selection; clues/retry feedback; independent submission; restored saved answers; no duplicate credit after interrupted submission; subsection 72% while topic stays 0%; Back; homepage logo; twelve displayed milestones; Osmosis Lab entry, stage progression and saved text.
- O1 browser checks: automatic Person→Skin narration transition and silent Person→Tissue progression; Play/Pause, mute, replay and skip; tracker and short captions. Automated tests cover progression through all four stages and reduced-motion behaviour.
- Desktop and 390px mobile viewport checks. No horizontal overflow at 390px. All **50 checked assets returned HTTP 200**, including the preserved Osmosis video.
- Preservation manifest, screenshots and exact test logs accompany the package. Packaged focused tests are also checked after ZIP extraction.

These are automated tests and computer-driven in-app browser checks. **No new manual Mac Safari audition, human audio-quality judgement, or real-iPhone verification is claimed.** Screenshots are browser previews, not real-device screenshots.

## Mac review instructions

Use the running local preview at http://127.0.0.1:8895/ while this preview server remains available. It is not a published website. If it is no longer running, extract the ZIP and serve its folder locally; the candidate remains a static website.

1. Select AQA Trilogy and the intended tier. Open What are cells?, then Hook. Play once: confirm Person→Skin→Tissue→Cell, matching tracker, comfortable transitions and readable short captions. Try pause/resume, mute, replay, skip and a manual revisit. Open the full transcript and still-frame options. Audition the available British voices; judge delivery honestly.
2. Open Cell structures and cell types. Explore all three diagrams with mouse and keyboard; compare chloroplasts/mitochondria and bacterial DNA/plasmids. Try a wrong mission answer, progressive clues and retry. Take a fresh independent check, then review feedback.
3. Reload and reopen O2: selected cell, discoveries, answers and result should return. Confirm subsection progress changes while topic mastery stays unchanged. Switch Foundation/Higher: their records should remain separate. Test the logo, Back and Osmosis Lab.

Saved progress is specific to browser, origin and tier. Existing live progress will not automatically appear at this separate localhost preview. Do not clear storage or overwrite an existing backup just to test.

## Later iPhone Safari checklist

When an authorised review address is available: (1) check automatic intro, captions and all compact controls in portrait; (2) tap the diagram parts, use clues and complete a check; (3) reload to confirm saved choices/results, unchanged topic mastery and Foundation/Higher separation, then check Back/logo/Osmosis. This build is not published for device testing.

## Next recommendation

Review O2 and resolve/audition narration quality before publication. Once approved, the next teaching milestone is **Specialised cells**, connecting the functions just explored to sperm, nerve, muscle, root-hair, xylem and phloem adaptations. No O3 development has begun.
