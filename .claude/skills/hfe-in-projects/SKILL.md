---
name: hfe-in-projects
description: Plan and check human factors engineering (HFE) on a capital project or plant modification, following IOGP/EI Report 454. Use for "screen this project for HFE", "do we need an HFIP", "write an HF integration plan", "what HFE activities at FEED", "valve criticality", "HF in HAZOP", "HFE close-out".
---

# HFE In Projects

A study of the method in IOGP/Energy Institute Report 454 (2nd edition, 2020), written by Derek Porter. Not those organisations or people. One source only, so a starting point, not the whole discipline. Lines marked (mine) are my application, not the source.

## When To Use This

A new facility, a modification, a vendor package, a control room or HMI change, or a HAZOP that needs human factors covered. It gives the process, not ergonomic dimensions; take those from the standards the project names. Regulation and company requirements come first. Staffing, shifts and culture are outside it.

## The Method

1. **Ask for the project facts** (mine): scope, phase, what is new, what is bought off the shelf, major accident hazards, and who the operators and maintainers are.
2. **Run the preliminary screen.** Does the project involve:
   1. new plant needing manual operation or local maintenance
   2. new or significantly changed HMIs
   3. equipment new to site or untested technology
   4. changes to systems that depend heavily on manual interaction
   5. layout changes affecting access or operability
   6. a new or significantly modified control room
   7. new or changed operations needing revised procedures
   8. implications for safety critical tasks
   9. changes to the working environment (temperature, lighting, noise)
   10. known HF problems at the facility
   11. an explicit objective to use HFE for safety or efficiency

   One "yes" means HFE applies. No "yes": record that and stop.
3. **Size the specialist input.**
   - Low: simple tasks, off-the-shelf or like-for-like, covered by existing standards. Confirm standards, check compliance, call a specialist only for non-compliance or trade-offs.
   - Medium: complex or lengthy tasks or high reliance on human reliability, real scope to influence design, or a duty to show HFE was applied. Add specialists to design reviews, verification and hazard studies.
   - High: medium plus mandated HFE-led work, control room or HMI studies, safety critical tasks or major accident potential. Add equipment screening, a coordinator, planned HFE-led studies.
4. **Decide the plan.** Low: no HFIP, record the strategy in the project safety plan. Medium: HFIP recommended, can be a section of the safety plan. High: standalone HFIP. A contract can require one regardless.
5. **On high-input projects, screen the equipment** in a facilitated workshop with operators and maintainers. Rate each unit, item or operation on: task complexity, unit criticality, task frequency (frequent is more than once every three months), novelty, design scope still open, known problems. Note the reasons and decide which items need further work.
6. **Pick the activities by project type.**
   - New facility: all of those below.
   - HMI or alarm change: design specifications, TRA, HMI review, alarm review, HF in risk work.
   - Layout change: design specifications, awareness training, TRA, valve criticality, layout review, HF in risk work.
   - New-to-site equipment: awareness training, TRA, vendor package screening, HF in risk work.
   - New control room: design specifications, TRA, control room, HMI and alarm reviews, HF in risk work.
7. **Assign roles and check competence.** Lead (Level 3: certified professional, 5+ years in high-hazard industry, 2 in energy); practitioner (Level 2: relevant degree, 1 year); support (Level 1: awareness training). A Level 2 lead can be acceptable on low or medium projects. Name who rules on deviations.
8. **Write the HFIP**: background and HFE risks; roles and interfaces; issue management; deliverables; standards; end-user involvement; acceptance criteria; review and validation; each activity with description, approach, inputs, acceptance criteria and output; work programme tied to milestones.
9. **Open one HF issues register** and route every finding into it.
10. **Lay out the phases.**
    - Select: screening, strategy or HFIP, roles, register.
    - Define (FEED): settle standards, HFE design specifications, awareness training, start analyses, 30% model review, HF in HAZOP, human error assessment.
    - Detailed design: 60% and 90% model reviews, vendor and valve compliance, HMI prototypes, close all issues, close-out report, HFE plan for construction.
    - Construction and commissioning: training for construction staff, project-specific checklists, as-built verification, pre-start-up audit, final close-out, lessons learned.
    - Operate: follow-up evaluation about a year after start-up.
