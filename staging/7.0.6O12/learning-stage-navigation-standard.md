# Shared learning-stage navigation standard

17 October 2026. Implemented in learning-stage-navigation.js/.css.

All staged lessons provide top and bottom **↑ Back to learning stages** buttons (`type=button`). Open an accessible modal within the current lesson, preserve the route and work, focus its heading, label the current stage, and return focus to the triggering control. Never submit, grade, reveal teaching/models or modify independent status simply by opening/closing. Pause existing media; do not replace media DOM nodes. Use wrapping 44px-or-larger targets and support keyboard/reduced motion.

Choosing the current stage only closes the selector. Choosing teaching must call the lesson’s existing guarded navigation handler, which preserves answers and permanently marks a pending independent attempt assisted/practice. Respect every sequential method or delayed-benchmark gate. No new scoring or storage namespace belongs in this component.

Future subject integration: call `registerLearningStages(provider)`. The provider returns null outside its supported active lesson, otherwise `{id,title,names,current,context,go,canVisit?,stop?}`. `context()` must include the subject/course/board/tier identity; `go(index)` must validate eligibility and retain existing assistance/gating rules. `current` is zero-based. Optional `canVisit(index)` blocks locked steps; `stop()` stops lesson narration. After a future renderer finishes, call `learningStagesDecorate()` without rebuilding its DOM.

The menu snapshots lesson ID/context and refuses stale cross-lesson or tier choices. It renders stage names only, never assessment feedback. Existing adapters cover the eleven current staged Biology lessons; the final assessment milestone remains unchanged. RP01’s `rp01NavigationMax` is a navigation bookmark in its existing course/tier record, not completion or mastery. Keep this same contract for future staged subjects without adding unrelated curriculum or changing approved teaching.

Regression tests: tests/learning-stage-navigation.test.cjs. Verify preserved pending answers, assistance on teaching revisits, same-stage no-op, stale context refusal, gates, no duplicate controls, non-destructive DOM insertion and future provider context.
