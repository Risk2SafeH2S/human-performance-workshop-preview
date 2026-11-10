# Human Performance Pathway: training pack

A five-level human performance training pack for oil and gas teams, by H²S Consultants. It takes people from first awareness on site up to running a human performance programme.

Open `pathway/index.html` in a browser. It is a static page: no build step and no server needed.

| Level | Course | Audience | Duration |
|---|---|---|---|
| HP-1 Foundation | Human Performance Foundations | Everyone with site access, contractors included | 1 day |
| HP-2 Practitioner | Human Performance Tools in Practice | Operators, technicians, permit holders, first-line supervisors | 2 days |
| HP-3 Advanced | Human Factors Analysis and Design | Engineers, HSE and process safety advisers, procedure writers, planners | 3 days + capstone |
| HP-4 Leader | Leading Human Performance | Superintendents, managers, asset leadership | 2 days + capstone |
| HP-5 Master | Human Performance Lead (Master Practitioner) | HP leads, lead investigators, pathway facilitators | 4 days + 3-month workplace capstone |

## What each level contains

- Learning outcomes, the competencies it certifies, a timetable and the assessment rules.
- 6 or 7 modules. Each module has:
  - teaching content, with sorting and reveal interactions;
  - a group exercise set on a Gulf-region scenario;
  - a knowledge check (80% pass mark);
  - facilitator delivery notes and model answers.
- A practical assessment with a marking rubric. HP-3 to HP-5 also have a capstone.

The programme section covers the cross-level material: role-based routes, the competency framework, a roll-out plan, delivery standards, facilitator qualification, the certification and recertification policy, how to evaluate the pathway, a glossary and references.

## Using it

- **Participants** work through the modules. Exercise answers and knowledge-check scores are saved in that browser only. When a participant passes every knowledge check in a level, they can print a record of completion. Full certification still needs an assessor to sign off the practical assessment and any capstone.
- **Facilitators** turn on **Facilitator mode** in the top bar. This shows model answers, debrief points and delivery notes. On any level page, **Print level pack** gives a printable participant pack, or a facilitator pack when Facilitator mode is on.

## Editing content

All course content is in `pathway/content/`:

- `L1.js` to `L5.js`: one file per level.
- `programme.js`: the cross-level material.

The data format and the allowed HTML are set out in [`CONTENT-CONTRACT.md`](CONTENT-CONTRACT.md). To replace a scenario with a local one, edit the module's `activity` block. Scenarios are composite and fictional; keep them that way when you adapt them.