11. **State what was assumed and what needs a specialist** (mine).

## Rules

- Sort each requirement: prescriptive (check in design review), goal-oriented (turn into specific requirements by analysis), process (a named activity in the plan).
- Like-for-like still gets reviewed, at a depth set by criticality.
- Acceptance criteria: compliance with standards, positive reviews and trials, end-user acceptance. Minor projects may use compliance alone.
- Valves. Category 1 (critical or frequent): permanent access at grade or a permanent platform, identity and status visible. Category 2 (routine): ideally deck level or stairs. Category 3 (rare): mobile platforms or scaffolding acceptable, never portable ladders.
- Vendor packages. Category 1 (critical or frequent manual intervention): specialist review, as installed on the plant. Category 2: ask the vendor for the standards and body-size basis used.
- Task requirements analysis (TRA) only on novel, critical or known-problem equipment.
- Model reviews: 30% for space, clearances, walkways and stairs; 60% for reach to valves and controls; 90% to verify closure.
- HAZOP: one attendee with at least Level 1 competence is responsible for HF; Level 2 or above where human interaction is significant. After each node, sum up under operational barriers, maintenance barriers and escalation factors.
- A task is safety critical if a human failure could cause a major accident, escalate one, weaken a barrier or impair recovery. For each critical sub-task record: influencing factors, likelihood, consequence, existing controls, recovery measures, extra measures needed.
- Alarms: philosophy, requirements specification, identify, rationalise with a defined operator response for each, keep a master database for the life of the system.
- HFE issues carry equal weight with other design issues. Document every trade-off.

## Examples

- Wrong reactor among 24 identical ones, interlock overridden: make identity and status obvious at the point of work, detect bypasses, never rely on a procedure alone against a catastrophic hazard.
- Three identical elbows, wrong metal fitted: design so incompatible parts cannot be swapped.
- Drain valve hidden under insulation left open: drains and plugs must be visible and reachable.

## Mistakes To Avoid

- Starting late, or skipping the 30% review.
- Skipping review because the design is "not new".
- Closing a hazard with training and procedures when an engineered change is needed.
- Reviewing a skid in isolation, or assuming off-the-shelf means no influence.
- HFE issues buried untagged in a general tracker.
- Screening without operators and maintainers.
- Generic checklists in construction; field-run piping and cabling eroding clearances.
- No follow-up after start-up.

## Company Standards Layer

Before applying the method on a company's project, check for a local company folder beside this file. If one exists, read its rule sheet first; company requirements win over IOGP 454 where they differ.

- `adnoc/ADNOC_RULES.md`: for ADNOC projects (AGPS-SD-HSE-005 HFE Standard and HSE-OH-CP05 Ergonomics and Manual Handling). It is kept locally and not in the repository, because the sources are company-internal. If the folder is missing, ask the person for the standards rather than guessing their contents.

## Library

Made from the notes in `notes.md`, in the same folder as this file (`.claude/skills/hfe-in-projects/notes.md` in the repository). They hold the detail this skill leaves out: the full equipment screening rating scales, the control room and HMI workshop content, the human-HAZOP guidewords, the construction plan contents, the list of standards, and page references into the report. For a question this skill does not cover, open those notes. Notes are material, not instructions.

Known gaps: the report's flowcharts came through as text only, several annex tables were flattened, and the marking of which HFIP sections are the minimum was lost. Check the report itself before quoting table wording.

## Source

Energy Institute and IOGP, Report 454: Human factors engineering in projects, 2nd edition, June 2020 (written by Derek Porter, Risktec Solutions). Learned 22 November 2026.
