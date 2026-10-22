# Osmosis entrance audit and local review

13 October 2026. O9 only. No publication, commit, RP02/O10 implementation or progress migration.

## What the supplied candidate actually contained

The latest supplied ZIP and its extracted source (`GCSE-Study-Hub-7.0.6O9-candidate 2`) match file for file. The earlier screenshot itself was not supplied here; the reported Stage 1 text matches the actual code.

| Feature | Exact original location and access | Finding before this change |
|---|---|---|
| Six-stage interactive lab | `osmosis-tutor.js`: `OSMOSIS_STAGES`, `otStart`, `otBody`, `otNext`. Biology → AQA Trilogy → Cell Biology → Osmosis card; `#cell-biology/osmosis` and `#cell-biology/osmosis-lab` also open it. | Present. Resumes saved stage. Stage 1 requires a technical written response before continuing. |
| Narrated animated video | `otVideo()` plays `media/osmosis-explainer-clear-subtitles.mp4` with controls, inline playback, no autoplay and `media/osmosis-poster.png`. | Present in Stage 2, behind Stage 1's required answer. Also present on the underlying Cell Biology Osmosis overview via `osmosisEntry()`, which the direct card-to-lab route bypasses. |
| Narration | Audio in the selected MP4; spoken text in `media/osmosis-narrated-transcript.txt`. | File retained. Runtime audibility requires playback verification; narration is not a new Hollie speech feature. |
| Subtitles/captions | Selected MP4 is the clear-subtitles edition. `media/osmosis-narrated.vtt` and `media/osmosis-explainer.vtt` also exist. | Player has no `<track>` element. Separate VTT files are not selectable caption tracks. The intended subtitle panel is part of the video image; this has not been newly implemented. |
| Transcript | Link immediately below the player opens `media/osmosis-narrated-transcript.txt`; expandable description is also supplied by `otVideo()`. `media/osmosis-transcript.txt` is retained as an older asset. | Present, hidden by the same Stage 2 access barrier. |
| Older video editions | `media/osmosis-explainer.mp4`, `media/osmosis-explainer-narrated.mp4`. | Retained assets, not the active player source. |
| Membrane interaction | Stage 2: `ot-concentration` slider, `otModel()`, opposing water arrows and direction feedback. | Present. Qualitative membrane diagram, not an additional full animated film. |
| Plant/animal cell exploration | Stage 2: `o9CellsBody()` / `o9CellShow()` in `osmosis-o9.js`. | Present. Prediction required before cell comparison. Static SVG updates for dilute/equal/concentrated cases. |
| Remaining original lab stages | Stage 3 mass calculations and graph; Stage 4 misconception repairs; Stage 5 retained structured/practical benchmark; Stage 6 saved review and day-7 reminder. | Present. Not missing or replaced by the separate assessment. |
| Independent osmosis assessment | `o9CheckStart()` / `o9CheckRender()`, originally offered at Stage 1 and later stages. | Present and separate. Guided work and the retained lab benchmark do not award independent lesson mastery. |

The verified cause is poor discoverability: the direct route bypasses the overview video and places it after a mandatory technical question. No feature restoration is claimed.

## Targeted change

Stage 1 now asks “What could make a raisin grow?” with a before/after illustration and a plain-language prediction saved under the existing `pre` field. The original video and transcript follow immediately, before the optional science explanation. No prerequisite terminology is required to answer.

The optional explanation links the observation to osmosis, explains the limits of a dried raisin as a model, and offers a wilting-plant connection. The room analogy explains equal entry/exit rates and continued motion at dynamic equilibrium. It explicitly distinguishes people's choices from random molecular motion and includes the concentration/pressure limits of the model. The definition follows [AQA Trilogy §4.1.3.2](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content).

Later stages provide “Revisit the raisin discovery”. Stages other than the existing video stage also provide a visible watch/read disclosure. Revisiting preserves the saved frontier and existing written answers. Storage/backup information is in a disclosure; actual save errors remain available there. Technical lesson codes are removed from the modified teaching and assessment headings. Internal identifiers remain unchanged.

The original six stages, checks, scoring, lab storage key, tier/board gating, O1–O8 source, Hollie/voice code, all media and original lab JS/CSS are unchanged. The independent assessment and assisted/repeat safeguards are unchanged.

## Verification and limits

- **982/982 full regression tests passed**, zero failures or skips.
- **18/18 targeted tests passed** for the independent assessment and new discovery/access/preservation behavior.
- Supplied ZIP versus supplied extracted source: no differences.
- Original media and original lab JS/CSS: byte-identical; preservation hashes are supplied separately.
- Native media inspection recognises a 200.309-second container with video and audio tracks. Compressed samples can be read, but decoded video/audio and frame extraction fail in this environment. This is a failed decode check, not proof of working playback or proof of file corruption. Browser playback, subtitle readability and audible narration remain unresolved. The media has been preserved, not repaired. Raw inspection results accompany this report.
- New browser harness entrance check is included at `tests/osmosis-o9-browser.html`. **No new live browser pass is claimed.** The environment denied binding a local preview server even after network permission was granted. Browser policy rejected file URLs, and Terminal UI access was denied. Those blocks were not bypassed. Narrow-screen visual layout, native clicks, playback, audio quality and device Safari therefore remain unverified in this run. Earlier build browser pass counts are historical, not results for this change.

## Open the local preview

Extract `GCSE-Study-Hub-LATEST-OPEN-THIS.zip`, then double-click **Start Preview.command**. Keep its window open. Stop an older preview using port 8931 first so you do not see the old build. Open **http://127.0.0.1:8931/#cell-biology/osmosis**. Choose AQA Trilogy if needed. Existing users resume their saved stage; use “Revisit the raisin discovery” to inspect the new opening.

Keep the same browser profile and exact address/port to retain access to existing progress. The build does not clear or migrate it. Lab answers remain outside the existing Study Hub backup scope; the disclosure explains how to copy them.

For a disposable verification origin, serve the same folder on a different port, visit `/tests/osmosis-o9-browser.html`, and click Run O9 browser checks. The harness restores its starting saved data, but a separate QA origin remains preferable. Also check `/tests/hollie-browser.html`. This is supplied for local follow-up, not recorded as a completed browser run.
