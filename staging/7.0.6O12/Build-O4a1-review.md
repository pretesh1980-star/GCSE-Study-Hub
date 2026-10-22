# Build 7.0.6O4a1 — unpublished review candidate

The confusing guided observation questionnaire is replaced with cell labels directly attached to the microscope specimen. The microscope, optional resources, twelve milestones and existing lessons remain in place.

## Using the activity

Choose a slide, magnification and focus. Drag an available label onto a letter. A mouse pointer fallback supports browsers where native HTML dragging is unreliable; both routes use the same guarded answer handler. On a phone, tap a label and then a letter. Keyboard users use Tab and Enter or Space. Targets are 44 × 44 pixels; touch scrolling is preserved.

Correct placements attach permanently within the current attempt and show one short fact. Incorrect placements leave the label available and provide progressive structure-specific clues, without revealing a letter. Completion gives a recap and another-specimen, repeat and continue options. There is no independent mastery credit.

## Science and saved progress

Onion labels: wall, stained nucleus, cytoplasm and the distinguishable pale vacuole region. Ordinary onion bulb cells have no chloroplasts. Cheek labels: membrane, stained nucleus and cytoplasm, without a wall or large central vacuole. The image is explicitly a simplified stained-specimen illustration rather than a real microscope photograph. The vacuole boundary and peripheral cytoplasm are exaggerated for teaching.

Leader lines use the specimen's existing world coordinates and scale with the objective; letter buttons use matching proportional viewer positions. Targets outside the field disappear at high power, and blurred targets are hidden until focus improves. Labels do not invent extra visible structures.

State extends the existing Biology microscopyGuided record with per-specimen labelling state. Storage keys, board/tier pathways and mastery calculations are unchanged. Saved placements and completion survive refresh. Earlier guided discoveries remain retained and separate from current feedback. Reset Labels clears only the current specimen's attempt and keeps historical completion, other specimens and unrelated answers/mastery.

## Verification

- Focused suite: **206/206 passed**.
- Full regression suite: **765/765 passed**.
- Zero failures, skips or cancellations in final runs.
- Browser: actual mouse drag successfully attached Cell wall; keyboard placed Nucleus; tap placement completed onion and cheek specimens; correct/incorrect feedback, completion, Reset Labels and reload restoration checked.
- Browser: 10× and 40× objectives retained state; off-field targets hidden at high power. Continue returned to the twelve-milestone journey; the logo returned home with 0% mastery in the clean test profile after both guided challenges.
- Responsive browser: 390px phone view has 44px targets and no horizontal overflow; 820px journey view also has no overflow. Desktop and phone-width images are in Verification-O4a1.
- Preservation manifest records byte-identical existing lesson, scoring, storage, navigation, Osmosis and microscope-core files. Only the build identity, new microscope extension/styles and relevant test assertions changed.

## Known limitations

Physical iPhone Safari and Android touch testing and a formal screen-reader audit remain pending. Phone-width click testing verifies the tap flow, but does not establish physical-device gesture behaviour. The model remains illustrative; the existing narration is unchanged. Progress is specific to browser and origin. No paid dependency, publication, O4b or new RP01 development.

## Mac review

1. Open the local preview at http://127.0.0.1:8914/#cell-biology/microscopy. Choose onion, 10× objective and focus 54. Drag a label onto a letter; try a wrong placement and a clue, then complete the cell.
2. Choose cheek and focus 48. Use click-select/click-place, or Tab and Enter. Check that only membrane, nucleus and cytoplasm are offered.
3. Refresh to check restoration. Reset Labels to restart the current specimen; switch slides to check the other specimen remains saved. Use Continue and the homepage logo to check navigation.

For iPhone Safari, serve the same package on an accessible local network address; 127.0.0.1 on an iPhone refers to the iPhone itself. Test tap placement, ordinary scrolling, refresh, specimen switching and navigation on the device. Publication requires separate approval.

Next recommended milestone: review O4a1, then separately authorise O4b independent microscopy assessment. Work stops here.
