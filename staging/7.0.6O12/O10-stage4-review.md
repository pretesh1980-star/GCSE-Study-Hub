# O10 RP02 — Stage 4 clarity review

Unpublished review candidate, 15 October 2026. Final owner approval pending. No O11 work, GitHub commit or deployment.

## Changes

Stage 4 now opens with **“🔬 What are we actually trying to discover?”** in Hollie’s existing guide style. Three short paragraphs explain the investigation, net mass gain/loss, and estimating the concentration at zero mass change. Zero still involves movement both ways, with approximately equal water potentials and no net movement under these conditions.

**Why calculate percentages?** explains fair comparison relative to each cylinder’s starting mass, immediately before the existing method/calculation. **Why draw a graph?** precedes the figure and explains the trend, positive/negative/zero changes and zero crossing. It explicitly avoids equating this with a direct measurement of intracellular sugar concentration. A redundant paragraph below the graph was shortened while retaining the water-potential definition.

Stage 1 gains exactly one purpose sentence: “Our challenge is to discover which sugar concentration makes the potato neither gain nor lose mass overall.” No new activities, calculations, animations or assessment items.

Optional slow guide narration reuses existing speech/stop helpers. It speaks the exact three displayed paragraphs at rate 0.8 using an available British device voice. The complete transcript remains visible; device speech has a readable fallback. This is device speech, not newly recorded audio or timed captions.

## Preserved

O1–O9 lesson files, O10 simulation, calculations, graph logic, independent assessment, scoring, storage keys and board/tier paths are unchanged. Automated comparisons prove Stages 2, 3, 5 and 6 render identically, and Stage 1 differs only by the requested sentence. Guided activity still grants no independent mastery. Legitimate saved work and Foundation/Higher separation remain covered by regression tests. See Verification/preservation.json for the file comparison.

Original O10 ZIP and its SHA256 are preserved under Baseline/. Original versioned outputs and the prior preview at port 8937 remain intact. Latest shortcuts now point to this review candidate.

## Verification

- Focused: **132/132 passed**, 0 failed/skipped/cancelled. Covers RP02, Osmosis and lesson navigation; this is a deliberately scoped selection, not the earlier 170-test O10 selection.
- Full existing regression: **1058/1058 passed**, 0 failed/skipped/cancelled (1050 original tests plus 8 new targeted tests).
- Browser: new guide and controls, original +12% calculation, 18 recorded readings, six plotted means and 0.30 mol/dm³ zero crossing checked. Reload restored results, feedback and graph.
- Mobile viewport 390 × 844: text wraps; no page overflow. No captured console errors. Screenshots and full test logs included in Verification/.
- Launcher syntax, package validation, ZIP integrity and executable permission checked separately in Verification/package-checks.txt.

## Review locally

Extract the complete ZIP and double-click **Start Preview.command**. Keep its terminal open. Preview: http://127.0.0.1:8939/#cell-biology/rp02. If this exact candidate is already running, the launcher safely reuses it; it does not stop other previews.

The new preview uses a separate local origin (port 8939), so progress from port 8937 is not automatically visible there. Existing progress at the older origin is preserved; no storage migration or reset is performed.

## Limitations and iPhone checklist

Real iPhone Safari and actual voice quality remain unverified. Voice availability/quality depends on the device. Simulation does not replace physical RP02; existing real-lab and independent paper-graph limitations still apply (see the preserved RP02-curriculum-coverage.md). A 127.0.0.1 address is local to the computer and cannot be opened from the phone as-is. Nothing was published.

On an authorised device-accessible preview:
1. Open Stage 4: check guide wrapping, play/stop narration and read the complete matching transcript.
2. Check percentages and graph explanations, especially continued movement both ways at zero.
3. Record results, navigate away and reload: confirm results/graph restore in the same browser and tier.

Usage snapshot at packaging: **64% five-hour allowance remaining; 94% weekly remaining** (account-wide and subject to change).
