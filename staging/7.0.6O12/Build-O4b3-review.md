# Build 7.0.6O4b3 — microscopy control fixes

Unpublished, 11 October 2026. Based on O4b2. No publication or new RP01.

The inactive **Last example** button was misleading. It is replaced by **Practise these three again**, which restarts the current calculation’s three-example set, moves back to the lesson heading and preserves saved answers. Next example continues normally for the first two examples.

The unit converter previously rebuilt the lesson after submitting a conversion. That closed the optional practice disclosure and disrupted focus/scroll position. It now updates only its feedback message in place. The open/closed preference is saved and restored on subsequent lesson renders and refresh. Numeric fields, unit selections, entered values and keyboard focus remain available for successive conversions.

## Validation

- **297/297 focused checks passed**.
- **797/797 full regression checks passed**, zero failures/skips/cancellations.
- Three new checks cover the working final action, feedback without page rebuild, and disclosure persistence across renders/reload. The earlier next-example test was updated for the intentional repeat behavior.
- Live in-app browser: repeated the third picture-size example back to example one; opened unit practice; converted 0.004 mm to 4000 nm without the disclosure closing; focus remained on Convert length. Refresh and repeated conversions were checked.
- Prior cell illustrations, size labels, all nine examples, independent assessment, scoring, saved progress, labels, microscope, dashboard, Osmosis and other lessons are preserved.
- ZIP integrity and every entry are verified; latest and candidate ZIPs are identical. Previous O4b2 package retained under Archive/O4b2-before-control-fixes.

Physical phone and formal screen-reader verification remain pending. No remaining allowance has been inferred.

[Open preview](http://127.0.0.1:8915/#cell-biology/microscopy). Refresh if you still see Last example. Open Optional: practise changing units and try several conversions: the panel should stay open. Stop for review.
