# Build 7.0.6O1a — Targeted assessment corrections

10 October 2026. Separate unpublished candidate, based on completed O1. No deployment, lesson rebuild, O2 development or paid dependencies. The original O1 candidate and published builds were not modified. The permanent discovery-led teaching standards remain in the package.

## Scoring correction

O1 introductory items now use the **existing subsection mastery system**, with the subsection **Cell Biology | What are cells?**. They retain +12 for correct and −10 for incorrect answers, clamped to 0–100, and the existing Secure ≥85 / Developing ≥65 thresholds. They contribute **zero** points, positive or negative, to whole-topic Cell Biology mastery or the broader Inside a cell subsection.

A small, opt-in guard in the existing grader honours `masteryScope: 'section'`. Ordinary questions keep their original behaviour. The scoped marker is also saved with seen-question evidence, so recovery distinguishes corrected O1a scoring from old O1 scoring. No new storage key, competing framework or automatic lesson-to-topic promotion was added. Accuracy, attempts, mistakes and spaced recall continue through the existing grader. Supported activities and watching award no mastery.

| Scenario | O1 | O1a |
|---|---|---|
| Eight introductory answers correct, starting from 0 | Cell Biology 96% Secure; Inside a cell 96% | What are cells? 96% Secure; Cell Biology remains 0%; Inside a cell unchanged |
| All 16 introductory answers correct | Whole-topic score could reach 100% | Introductory subsection can reach 100%; whole-topic score unchanged |
| Existing legitimate topic score 72%, then new introductory checks | Topic could increase | Topic stays 72% |
| Duplicate check/item submission or reload | Existing duplicate protection | Protection retained; no extra credit |

The visible lesson progress panel shows introductory score/status and saved independent completion. It explicitly distinguishes this from whole-topic mastery. Future authorised lessons can reuse the same opt-in scope and their own existing subsection key; they must not automatically roll a narrow check into topic mastery.

## Recovery of old O1 credit

Recovery runs when loading O1a, accessing the affected record and importing an old backup, separately for each AQA Trilogy Biology tier record. It recognises O1 question IDs without the corrected scope marker.

- If saved outcomes form an unambiguous final sequence, recovery reverses the old clamped updates. When there is a unique answer, legitimate pre-O1 topic and broader subsection scores are restored exactly.
- Where clipping at 0/100, tied mixed outcomes or interleaved attempts make history ambiguous, recovery uses a conservative lower bound that cannot retain introductory inflation. The fallback subtracts 12 per known old correct answer, floored at 0, and does not guess refunds for old penalties.
- Original topic/subsection values, correction history, original question snapshots and all existing answers, attempts, accuracy, mistakes, tests, reviews and other records are retained in the same save. Old introductory evidence is routed to the introductory subsection without adding attempts or accuracy again.
- Recovery is idempotent; new O1a scores are excluded. New legacy awards made by reopening old O1 can also be detected and corrected once. Untouched pathways retain their existing records.

**Important limitation:** exact numerical restoration is impossible for every old save because O1 did not store before-scores or complete event history. For example, a legitimate 95 followed by two correct O1 answers became a capped 100; O1a can establish only a possible prior interval of 76–100 and uses 76. That may understate legitimate wider mastery. The saved 100 and all evidence remain archived in `o1aRecovery`, and the lesson explains the conservative correction. This is not a destructive reset or a claim of exact recovery in ambiguous cases.

Old completed and pending assessments retain their original question/option snapshots so saved answers remain intelligible. Starting a new check uses the improved questions. Existing seen/exposed IDs remain reserved; they are not silently recycled for fresh credit.

## Assessment and usability improvements

All 16 independent questions were reviewed and revised. Distractors now target misconceptions: cell versus tissue/organ; organism versus a living fragment; small size versus cell number; one body versus one cell; cells merely supporting organs; and tissue/organ/system confusion. New questions stay within the lesson. Correct positions vary. Explanations address these misconceptions after submission; independent checks have no hints. Supported practice keeps its progressive hints and retries; revisiting teaching during a pending check makes it unscored practice.

Mobile **Skip introduction** occupies a complete row. Caption blocks contain at most 16 words; browser speech boundary events synchronise them where supplied, with estimated timing for silent playback or missing boundary events. Pause, Replay, Skip, frame selection, Mute, captions and reduced-motion alternatives are preserved. Full narration remains available in the transcript disclosure. All six scenes, 2.5D artwork, analogies and activities are preserved.

## Tests and evidence

- **47 focused tests: 47 passed, 0 failed.**
- **647 full regression tests: 647 passed, 0 failed**, including all 600 original baseline tests and the updated/extended O1 tests. No skips or cancellations.
- Recovery tested across **6,464 capped outcome histories**; computed recovery never exceeded the legitimate starting score. Additional cases cover mixed outcomes, conservative uncertainty, imports, tier isolation, repeated recovery and later legacy awards.
- In-app browser: eight correct answers showed introductory 96% Secure, while the Cell Biology page remained 0%; completion and results restored after reload. Short silent captions advanced. At 375px Skip measured the full 307px controls row, height 44px. Hook widths 320/375/390/414/768/820 and remaining scenes at 320 had no horizontal overflow. Home and Back worked.
- Protected navigation, twelve-milestone journey, Osmosis code/media, curriculum and tier data are byte-identical to O1. The wider grader differs only in the scoped score guard and scope marker. Initial local script/style and checked transcript/video requests returned HTTP 200.
- Native desktop Safari O1a verification was interrupted by browser activity and is not counted. Real iPhone Safari and narration audio quality have **not** been verified.

Evidence is in `Verification-O1a/`: focused/full output, browser notes, file manifest, screenshots and package checksum. Historical O1/N reports are retained as baseline records; this report describes the current candidate.

## Preview and manual iPhone Safari checklist

Extract **GCSE-Study-Hub-7.0.6O1a-candidate.zip**, open `index.html` in desktop Safari or serve the extracted folder locally. Choose Biology → Cell Biology → What are cells? → Discover. A local preview is [http://127.0.0.1:8894/](http://127.0.0.1:8894/) while its server is running. A new browser origin does not automatically share progress; importing an existing backup triggers recovery.

Once an approved accessible preview is available, test on a real iPhone:

1. Play the complete introduction and compare narration with short captions. Check Pause/Play, Replay, Mute, subtitle toggle, readable full-width Skip, full transcript and Reduce Motion. Confirm no speech/caption updates continue after Home/Back/backgrounding. Speech availability, event timing and audio pacing vary by device; fallback timing is approximate.
2. Try tap sorting/Undo, example cards, reflection, wrong-answer feedback and progressive hints in portrait and landscape. Check the mobile menu and complete labels. If using an external keyboard, check focus and activation.
3. Record the topic score, answer fresh independent checks, and confirm only What are cells? changes. Reload pending answers and a completed result; check duplicate protection and Foundation/Higher isolation. With a backed-up old O1 save, verify recovery and retained history. Smoke-test the twelve milestones, Home/Back and the existing Osmosis Lab/video.

Multiple-choice checks still provide limited evidence and are not a validated measure of the entire topic. Four finite fresh forms remain; completed/seen forms are not reused for scoring. No claims of real-device verification or wider specification re-audit are made.

Stop here: do not publish or begin O2 without explicit approval.
