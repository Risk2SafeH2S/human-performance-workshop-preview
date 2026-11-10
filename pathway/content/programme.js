/* Cross-cutting programme content for the Human Performance Pathway. See ../CONTENT-CONTRACT.md */
HP.programme({
frameworkIntro:"The pathway certifies competence in five cumulative levels. Each competency is assessed on evidence, not attendance: knowledge checks show understanding, practical assessments and capstones show that the person can do it at work.",

/* R required, E expected within 12 months, O optional, - not needed. Columns HP-1..HP-5 */
routes:[
 {role:"All site personnel and visitors with unescorted access",req:["R","-","-","-","-"]},
 {role:"Field operators, technicians, maintenance crafts",req:["R","E","-","-","-"]},
 {role:"Permit issuers, area authorities, control room operators",req:["R","R","O","-","-"]},
 {role:"First-line supervisors and contractor supervisors",req:["R","R","-","O","-"]},
 {role:"Process, maintenance and project engineers",req:["R","E","E","-","-"]},
 {role:"HSE and process safety advisers",req:["R","R","R","O","O"]},
 {role:"Procedure writers and maintenance planners",req:["R","R","R","-","-"]},
 {role:"Superintendents and area managers",req:["R","O","-","R","-"]},
 {role:"Plant managers and asset leadership team",req:["R","-","-","R","-"]},
 {role:"Lead incident investigators",req:["R","R","R","E","E"]},
 {role:"Human performance leads, champions and pathway facilitators",req:["R","R","R","R","R"]}
],

proficiency:[
 ["Aware (HP-1)","Recognises human performance concepts and error-likely situations; knows when to stop and ask."],
 ["Practitioner (HP-2)","Uses the human performance tools reliably in own work and coaches peers in them."],
 ["Analyst (HP-3)","Analyses safety-critical tasks and designs, identifies credible failures and specifies effective controls."],
 ["Leader (HP-4)","Shapes the conditions for reliable performance, responds fairly to failure and learns from normal work."],
 ["Master (HP-5)","Designs, runs and evaluates a human performance programme; leads systemic investigations; qualifies others."]
],

toolkit:`
<p class="lede">How to roll the pathway out on an asset, keep delivery consistent and show that it is working.</p>
<h2>Roll-out in four waves</h2>
<div class="tbl"><table><thead><tr><th>Wave</th><th>Timing</th><th>Who</th><th>Why this order</th></tr></thead><tbody>
<tr><td>0 Sponsor</td><td>Month 0</td><td>Asset leadership team attends HP-4 first</td><td>Leaders must be ready to respond well to the first reports and stops that the training will generate. Training the workforce first and leaders later breaks trust.</td></tr>
<tr><td>1 Core team</td><td>Months 1 to 4</td><td>2 to 4 nominated HP leads take HP-3 then HP-5</td><td>Builds in-house facilitators and analysts so the programme does not depend on external trainers.</td></tr>
<tr><td>2 Frontline</td><td>Months 3 to 12</td><td>All personnel HP-1; supervisors, permit issuers and control room HP-2</td><td>Delivered by crew, not by department, so that each crew shares the same language and tools.</td></tr>
<tr><td>3 Specialists</td><td>Months 6 to 18</td><td>Engineers, planners, procedure writers, investigators HP-3</td><td>Analysis capability arrives once the critical task register and procedure backlog are known.</td></tr>
</tbody></table></div>
<div class="callout or"><h4>Do not run the pathway as a campaign</h4><p>Training on its own changes little. Each wave needs matching system changes: a critical task register, procedure improvements, a just culture policy that leaders actually follow, and visible action on what the workforce reports. Plan these in the same roadmap.</p></div>

<h2>Delivery standards</h2>
<div class="grid2">
<div class="card"><h4>Group size</h4><p>HP-1: up to 20. HP-2: 8 to 14 (role-play needs small groups). HP-3: 8 to 12. HP-4: 8 to 16. HP-5: 6 to 10.</p></div>
<div class="card"><h4>Mix</h4><p>Mix disciplines and contractors in the same room. Put a supervisor and the people they supervise together at HP-2 only if trust is already good.</p></div>
<div class="card"><h4>Language</h4><p>Deliver in the working language of the crew. Translate the tools cards and job aids, then back-translate safety-critical wording to check it.</p></div>
<div class="card"><h4>Use real work</h4><p>Replace at least one scenario per level with a local task or event, sanitised. Courses that use local examples transfer better to the job.</p></div>
</div>

<h2>Facilitator qualification</h2>
<div class="tbl"><table><thead><tr><th>To deliver</th><th>Facilitator must hold</th><th>Plus</th></tr></thead><tbody>
<tr><td>HP-1</td><td>HP-2 and a train-the-trainer day</td><td>Co-deliver once, then be observed once by an HP-5 holder</td></tr>
<tr><td>HP-2</td><td>HP-3, or HP-2 with two years field supervision</td><td>Co-deliver twice; observed delivery of the role-play modules</td></tr>
<tr><td>HP-3</td><td>HP-5, or chartered human factors specialist</td><td>Has completed at least three safety-critical task analyses</td></tr>
<tr><td>HP-4</td><td>HP-5 with leadership experience</td><td>Co-delivered with a senior line leader as sponsor</td></tr>
<tr><td>HP-5</td><td>Chartered human factors specialist or equivalent</td><td>Accredited assessor; external moderation of first cohort</td></tr>
</tbody></table></div>

<h2>Assessment and certification policy</h2>
<ul>
<li><b>Knowledge checks:</b> 80% per module. Unlimited retakes; the facilitator reviews any question missed by more than half the group.</li>
<li><b>Practical assessment:</b> graded Competent or Not yet competent against the level rubric by a qualified assessor. One re-assessment within 60 days.</li>
<li><b>Capstones (HP-3 to HP-5):</b> marked against the published rubric; HP-5 includes a panel viva and an observed facilitation.</li>
<li><b>Certificate validity:</b> HP-1 and HP-2 three years, refreshed by a half-day refresher built from local events. HP-3 to HP-5 three years, renewed by logged CPD (minimum 15 hours over three years for HP-3 and HP-4, 30 hours for HP-5) and evidence of continued practice.</li>
<li><b>Records:</b> the competence management system holds the knowledge-check scores, assessor sign-off and capstone record for audit.</li>
<li><b>Recognition of prior learning:</b> candidates may challenge HP-1 to HP-3 by going straight to the assessment; HP-4 and HP-5 always require attendance.</li>
</ul>

<h2>Evaluating the pathway</h2>
<p>Evaluate at four levels (Kirkpatrick). Reaction scores alone say nothing about safety.</p>
<div class="tbl"><table><thead><tr><th>Level</th><th>Measure</th><th>When</th></tr></thead><tbody>
<tr><td>1 Reaction</td><td>Relevance and confidence ratings; free-text "what will you do differently"</td><td>End of course</td></tr>
<tr><td>2 Learning</td><td>Knowledge-check scores; practical and capstone outcomes</td><td>During course</td></tr>
<tr><td>3 Behaviour</td><td>Field observation of tools in use (pre-job brief quality, three-way communication, place-keeping); supervisor coaching logs; quality of investigation reports</td><td>3 and 6 months</td></tr>
<tr><td>4 Results</td><td>Reporting rate and quality of near misses and good catches; repeat-event rate; procedure deviations found and fixed; critical tasks analysed and controls closed; workforce perception survey trend</td><td>12 months and annually</td></tr>
</tbody></table></div>
<div class="rev"><button type="button">Why a rise in reports is often good news</button><div class="body"><p>After HP-1 and HP-4, near-miss and good-catch reports usually rise. That reflects more willingness to report and more recognition of error-likely situations, not more danger. Leaders should be briefed before roll-out so that they do not react to the rise as a deterioration.</p></div></div>

<h2>Course logistics checklist</h2>
<ul>
<li>Room with tables for groups of 4 to 5; flipcharts; a screen for the pathway app.</li>
<li>Printed tools cards (STAR, pre-job brief, handover, three-way communication) for HP-2.</li>
<li>For HP-3: a real procedure and P&amp;ID extract for the capstone task, sanitised; HEART tables printed.</li>
<li>For HP-4: a senior sponsor to open the course and attend the capstone panel.</li>
<li>For HP-5: workplace project agreed with the line manager before day 1.</li>
<li>Pre-course: participants complete the previous level and bring one example from their own work of a task that went wrong, or nearly did.</li>
</ul>
<p class="src">Based on the Energy Institute human factors resources, HSE HSG48, IOGP Report 621 and Kirkpatrick's four-level evaluation model.</p>`,

glossary:[
 ["Active failure","An unsafe act by someone at the sharp end whose effect is immediate (Reason)."],
 ["Latent condition","A weakness created by decisions in design, management or organisation that lies dormant until it combines with local triggers (Reason)."],
 ["Slip","An action not carried out as intended, such as operating the wrong switch; an attention failure in skill-based performance."],
 ["Lapse","A memory failure: forgetting a step, losing place in a procedure or forgetting to remove a temporary bypass."],
 ["Mistake","The plan itself is wrong. Rule-based mistakes apply the wrong rule; knowledge-based mistakes come from reasoning in unfamiliar situations."],
 ["Violation","A deliberate departure from a rule or procedure; may be routine, situational or exceptional. Rarely malicious."],
 ["Skill-rule-knowledge (SRK)","Rasmussen's three levels of performance: automatic skill-based, if-then rule-based and effortful knowledge-based."],
 ["Performance shaping factor (PSF)","A condition of the task, individual, environment or organisation that changes the likelihood of error. Also called performance influencing factor (PIF)."],
 ["Error-likely situation","A work situation in which the conditions make an error more likely, such as time pressure, distraction, unclear labels or first-time tasks."],
 ["Error trap","A specific feature of the work or workplace that predictably leads people into error."],
 ["Critical step","A step where an action, if done wrongly, causes immediate and irreversible harm. The point where error-reduction tools matter most."],
 ["STAR","Stop, Think, Act, Review: a self-checking technique used at critical steps."],
 ["Place-keeping","Marking off procedure steps as they are completed (for example circle-slash) so that steps are not skipped or repeated."],
 ["Three-way communication","Sender states the message, receiver repeats it back, sender confirms it is correct."],
 ["Peer check","A second person watches the performer just before a critical action to catch a slip."],
 ["Independent verification","A second person separately confirms a condition, after the act, without being influenced by the first person."],
 ["Concurrent verification","A second person confirms the correct component and action at the same time as the action is taken."],
 ["Pre-job brief","A short discussion before work about critical steps, what could go wrong, the worst credible outcome and the controls."],
 ["Post-job review","A brief discussion after work about what went as planned, what surprised the crew and what should change next time."],
 ["Questioning attitude","Treating unexpected conditions and assumptions as signals to pause and check rather than to push on."],
 ["Situation awareness","Perceiving what is happening, understanding what it means and projecting what will happen next (Endsley's three levels)."],
 ["Non-technical skills","Cognitive and social skills such as situation awareness, decision-making, communication, teamwork, leadership and managing stress and fatigue."],
 ["Work-as-imagined","How a task is assumed to be done by those who plan, write procedures for or manage it."],
 ["Work-as-done","How the task is actually carried out at the workface, including adaptations to real conditions."],
 ["Normalisation of deviance","The gradual acceptance of a departure from standards as normal because nothing bad has happened yet (Vaughan)."],
 ["Drift","The gradual migration of practice towards the boundary of safe operation under pressures of efficiency and workload (Rasmussen)."],
 ["Safety-critical task analysis (SCTA)","A structured analysis of a task where human failure could contribute to a major accident, identifying credible failures, their influences and controls."],
 ["Hierarchical task analysis (HTA)","Breaking a task into goals, sub-tasks and steps, with plans that state the order and conditions."],
 ["Human reliability analysis (HRA)","Methods that estimate the likelihood of human failure, qualitatively or quantitatively."],
 ["HEART","Human Error Assessment and Reduction Technique (Williams): a quantitative HRA method using generic task types and error-producing conditions."],
 ["Error-producing condition (EPC)","In HEART, a condition that multiplies the nominal error probability of a generic task, adjusted by the assessed proportion of affect."],
 ["Human factors engineering (HFE)","Applying knowledge of human capabilities and limitations to the design of equipment, workplaces and systems."],
 ["Alarm flood","More alarms than an operator can respond to; EEMUA 191 treats more than 10 alarms in 10 minutes per operator as a flood."],
 ["Just culture","An atmosphere of trust in which people are encouraged to report safety information, with a clear line between acceptable and unacceptable behaviour."],
 ["Substitution test","Asking whether another competent person in the same situation could have acted the same way (Johnston; used in Reason's culpability model)."],
 ["Restorative just culture","Responding to harm by asking who is hurt, what they need and whose obligation it is to meet that need, rather than who to blame (Dekker)."],
 ["Psychological safety","A shared belief that the team is safe for interpersonal risk-taking such as speaking up or admitting a mistake (Edmondson)."],
 ["Learning team","A facilitated session in which the people who do the work explain how it is really done, so that the organisation can learn before or after an event."],
 ["Safety-I and Safety-II","Safety-I defines safety as as few things as possible going wrong; Safety-II as as many things as possible going right (Hollnagel)."],
 ["ETTO","The efficiency-thoroughness trade-off: people constantly balance doing things quickly against doing them thoroughly (Hollnagel)."],
 ["Local rationality","People do what makes sense to them given their goals, knowledge and focus of attention at the time."],
 ["Hindsight bias","The tendency, once the outcome is known, to see it as more predictable than it was."],
 ["Outcome bias","Judging a decision by its outcome rather than by the quality of the decision at the time."],
 ["HFACS","Human Factors Analysis and Classification System: a taxonomy of unsafe acts, preconditions, supervision and organisational influences, based on Reason."],
 ["AcciMap","A systems analysis diagram that maps causal factors across levels from government and regulators down to equipment (Rasmussen)."],
 ["STAMP / CAST","Systems-Theoretic Accident Model and Processes; CAST is its accident analysis method, focusing on inadequate control and feedback (Leveson)."],
 ["FRAM","Functional Resonance Analysis Method: models how variability in everyday functions can combine to produce unexpected outcomes (Hollnagel)."],
 ["High reliability organisation (HRO)","An organisation that operates hazardous technology with few failures, marked by preoccupation with failure, reluctance to simplify, sensitivity to operations, commitment to resilience and deference to expertise (Weick and Sutcliffe)."],
 ["Chronic unease","A healthy wariness and scepticism about risk control, the opposite of complacency."],
 ["Leading indicator","A measure of the inputs or activities that should prevent harm, such as critical tasks analysed or handovers audited."],
 ["Lagging indicator","A measure of outcomes, such as incidents or injuries."],
 ["Fatigue risk management system (FRMS)","A data-driven, risk-based system for managing fatigue, going beyond hours-of-work limits (API RP 755 sets out the requirements for refining and petrochemical sites)."],
 ["Barrier","A control that prevents or mitigates a major accident; a human barrier depends on a person detecting, deciding and acting."],
 ["Management of change (MoC)","The process for reviewing changes to plant, process, organisation or people for their risk before they are made."]
],

references:[
 "Energy Institute. Human factors briefing notes (series). London: EI.",
 "Energy Institute. Guidance on human factors safety critical task analysis, 2nd edition. London: EI, 2020.",
 "Energy Institute and CIEHF. Human factors tools to support situation awareness. London: EI.",
 "Health and Safety Executive. HSG48 Reducing error and influencing behaviour. HSE Books, 1999.",
 "Health and Safety Executive. Human factors: key topics (core topics for major hazard sites). HSE.",
 "Health and Safety Executive. Contract research report CRR 348, Development of a method for assessing the safety implications of staffing levels. HSE Books, 2001.",
 "IOGP. Report 454, Human factors engineering in projects. International Association of Oil & Gas Producers.",
 "IOGP. Report 621, Demystifying human factors: building confidence in human factors investigation. International Association of Oil & Gas Producers, 2018.",
 "CCPS. Guidelines for preventing human error in process safety. New York: AIChE/Wiley.",
 "CCPS. Human factors methods for improving performance in the process industries. New York: AIChE/Wiley, 2007.",
 "API RP 755. Fatigue risk management systems for personnel in the refining and petrochemical industries. American Petroleum Institute.",
 "EEMUA 191. Alarm systems: a guide to design, management and procurement. Engineering Equipment and Materials Users Association.",
 "ISO 11064 (all parts). Ergonomic design of control centres.",
 "ISO 6385. Ergonomics principles in the design of work systems.",
 "US Department of Energy. DOE-HDBK-1028-2009 Human performance improvement handbook.",
 "Reason, J. Human error. Cambridge University Press, 1990.",
 "Reason, J. Managing the risks of organizational accidents. Ashgate, 1997.",
 "Rasmussen, J. Risk management in a dynamic society: a modelling problem. Safety Science 27, 1997.",
 "Endsley, M. R. Toward a theory of situation awareness in dynamic systems. Human Factors 37(1), 1995.",
 "Flin, R., O'Connor, P. and Crichton, M. Safety at the sharp end: a guide to non-technical skills. Ashgate, 2008.",
 "Williams, J. C. HEART: a proposed method for assessing and reducing human error. 9th Advances in Reliability Technology Symposium, 1986.",
 "Kirwan, B. A guide to practical human reliability assessment. Taylor & Francis, 1994.",
 "Dekker, S. The field guide to understanding human error. CRC Press.",
 "Dekker, S. Just culture: restoring trust and accountability in your organization. CRC Press.",
 "Marx, D. Patient safety and the just culture: a primer for health care executives. 2001.",
 "Conklin, T. Pre-accident investigations: an introduction to organizational safety. Ashgate, 2012.",
 "Hollnagel, E. Safety-I and Safety-II: the past and future of safety management. Ashgate, 2014.",
 "Hollnagel, E. The ETTO principle: efficiency-thoroughness trade-off. Ashgate, 2009.",
 "Hollnagel, E. FRAM: the functional resonance analysis method. Ashgate, 2012.",
 "Leveson, N. Engineering a safer world. MIT Press, 2011.",
 "Weick, K. and Sutcliffe, K. Managing the unexpected. Jossey-Bass.",
 "Vaughan, D. The Challenger launch decision. University of Chicago Press, 1996.",
 "Westrum, R. A typology of organisational cultures. Quality and Safety in Health Care 13 (suppl. 2), 2004.",
 "Hudson, P. Implementing a safety culture in a major multinational. Safety Science 45, 2007.",
 "Shappell, S. and Wiegmann, D. The human factors analysis and classification system (HFACS). FAA, 2000.",
 "Edmondson, A. Psychological safety and learning behavior in work teams. Administrative Science Quarterly 44, 1999.",
 "US Chemical Safety Board. Investigation report: refinery explosion and fire, BP Texas City, 2007.",
 "Hopkins, A. Lessons from Longford: the Esso gas plant explosion. CCH, 2000.",
 "Kirkpatrick, D. and Kirkpatrick, J. Evaluating training programs: the four levels. Berrett-Koehler."
]
});
