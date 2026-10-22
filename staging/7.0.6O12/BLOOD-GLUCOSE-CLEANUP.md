# Build 7.0.5B — Blood glucose question tier separation

Continues 7.0.5A. Scope is seven held AQA Trilogy Biology Blood glucose questions only. No curriculum content or UI added; no other pathway audit or answer-unit repairs.

Five existing questions now have Foundation-safe insulin answers/feedback. The summary distractors reuse existing insulin-question options rather than inherited reproductive/plant hormone material. Existing insulin wording is reused for written answers. The glucagon question and Grade 8/9 response are explicitly Higher-only. All seven original Higher question texts, answers, options and feedback remain unchanged; only their effective tier metadata changes. Other pathways remain unchanged.

BLOOD_GLUCOSE_TIERS in foundation-tier-data.js stores reviewed tier, source evidence and Foundation overrides. foundation-tier.js applies them only to AQA Trilogy, including unconfirmed tier treated conservatively as Foundation. Source prompt, answer, explanation and option changes invalidate Foundation variants. Stable question IDs and progress architecture are preserved. The existing Blood glucose worked-example exclusion remains unchanged: this build only separates questions and associated feedback.

Seven tier issues resolved this step. Cumulative resolved: 158. Remaining: 74 (73 questions and one lesson). All 17 incompatible answer-unit issues remain unchanged. Original 7.0.4 source metadata and 7.0.5A holds remain as history; the diagnostic applies explicit review overrides and reports those seven as resolved.

Validation: focused tier suite 14/14 passed; full automated suite 126/126 passed, zero failures. Includes safe options/feedback, original Higher text preservation, stale-source exclusion, subsection/module practice and updated audit totals. Original content files, student UI, progress, Learning Labs and Past Papers were byte-checked against 7.0.5A. Browser verification was not performed; previously established environment restrictions remain.

Next small step: review/separate existing Biology Reproductive hormones mixed questions and their feedback only. Do not add curriculum or repair answer-unit aliases in that step.
