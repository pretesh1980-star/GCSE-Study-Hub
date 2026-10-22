# GCSE Study Hub 7.0.6O5 — unpublished review candidate

O5a guided practical and O5b independent assessment are complete. Stop for user review. No GitHub publication and no O6 work.

## What to review

Select either onion bulb epidermis or cheek cells, choose wet-mount equipment, and prepare a safe thin specimen with the appropriate stain. Coverslip actions explain air bubbles. The lab covers teacher supervision, dilute stains, glass handling, individual sterile swabs or prepared cheek slides, disposal, cleaning and handwashing.

Start the microscope at 4×, focus the wide view, then move to 10× and fine-focus. Higher objectives enlarge the existing cell model and reduce the field of view. Controls include a keyboard slider and focus buttons. Record a boundary, stained nucleus and written observation. Complete a clear unshaded drawing using accessible title, label and scale controls, or draw on paper and record the choices. The scaffold does not evaluate freehand pencil quality. Calculations cover lens magnification, drawing magnification, real size, image size and units; screen dimensions are not a physical ruler.

The separate assessment has two fresh 17-question forms, with different scenarios, numerical values and rotated answer positions. It contains no guided tools or hints, uses a neutral accessible diagram description, and reveals answers only after submission. Viewing teaching or leaving during a pending check makes it unscored practice. Reloading resumes saved answers. Repeats after both forms have been started are unscored. Lesson mastery is the rounded fraction of correct responses in the latest independently scored form; guided work earns none. Completing a check and reaching Secure (85%) are distinct. Whole-topic mastery and existing lesson scores are preserved.

This is explicitly a virtual simulation. Its score is evidence of simulated practical understanding, not evidence of completing the physical school required practical or certification of safe laboratory performance.

## Verification

| Checkpoint | Focused tests | Full regression | Failures / skips / cancellations |
|---|---:|---:|---|
| O5a guided | 95 / 95 | 808 / 808 | 0 / 0 / 0 |
| O5b final | 114 / 114 | 827 / 827 | 0 / 0 / 0 |

Focused suites include RP01, navigation, the existing microscope, labelling and microscopy calculations. Full regression includes all existing subject, curriculum, tier, scoring and storage checks. Both specimen journeys are exercised in automated tests. Scoring tests cover perfect, incorrect, partial, incomplete, assisted, repeated, resumed, corrupted and reset records, plus board and tier isolation.

Live in-app browser checks: full guided onion journey; keyboard focus; wrong coverslip feedback; saved observations and drawing scale; independent 17/17 result; feedback after submission; return-to-teaching invalidation; assessment reload; cheek smear, methylene blue and microscope model; optional revision destination. The final guided and assessment pages fit a 390 × 844 viewport (page width and scroll width 390); assessment radios are 20 px inside tap-sized labels. Browser error/warning log was empty when checked. Screenshots and test logs are in Verification-O5a and Verification-O5b.

Limitations: mobile viewport emulation is not real-device testing. Physical phones/tablets, formal screen-reader testing, real touch hardware and hands-on school laboratory validation remain pending. Legacy standalone Playwright browser scripts were not run; live in-app browser checks were used. The cell and slide views are schematic illustrations. Only two fresh independent forms are included, not an exhaustive practical-skills examination.

## Preservation and scope

Baseline: latest verified unpublished O4b4. 299 baseline files initially compared byte-identical; the only changed baseline files are index.html (load RP01 assets and candidate banner), package.json (version), CURRENT-BUILD.txt, and the navigation test that previously expected RP01 to be revision-only. All existing application/content/style modules, including O1–O4, O4a1 drag-and-drop labelling, the O4b three-picture teaching, Showcase, revision resources, Osmosis Lab and other subjects, remain byte-identical. New assets extend the existing AQA Trilogy Foundation/Higher records without creating a storage key or changing board mappings. Old builds remain untouched; a verified baseline ZIP and both recoverable checkpoints are under Archive.

AQA Trilogy practical scope was checked against the [official practical assessment specification](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/practical-assessment) and [Trilogy/Synergy practical handbook](https://filestore.aqa.org.uk/resources/science/AQA-8464-8465-PRACTICALS.PDF). Onion/cheek methods are examples, not universal specimen requirements across boards. Starting allowance: user reported 100%; this is not an independently measured remaining allowance.

## Open and test

[Open the clean review preview](http://127.0.0.1:8921/#cell-biology/rp01). This is a new browser origin, so it has separate progress. The 8920 testing origin contains QA demonstration progress. Your existing 8915 preview and published builds were not modified. Use Settings export/import if you want to carry your existing progress into the review origin; ZIPs contain no browser scores.

Unzip GCSE-Study-Hub-LATEST-OPEN-THIS.zip and open the extracted candidate folder. To run your own preview from that folder:

```sh
python3 -m http.server 8922 --bind 127.0.0.1
```

Open http://127.0.0.1:8922/#cell-biology/rp01. Keep the same address/port for saved progress. For a fresh assessment test, use a private browser window rather than resetting personal progress.

With Node installed, run `npm test` for the full suite. For the focused suite:

```sh
node --test tests/rp01*.test.cjs tests/cell-lesson-navigation.test.cjs tests/microscope-tutor.test.cjs tests/microscope-labelling.test.cjs tests/microscopy-calculations.test.cjs
```

Review equipment and both stains, try a flat coverslip, focus at low power, complete the drawing, distinguish lens/drawing magnification, and attempt the independent check before viewing feedback. No further milestone is authorised by this build.
