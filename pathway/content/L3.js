/* Human Performance Pathway - Level 3: Human Factors Analysis and Design (HP-3)
   H²S Consultants. Composite, fictional scenarios. British English. */
HP.level({
  id: "L3",
  n: 3,
  name: "Advanced",
  title: "Human Factors Analysis and Design",
  badge: "HP-3",
  tagline: "Engineers, HSE advisers and procedure writers learn to find the tasks that matter most, take them apart step by step, predict how they will fail, and design the plant, alarms and procedures so that failure is unlikely and recoverable.",
  audience: "Process and process safety engineers, HSE and HF advisers, operations and maintenance engineers, procedure writers and technical authors, maintenance planners, project HFE leads and discipline engineers involved in design reviews, HAZOP/LOPA facilitators and scribes, and senior operators nominated as site HP analysts.",
  prereq: "HP-2 (Human Performance for Supervisors) or equivalent, such as a recognised human factors foundation course plus two years' experience in operations, maintenance, engineering or process safety on a hazardous facility. Participants should be able to read a P&amp;ID and a bow-tie and have attended at least one HAZOP or LOPA. Pre-course: read the EI SCTA guidance summary and bring one task from their own site that they believe is safety critical.",
  duration: "3 days, 07:30-16:30 (approx. 23 h contact) plus a post-course capstone report submitted within 6 weeks (approx. 16-24 h of workplace effort).",
  format: "Classroom workshop, 8-12 participants in table groups of 3-4, one lead facilitator (chartered or HP-5 qualified human factors specialist) plus one co-facilitator for groups over 8. Mix of short technical inputs, worked examples, analytical group exercises on realistic plant documents (P&amp;ID extracts, procedures, alarm data, bow-ties), a field or mock-up walk-through, and a supervised capstone analysis. Spreadsheet templates for the SCT register, HTA/error analysis table and HEART calculation are issued on day 1.",
  outcomes: [
    "Analyse a facility's major accident hazard bow-ties and task inventory to identify and justify a prioritised register of safety-critical tasks using explicit screening criteria.",
    "Construct a hierarchical task analysis (HTA) with goals, sub-goals, operations and plans to an appropriate stopping level for a field or control room task.",
    "Analyse each critical step of an HTA for credible human failures using a structured taxonomy, and evaluate consequence, recovery potential and performance influencing factors (PIFs).",
    "Evaluate and select human factors controls using the hierarchy (eliminate, engineer, facilitate, administer) and justify them against ALARP.",
    "Calculate a human error probability using HEART, test its sensitivity, and evaluate whether a human action may be credited as an initiating event frequency or an independent protection layer in LOPA.",
    "Evaluate a design, control room or change against human factors engineering requirements (IOGP 454, ISO 11064, EEMUA 191 alarm performance, accessibility and labelling) and apply HF screening within management of change.",
    "Critique and rewrite an operating procedure to a defined writing standard and plan a walk-through validation and usability test with end users.",
    "Produce a complete safety-critical task analysis report with defensible, prioritised recommendations that site management can act on."
  ],
  competencies: [
    { code: "HP3.1", statement: "Identifies and prioritises safety-critical tasks from MAH bow-ties, task inventories and HAZOP/LOPA records using documented screening criteria.", evidence: "M1 screening exercise output (SCT register extract) and capstone section 1, marked against the rubric." },
    { code: "HP3.2", statement: "Produces a correct and usable HTA to an appropriate level of detail, including plans.", evidence: "M2 group HTA (filter separator) reviewed by facilitator; capstone HTA marked against the rubric." },
    { code: "HP3.3", statement: "Identifies credible human failures, consequences, recovery opportunities and PIFs for each critical step.", evidence: "M3 error analysis table; capstone error analysis section." },
    { code: "HP3.4", statement: "Selects and justifies proportionate HF controls using the hierarchy of control and ALARP reasoning.", evidence: "M3 and M5 exercise outputs; capstone recommendations section." },
    { code: "HP3.5", statement: "Performs and critically reviews a HEART assessment and judges whether human actions can be credited in LOPA.", evidence: "M4 individual HEART calculation (to within the tolerance stated in the facilitator key) and LOPA critique; knowledge check items." },
    { code: "HP3.6", statement: "Applies HFE requirements and HF screening questions to design reviews, control room and alarm changes and MoC.", evidence: "M5 MoC exercise output; knowledge check items." },
    { code: "HP3.7", statement: "Writes, reviews and validates procedures to a defined standard with end users.", evidence: "M6 procedure rewrite and validation plan; capstone procedure recommendations." }
  ],
  modules: [
  /* ------------------------------------------------------------------ M1 */
  {
    id: "L3M1", n: 1,
    t: "Identifying and screening safety-critical tasks",
    mins: 120,
    obj: "Build a defensible, prioritised register of safety-critical tasks by linking a site task inventory to its major accident hazards, bow-tie barriers and HAZOP/LOPA records, using explicit screening criteria.",
    learn: `
<h2>Why start with the tasks, not the people</h2>
<p>Major accident hazard (MAH) assessments on oil and gas facilities are usually rich in hardware: relief studies, SIL assessments, fire and gas mapping, dropped object studies. The same documents are often thin on the human actions those barriers depend on. Someone drains the separator boot, someone resets the trip, someone reinstates the PSV after overhaul, someone answers the high-level alarm at 03:00. <b>Safety-critical task analysis (SCTA)</b> is the structured method for finding those actions, understanding how they can fail, and showing that the risk from human failure has been reduced as far as reasonably practicable.</p>
<p>The UK HSE describes SCTA as a seven-step approach in its human factors Core Topic on identifying human failures, and the Energy Institute's <i>Guidance on human factors safety critical task analysis</i> (2nd edition) sets out the same logic in more detail for the energy industry. The analysis you will learn over the next three days follows that logic.</p>
<div class="callout or"><h4>The seven steps (HSE / EI approach)</h4><ol>
<li>Consider the main site hazards (the MAH register and bow-ties).</li>
<li>Identify the manual activities that affect those hazards (this module).</li>
<li>Outline the key steps in those activities (task analysis, M2).</li>
<li>Identify potential human failures in those steps (M3).</li>
<li>Identify the factors that make those failures more likely (PIFs, M3).</li>
<li>Manage the failures using a hierarchy of control (M3, M5, M6).</li>
<li>Manage error recovery (M3), then implement the controls and monitor that they work (M5, M6).</li></ol></div>

<h2>What makes a task safety critical</h2>
<p>A safety-critical task (SCT) is a task where human failure could <b>initiate</b> a major accident, or where human performance is part of a <b>barrier</b> that prevents, detects, controls or mitigates one. Note the two halves. Most sites list the first group readily (breaking containment, line-up changes, start-ups). The second group is usually under-represented, because the task does not feel hazardous when you do it: calibrating a gas detector, function-testing an ESD valve, or reinstating a fire pump after maintenance.</p>
<div class="tbl"><table><thead><tr><th>Category</th><th>Bow-tie position</th><th>Gulf gas plant examples</th></tr></thead><tbody>
<tr><td>Initiating</td><td>Left of the top event: the task itself can cause loss of containment</td><td>Draining water from a sour separator boot; pig launching and receiving; sampling H2S-rich condensate; breaking a flange under permit; changing over duty/standby PSVs; start-up of a sulphur recovery unit</td></tr>
<tr><td>Prevention barrier</td><td>Left side: a person is part of the barrier that stops the threat</td><td>Control room response to high-level alarm on the slug catcher; gas test before hot work; independent verification of isolations; operator rounds that detect a weeping flange</td></tr>
<tr><td>Barrier maintenance</td><td>Degradation controls: tasks that keep hardware barriers working</td><td>Proof testing SIS trips; PSV overhaul and reinstatement; calibrating fixed H2S detectors; overriding and removing overrides on trips; inspecting fireproofing</td></tr>
<tr><td>Mitigation and recovery</td><td>Right of the top event: tasks that limit escalation</td><td>Manual ESD and blowdown from the control room; local isolation of a leak; starting deluge; muster and headcount; emergency response to an H2S release</td></tr></tbody></table></div>

<h2>Building the task inventory</h2>
<p>You cannot screen what you have not listed. A good inventory draws on several sources, because each one misses something:</p>
<ul>
<li><b>Operating procedures index:</b> routine, start-up, shutdown and emergency procedures. Misses tasks done from memory or by custom.</li>
<li><b>Maintenance system (CMMS):</b> work orders and routines on safety-critical elements (SCEs). Misses ad hoc and contractor work.</li>
<li><b>Permit-to-work records:</b> twelve months of permits show what is actually done, including breaking containment and SIMOPS.</li>
<li><b>Bow-ties:</b> every barrier with a human element, and every degradation control, implies a task.</li>
<li><b>HAZOP and LOPA records:</b> any cause worded as "operator error", "incorrect line-up" or "valve left open", and any safeguard worded as "operator response" or "procedure", identifies a task.</li>
<li><b>Incident and near-miss data:</b> events with a human contribution, including recovered ones.</li>
<li><b>Interviews and field visits:</b> operators and technicians will name the tasks they worry about. These are often missing from every document.</li></ul>
<p>Describe each task at a consistent level: a <b>goal-level activity</b> with a clear start and end ("drain water from V-2101 boot to the closed drain"), not a whole job ("operate the inlet facilities") and not a single action ("open drain valve").</p>

<h2>Screening: two passes</h2>
<p><b>Pass 1 is a filter.</b> For each task ask: could human failure during this task, alone or with one other credible failure, initiate an MAH, or defeat or degrade a barrier against one? If yes, the task stays in. Be inclusive at this stage; it is cheaper to screen out later than to miss a task.</p>
<p><b>Pass 2 is prioritisation.</b> Most facilities end up with between several dozen and a few hundred candidate SCTs, and full analysis takes a day or more each. Prioritise with explicit, recorded criteria so that the order can be defended and repeated:</p>
<div class="grid3">
<div class="card"><h4>Consequence</h4><p>Worst credible outcome linked to the MAH register and the site risk matrix. Toxic release of sour gas, fire or explosion with multiple fatalities score highest.</p></div>
<div class="card"><h4>Human dependence</h4><p>Is the person the only barrier, one of several, or backed by independent engineered protection? A task where the operator is the last line of defence scores high.</p></div>
<div class="card"><h4>Vulnerability</h4><p>Complexity, frequency (very infrequent tasks and very frequent routine ones both carry risk), time pressure, poor recovery, known PIF problems, incident history, and changes since the task was last reviewed.</p></div></div>
<p>A simple, transparent scheme is often enough: score consequence 1 to 5, human dependence 1 to 3, and vulnerability 1 to 5, multiply, and analyse in descending order. The numbers are a sorting device, not a risk estimate. Record the reasoning for each score; a reviewer should be able to see why pig receiving outranks chemical drum handling.</p>
<div class="callout"><h4>Watch for grouping</h4><p>Many tasks are variations of one generic task. "Drain water from a vessel boot" may cover twenty vessels. Analyse the generic task once, then check each instance for differences that matter: sour versus sweet service, open versus closed drain, local versus remote level indication, cold climate valves, access by ladder. Differences in PIFs are differences in risk.</p></div>

<h2>The SCT register</h2>
<p>The output of this step is a register, owned by the site and maintained like any other safety-critical document. Typical columns: task ID, task title, unit and equipment tags, task category, linked MAH and bow-tie barrier, HAZOP/LOPA reference, frequency, who performs it, scores and priority, analysis status, date analysed, linked procedure and competence requirements, and review trigger (MoC, incident, periodic). The register is the bridge between the safety case and the procedures, competence and design that the analysis will improve.</p>

<h2>Common failures of the screening step</h2>
<ul>
<li>Listing only operations tasks and missing maintenance, inspection and testing, which carry a large share of latent barrier failures.</li>
<li>Leaving out start-up and shutdown, abnormal and emergency tasks because they have no routine procedure. Texas City (2005) started during a unit start-up, a transient operation that comes round rarely.</li>
<li>Choosing tasks by availability of a procedure rather than by risk.</li>
<li>Screening in an office without operators and technicians in the room.</li>
<li>Producing a register and never using it to drive MoC, competence or procedure priorities.</li></ul>

<h3>Sort it</h3><p>Classify each task by its bow-tie role.</p>
<div class="sortq" data-sort='[["Draining sour water from the inlet separator boot to closed drain","Initiating"],["Answering the slug catcher high-high level alarm before the trip","Prevention barrier"],["Annual proof test of the compressor suction ESD valve","Barrier maintenance"],["Manual blowdown of the gas train from the control room after a confirmed leak","Mitigation and recovery"],["Removing a trip override after instrument maintenance","Barrier maintenance"],["Receiving a cleaning pig and opening the receiver closure","Initiating"]]' data-opts='["Initiating","Prevention barrier","Barrier maintenance","Mitigation and recovery"]'></div>
<p class="src">Based on HSE Human Factors Core Topic 3 (Identifying human failures) and its seven-step approach; Energy Institute, Guidance on human factors safety critical task analysis (2nd ed.); Energy Institute Human Factors Briefing Notes; CCPS, Guidelines for Preventing Human Error in Process Safety; CSB investigation report into the 2005 Texas City refinery explosion (2007).</p>`,
    activity: {
      title: "Screening the Al Rimal inlet facilities",
      time: "50 minutes",
      scn: `<p><span class="tag">Onshore sour gas plant · Gulf region</span><span class="tag">Desk exercise · SCT register kick-off</span></p>
<p>The fictional Al Rimal gas plant receives sour wet gas (approx. 3 mol% H2S) from twelve wells through two 24-inch trunklines into a finger-type slug catcher. Gas goes to two inlet separators (V-2101 A/B), then to amine treating. Condensate is stabilised and stored. The plant has a bow-tie for "Loss of containment of sour gas from inlet facilities" with these barriers on the left side: (1) mechanical integrity and corrosion management, (2) isolation and permit to work, (3) high-level alarm and operator response, (4) SIS high-high level trip to the slug catcher inlet ESDV, (5) relief to flare. Right side: (6) fixed H2S detection with automatic alarm, (7) manual ESD and blowdown, (8) muster and emergency response.</p>
<p>The site HP lead has collected this candidate list from procedures, the CMMS and twelve months of permits:</p>
<ol>
<li>Draining liquids from slug catcher fingers to the closed drain drum (daily, manual, local level glass).</li>
<li>Launching an intelligent pig from the trunkline launcher (twice a year, contractor-supported).</li>
<li>Receiving a cleaning pig at the slug catcher receiver (monthly).</li>
<li>Sampling sour condensate from V-2101 A for lab analysis (weekly).</li>
<li>Proof testing the slug catcher high-high level trip (every 12 months).</li>
<li>Calibrating fixed H2S detectors in the inlet area (quarterly, instrument technician).</li>
<li>Changing duty/standby PSVs on V-2101 B for PSV overhaul (every 4 years, mechanical interlock fitted).</li>
<li>Responding to the slug catcher high-level alarm (several times per month in slugging conditions).</li>
<li>Housekeeping and painting of handrails in the inlet area (routine).</li>
<li>Applying and removing overrides on inlet trips during start-up (each start-up, approx. twice per year).</li>
<li>Replacing the lighting fittings in the inlet area substation (as required).</li>
<li>Manual ESD and blowdown of the inlet facilities on confirmed gas release (rare, drilled twice per year).</li></ol>
<p>The plant manager wants the register and the first five tasks for full analysis by the end of the month.</p>`,
      qs: [
        { q: "Apply the Pass 1 filter. Which tasks are screened out, and why? Which are in?", hint: "Ask: could failure during this task initiate an MAH or defeat a barrier against one? Be explicit about the bow-tie link." },
        { q: "Assign each retained task to a category (initiating, prevention barrier, barrier maintenance, mitigation) and link it to a numbered barrier on the bow-tie.", hint: "Some tasks link to more than one barrier. Overrides are a classic barrier-defeating task." },
        { q: "Score the retained tasks with the consequence x human dependence x vulnerability scheme and propose the first five for full analysis. Show your reasoning.", hint: "Consider frequency extremes, contractor involvement, interlock presence, the operator as last line of defence." },
        { q: "What other sources would you check before finalising the register, and what tasks might be missing?", hint: "HAZOP causes, incident data, interviews; think about start-up, nitrogen purging, sulphur unit interfaces, SIMOPS during well tie-ins." }
      ],
      fac: [
        "Pass 1: screen out 9 (handrail painting: no credible MAH link, though it is a routine occupational risk) and 11 (lighting in a substation away from hydrocarbons: electrical safety, not process MAH; note if the substation pressurisation/gas-tight doors are affected it could come back in). Everything else stays in. Groups that screen out 6 (H2S detector calibration) because 'it is only an instrument job' have missed barrier maintenance.",
        "Categories: Initiating 1, 2, 3, 4, 7 (barriers 1 and 2). Prevention barrier 8 (barrier 3). Barrier maintenance 5 (barrier 4), 6 (barrier 6), 10 (defeats barrier 4: initiating-type risk through a degraded barrier) and 7 also affects barrier 5 (relief availability). Mitigation 12 (barriers 7 and 8).",
        "Plausible top five with reasoning: 10 Overrides (high consequence, operator removes the SIS barrier, infrequent, done under start-up pressure, poor recovery if forgotten); 1 Slug catcher draining (daily, sour, local level glass, open-ended task, gas blow-by to closed drain); 3 Pig receiving (opening a closure on a sour system, trapped pressure and pyrophoric/FeS risk, monthly); 7 PSV changeover (infrequent, both PSVs isolated is catastrophic, interlock can be defeated or mis-sequenced); 8 Alarm response (operator is a credited barrier; slugging gives frequent alarms and possible complacency). 2 and 12 are close contenders; accept a different order if the reasoning is explicit.",
        "Point out that 'infrequent' and 'very frequent' both raise vulnerability: overrides and PSV changeover for unfamiliarity, draining for routine and complacency.",
        "Missing tasks to prompt for: nitrogen purge and leak test before start-up; reinstatement of isolations after turnaround; line-up changes between V-2101 A and B; well tie-ins and SIMOPS with drilling or construction; amine unit interfaces; flare knock-out drum draining; bypassing of the ESDV for maintenance; emergency H2S rescue. Sources: HAZOP causes worded as operator actions, LOPA scenarios that credit operator response, permit history, near-miss reports, and operator interviews.",
        "Challenge any group that wants to rank by 'has the most incidents'. Absence of incidents in a rare, high-consequence task is not evidence of safety.",
        "Close by asking who owns the register and what MoC triggers will update it."
      ]
    },
    quiz: [
      { q: "Which definition of a safety-critical task is most complete?", opts: ["A task that has caused a lost-time injury in the last five years.", "A task where human failure could initiate a major accident or where human performance forms part of a barrier that prevents or mitigates one.", "Any task carried out under a permit to work.", "A task performed in a hazardous area classified Zone 1 or Zone 2."], a: 1, why: "SCTs include both initiating tasks and tasks that form or maintain barriers. Injury history, permits and area classification are poor proxies for MAH relevance." },
      { q: "A team screens out the quarterly calibration of fixed H2S detectors because 'nothing can be released while doing it'. What is the flaw?", opts: ["There is no flaw; only initiating tasks are safety critical.", "Calibration should be screened out only if the detectors are SIL rated.", "Calibration errors can leave a detection barrier degraded without anyone knowing, so it is a barrier maintenance SCT.", "Calibration is an occupational task and belongs in the job safety analysis, not SCTA."], a: 2, why: "Barrier maintenance tasks create latent failures. A mis-calibrated or inhibited detector removes a right-hand-side barrier silently, which is exactly what SCTA aims to find." },
      { q: "In the HSE seven-step approach, what comes immediately after identifying the manual activities that affect major hazards?", opts: ["Outline the key steps in those activities.", "Identify the PIFs.", "Quantify human error probabilities.", "Write new procedures."], a: 0, why: "Step 3 is to outline the key steps (task analysis). Failures are identified at step level, then PIFs, then controls. Quantification is optional and comes later, if at all." },
      { q: "Which HAZOP record wording most clearly flags a candidate SCT?", opts: ["Cause: corrosion of the drain line. Safeguard: inspection programme.", "Cause: control valve fails open. Safeguard: high-pressure trip.", "Cause: external fire. Safeguard: fireproofing.", "Cause: operator leaves drain valve open. Safeguard: operator in attendance and high-level alarm."], a: 3, why: "A human action appears both as a cause and as a safeguard. That is a direct pointer to an initiating task and to a credited human barrier, both of which need analysis." },
      { q: "Why is a prioritisation score of consequence x human dependence x vulnerability not a risk estimate?", opts: ["Because it leaves out consequence, which a risk estimate must include.", "Because the scores are ordinal sorting devices, not frequencies or probabilities, so the product has no risk units.", "Because it only becomes a risk estimate once each task has a HEART probability attached.", "Because human dependence should be added to the other two scores, not multiplied."], a: 1, why: "The scheme orders the analysis workload transparently. It must not be quoted as risk or compared with tolerability criteria." },
      { q: "A gas plant has 20 vessels whose boots are drained manually. What is the most efficient defensible approach?", opts: ["Analyse each of the 20 tasks separately in full.", "Analyse only the vessel with the most incidents.", "Analyse the generic draining task once, then check each instance for differences that change the PIFs or consequences.", "Screen them all out because draining is routine."], a: 2, why: "Generic analysis with instance checks avoids duplication while catching differences such as sour service, open drains or poor access that change risk." }
    ],
    tools: ["SCT screening and prioritisation worksheet", "SCT register template (spreadsheet)", "Bow-tie to task mapping guide"],
    facGuide: `<p><b>Timing (120 min):</b> course welcome is separate; teach 50 (why SCTA and seven steps 10, SCT definition and categories 10, inventory sources 10, screening and prioritisation 15, register and pitfalls 5); sort 5; scenario 50 (35 group work, 15 plenary); close 15 with participants screening the task they brought from site.</p>
<p><b>How to run it:</b> issue the Al Rimal bow-tie on A3 and the task list on cards. Groups physically place cards on the bow-tie before scoring; it makes the barrier link visible. Give each group the scoring worksheet. Compare top-five lists across groups and draw out the reasoning rather than declaring one right answer.</p>
<p><b>Common misconceptions:</b> that SCTs are only operations tasks; that a task with an interlock cannot be safety critical (the interlock can be defeated or mis-sequenced); that the prioritisation product is a risk number; that the register is a one-off deliverable.</p>
<p><b>Kit:</b> A3 bow-tie prints, task cards, scoring worksheets, the register template on laptops (one per group), sticky dots for voting.</p>
<p><b>Link forward:</b> the PSV changeover (task 7) reappears as the capstone, and draining (task 1) in M3. Keep the groups' outputs on the wall.</p>`
  },
  /* ------------------------------------------------------------------ M2 */
  {
    id: "L3M2", n: 2,
    t: "Hierarchical task analysis",
    mins: 180,
    obj: "Construct a hierarchical task analysis with goals, sub-goals, operations and plans, collected from documents, observation and operators, and stopped at a level that supports error analysis.",
    learn: `
<h2>What HTA is for</h2>
<p>Hierarchical task analysis (HTA) describes a task as a hierarchy of <b>goals</b> broken down into <b>sub-goals</b> and finally into <b>operations</b> (the things people actually do), together with <b>plans</b> that say in what order and under what conditions the sub-goals are carried out. It originated with Annett and Duncan in the 1960s and remains the backbone of SCTA, because every later step (error identification, PIF assessment, procedure writing, competence specification, design review) needs an agreed description of how the task is really done.</p>
<div class="callout or"><h4>HTA describes work as done, not work as imagined</h4><p>The procedure is a starting point, not the answer. If operators routinely confirm zero pressure with a portable gauge on the drain because the fixed barrel gauge sticks, the HTA records what they do and the analysis asks why. An HTA copied from the procedure analyses the document, not the task.</p></div>

<h2>Collecting the data</h2>
<div class="grid2">
<div class="card"><h4>Documents</h4><p>Procedures, P&amp;IDs, isolation diagrams, cause and effect charts, vendor manuals, previous incidents. Use them to draft, never to finish.</p></div>
<div class="card"><h4>Walk-through</h4><p>An experienced operator walks the analyst through the task at the equipment, pointing at each valve and gauge and describing what they do, see and check. The best single source.</p></div>
<div class="card"><h4>Talk-through</h4><p>The same, done at a table with drawings and photos when access is not possible (sour area, running plant, offshore). Use photos of the actual valves.</p></div>
<div class="card"><h4>Observation</h4><p>Watch the task done for real when it is frequent enough. Note where people pause, check, ask, improvise or use informal aids such as chalk marks and tie-wraps.</p></div></div>
<p>Interview at least two people who do the task, ideally from different shifts or crews. Differences between them are findings: they show where the task is under-specified.</p>

<h2>Building the hierarchy</h2>
<ul>
<li><b>Level 0</b> is the overall goal, stated as an outcome: "Launch cleaning pig into trunkline TL-01".</li>
<li><b>Level 1</b> sub-goals are usually 4 to 8 phases: prepare, isolate and depressurise, load, pressurise and line up, launch, restore and record.</li>
<li><b>Lower levels</b> break each sub-goal down until you reach operations: a verb plus an object, such as "Close vent valve VV-104".</li>
<li>Number hierarchically (3, 3.1, 3.1.2) so that every line can be referenced in the error analysis.</li>
<li>Include <b>checks, communications and decisions</b> as operations. "Confirm with control room that receiver is lined up" is an operation; it is also where many failures occur.</li></ul>
<h3>Plans</h3>
<p>Every goal with sub-goals needs a plan. Plans make the logic explicit, and the logic is where the errors hide.</p>
<div class="tbl"><table><thead><tr><th>Plan type</th><th>Example</th></tr></thead><tbody>
<tr><td>Fixed sequence</td><td>Plan 2: do 2.1 to 2.5 in order.</td></tr>
<tr><td>Selection (conditional)</td><td>Plan 2.4: if gauge reads zero, do 2.5; if not, repeat 2.2 and inform supervisor.</td></tr>
<tr><td>Cycle (repeat until)</td><td>Plan 4.3: repeat 4.3.1 to 4.3.2 until launcher pressure equals line pressure within 1 bar.</td></tr>
<tr><td>Time-dependent</td><td>Plan 5: do 5.2 within 15 minutes of 5.1; if no pig signal within 30 minutes, do 5.5.</td></tr>
<tr><td>Concurrent / any order</td><td>Plan 1: do 1.1 to 1.4 in any order; all complete before 2.</td></tr></tbody></table></div>
<h3>When to stop</h3>
<p>Annett and Duncan's <b>P x C rule</b>: stop breaking down an operation when the probability of inadequate performance multiplied by the cost of that failure is acceptable. In practice, keep going on steps that touch the hazard (opening, closing, venting, checking pressure, confirming identity) and stop early on low-consequence steps ("collect tools"). A good test: can you ask "what could go wrong here, and what would happen?" and get a specific answer? If the answer is "lots of things", break it down further.</p>

<h2>Worked example: launching a cleaning pig (extract)</h2>
<p>Launcher L-101 on a 24-inch sour gas trunkline. Valves: mainline valve MV-101, launcher barrel valve BV-102, kicker valve KV-103, vent VV-104 to flare, drain DV-105 to closed drain, pressure gauge PG-106 on the barrel, pig signaller XS-107, quick-opening closure with a pressure warning and locking device.</p>
<div class="tbl"><table><thead><tr><th>No.</th><th>Task step / operation</th><th>Plan / notes</th></tr></thead><tbody>
<tr><td>0</td><td>Launch cleaning pig into trunkline TL-01</td><td>Plan 0: do 1 to 6 in order. Abort to 6 if any check fails.</td></tr>
<tr><td>1</td><td>Prepare for launch</td><td>Plan 1: 1.1 to 1.4 in any order, all before 2.</td></tr>
<tr><td>1.1</td><td>Obtain permit and confirm receiving station ready</td><td>Communication with receiving site and control room.</td></tr>
<tr><td>1.2</td><td>Brief crew: H2S, personal gas monitors, BA standby, wind direction</td><td></td></tr>
<tr><td>1.3</td><td>Check pig size, condition, transmitter (if fitted)</td><td></td></tr>
<tr><td>1.4</td><td>Verify valve status against line-up sheet</td><td>Check: BV-102 and KV-103 closed, MV-101 open.</td></tr>
<tr><td>2</td><td>Isolate and depressurise launcher</td><td>Plan 2: 2.1 to 2.5 in order.</td></tr>
<tr><td>2.1</td><td>Confirm BV-102 and KV-103 closed and locked</td><td>Passing valves are the hazard; see 2.4.</td></tr>
<tr><td>2.2</td><td>Open VV-104 slowly to flare; depressurise barrel</td><td>Cycle until PG-106 reads zero.</td></tr>
<tr><td>2.3</td><td>Open DV-105; drain liquids to closed drain; close DV-105</td><td></td></tr>
<tr><td>2.4</td><td>Verify zero pressure: PG-106 at zero AND vent open with no flow for 5 minutes</td><td>Plan 2.4: if pressure rises with vent closed, BV-102 or KV-103 is passing: stop, inform supervisor.</td></tr>
<tr><td>2.5</td><td>Purge barrel with nitrogen to flare</td><td>Sour service: reduces H2S and pyrophoric iron sulphide risk.</td></tr>
<tr><td>3</td><td>Load pig</td><td>Plan 3: in order; 3.1 only if 2.4 satisfied.</td></tr>
<tr><td>3.1</td><td>Operate closure pressure warning device; open closure</td><td><b>Critical step:</b> stored energy if pressurised.</td></tr>
<tr><td>3.2</td><td>Insert pig and push to reducer until seated</td><td></td></tr>
<tr><td>3.3</td><td>Inspect and clean closure seal; close and lock closure</td><td></td></tr>
<tr><td>4</td><td>Pressurise and line up</td><td>Plan 4: in order; 4.3 cycle until equalised.</td></tr>
<tr><td>4.1</td><td>Close VV-104; confirm DV-105 closed</td><td></td></tr>
<tr><td>4.2</td><td>Purge air from barrel with nitrogen</td><td></td></tr>
<tr><td>4.3</td><td>Crack KV-103; pressurise barrel slowly; leak check closure</td><td>Cycle: pressurise in stages, leak check at each.</td></tr>
<tr><td>4.4</td><td>Open BV-102 fully; open KV-103 fully</td><td>Check: barrel valve fully open before pig moves.</td></tr>
<tr><td>5</td><td>Launch pig</td><td>Plan 5: 5.1, then 5.2 within agreed time; 5.3 when signal received.</td></tr>
<tr><td>5.1</td><td>Throttle MV-101 to divert flow through launcher</td><td>Communicate flow change to control room first.</td></tr>
<tr><td>5.2</td><td>Confirm pig departure at XS-107; inform receiving station</td><td>If no signal, follow stuck-pig contingency.</td></tr>
<tr><td>5.3</td><td>Open MV-101 fully; close BV-102 and KV-103</td><td></td></tr>
<tr><td>6</td><td>Make safe and record</td><td>Depressurise barrel per 2; record times; close permit.</td></tr></tbody></table></div>
<p>Notice what the HTA already reveals before any formal error analysis: step 2.4 depends on one gauge on a sour service barrel that may be blocked by debris; step 3.1 is the only point where a single error releases stored energy and sour gas into the operator's face; step 5.1 requires a communication that may not happen; and the plan for 2.4 relies on the operator recognising a passing valve.</p>

<h2>Quality checklist for an HTA</h2>
<ul>
<li>Verified with at least two task performers, and at the equipment if possible.</li>
<li>Every goal with sub-goals has a plan, including the abnormal branches.</li>
<li>Operations start with a verb and name the equipment by tag.</li>
<li>Checks, communications and decisions are shown as steps.</li>
<li>Who does each step is recorded where more than one person is involved (field, control room, receiving site).</li>
<li>Depth is greater around hazardous steps, shallower elsewhere.</li>
<li>Differences between work as written and work as done are noted, not hidden.</li></ul>
<div class="callout"><h4>HTA is not a procedure</h4><p>An HTA is an analysis document. It may include steps the procedure omits, informal checks, and alternative orders. The improved procedure is one of the outputs of the analysis (M6), not the HTA itself.</p></div>

<h3>Sort it</h3><p>Is each line a goal, an operation or a plan?</p>
<div class="sortq" data-sort='[["Isolate and depressurise launcher","Goal or sub-goal"],["Close vent valve VV-104","Operation"],["If gauge reads zero do 2.5, otherwise repeat 2.2","Plan"],["Confirm with control room that the receiver is lined up","Operation"],["Do 1.1 to 1.4 in any order, all complete before 2","Plan"],["Launch cleaning pig into trunkline TL-01","Goal or sub-goal"]]' data-opts='["Goal or sub-goal","Operation","Plan"]'></div>
<p class="src">Based on Annett and Duncan (1967) and Annett, Hierarchical Task Analysis (in Hollnagel, ed., Handbook of Cognitive Task Design, 2003); Kirwan and Ainsworth, A Guide to Task Analysis (1992); Energy Institute, Guidance on human factors safety critical task analysis (2nd ed.); HSE Core Topic 3; CCPS, Human Factors Methods for Improving Performance in the Process Industries.</p>`,
    activity: {
      title: "HTA: preparing a filter separator for element change-out",
      time: "75 minutes",
      scn: `<p><span class="tag">Gas processing plant, fuel gas system · Gulf region</span><span class="tag">Day shift · 46 °C, light dust</span></p>
<p>Fuel gas filter separator F-3301 A/B (duty/standby) removes liquids and particles upstream of the gas turbine fuel skid. The gas is treated (H2S below 4 ppm), but the vessel contains pyrophoric iron sulphide deposits from historic sour service and condensate in the sump. Elements are changed when differential pressure exceeds 1 bar, roughly every three months. The operator prepares the vessel; a mechanical crew changes the elements under a separate permit.</p>
<p>Equipment: inlet isolation valve XV-3301A (motor-operated, opened and closed from the DCS), manual inlet block valve HV-3302A, outlet valve HV-3303A, cross-over to standby train via HV-3304, vent VV-3305A to flare, drain DV-3306A to closed drain, nitrogen connection NC-3307A, PG-3308A on the vessel, LG-3309A on the sump, quick-opening closure on the element chamber.</p>
<p>The current procedure (4 lines) reads: <i>"1. Change over to B filter. 2. Isolate A filter and depressurise to flare. 3. Drain and purge with N2. 4. Hand over to maintenance."</i></p>
<p>During the talk-through, two operators describe the task differently. Operator 1 lines up B by opening HV-3304 and the B inlet before closing A, watching the turbine fuel pressure on the radio with the control room. Operator 2 closes the A inlet first "because it is quicker" and relies on the turbine fuel pressure low alarm to warn if B is not online. Both say the drain glass on the sump is often too dirty to read, so they "crack the drain and listen". Neither does a gas test inside the chamber; the mechanical crew does it when opening.</p>`,
      qs: [
        { q: "Draft a Level 0 goal and Level 1 sub-goals (5 to 7) for the operator's part of the task.", hint: "Outcome-worded goal; phases from changeover to handover; include the changeover as its own sub-goal." },
        { q: "Break down the changeover and the isolate/depressurise sub-goals to operation level with plans, including at least one conditional plan.", hint: "Tags, verbs, checks, the communication with the control room; what happens if pressure does not fall?" },
        { q: "What do the differences between Operator 1 and Operator 2 tell you, and how do you record them in the HTA?", hint: "Work as done versus imagined; which order is safer and why; what does the procedure leave unspecified?" },
        { q: "Mark the steps you would carry forward as critical steps for error analysis and justify each one.", hint: "Stored energy, loss of fuel gas to the turbines, pyrophoric deposits, the handover to maintenance." },
        { q: "What information would you still need to collect before the HTA is complete, and from whom?", hint: "Interlocks, DCS displays, vendor manual, the mechanical crew, control room operator." }
      ],
      fac: [
        "Level 0: 'Prepare filter separator F-3301A for element change-out and hand over to maintenance safely, with B in service and turbine fuel supply maintained.' Level 1: 1 Prepare (permit, brief, gas monitors, check B is healthy); 2 Change over fuel gas to F-3301B; 3 Isolate F-3301A; 4 Depressurise and drain; 5 Purge and prove gas free; 6 Apply isolation and hand over to maintenance.",
        "Changeover (2): 2.1 Inform control room and agree changeover; 2.2 Confirm B drained and at pressure; 2.3 Open B inlet and outlet; 2.4 Confirm flow through B (dP on B rises, control room confirms stable fuel pressure); 2.5 Close XV-3301A from DCS (control room) and HV-3302A locally; 2.6 Close HV-3303A. Plan 2: in order; if fuel gas pressure falls below the agreed value at 2.5, reopen A inlet and stop. Isolate/depressurise: open VV-3305A slowly; cycle until PG-3308A reads zero; plan: if pressure rises with vent closed, inlet or outlet is passing: stop and inform supervisor.",
        "Differences show the procedure is under-specified: it does not set the make-before-break order. Operator 2's order relies on an alarm as the primary means of detecting loss of fuel gas, which could trip turbines (a plant upset and potential flaring). Record both as observed variations in a notes column, with the analyst's observation that Operator 1's order is safer, and carry the question into M3 and the procedure rewrite.",
        "Critical steps: changeover sequence (turbine trip); confirming zero pressure (stored energy at closure); draining with an unreadable sight glass (gas blow-by to the closed drain, possible overpressure of the drain drum); purging and proving gas free, with pyrophoric deposits (fire on opening if air enters a vessel with FeS that is not wetted or inerted); handover with the isolation boundary verified. The 'crack the drain and listen' practice is a key finding: the plant design does not support the task.",
        "Information still needed: whether XV-3301A has an interlock or permissive; what DCS displays the control room operator uses for fuel gas pressure; vendor closure safety device details; the mechanical crew's steps and what gas test they do; pyrophoric handling procedure (wetting or nitrogen blanketing); whether there is a written isolation certificate; any previous incidents with the filters.",
        "Watch for groups writing a procedure rather than an HTA (no plans, no hierarchy), or going to wrench-turn level on low-risk steps such as collecting tools. Use the P x C rule to redirect effort."
      ]
    },
    quiz: [
      { q: "In HTA, what is the purpose of a plan?", opts: ["To list the tools and PPE needed for the task.", "To record the time each step takes.", "To identify who approved the procedure.", "To state the order and conditions under which sub-goals are carried out."], a: 3, why: "Plans give the logic: sequence, conditions, cycles and timing. Errors in plans (wrong order, missed condition) are a major source of failure." },
      { q: "The P x C stopping rule says you should stop redescribing an operation when:", opts: ["you reach the level of individual hand movements.", "the procedure has the same number of steps.", "the product of the probability of inadequate performance and the cost of failure is acceptable.", "the task takes less than one minute."], a: 2, why: "Annett and Duncan's rule focuses effort where failure is both plausible and costly, and stops it where further detail adds nothing." },
      { q: "Which data source is generally the most valuable for an HTA of a field task?", opts: ["A walk-through at the equipment with experienced operators.", "The vendor's operating manual.", "The existing procedure alone.", "A questionnaire to all operators."], a: 0, why: "A walk-through captures work as done, physical cues, access problems and informal checks that documents miss." },
      { q: "Two operators describe different sequences for the same task. What should the analyst do?", opts: ["Record both, note the variation, and analyse why it exists and which is safer.", "Record the one in the procedure and discard the other.", "Record the sequence of the more senior operator.", "Average the two sequences."], a: 0, why: "Variation is a finding. It points to an under-specified procedure or a design that does not support one safe method." },
      { q: "Which of these is correctly written as an HTA operation?", opts: ["Depressurisation.", "Close vent valve VV-104.", "Ensure safety.", "The vent should be closed by the operator."], a: 1, why: "Operations start with a verb and name the equipment. Nouns, vague intentions and passive voice cannot be analysed for specific failures." },
      { q: "Why should communications such as 'confirm with control room that the receiver is lined up' appear as operations in an HTA?", opts: ["Because they are required by the permit system.", "Because the HTA must match the radio log.", "Because communication failures are a common route to error and must be analysed like any other step.", "They should not; communications belong in the procedure only."], a: 2, why: "Communication steps can be omitted, misunderstood or incomplete. If they are not in the HTA, those failures will not be found in the error analysis." }
    ],
    tools: ["HTA tabular template (number, step, plan, who, notes, work-as-done variation)", "Walk-through and talk-through interview guide", "HTA quality checklist"],
    facGuide: `<p><b>Timing (180 min, split across a lunch break):</b> teach 60 (purpose and data collection 15, hierarchy and numbering 10, plans 10, stopping rule 5, pig launcher worked example 15, quality checklist 5); sort 5; exercise 75 (10 talk-through role-play, 45 group drafting on flipchart or template, 20 gallery walk and critique); debrief 25; buffer 15.</p>
<p><b>How to run it:</b> the co-facilitator plays an operator during a 10-minute talk-through using P&amp;ID extract and photos; groups must question the 'operator' to get the information (answers are truthful but cover only what is asked, giving both operator versions if asked about the changeover order). This rehearses interviewing as well as HTA.</p>
<p><b>Common misconceptions:</b> HTA equals procedure; plans are optional; deeper is always better; the analyst should resolve differences between operators rather than record them.</p>
<p><b>Kit:</b> P&amp;ID extract of F-3301 A/B, photos of a typical filter separator closure and sump gauge, flipcharts, sticky notes for hierarchy building, HTA template.</p>
<p><b>Keep:</b> each group's HTA is reused in M3 for error analysis. Photograph the flipcharts.</p>`
  },
  /* ------------------------------------------------------------------ M3 */
  {
    id: "L3M3", n: 3,
    t: "Human error analysis, PIFs and the hierarchy of controls",
    mins: 180,
    obj: "Identify credible human failures at each critical step using a structured taxonomy, evaluate consequences, recovery and performance influencing factors, and select controls using the hierarchy of HF controls to reduce risk as low as reasonably practicable.",
    learn: `
<h2>From steps to failures</h2>
<p>The HTA tells you what should happen. Human error analysis asks, for each critical step, <b>what could credibly go wrong, what would happen, would anyone notice in time, and what makes the failure more or less likely</b>. Most practitioners use a guideword taxonomy, applied systematically to the bottom-level operations, in the same way that HAZOP applies guidewords to process parameters.</p>

<h2>A taxonomy of external error modes</h2>
<p>The most widely used taxonomy in the process industries derives from <b>SHERPA</b> (Systematic Human Error Reduction and Prediction Approach, Embrey, 1986). Each operation is classified by type, and only the guidewords for that type are applied.</p>
<div class="tbl"><table><thead><tr><th>Behaviour type</th><th>Error modes (code)</th><th>Pig launcher example</th></tr></thead><tbody>
<tr><td>Action</td><td>A1 too long/short; A2 mistimed; A3 wrong direction; A4 too much/little; A5 misaligned; A6 right action on wrong object; A7 wrong action on right object; A8 omitted; A9 incomplete; A10 wrong action on wrong object</td><td>KV-103 opened too fast (A4); VV-104 not opened fully (A9); BV-102 closed instead of KV-103 (A6)</td></tr>
<tr><td>Checking</td><td>C1 omitted; C2 incomplete; C3 right check on wrong object; C4 wrong check on right object; C5 mistimed; C6 wrong check on wrong object</td><td>Zero-pressure check done before the barrel has stopped venting (C5); gauge read but vent flow not checked (C2)</td></tr>
<tr><td>Retrieval</td><td>R1 information not obtained; R2 wrong information obtained; R3 retrieval incomplete</td><td>Operator reads the gauge on the adjacent receiver (R2)</td></tr>
<tr><td>Communication</td><td>I1 not communicated; I2 wrong information; I3 incomplete</td><td>Control room not told before MV-101 is throttled (I1)</td></tr>
<tr><td>Selection</td><td>S1 selection omitted; S2 wrong selection</td><td>Wrong pig size selected for the line (S2)</td></tr></tbody></table></div>
<p>The taxonomy is about <b>observable failures</b> (what went wrong), not causes. Causes and mechanisms (slip, lapse, rule-based or knowledge-based mistake) are added afterwards because they point to different controls. Add <b>violations</b> explicitly: SHERPA does not prompt for them, but routine and situational violations ("we always skip the nitrogen purge, there is no nitrogen quad on nights") are some of the most credible failures on real sites.</p>

<h2>Credibility, not completeness</h2>
<p>Applying every guideword to every step produces hundreds of rows and buries the important ones. Record a failure if it is <b>credible</b>: it has happened here or elsewhere, operators can describe how it could happen, or the PIFs make it plausible. Discard the incredible ones quickly, but keep a note of what was considered.</p>

<h2>The error analysis table</h2>
<div class="tbl"><table><thead><tr><th>Column</th><th>What goes in it</th></tr></thead><tbody>
<tr><td>Step (HTA ref.)</td><td>3.1 Operate closure pressure warning device; open closure</td></tr>
<tr><td>Failure (mode)</td><td>Closure opened with barrel still pressurised (A2 mistimed, following C1/C2 failure at 2.4)</td></tr>
<tr><td>Mechanism</td><td>Lapse after interruption, or rule-based mistake: gauge reads zero because the tapping is blocked with debris</td></tr>
<tr><td>Consequence</td><td>Door ejected or forced open; release of sour gas at the operator's face; potential fatality</td></tr>
<tr><td>Recovery</td><td>Pressure warning device should leak gas audibly if pressure remains; only if functional and not bypassed; very short time to recover</td></tr>
<tr><td>PIFs</td><td>Single gauge, no second indication; time pressure from receiving station; heat; contractor crew unfamiliar with this closure type</td></tr>
<tr><td>Existing controls</td><td>Procedure step, permit, pressure warning device</td></tr>
<tr><td>Recommendations</td><td>See hierarchy below</td></tr></tbody></table></div>

<h2>Performance influencing factors</h2>
<p>PIFs (also called performance shaping factors) are the conditions that make a failure more or less likely. The EI and HSE group them in three families. Rate each relevant PIF for the step as good, adequate or poor, and record the evidence.</p>
<div class="grid3">
<div class="card"><h4>Job</h4><p>Clarity of signals and cues; design of displays and controls; procedures; time available; workload; task complexity and novelty; working environment (heat, noise, lighting, PPE, BA); access and posture.</p></div>
<div class="card"><h4>Person</h4><p>Competence and experience with this task; fatigue and shift pattern; health and fitness; stress; familiarity with the specific equipment; language.</p></div>
<div class="card"><h4>Organisation</h4><p>Staffing levels; supervision; communication and handover; permit and isolation systems; production pressure; safety culture; contractor management; change management.</p></div></div>
<p>Texas City (2005) is a public example of PIFs combining: the raffinate splitter tower level transmitter indicated a falling level while the tower was overfilling, the start-up procedure did not reflect practice, communication at shift handover was poor, and the CSB found that operators had worked 12-hour shifts for many consecutive days. Any one of these might have been survivable. Together they made the failure likely and recovery unlikely.</p>
<div class="callout"><h4>PIFs are where the controls come from</h4><p>A failure analysis that lists errors but rates no PIFs ends with "retrain and remind". PIFs tell you what to change: a poor display, an unworkable procedure, an unrealistic time window, a missing second indication.</p></div>

<h2>Recovery</h2>
<p>For each failure ask: is there a cue that the failure has happened? Will it be noticed in time? Who notices? Can it be reversed? A failure with no cue before the consequence, or with a cue in the wrong place (an alarm in the control room for a failure only the field operator can correct), deserves particular attention. Designing in early, obvious, reversible feedback is one of the most effective HF controls.</p>

<h2>The hierarchy of human factors controls</h2>
<div class="tbl"><table><thead><tr><th>Level</th><th>Principle</th><th>Pig launcher examples</th></tr></thead><tbody>
<tr><td>1 Eliminate</td><td>Remove the task, the hazard or the opportunity for failure</td><td>Pig the line less often (corrosion programme permitting); use a multi-pig launcher that is loaded during turnaround only</td></tr>
<tr><td>2 Engineer</td><td>Make the failure physically impossible or self-revealing (interlocks, forcing functions, automation)</td><td>Mechanical key interlock sequence: closure cannot open unless vent is open and barrel valves are closed; closure safety device that cannot be released under pressure; second pressure indicator on the closure itself</td></tr>
<tr><td>3 Facilitate</td><td>Improve PIFs so correct performance is the easy path (layout, labelling, displays, tools)</td><td>Tag every valve legibly from the operating position; flow-direction arrows; vent line with visible flow indicator; shade over the closure</td></tr>
<tr><td>4 Administer</td><td>Procedures, checklists, independent verification, training, supervision</td><td>Revised procedure with critical step marked and a hold point for zero-pressure verification; independent check signed on the line-up sheet; drill for contractors</td></tr></tbody></table></div>
<p>Work down the hierarchy and justify why each higher level is not reasonably practicable before relying on a lower one. ALARP is a legal and moral test of proportion: a measure is reasonably practicable unless its cost (time, money, trouble) is grossly disproportionate to the risk reduction it gives. Training and procedures are necessary in nearly every case, but they are <b>not</b> sufficient for a step where a single error releases sour gas at the operator's face.</p>
<div class="callout or"><h4>Weak recommendations to challenge</h4><p>"Remind operators to be careful." "Retrain." "Add a warning to the procedure." "Supervisor to monitor." Each may have a place, but on their own they leave the PIFs untouched. Ask: what would make the error impossible, obvious, or easy to recover?</p></div>

<h3>Sort it</h3><p>Place each control at its level in the hierarchy.</p>
<div class="sortq" data-sort='[["Key interlock so the closure cannot open until the vent is open","Engineer"],["Remove the need to drain manually by fitting an automatic level-controlled drain","Eliminate"],["Turn valve tags to face the walkway and add flow arrows","Facilitate"],["Independent verification of the line-up signed on the checklist","Administer"],["Replace a dirty level glass with a magnetic level gauge readable from the drain valve","Facilitate"],["Refresher training on the draining procedure","Administer"]]' data-opts='["Eliminate","Engineer","Facilitate","Administer"]'></div>
<p class="src">Based on Embrey (1986) SHERPA; HSE Core Topic 3 and HSG48; Energy Institute, Guidance on human factors safety critical task analysis (2nd ed.) and Human Factors Briefing Notes; CCPS, Guidelines for Preventing Human Error in Process Safety; Reason, Human Error (1990); CSB investigation report, BP Texas City refinery explosion (2007).</p>`,
    activity: {
      title: "Draining sour water from a separator boot",
      time: "70 minutes",
      scn: `<p><span class="tag">Gas condensate stabilisation unit · Gulf region</span><span class="tag">Night shift, 02:30 · 33 °C, 85% humidity</span></p>
<p>Three-phase separator V-4102 runs at 28 barg with sour gas (approx. 2 mol% H2S), condensate and produced water. Water collects in a boot and is drained manually to the closed drain drum D-4190 (design 3.5 barg, relief to flare) about every 4 hours. The interface level transmitter LT-4103 on the boot has been unreliable for months and is marked "faulty" on the DCS; operators use a local level glass LG-4104, which is stained and hard to read at night. The drain valve DV-4105 is a 2-inch gate valve at grade; LG-4104 is on the boot 2 m above it and on the other side of the vessel skirt, so the operator cannot see the glass while operating the valve. There is a second block valve DV-4106 upstream of DV-4105, normally left open.</p>
<p>Operators describe the task as: "Put on the personal H2S monitor, open DV-4105, walk round to watch the glass, walk back and close when the interface gets to the lower mark. If you can't see, close when the sound changes." The procedure says "Drain water from V-4102 boot. Do not leave unattended." On nights there is one field operator for the stabilisation unit and the sulphur recovery unit area.</p>
<p>Last month, D-4190 high-pressure alarm came in during draining; the control room assumed a flare header pressure fluctuation. Gas blow-by was suspected later when the closed drain drum relief had lifted.</p>`,
      qs: [
        { q: "Build a short HTA (5 to 8 operations) of the draining task as actually done, and identify the critical steps.", hint: "Include preparation, opening, monitoring, closing and confirmation; mark where the hazard is." },
        { q: "For the two most critical steps, identify the credible failures using the taxonomy, with mechanism, consequence and recovery.", hint: "Think A1 (too long), A9, C1, C3, R2, violations (leaving to attend another call); what happens to the closed drain and to the operator?" },
        { q: "Rate the main PIFs for these steps (good, adequate, poor) with evidence from the scenario.", hint: "Display, layout, lighting, staffing, alarm credibility, procedure, fatigue at 02:30." },
        { q: "Recommend controls using the hierarchy, and explain which you would implement first and why under ALARP.", hint: "Eliminate the manual task? Engineer (interface trip, restriction orifice, valve position)? Facilitate (gauge relocation, lighting)? Administer?" },
        { q: "What does the D-4190 alarm event tell you about recovery, and what would you change?", hint: "Cue in the wrong place; control room and field communication; alarm credibility." }
      ],
      fac: [
        "HTA as done: 1 Don monitor and inform control room; 2 Open DV-4105; 3 Walk to LG-4104 and monitor interface; 4 Return to DV-4105 when interface approaches lower mark; 5 Close DV-4105; 6 Confirm closed and inform control room. Critical steps: 3 (monitoring), 4/5 (timing of closure), and the plan 'close when the sound changes'.",
        "Credible failures: operation too long (A1) because the interface passes the lower mark while the operator walks round or cannot read the glass, so condensate and then gas blow by to D-4190 (overpressure of drain system, relief to flare, possible loss of containment at a weak point of the drain system; sour gas at the drain hub). Check on wrong object or wrong information (R2/C3): reading a condensate/water interface as the gas/liquid interface in a stained glass. Omission/violation: leaving the valve open to answer a radio call from the SRU area. Mechanism: rule-based mistake (sound cue), lapse after interruption, situational violation driven by staffing.",
        "Recovery is weak: the only field cue is noise change at the drain; the D-4190 alarm is in the control room and was not believed. Time from interface reaching the drain to gas blow-by is short (minutes at 28 barg).",
        "PIFs: display poor (faulty LT, stained LG, out of sight of the valve); lighting poor at night; staffing poor (one operator for two areas); procedure poor (no criteria, no hold, 'do not leave unattended' not achievable); alarm credibility poor (faulty instrument, previous misinterpretation); fatigue adequate-to-poor at 02:30; competence probably adequate for experienced operators, poor for new starters.",
        "Controls by hierarchy: Eliminate: automatic interface level control to the closed drain or a sour water system, once LT reliability is restored. Engineer: repair LT-4103 and add a low-interface trip closing a drain shutdown valve; fit a restriction orifice to limit gas blow-by rate within closed drain capacity; Facilitate: relocate or add a magnetic level gauge visible from the drain valve, lighting, clean or replace the glass; Administer: procedure with stop criteria and a hold on leaving, staffing review for nights, operator and control room communication protocol. First: repair the transmitter (it removes a known degraded barrier quickly) and add a gauge visible from the valve while the engineered solution goes through MoC.",
        "The D-4190 alarm was a recovery cue that failed because it was not believed and arrived in a different place from the person who could act. Fix by making the alarm specific (drain drum high pressure during draining), credible (fix nuisance causes) and linked to a response: control room calls the field operator to close DV-4105 immediately.",
        "Watch for groups that propose only 'do not leave unattended' and 'retrain'. Ask them to show which PIF that changes."
      ]
    },
    quiz: [
      { q: "In the SHERPA taxonomy, an operator opens the kicker valve on the launcher instead of the barrel valve beside it. Which error mode is this?", opts: ["A8 Operation omitted", "A6 Right operation on wrong object", "A3 Operation in wrong direction", "C1 Check omitted"], a: 1, why: "The intended action (opening) was correct but it was applied to the wrong object (wrong valve). The mechanism is often a slip driven by similar, adjacent valves." },
      { q: "Why add violations explicitly when using a SHERPA-type taxonomy?", opts: ["Because SHERPA was designed for violations only.", "Because violations always cause the worst consequences.", "Because the guidewords prompt for unintended failures and routine or situational violations can be missed unless asked about directly.", "Because violations cannot be controlled by the hierarchy."], a: 2, why: "SHERPA error modes describe observable failures but do not prompt for deliberate deviations. Routine and situational violations are often the most credible failures on site." },
      { q: "A recommendation reads 'Remind operators not to leave the drain unattended'. What is the main weakness?", opts: ["It changes none of the PIFs that make leaving the drain likely (staffing, poor visibility, competing calls).", "It is too expensive.", "It is an engineering control and therefore disproportionate.", "It should be addressed to the control room instead."], a: 0, why: "Reminders sit at the bottom of the hierarchy and leave the conditions in place. Effective controls change the conditions or make the failure impossible or self-revealing." },
      { q: "Which control sits at the 'engineer' level of the hierarchy?", opts: ["A laminated checklist at the launcher.", "A mechanical key interlock that prevents the closure opening unless the vent is open.", "Relocating the valve tag to face the walkway.", "A toolbox talk before every pigging operation."], a: 1, why: "Engineering controls make the failure physically impossible or self-revealing. Checklists and toolbox talks are administrative; relabelling improves PIFs (facilitate)." },
      { q: "Under ALARP, when may a site rely mainly on procedures and training for a critical step?", opts: ["Whenever the procedure has been signed off by the operations manager.", "Whenever the task is performed by experienced staff.", "Never; procedures may not be used for critical steps.", "When higher-level controls have been considered and shown to be not reasonably practicable, i.e. their cost is grossly disproportionate to the risk reduction."], a: 3, why: "ALARP requires working down the hierarchy and justifying why stronger measures are not reasonably practicable. Procedures and training are then necessary but must be robust." },
      { q: "Which is the best example of a recovery problem rather than an initiating error?", opts: ["The operator opens the wrong drain valve.", "The drain drum high-pressure alarm appears only in the control room, where it is dismissed as a flare fluctuation, while only the field operator can close the drain.", "The pig is the wrong size.", "The operator does not wear a personal H2S monitor."], a: 1, why: "Recovery depends on a timely, credible cue reaching the person who can act. Here the cue is in the wrong place and is not believed, so the error is not recovered." }
    ],
    tools: ["Human error analysis worksheet (step, failure mode, mechanism, consequence, recovery, PIFs, existing controls, recommendations)", "SHERPA error mode prompt card", "PIF rating checklist (job, person, organisation)", "Hierarchy of HF controls card with ALARP prompts"],
    facGuide: `<p><b>Timing (180 min, split across the end of day 1 and start of day 2):</b> teach 65 (taxonomy 15, credibility and table 10, PIFs 15, recovery 10, hierarchy and ALARP 15); sort 5; scenario 70 (40 group, 30 plenary); then 30 applying the method to each group's own M2 filter separator HTA (two critical steps only); close 10.</p>
<p><b>How to run it:</b> do the pig launcher closure step together on the whiteboard first, row by row, before groups start. Hand out the prompt card and insist on a mode code for each failure. In plenary, build one combined table on screen.</p>
<p><b>Common misconceptions:</b> more rows means a better analysis; PIFs are the same as causes; ALARP means 'whatever the budget allows'; engineering controls are always disproportionate for existing plant. Challenge the last one with the cost of a closed drain overpressure incident.</p>
<p><b>Kit:</b> taxonomy prompt cards, PIF checklist, A3 worksheets, the M2 HTAs from each group, P&amp;ID sketch of V-4102 boot and drain arrangement.</p>
<p><b>Tip:</b> participants with HAZOP experience pick this up quickly; pair them with procedure writers and planners to mix perspectives.</p>`
  },
  /* ------------------------------------------------------------------ M4 */
  {
    id: "L3M4", n: 4,
    t: "Human reliability assessment: HEART and LOPA",
    mins: 165,
    obj: "Calculate and critically evaluate a human error probability using HEART, and judge when and how human actions may be credited as initiating events or independent protection layers in LOPA, including when not to quantify at all.",
    learn: `
<h2>Why quantify, and why be careful</h2>
<p>Human reliability assessment (HRA) estimates the probability that a person will fail a task. Process safety teams ask for numbers because LOPA, QRA and SIL determination need them: an initiating event frequency for "operator leaves drain open", or a probability of failure on demand (PFD) for "operator responds to high-level alarm". Kirwan's <i>Guide to Practical Human Reliability Assessment</i> and the HSE both stress that HRA is only as good as the qualitative analysis behind it. A number without an HTA, credible failure analysis and PIF assessment is a guess with decimal places.</p>
<div class="callout or"><h4>Qualitative first, always</h4><p>Quantify only after M2 and M3 are complete. The value of HRA lies mostly in the qualitative insight and in comparing options, not in the absolute number.</p></div>

<h2>HEART in outline</h2>
<p>The Human Error Assessment and Reduction Technique (HEART) was published by Jeremy Williams in the 1980s and is widely used in the process industries because it is quick, transparent and points directly at error-reduction measures. The steps are:</p>
<ol>
<li>Classify the task into one of the <b>generic task types</b> (GTTs), which gives a nominal human error probability.</li>
<li>Identify the relevant <b>error producing conditions</b> (EPCs), each with a maximum multiplier.</li>
<li>For each EPC, judge the <b>assessed proportion of affect</b> (APOA), from 0 to 1.</li>
<li>Calculate each assessed effect: <b>((maximum multiplier - 1) x APOA) + 1</b>.</li>
<li>Multiply the nominal HEP by all the assessed effects. Cap the result at 1.0.</li></ol>
<h3>Generic task types (nominal HEP and 5th-95th percentile bounds)</h3>
<div class="tbl"><table><thead><tr><th>GTT</th><th>Description (abridged)</th><th>Nominal HEP</th><th>Bounds</th></tr></thead><tbody>
<tr><td>A</td><td>Totally unfamiliar, performed at speed with no real idea of likely consequences</td><td>0.55</td><td>0.35-0.97</td></tr>
<tr><td>B</td><td>Shift or restore system to a new or original state on a single attempt without supervision or procedures</td><td>0.26</td><td>0.14-0.42</td></tr>
<tr><td>C</td><td>Complex task requiring high level of comprehension and skill</td><td>0.16</td><td>0.12-0.28</td></tr>
<tr><td>D</td><td>Fairly simple task performed rapidly or given scant attention</td><td>0.09</td><td>0.06-0.13</td></tr>
<tr><td>E</td><td>Routine, highly practised, rapid task involving relatively low level of skill</td><td>0.02</td><td>0.007-0.045</td></tr>
<tr><td>F</td><td>Restore or shift a system to original or new state following procedures, with some checking</td><td>0.003</td><td>0.0008-0.007</td></tr>
<tr><td>G</td><td>Completely familiar, well-designed, highly practised routine task, performed several times per hour to the highest standards by highly motivated, trained and experienced staff, with time to correct errors but without significant job aids</td><td>0.0004</td><td>0.00008-0.009</td></tr>
<tr><td>H</td><td>Respond correctly to system command even when there is an augmented or automated supervisory system providing accurate interpretation of system state</td><td>0.00002</td><td>0.000006-0.0009</td></tr>
<tr><td>M</td><td>Miscellaneous task for which no description can be found</td><td>0.03</td><td>0.008-0.11</td></tr></tbody></table></div>
<h3>Selected error producing conditions (maximum multiplier)</h3>
<div class="tbl"><table><thead><tr><th>EPC</th><th>Condition (abridged)</th><th>Max</th></tr></thead><tbody>
<tr><td>1</td><td>Unfamiliarity with a situation which is potentially important but which only occurs infrequently or is novel</td><td>x17</td></tr>
<tr><td>2</td><td>Shortage of time available for error detection and correction</td><td>x11</td></tr>
<tr><td>3</td><td>Low signal-to-noise ratio</td><td>x10</td></tr>
<tr><td>4</td><td>Means of suppressing or overriding information or features which is too easily accessible</td><td>x9</td></tr>
<tr><td>5</td><td>No means of conveying spatial and functional information in a form operators can readily assimilate</td><td>x8</td></tr>
<tr><td>6</td><td>Mismatch between the operator's model of the world and that imagined by the designer</td><td>x8</td></tr>
<tr><td>7</td><td>No obvious means of reversing an unintended action</td><td>x8</td></tr>
<tr><td>8</td><td>Channel capacity overload, particularly from simultaneous presentation of non-redundant information</td><td>x6</td></tr>
<tr><td>11</td><td>Ambiguity in the required performance standards</td><td>x5</td></tr>
<tr><td>12</td><td>Mismatch between perceived and real risk</td><td>x4</td></tr>
<tr><td>13</td><td>Poor, ambiguous or ill-matched system feedback</td><td>x4</td></tr>
<tr><td>15</td><td>Operator inexperience (e.g. newly qualified but not expert)</td><td>x3</td></tr>
<tr><td>16</td><td>Impoverished quality of information conveyed by procedures and person-to-person interaction</td><td>x3</td></tr>
<tr><td>17</td><td>Little or no independent checking or testing of output</td><td>x3</td></tr>
<tr><td>26</td><td>No obvious way to keep track of progress during an activity</td><td>x1.4</td></tr>
<tr><td>35</td><td>Disruption of normal work-sleep cycles</td><td>x1.1</td></tr></tbody></table></div>
<p>The full list has 38 EPCs; use the complete course-pack tables.</p>

<h2>Worked example: opening the launcher closure under pressure</h2>
<p>From M2 and M3: step 2.4 / 3.1, failure to confirm the barrel is depressurised before opening the closure.</p>
<p><b>GTT F</b> (restore or shift a system following procedures, with some checking): nominal HEP 0.003.</p>
<div class="tbl"><table><thead><tr><th>EPC</th><th>Max</th><th>APOA</th><th>Justification</th><th>Assessed effect</th></tr></thead><tbody>
<tr><td>13 Poor feedback</td><td>4</td><td>0.4</td><td>Single gauge PG-106; tapping can block with debris and read zero</td><td>(3 x 0.4) + 1 = 2.2</td></tr>
<tr><td>15 Inexperience</td><td>3</td><td>0.3</td><td>Contractor crew rotate; some have not used this closure type</td><td>(2 x 0.3) + 1 = 1.6</td></tr>
<tr><td>12 Perceived vs real risk</td><td>4</td><td>0.2</td><td>Monthly task; 'the gauge always reads zero by now'</td><td>(3 x 0.2) + 1 = 1.6</td></tr>
<tr><td>17 No independent check</td><td>3</td><td>0.5</td><td>No second person verifies zero pressure</td><td>(2 x 0.5) + 1 = 2.0</td></tr></tbody></table></div>
<p>HEP = 0.003 x 2.2 x 1.6 x 1.6 x 2.0 = 0.003 x 11.26 = <b>0.034</b> (about 1 in 30 per operation).</p>
<p><b>Option testing.</b> Add a second pressure indicator on the closure and a signed independent zero-pressure check: EPC 13 APOA falls to 0.1 (effect 1.3) and EPC 17 APOA to 0.1 (effect 1.2). HEP = 0.003 x 1.3 x 1.6 x 1.6 x 1.2 = 0.003 x 3.99 = <b>0.012</b>. A worthwhile improvement, roughly a factor of three. A closure interlock that cannot be released under pressure changes the question entirely: now both the interlock and the person must fail, and HEART is no longer the right tool for the combined probability.</p>
<p><b>Sensitivity.</b> Had the team chosen GTT E (0.02) instead of F, the base-case HEP would be 0.02 x 11.26 = 0.23, nearly seven times higher. Always record why a GTT was chosen and test the alternative.</p>

<h2>Limits of HRA</h2>
<ul>
<li><b>Judgement-heavy:</b> GTT and APOA choices drive the answer; analysts can differ by an order of magnitude.</li>
<li><b>Dependence:</b> successive errors by the same person or crew are not independent. An "independent" check by the same crew under the same time pressure is not independent. THERP's dependence model shows how much this matters: at high dependence the conditional failure probability of the second action is (1 + P)/2, i.e. at least 0.5.</li>
<li><b>Diagnosis and violations:</b> HEART handles execution tasks better than diagnosis in complex upsets, and is weak for deliberate deviations and organisational drift.</li>
<li><b>False precision:</b> report one significant figure and the bounds; never compare 0.034 with 0.031 as if they were different.</li></ul>

<h2>Humans in LOPA</h2>
<p><b>As initiating events.</b> An initiating event frequency = probability of failure per opportunity x number of opportunities per year. If draining is done 6 times a day (about 2,190 times a year) and the HEP of leaving the drain open too long is 0.001, the frequency is about 2 per year: a high-frequency initiating event. Published LOPA guidance (CCPS) gives generic ranges for operator failure to execute a routine procedure of around 1 in 10 to 1 in 1,000 per opportunity, depending on conditions; site-specific analysis should justify where in that range a task sits.</p>
<p><b>As independent protection layers (IPLs).</b> Human response to an alarm is commonly credited with a PFD of 0.1, and generally no better, only when all of these hold:</p>
<ul>
<li>The alarm is <b>independent</b> of the initiating event and of other credited IPLs (separate sensor and logic from the BPCS loop that failed).</li>
<li>The alarm is clear, prioritised, and not lost in standing or nuisance alarms.</li>
<li>There is enough time to detect, diagnose and act: commonly at least 10 minutes from alarm to the point of no return, and more for complex diagnosis or field actions.</li>
<li>The required action is simple, documented, trained and drilled, and the operator has the authority and the means to take it.</li>
<li>Staffing ensures someone is available to respond at all times.</li>
<li>Performance is auditable: alarm response is tested or drilled and records are kept.</li></ul>

<h2>When not to quantify</h2>
<ul>
<li>When the qualitative analysis already shows reasonably practicable improvements: implement them; a number adds nothing.</li>
<li>When the number would be used to justify not doing something that is reasonably practicable.</li>
<li>When the dominant failure is a violation, a knowledge-based diagnosis in a novel upset, or organisational, where first-generation methods are weak.</li>
<li>When the task is not yet understood well enough to analyse.</li></ul>
<p class="src">Based on Williams, HEART: a proposed method for assessing and reducing human error (1986) and A data-based method for assessing and reducing human error (1988); Kirwan, A Guide to Practical Human Reliability Assessment (1994); HSE RR679 Review of human reliability assessment methods (2009); Swain and Guttmann, THERP handbook NUREG/CR-1278 (1983); CCPS, Layer of Protection Analysis (2001) and Guidelines for Initiating Events and Independent Protection Layers in LOPA (2015)</p>`,
    activity: {
      title: "Can the operator be an IPL? The flare knock-out drum",
      time: "60 minutes",
      scn: `<p><span class="tag">Gas plant flare system · Gulf region</span><span class="tag">LOPA workshop · plant upset case</span></p>
<p>A LOPA team is assessing the scenario "liquid carry-over from HP flare knock-out drum D-6001 to the flare tip, causing burning liquid rain onto the plant and the adjacent road". Initiating event: failure of the KO drum pump-out level control loop LIC-6002 (BPCS), frequency 0.1 per year. Proposed IPLs:</p>
<ol>
<li>Operator response to high-level alarm LAH-6002, PFD 0.1.</li>
<li>Operator response to high-high-level alarm LAHH-6003 from a separate transmitter, PFD 0.1.</li>
<li>Second pump-out pump on auto-start from LT-6003, PFD 0.1.</li></ol>
<p>Facts gathered by the HF member of the team:</p>
<ul>
<li>LAH-6002 is generated from the same transmitter LT-6002 that feeds the failed control loop.</li>
<li>From LAHH-6003 to liquid reaching the drum outlet at maximum relief load takes about 8 minutes. At normal flaring rates it takes about 40 minutes.</li>
<li>Maximum relief loads occur during plant-wide upsets (e.g. total power failure), when the control room historically receives more than 150 alarms in the first 10 minutes.</li>
<li>The response is to start the standby pump locally (field operator, about 6 minutes' walk) or to reduce flaring by isolating sources, which requires diagnosis.</li>
<li>Response to LAHH-6003 is not in any procedure and has never been drilled.</li></ul>`,
      qs: [
        { q: "Which of the proposed human IPLs can be credited, and on what grounds? Test each against independence, time, clarity, procedure/training and auditability.", hint: "Shared transmitter; time at maximum load; alarm flood; field action time." },
        { q: "Use HEART to estimate the HEP for the operator successfully responding to LAHH-6003 during a plant-wide upset. State your GTT and EPCs with APOAs.", hint: "Consider D or C; EPC 2 (time), EPC 8 (overload), EPC 1 (rare situation), EPC 16 (no procedure)." },
        { q: "Repeat the estimate for the normal-flaring case (40 minutes available), after the site writes and drills a response procedure. What does the difference show?", hint: "Which EPCs fall away? Is a PFD of 0.1 defensible in this case?" },
        { q: "What would you recommend to the LOPA team, and what should not be done with these numbers?", hint: "Split scenarios by load case; engineered alternatives; alarm rationalisation; do not stack human IPLs." }
      ],
      fac: [
        "IPL 1 (LAH-6002) cannot be credited: it uses the same transmitter as the failed BPCS loop, so it is not independent of the initiating event. IPL 2 (LAHH-6003) is independent in hardware but fails on time (8 minutes at maximum load, with a 6-minute walk), on clarity (alarm flood of more than 150 alarms in 10 minutes) and on procedure, training and auditability. IPL 3 is an engineered layer and should be checked as such, but note that it shares LT-6003 with IPL 2, so IPL 2 and IPL 3 are not independent of each other either.",
        "Upset case, a reasonable HEART: GTT D (0.09) or C (0.16) given diagnosis under pressure. EPC 2 time shortage x11 APOA 0.5 gives 6.0; EPC 8 overload x6 APOA 0.6 gives 4.0; EPC 1 unfamiliarity x17 APOA 0.2 gives 4.2; EPC 16 poor procedural information x3 APOA 0.8 gives 2.6. Product with GTT D: 0.09 x 6.0 x 4.0 x 4.2 x 2.6 = about 23.6, capped at 1.0. Any defensible choice gives a probability close to 1. The operator cannot be credited for the upset case.",
        "Normal flaring case with procedure and drills: GTT F (0.003) with EPC 2 APOA 0.1 (effect 2.0) and perhaps EPC 15 inexperience x3 APOA 0.2 (1.4): about 0.003 x 2.0 x 1.4 = 0.008. This supports a PFD of 0.1 as a conservative credit for that case, provided independence and auditability conditions are met. The difference shows that human reliability is scenario-specific: the same operator and alarm can be a valid IPL in one demand case and useless in another.",
        "Recommendations: split the LOPA into load cases; do not credit the operator for the maximum-load case; consider an engineered layer (independent SIS trip on high-high level, larger drum hold-up, or pump auto-start from an independent transmitter); rationalise alarms so that LAHH-6003 is high priority and not lost in floods; write and drill the response procedure; record response times in drills.",
        "Do not: credit two operator responses in the same scenario (same person, same control room, high dependence); quote HEART results to three significant figures; use HEART to argue that a missing engineered layer is unnecessary.",
        "Accept different GTT/APOA choices if justified; the teaching point is that the conclusion is robust to reasonable choices in the upset case."
      ]
    },
    quiz: [
      { q: "In HEART, an EPC has a maximum multiplier of 11 and the team assesses the proportion of affect as 0.4. What is the assessed effect?", opts: ["4.4", "5.0", "11.4", "0.4"], a: 1, why: "Assessed effect = ((11 - 1) x 0.4) + 1 = 5.0. Multiplying 11 by 0.4 directly (4.4) is a common mistake." },
      { q: "What is the nominal HEP for HEART generic task type F (restore or shift a system to an original or new state following procedures, with some checking)?", opts: ["0.09", "0.02", "0.0004", "0.003"], a: 3, why: "GTT F has a nominal HEP of 0.003 (bounds 0.0008-0.007). D is 0.09, E is 0.02 and G is 0.0004." },
      { q: "A LOPA team proposes to credit operator response to a high-level alarm generated from the same transmitter as the failed level control loop. Why is this not acceptable?", opts: ["Because the alarm is not independent of the initiating event.", "Because operator responses can never be credited in LOPA.", "Because the PFD must be at least 0.01.", "Because alarms must be audible in the field."], a: 0, why: "An IPL must be independent of the initiating event. If the transmitter fails, both the control and the alarm are lost." },
      { q: "Which condition is commonly required before crediting a human response as an IPL with PFD 0.1?", opts: ["The operator has more than ten years' experience.", "The task is covered by a permit to work.", "Sufficient time from alarm to consequence for detection, diagnosis and action, commonly at least 10 minutes, with a trained, drilled, documented response.", "The site has had no incidents involving that alarm."], a: 2, why: "Time, independence, clarity, a documented and drilled response, staffing and auditability are the usual conditions; experience and incident history are not substitutes." },
      { q: "A routine draining task is performed 2,000 times a year with an estimated HEP of 0.001 for leaving the drain open too long. What is the initiating event frequency?", opts: ["0.001 per year", "2 per year", "0.5 per year", "2,000 per year"], a: 1, why: "Frequency = HEP per opportunity x opportunities per year = 0.001 x 2,000 = 2 per year." },
      { q: "When is quantification of human error least useful?", opts: ["When comparing two design options for the same task.", "When a LOPA requires a justified initiating event frequency.", "When checking whether a human response IPL is credible.", "When the qualitative analysis has already identified reasonably practicable improvements that should simply be implemented."], a: 3, why: "If reasonably practicable improvements are known, implement them. Quantifying risks delaying action or being used to argue against it." }
    ],
    tools: ["HEART calculation spreadsheet with full GTT and EPC tables", "Human IPL validation checklist (independence, time, clarity, procedure, drill, audit)", "HRA sensitivity record sheet"],
    facGuide: `<p><b>Timing (165 min):</b> teach 70 (why and when to quantify 10, HEART method 20, worked example done live on screen 20, limits and dependence 10, LOPA 10); individual HEART calculation exercise 15 (a short third task, see key); scenario 60 (35 group, 25 plenary); close 20 including when not to quantify.</p>
<p><b>How to run it:</b> do the worked example with calculators, not just slides; ask each table to change one APOA and see the result move. The individual calculation (P4, assessed for HP3.5) uses the M3 boot drain: failure to close DV-4105 before the interface reaches the lower mark. Key: GTT F 0.003; EPC 13 x4, APOA 0.6 (glass out of sight) = 2.8; EPC 2 x11, APOA 0.2 = 3.0; EPC 35 x1.1, APOA 1.0 = 1.1; HEP = 0.003 x 9.24 = 0.028. Answers within 10% are competent.</p>
<p><b>Common misconceptions:</b> multiplying the maximum multiplier by the APOA directly; treating the HEART output as a measured value; crediting two operator actions in one scenario; believing that any alarm plus an operator equals PFD 0.1.</p>
<p><b>Kit:</b> calculators, printed full HEART tables (all 9 GTTs and 38 EPCs with descriptions, from the course pack), spreadsheet template, D-6001 LOPA sheet.</p>
<p><b>Accuracy note:</b> always issue the full EPC table from the source; the learn page lists only a selection. Remind participants that published LOPA guidance values are generic and must be justified for the site.</p>`
  },
  /* ------------------------------------------------------------------ M5 */
  {
    id: "L3M5", n: 5,
    t: "Human factors engineering in design and management of change",
    mins: 165,
    obj: "Evaluate projects, control rooms, alarm systems and plant changes against human factors engineering requirements, and apply HF screening within management of change so that new error traps are not built in.",
    learn: `
<h2>Design decides most of the PIFs</h2>
<p>Almost every PIF you rated in M3 was fixed by a designer before the operator arrived: where the level glass is, which way the valve tag faces, what the alarm says, how many alarms arrive in an upset. Changing these after start-up is expensive and often impossible. <b>Human factors engineering (HFE)</b> is the discipline of putting the user's tasks and limitations into the design from concept onwards, so that the plant supports correct performance and makes errors obvious and recoverable.</p>

<h2>HFE in projects: IOGP Report 454</h2>
<p>IOGP Report 454 <i>Human factors engineering in projects</i> sets out how operators should integrate HFE into capital projects, scaled to the project's size and novelty. The core elements are:</p>
<div class="tbl"><table><thead><tr><th>Phase</th><th>Key HFE activities</th></tr></thead><tbody>
<tr><td>Concept / select</td><td>HFE screening to decide the scope of HFE needed; identify HFE issues (manning philosophy, remote operation, harsh environment, novel technology); lessons from similar facilities</td></tr>
<tr><td>FEED</td><td>HFE strategy and implementation plan; HFE requirements in the basis of design and specifications (including vendor packages); task requirements analysis for safety-critical and frequent tasks; control room and layout concepts; early 3D model reviews with operators and maintainers</td></tr>
<tr><td>Detailed design</td><td>Workplace and equipment design to HFE standards (access, valve operability, lifting, labelling); control room and HMI design; alarm philosophy and rationalisation; 30/60/90% model reviews; vendor package HFE reviews</td></tr>
<tr><td>Construction and commissioning</td><td>HFE verification walk-downs against requirements; punch-listing of HFE defects; validation of procedures and training on the real plant</td></tr>
<tr><td>Operation</td><td>Feedback of HFE lessons into company standards; HF screening in MoC</td></tr></tbody></table></div>
<p>The common failure is that HFE requirements stop at the main contractor and never reach the vendor packages, so the compressor skid, the chemical injection package and the metering skid arrive with valves behind the frame, gauges facing the wall and tags in the vendor's own format.</p>

<h2>Workplace: access, valves and labelling</h2>
<p>Many companies classify manual valves by how often and how urgently they are operated, and set access rules for each class. A typical scheme:</p>
<div class="grid3">
<div class="card"><h4>Frequent or emergency</h4><p>Operable from grade or a permanent platform, without ladders, within the preferred operating height and reach zone, with clear access routes. Includes emergency isolation valves and anything operated daily.</p></div>
<div class="card"><h4>Occasional</h4><p>Operable from grade, a permanent platform or a fixed ladder with suitable posture; chain wheels and extension spindles only where justified.</p></div>
<div class="card"><h4>Rare</h4><p>Maintenance and turnaround valves; temporary access (mobile platforms, scaffold) acceptable if planned.</p></div></div>
<p>Exact heights, reach and force limits come from company standards, many of which are derived from ASTM F1166 and the relevant ISO ergonomics standards. Typical issues found at 3D model review: handwheels above head height or behind pipework; valves whose position cannot be seen from where they are operated; level gauges out of sight of the drain valve (the M3 draining case); gearbox valves needing hundreds of turns with no power actuator; no room for BA sets or rescue on sour equipment.</p>
<p><b>Labelling</b> is the cheapest HF control and one of the most neglected. Good practice: every operable item tagged with its unique number and a short functional description; tags readable from the normal operating position and facing the access route; consistent format plant-wide and matching P&amp;IDs, procedures and DCS; line identification and flow arrows; durable materials for heat, UV and sand; and identical equipment (A/B trains, parallel lines) differentiated clearly.</p>

<h2>Control rooms: ISO 11064</h2>
<p>ISO 11064 <i>Ergonomic design of control centres</i> covers the process from principles to evaluation in seven parts: principles for design (Part 1), arrangement of control suites (2), control room layout (3), workstation layout and dimensions (4), displays and controls (5), environmental requirements (6) and evaluation (7). Its central principles are a <b>user-centred, iterative</b> design process; design based on <b>task analysis</b> and function allocation; involvement of operators throughout; and <b>verification and validation</b> before the room is handed over. Practical points for oil and gas: sight lines to shared overview displays; workstation layout matched to the operator's area of responsibility; control of glare, noise and temperature; separating the control room from through-traffic and visitors; and space for emergency roles (incident commander, extra operators) during an upset.</p>

<h2>Alarm management: EEMUA 191</h2>
<p>An alarm should exist only if it requires a timely operator action. EEMUA 191 (with IEC 62682 and ANSI/ISA-18.2) provides the lifecycle: alarm philosophy, identification, rationalisation (each alarm justified with cause, consequence, response, time to respond and priority), design, implementation, monitoring and management of change. EEMUA 191 gives benchmarks such as:</p>
<div class="tbl"><table><thead><tr><th>Measure</th><th>EEMUA 191 guidance (per operator)</th></tr></thead><tbody>
<tr><td>Long-term average alarm rate in steady operation</td><td>Less than 1 alarm per 10 minutes is very likely to be acceptable; 1 per 5 minutes is manageable; 1 per 2 minutes is likely to be over-demanding; more than 1 per minute is very likely to be unacceptable</td></tr>
<tr><td>Alarms in the 10 minutes following a major plant upset</td><td>Under 10 should be manageable; 20 to 100 is hard to cope with; more than 100 is definitely excessive and very likely to lead to the operator abandoning use of the system</td></tr>
<tr><td>Priority distribution (approximate)</td><td>Most alarms low priority, fewer medium, few high (often about 80 / 15 / 5 per cent)</td></tr>
<tr><td>Standing and chattering alarms</td><td>Standing alarms should be few and reviewed; chattering and fleeting alarms eliminated</td></tr></tbody></table></div>
<p>ISA-18.2 adds a widely used <b>alarm flood</b> definition: more than 10 alarms in 10 minutes for one operator. The HSE report on the 1994 Texaco Milford Haven refinery explosion found that in the last 11 minutes before the explosion the two operators had to recognise, acknowledge and act on 275 alarms, many of them poorly prioritised. That finding strongly influenced the first edition of EEMUA 191 (1999).</p>
<div class="callout"><h4>Tools that create new traps</h4><p>Shelving, suppression and state-based alarming reduce floods but can hide a real alarm. Each needs rules: who may shelve, for how long, with what visibility on shift handover, and how shelved alarms are reviewed. This is the same issue as trip overrides in M1.</p></div>

<h2>HF in management of change</h2>
<p>Many incidents follow changes that were reviewed for process and mechanical effects but not for their effect on people. Before the Longford explosion (1998), plant engineers had been relocated to head office, and the Royal Commission found that operators had not been given the knowledge to recognise the danger of reintroducing warm lean oil into a heat exchanger embrittled by extreme cold. Organisational changes (de-manning, centralising control rooms, outsourcing maintenance) change tasks and workload as surely as hardware changes. HF screening should be a standard part of every MoC, with escalation to an HF specialist when answers are "yes" or "not sure".</p>
<div class="callout or"><h4>HF screening questions for MoC</h4><ol>
<li>Does the change add, remove or alter any task, including maintenance, testing, start-up and emergency tasks?</li>
<li>Does it affect a task on the SCT register, or create a new safety-critical task?</li>
<li>Does it change displays, alarms, controls, trip overrides or the alarm load on any operator?</li>
<li>Does it change equipment layout, access, valve operability, lifting or labelling?</li>
<li>Does it change staffing, shift pattern, roles, supervision, workload or the span of control?</li>
<li>Does it change procedures, permits, isolations or communication routes?</li>
<li>Does it require new knowledge or skills, and will people be competent before start-up?</li>
<li>Does it introduce equipment that looks like, but behaves differently from, existing equipment?</li>
<li>Have the people who will do the work reviewed it?</li>
<li>Is it temporary, and if so, how will the temporary state be tracked and ended?</li></ol></div>

<h3>Sort it</h3><p>Which EEMUA-style judgement fits each alarm statistic for one operator?</p>
<div class="sortq" data-sort='[["Average of 1 alarm every 15 minutes in steady operation","Very likely acceptable"],["140 alarms in the 10 minutes after a compressor trip","Over-demanding or excessive"],["Average of 2 alarms per minute all shift","Over-demanding or excessive"],["7 alarms in the 10 minutes after a pump trip","Manageable"],["Average of 1 alarm every 5 minutes in steady operation","Manageable"],["Average of 1 alarm every 2 minutes in steady operation","Over-demanding or excessive"]]' data-opts='["Very likely acceptable","Manageable","Over-demanding or excessive"]'></div>
<p class="src">Based on IOGP Report 454, Human factors engineering in projects (2011); ISO 11064 Parts 1-7, Ergonomic design of control centres; EEMUA Publication 191, Alarm systems: a guide to design, management and procurement (3rd ed.); ANSI/ISA-18.2 and IEC 62682; HSE, The explosion and fires at the Texaco Refinery, Milford Haven, 24 July 1994; Hopkins, Lessons from Longford (2000); CCPS, Human Factors Methods for Improving Performance in the Process Industries.</p>`,
    activity: {
      title: "One control room, two plants",
      time: "60 minutes",
      scn: `<p><span class="tag">Gas plant and NGL fractionation unit · Gulf region</span><span class="tag">MoC review · central control room consolidation</span></p>
<p>To cut costs, the site proposes to close the local control room of the NGL fractionation unit (deethaniser, depropaniser, debutaniser, LPG storage) and move its operation into the main gas plant central control room 3 km away. The NGL operator console will be added beside the existing inlet/amine console. The proposal is to staff the combined area with the existing gas plant console operator plus one extra panel operator on days only; at night one panel operator would cover both the inlet/amine and NGL consoles, with a supervisor available. The MoC form has been completed by the project engineer; the HF section reads "No impact: same DCS, same operators trained".</p>
<p>Data gathered from the DCS alarm journal (last 3 months):</p>
<ul>
<li>Inlet/amine console: average 9 alarms per hour in steady operation; 31 standing alarms.</li>
<li>NGL console: average 14 alarms per hour; 58 standing alarms; the top 10 alarms are 62% of all alarms, including a chattering reflux drum level alarm.</li>
<li>During the last LPG compressor trip, the NGL console received 118 alarms in the first 10 minutes.</li></ul>
<p>Other facts: the NGL unit has local manual tasks during upsets (resetting the propane refrigeration compressor, lining up LPG to flare). The NGL field operators currently speak face to face with their panel operator. The new console location has a window behind it causing glare on two of the four screens in the afternoon.</p>`,
      qs: [
        { q: "Apply the MoC HF screening questions. Which answers are 'yes' or 'not sure', and is the 'No impact' statement acceptable?", hint: "Workload, alarms, staffing, communication, SCT register, control room environment." },
        { q: "Evaluate the alarm data against EEMUA 191 for the combined night-shift console. What is the combined steady-state rate, and how should the upset figure be judged?", hint: "Add rates; convert to per-10-minute; compare upset data to the 10-minute benchmarks." },
        { q: "Identify the safety-critical tasks whose PIFs this change affects, and how.", hint: "Upset response, alarm response IPLs in LOPA, communication with field operators, emergency shutdown." },
        { q: "What conditions or design changes would you require before the MoC is approved?", hint: "Alarm rationalisation first, staffing study, ISO 11064 layout review, communication protocol, validation." }
      ],
      fac: [
        "'No impact' is not acceptable. Yes or not sure on: Q1 tasks (upset tasks now coordinated remotely), Q2 SCT register (alarm response and ESD tasks, possibly LOPA-credited), Q3 alarm load (combined console), Q5 staffing and workload (one night operator for two consoles), Q6 communications (face-to-face replaced by radio), Q7 competence (inlet operators may not be trained on NGL), Q4 workplace (glare on screens). The MoC must be escalated to an HF specialist review.",
        "Combined steady-state rate at night: 9 + 14 = 23 alarms per hour, about 3.8 per 10 minutes, or one every 2.6 minutes: well above the 'very likely acceptable' level (under 1 per 10 minutes) and worse than 'manageable' (1 per 5 minutes), approaching 'likely to be over-demanding' (1 per 2 minutes). Upset: 118 alarms in 10 minutes from the NGL console alone is above 100, 'definitely excessive'; with a simultaneous inlet upset the night operator would be overwhelmed. 89 standing alarms and a chattering alarm add to the load and undermine credibility.",
        "Affected SCTs and PIFs: response to NGL high-level and high-pressure alarms (time, overload, credibility), any LOPA credits for operator response (likely invalid on the combined console), ESD and blowdown decisions for both units (one person, competing priorities), field-panel coordination during compressor trips (communication), shift handover across two units, competence on unfamiliar unit (inexperience).",
        "Conditions: complete alarm rationalisation on the NGL console before transfer (address top 10, chattering, standing alarms) and set targets in line with EEMUA 191; perform a workload and staffing assessment (e.g. EI or HSE staffing assessment approach) for normal, upset and emergency scenarios including nights; review LOPA credits for operator response; ISO 11064-based layout review (glare, sight lines, console separation, space for extra staff in upsets); communication protocol and radio coverage for NGL field operators; competence plan with simulator or upset training; validate with operators using scenario walk-throughs before go-live; post-implementation review at 3 months.",
        "Highlight that organisational and control room changes are the classic 'invisible' MoC. Refer back to the bow-tie: the operator as a barrier is being degraded without a hardware change.",
        "If groups conclude 'reject the MoC', push them to state what evidence would make it acceptable; the aim is a safe change, not no change."
      ]
    },
    quiz: [
      { q: "According to EEMUA 191, which long-term average alarm rate in steady operation is very likely to be acceptable for one operator?", opts: ["Less than 1 alarm per 10 minutes", "Up to 1 alarm per minute", "Up to 10 alarms per 10 minutes", "Up to 100 alarms per hour"], a: 0, why: "EEMUA 191 judges an average of less than one alarm per 10 minutes as very likely to be acceptable; more than one per minute is very likely to be unacceptable." },
      { q: "A console receives 140 alarms in the 10 minutes after a compressor trip. How does EEMUA 191 characterise this?", opts: ["Manageable, as long as alarms are prioritised.", "Hard to cope with but acceptable for short periods.", "Acceptable during upsets.", "Definitely excessive and very likely to lead to the operator abandoning use of the alarm system."], a: 3, why: "More than 100 alarms in 10 minutes after an upset is described as definitely excessive; under 10 should be manageable." },
      { q: "What is the main purpose of HFE screening at the concept stage of a project (IOGP 454)?", opts: ["To select the control system vendor.", "To decide the scope and depth of HFE effort needed, based on the project's human factors issues and novelty.", "To write operating procedures.", "To carry out the HAZOP."], a: 1, why: "Screening scales HFE effort to the project and identifies the issues (manning, environment, novel technology) the HFE plan must address." },
      { q: "Which is a central principle of ISO 11064 control centre design?", opts: ["Control rooms should be designed by the DCS vendor alone.", "Layout should maximise the number of screens per operator.", "A user-centred, iterative design process based on task analysis, with operator involvement and verification and validation.", "Control rooms should be located as close as possible to the process units."], a: 2, why: "ISO 11064 Part 1 sets out a user-centred, iterative process grounded in task analysis, with verification and validation before handover." },
      { q: "An MoC proposes reducing night-shift operators from two to one on a unit. Which HF screening question is most directly triggered?", opts: ["Does the change affect staffing, workload or span of control?", "Does the change alter equipment layout, access or labelling?", "Does the change introduce equipment that looks like, but behaves differently from, existing equipment?", "Is the change temporary, and how will it be tracked?"], a: 0, why: "Organisational changes alter workload and the human barriers the site depends on. Staffing and workload assessment is required, including upset and emergency scenarios." },
      { q: "Why do HFE requirements often fail to reach the final plant on large projects?", opts: ["Because HFE standards such as ASTM F1166 do not apply to packaged equipment.", "Because IOGP 454 limits HFE to the control room and HMI.", "Because HFE verification cannot start until the plant is operating.", "Because requirements are not written into vendor package specifications, so skids arrive designed to the vendor's own practice."], a: 3, why: "IOGP 454 emphasises flowing HFE requirements into all specifications and reviewing vendor packages; otherwise packaged equipment introduces access and labelling problems." }
    ],
    tools: ["MoC HF screening checklist (10 questions)", "Alarm performance KPI sheet (EEMUA 191 benchmarks)", "3D model review HFE checklist (access, valves, labelling, maintenance)"],
    facGuide: `<p><b>Timing (165 min, with a break):</b> teach 70 (design and PIFs 5, IOGP 454 15, access and labelling 15, ISO 11064 10, EEMUA 191 and Milford Haven 15, MoC 10); sort 5; scenario 60 (35 group, 25 plenary); close 30 with a 'labelling walk' of the training site or photos of real plant labels for critique.</p>
<p><b>How to run it:</b> give groups the alarm data on a single sheet and calculators. Make them convert rates to per-10-minutes before judging. Ask one group to argue for the MoC as proposed; it surfaces the business pressures honestly.</p>
<p><b>Common misconceptions:</b> 'same DCS, same operators' means no HF impact; alarm floods are solved by more screens; shelving is a cure rather than a managed risk; HFE is only for new projects.</p>
<p><b>Kit:</b> EEMUA 191 benchmark table, MoC screening checklist, photos of good and poor valve labels and access (from the site where possible), a 3D model screenshot or plot plan extract.</p>
<p><b>Accuracy:</b> quote EEMUA benchmarks as guidance, not regulation. If the client site uses ISA-18.2 KPIs (e.g. about 6 alarms per hour as very likely acceptable), show how they relate.</p>`
  },
  /* ------------------------------------------------------------------ M6 */
  {
    id: "L3M6", n: 6,
    t: "Procedure design, verification and validation",
    mins: 150,
    obj: "Critique and rewrite an operating procedure to a defined writing standard, mark critical steps, and plan and run a talk-through or walk-through validation and usability test with the people who will use it.",
    learn: `
<h2>Why procedures fail</h2>
<p>Procedures are the most common control recommended in SCTA, and the most commonly ineffective. HSE guidance and industry studies point to the same reasons: procedures that are inaccurate or out of date, too long or too detailed for experienced users (or too sketchy for novices), hard to follow in the field, written without users, and not trusted. When a procedure does not match the task, people work from memory and custom, and the document becomes a liability rather than a barrier. The SCTA you have done in M2 and M3 is the best possible foundation for a procedure, because it describes the task as done and identifies where the critical steps are.</p>

<h2>Match the procedure to the task</h2>
<div class="tbl"><table><thead><tr><th>Level of use</th><th>When</th><th>How used</th></tr></thead><tbody>
<tr><td>Continuous use</td><td>Safety-critical, complex, infrequent or where sequence matters (PSV changeover, start-up, pig launching, SIS proof test)</td><td>In hand at the work location, read and performed step by step, each step marked off (place-keeping)</td></tr>
<tr><td>Reference use</td><td>Moderately complex or infrequent tasks performed by competent staff</td><td>Available at the location; consulted at defined points; key steps checked</td></tr>
<tr><td>Information use</td><td>Routine, low-risk, skill-based tasks</td><td>Used for training and reference; not required at the job</td></tr></tbody></table></div>
<p>Format follows the task: step-by-step lists for sequences; checklists for line-ups and pre-start checks; flowcharts or decision tables for diagnosis and contingencies; tables for set-points and valve positions.</p>

<h2>A procedure writing standard</h2>
<div class="grid2">
<div class="card"><h4>Steps</h4><ul><li>One action per step (or one tightly linked pair, such as "open and verify").</li><li>Start with an action verb in the imperative: Open, Close, Verify, Record, Inform.</li><li>Name equipment by tag and short description, matching the field label.</li><li>State the expected result or indication where it matters: "PG-106 reads 0 barg".</li><li>Put conditions first: "IF pressure rises above 0.5 barg, THEN close VV-104 and inform the supervisor."</li><li>Keep steps short; aim for one sentence.</li></ul></div>
<div class="card"><h4>Language and layout</h4><ul><li>Plain, consistent words; define each term once. Many sites use controlled vocabulary in the spirit of ASD-STE100 Simplified Technical English.</li><li>Number steps; one step per line; logical grouping into sections that match HTA sub-goals.</li><li>Sign-off boxes for continuous-use steps.</li><li>Readable in the field: font size, contrast, laminated or tablet suitable for heat, gloves and sunlight.</li><li>Bilingual where the workforce needs it, translated and checked by a competent bilingual operator.</li></ul></div></div>
<h3>Warnings, cautions and notes</h3>
<div class="tbl"><table><thead><tr><th>Type</th><th>Purpose</th><th>Rules</th></tr></thead><tbody>
<tr><td>WARNING</td><td>Hazard to people: injury, death, toxic exposure</td><td>Placed immediately <b>before</b> the step it applies to; states hazard, consequence and how to avoid; never contains an action step</td></tr>
<tr><td>CAUTION</td><td>Hazard to equipment, the process or the environment</td><td>Same placement rule; distinct from warnings</td></tr>
<tr><td>NOTE</td><td>Supporting information</td><td>Never contains an instruction; if it says "must", it is a step</td></tr></tbody></table></div>
<p>Over-use of warnings is as harmful as none: if every page carries five warnings, none is read. Use them for the hazards your error analysis identified.</p>
<h3>Critical steps and hold points</h3>
<p>Mark the critical steps from your SCTA with a consistent symbol and wording, for example a bold "CRITICAL STEP" flag. At each one consider a <b>hold point</b> (stop and confirm before proceeding), <b>independent verification</b> (a second competent person checks without being told the expected result), or <b>concurrent verification</b> (two people at the same time, typically for irreversible actions). Use these sparingly: if everything is a hold point, verification becomes a signature exercise.</p>
<div class="callout or"><h4>Before and after</h4><p><b>Before:</b> "Isolate and depressurise launcher then open door and load pig, take care H2S."</p><p><b>After:</b></p><p>2.3 Close drain valve DV-105.</p><p>2.4 Verify launcher depressurised: PG-106 reads 0 barg AND no flow at vent VV-104 for 5 minutes. IF pressure rises, THEN stop and inform the supervisor.</p><p>WARNING: Opening the closure under pressure can eject the door and release H2S. Do not proceed unless step 2.4 is confirmed.</p><p>3.1 CRITICAL STEP / HOLD: Second operator independently verifies PG-106 and vent. Sign: ____ ____</p></div>

<h2>Verification and validation</h2>
<p><b>Verification</b> checks the procedure is technically correct: tags, set-points, sequences and isolation boundaries agree with P&amp;IDs, cause and effect charts, vendor data and the HTA. Done by an engineer and a senior operator with document access.</p>
<p><b>Validation</b> checks the procedure is usable by the people who will use it, in the conditions in which it will be used. It is the step most often skipped.</p>
<div class="grid3">
<div class="card"><h4>Talk-through</h4><p>At a table with drawings and photos. Users read each step aloud and say what they would do and see. Finds ambiguity, missing steps and wrong tags quickly. Suitable when plant is not accessible.</p></div>
<div class="card"><h4>Walk-through</h4><p>At the equipment, plant shut down or running, without operating anything. Users touch or point to each item. Finds access, visibility, labelling and sequence problems.</p></div>
<div class="card"><h4>Simulation / usability test</h4><p>Representative users, including less experienced ones, perform the procedure on a simulator, mock-up or real task, observed but not helped. Record hesitations, questions, errors, deviations and time.</p></div></div>
<p>Choose users who did not write the procedure, and include at least one less experienced user. Observers note every point where the user hesitates, asks, misreads or improvises. Each is a defect in the procedure or the plant. Fix, re-test the changed steps, and record the validation on the procedure's revision history.</p>

<h2>Keeping procedures alive</h2>
<ul>
<li>One owner per procedure; periodic review (often every 2 to 3 years, sooner for safety-critical ones) and review after MoC or incidents.</li>
<li>Easy feedback route from users (a mark-up box on the field copy, reviewed monthly).</li>
<li>Monitoring of procedure deviations as data, not just as discipline matters: repeated deviation means the procedure or plant needs to change.</li></ul>

<h3>Sort it</h3><p>Is each statement a warning, a caution or a note?</p>
<div class="sortq" data-sort='[["Opening the closure under pressure can eject the door and release H2S","Warning"],["Rapid pressurisation can damage the pig cups and the closure seal","Caution"],["The pig signaller is a mechanical flag type and resets manually","Note"],["Sour condensate in the drain hub can release H2S above the exposure limit","Warning"],["Draining too fast can lift the closed drain drum relief valve to flare","Caution"]]' data-opts='["Warning","Caution","Note"]'></div>
<p class="src">Based on HSE HSG48 Reducing error and influencing behaviour and HSE Human Factors Core Topic on procedures; Energy Institute Human Factors Briefing Notes; CCPS, Guidelines for Writing Effective Operating and Maintenance Procedures (1996) and Human Factors Methods for Improving Performance in the Process Industries; DOE-HDBK-1028-2009 Human Performance Improvement Handbook; INPO human performance tools (procedure use and adherence, place-keeping).</p>`,
    activity: {
      title: "Rewrite and validate: returning a sour water pump to service",
      time: "65 minutes",
      scn: `<p><span class="tag">Sour water stripper unit · Gulf region refinery</span><span class="tag">Procedure review · after a near miss</span></p>
<p>Sour water stripper feed pumps P-7201 A/B (duty/standby) handle sour water with dissolved H2S and ammonia. After a mechanical seal change on P-7201A, an operator returning it to service opened the suction valve before the casing drain was closed. Sour water sprayed from the drain hub; the operator's personal monitor alarmed at 18 ppm H2S and the operator withdrew. The current procedure extract is:</p>
<p><i>Procedure OP-SWS-014 Rev 2 (2017): Return P-7201A/B to service after maintenance</i></p>
<ol>
<li>Ensure permit is closed and all isolations removed and pump is ready and area is clear and seal flush is lined up.</li>
<li>Open suction valve slowly and vent the pump casing to the flare and check for leaks.</li>
<li>Note: the casing drain and vent should be closed before pressurising.</li>
<li>Start pump from field start button after informing panel.</li>
<li>Open discharge valve. Caution: pump can be damaged if run with discharge closed.</li>
<li>Check pump is OK.</li>
<li>Warning: sour water contains H2S.</li></ol>
<p>The procedure has no tags. In the field, the suction valve, casing drain and vent are all 1-inch or 2-inch gate valves with handwheels at similar heights; the drain is unlabelled. The panel operator controls the minimum flow recycle.</p>`,
      qs: [
        { q: "List the defects in OP-SWS-014 against the writing standard and explain which one most directly set up the near miss.", hint: "One action per step, verbs, tags, warning placement, notes containing actions, vague checks, missing expected results, no critical step marking." },
        { q: "Rewrite steps 1 to 4 to the writing standard, with tags (invent sensible ones), expected results, warnings in the right place and critical steps marked.", hint: "Close drain before opening suction; venting to flare; seal flush; communication with panel; hold point." },
        { q: "What level of use should this procedure have, and why?", hint: "Frequency of seal changes, H2S, sequence-dependence." },
        { q: "Plan a validation for the revised procedure: method, participants, what you observe and record, and acceptance criteria.", hint: "Walk-through at P-7201B (running) or A (isolated); include a less experienced operator; record hesitations and questions." }
      ],
      fac: [
        "Defects: step 1 has five actions and 'ensure' is not a verifiable action; step 2 combines three actions; the note in step 3 contains an instruction ('should be closed') and comes after the step it applies to, which is the direct set-up for the near miss; step 4 combines communication and action; caution in step 5 is after the step it applies to; step 6 'check pump is OK' has no criteria; the warning in step 7 is at the end, generic, and not before the hazardous step; no tags; no expected results; no critical steps or hold points; seal flush not specified; no evidence of review since Rev 2 in 2017.",
        "Sample rewrite: 1.1 Confirm permit for P-7201A is closed and isolation certificate signed off. 1.2 Put on personal H2S monitor and position upwind of P-7201A. 1.3 Verify casing drain DV-7203A is CLOSED and capped. 1.4 Verify casing vent VV-7204A is CLOSED. 1.5 Line up seal flush: open HV-7205A; verify flow on FI-7206A. WARNING (placed before 2.1, hazard and avoidance only, no action): Opening the suction valve with the drain or vent open sprays sour water releasing H2S above exposure limits; do not open the suction valve until steps 1.3 and 1.4 are confirmed. 2.1 CRITICAL STEP: Second operator independently verifies DV-7203A and VV-7204A closed. 2.2 Open suction valve HV-7201A slowly, 2 turns. 2.3 Open VV-7204A to flare to vent gas from casing; close when liquid appears at sight glass (or as site design allows). 2.4 Open HV-7201A fully. Expected: no leaks at seal or flanges. 3.1 Inform panel operator that P-7201A is ready to start; confirm minimum flow recycle FV-7207 open. 4.1 Start P-7201A from local start station.",
        "Continuous use: infrequent (seal changes every few months to years per pump), sequence-dependent, H2S exposure if order is wrong, interface between field and panel.",
        "Validation: walk-through at P-7201A while isolated (or B for familiarity), with two operators who did not write it, one with less than two years' experience; analyst and procedure writer observe; record every hesitation, question, misidentification and step-order deviation; check each tag against the field label; time the task. Acceptance: no unresolved misidentifications, no step needing explanation, all tags match labels. Fix defects and re-walk changed steps. Also recommend labelling DV-7203A and differentiating the drain handwheel (facilitate level), and consider a capped drain with a plug (engineer).",
        "Stress the link: the SCTA tells you where the critical steps are; the procedure is one of several controls, not the only one."
      ]
    },
    quiz: [
      { q: "Where should a WARNING be placed in a procedure?", opts: ["At the end of the section it applies to.", "On the front cover only.", "Immediately before the step it applies to, without containing an action step.", "Inside the step text, after the action."], a: 2, why: "Warnings must be read before the hazardous action. Placing them after the step, or embedding them in the action, means they are read too late or missed." },
      { q: "A procedure NOTE reads: 'The casing drain must be closed before opening the suction valve.' What is wrong?", opts: ["Notes may not mention valves.", "It contains an instruction; any 'must' belongs in a numbered step (and here, a critical step).", "It should be a CAUTION.", "Nothing is wrong; notes can contain important actions."], a: 1, why: "Notes are information only. Actions hidden in notes are easily skipped, especially by experienced users who skim notes." },
      { q: "What is the difference between procedure verification and validation?", opts: ["Verification checks technical accuracy against design documents; validation checks that real users can perform it correctly in real conditions.", "There is no difference.", "Verification is done by users in the field; validation is done by engineers in the office.", "Validation is a legal sign-off; verification is optional."], a: 0, why: "A procedure can be technically correct and still unusable. Validation with representative users at the equipment or in simulation finds the usability defects." },
      { q: "Which task most clearly needs a continuous-use procedure?", opts: ["Daily housekeeping of the control room.", "Routine reading of a local pressure gauge on rounds.", "Changing a light bulb in the workshop.", "Changeover of duty/standby PSVs on a sour separator using a mechanical interlock sequence."], a: 3, why: "Infrequent, sequence-dependent, high-consequence tasks need step-by-step, in-hand use with place-keeping." },
      { q: "During a walk-through, a newly qualified operator hesitates at step 3.2 and asks which of two adjacent valves is the vent. How should the observer treat this?", opts: ["As a competence gap; arrange retraining for the operator.", "As a defect in the procedure or plant labelling to be fixed and re-tested.", "As acceptable because experienced operators would know.", "As a reason to exclude less experienced operators from validation."], a: 1, why: "Validation is designed to find exactly these points. Hesitation by a representative user is evidence that the step, tag or label is not clear enough." },
      { q: "Why should hold points and independent verifications be used sparingly?", opts: ["Because a hold point transfers responsibility for the step from the operator to the verifier.", "Because they slow down every task by a fixed amount.", "Because if every step requires a signature, verification becomes a routine signature exercise and loses its value at the truly critical steps.", "Because only supervisors may sign them."], a: 2, why: "Verification works when it is reserved for critical, often irreversible, steps identified by the analysis. Over-use leads to routine sign-offs without real checking." }
    ],
    tools: ["Procedure writing standard (one-page)", "Procedure review checklist (verification)", "Walk-through and usability test observation sheet (validation)", "Critical step and hold point marking convention"],
    facGuide: `<p><b>Timing (150 min, split across day 2 and day 3):</b> teach 50 (why procedures fail 5, level of use and format 10, writing standard 15, warnings and critical steps 10, V&amp;V 10); sort 5; scenario 65 (rewrite 35, plan validation 10, plenary 20); then a 25-minute live walk-through of one group's rewritten steps using a mock-up pump skid or photos, with a volunteer playing a new operator, and a 5-minute close.</p>
<p><b>How to run it:</b> project OP-SWS-014 and ask the room to read step 3 aloud: most notice the note only then. For the live walk-through, give the 'new operator' only the procedure; the observer records hesitations on the observation sheet. The room sees how many defects one short walk-through finds.</p>
<p><b>Common misconceptions:</b> longer procedures are safer; warnings protect the writer rather than the user; validation is the supervisor's signature; experienced users do not need procedures for infrequent tasks.</p>
<p><b>Kit:</b> printed OP-SWS-014, writing standard card, observation sheets, mock-up or photos of a pump with suction, drain, vent and seal flush valves; coloured pens for mark-up.</p>
<p><b>Link:</b> participants should apply the writing standard to the procedure recommendations in their capstone.</p>`
  }
  ],
  assessment: {
    summary: "Three parts. (1) A closed-book knowledge check of 30 multiple-choice questions drawn from the six module banks (minimum four per module), taken on day 3. (2) In-course practical outputs assessed by the facilitator: the M1 SCT screening, the M2 HTA, the M3 error analysis, an individual HEART calculation in M4, and the M6 procedure rewrite. (3) The capstone: a full safety-critical task analysis on a supplied or own-site task, started in a supervised workshop on day 3 and submitted as a written report within 6 weeks, marked against the published rubric by an HP-5 or chartered human factors assessor.",
    pass: "80% or more on the knowledge check (24 of 30) AND 'Competent' on every in-course practical criterion AND 'Competent' or better on every capstone rubric criterion. 'Distinction' is awarded where at least five capstone criteria are marked Distinction and none below Competent. One re-sit of the knowledge check is allowed; a capstone marked Not Yet Competent on any criterion may be resubmitted once within 4 weeks of feedback.",
    practical: `<h3>In-course practical tasks</h3>
<p>Group outputs are assessed for each individual through the facilitator's observation of their contribution and a short individual question at the plenary. The HEART calculation is individual.</p>
<ul>
<li><b>P1 (M1):</b> SCT screening and prioritisation of the Al Rimal task list, with bow-tie links.</li>
<li><b>P2 (M2):</b> HTA of the filter separator preparation task to operation level with plans.</li>
<li><b>P3 (M3):</b> Error analysis of two critical steps with PIFs and controls by hierarchy.</li>
<li><b>P4 (M4):</b> Individual HEART calculation on a supplied task (GTT and EPCs given), plus a one-paragraph judgement on whether the related operator action may be credited as a LOPA IPL.</li>
<li><b>P5 (M6):</b> Rewrite of four procedure steps to the writing standard and a validation plan.</li></ul>
<h3>Marking rubric</h3>
<div class="tbl"><table><thead><tr><th>Task</th><th>Criterion</th><th>Not yet competent</th><th>Competent</th></tr></thead><tbody>
<tr><td>P1</td><td>Screening logic</td><td>Tasks screened in or out without reference to MAH or barrier; barrier maintenance tasks missed.</td><td>Every decision linked to an MAH or bow-tie barrier; includes barrier maintenance and mitigation tasks.</td></tr>
<tr><td>P1</td><td>Prioritisation</td><td>Ranking unexplained or based on incident count alone.</td><td>Explicit criteria applied consistently, with recorded reasoning for the top five.</td></tr>
<tr><td>P2</td><td>Structure</td><td>Reads as a procedure; no hierarchy or plans; operations lack verbs or tags.</td><td>Correct goal, sub-goal and operation hierarchy; numbered; every goal with sub-goals has a plan including at least one conditional branch.</td></tr>
<tr><td>P2</td><td>Work as done</td><td>Operator variations ignored or resolved silently.</td><td>Variations recorded and flagged for analysis; checks and communications shown as steps.</td></tr>
<tr><td>P3</td><td>Failure identification</td><td>Generic failures ('human error') or no mode codes; violations ignored.</td><td>Credible, specific failures with mode codes, mechanisms, consequences and recovery for each critical step.</td></tr>
<tr><td>P3</td><td>PIFs and controls</td><td>No PIF evidence; controls limited to training and reminders.</td><td>PIFs rated with evidence; controls selected by hierarchy with ALARP justification for not using higher levels.</td></tr>
<tr><td>P4</td><td>HEART calculation</td><td>Incorrect assessed-effect formula or result outside 10% of the key.</td><td>Correct formula and result within 10% of the key; bounds or sensitivity noted.</td></tr>
<tr><td>P4</td><td>LOPA judgement</td><td>Credits the human action without testing independence and time.</td><td>Tests independence, time, clarity, procedure, drill and audit, and reaches a justified conclusion.</td></tr>
<tr><td>P5</td><td>Procedure rewrite</td><td>Multiple actions per step; warnings after steps; notes containing actions; no tags.</td><td>One action per step, imperative verbs, tags, expected results, warnings before steps, critical steps marked.</td></tr>
<tr><td>P5</td><td>Validation plan</td><td>Validation is a sign-off by the author or supervisor.</td><td>Walk-through or usability test with representative users (incl. a less experienced user), observation method and acceptance criteria.</td></tr></tbody></table></div>
<h3>Workplace follow-up</h3>
<p>The capstone report is the workplace element. The participant's line manager signs the report cover to confirm the task is a real site task (or the supplied task where no site task is available) and that recommendations have been presented to the site's responsible manager. Certification is issued when the capstone is marked Competent or better.</p>`
  },
  capstone: {
    title: "Safety-critical task analysis: PSV changeover on a sour inlet separator",
    brief: `<p><b>Supplied task: Al Rimal gas plant (fictional). Individual report, 6 weeks.</b></p>
<p>Each participant completes a full SCTA, either on the supplied task below or, with the facilitator's agreement on day 3, on a safety-critical task from their own site that is at least as demanding. Work on the analysis starts in the supervised capstone workshop on day 3 (2 h 45 min, with facilitator coaching) and is completed at the workplace.</p>
<h3>The supplied task</h3>
<p>Inlet separator V-2101B (sour gas, approx. 3 mol% H2S, operating at 70 barg) is protected by two full-flow PSVs, PSV-2111 (duty) and PSV-2112 (standby). Each PSV has an inlet isolation valve (HV-2111I, HV-2112I) and an outlet isolation valve to the HP flare header (HV-2111O, HV-2112O), plus a bleed valve between the PSV and each isolation valve. A mechanical trapped-key interlock system is fitted so that, in principle, at least one PSV always has its inlet and outlet valves open. PSV-2111 is due for removal to the workshop for overhaul (every 4 years). Tasks: change over relief duty to PSV-2112; isolate, depressurise, purge and prove PSV-2111 gas free; hand over to the mechanical crew for removal; later, reinstate the overhauled PSV and restore the original line-up. The task is done by a field operator and a second operator, with the control room informed; the mechanical crew works under a separate permit. Supplied documents: P&amp;ID extract, interlock key sequence diagram, current procedure OP-INL-022 (2 pages, Rev 1), the separator bow-tie, the LOPA sheet for overpressure of V-2101B, an incident summary from a sister plant where both PSVs were found isolated after a changeover (key sequence bypassed with a spare key), and short interview notes from three operators.</p>
<h3>What you must do</h3>
<ol>
<li><b>Context and screening:</b> explain why this is a safety-critical task, its category and bow-tie links, and how it would rank on the SCT register.</li>
<li><b>HTA:</b> a complete HTA from preparation to reinstatement, to operation level around hazardous steps, with plans, roles and noted variations from the interview notes.</li>
<li><b>Human error analysis:</b> credible failures for every critical step using the taxonomy, including violations (e.g. spare key use), with mechanism, consequence and recovery.</li>
<li><b>PIF assessment:</b> rate the PIFs for each critical step with evidence from the documents and interviews.</li>
<li><b>Quantification decision:</b> decide whether any step should be quantified with HEART (for example, to inform the LOPA). If yes, do it with sensitivity testing; if no, justify why not.</li>
<li><b>Recommendations:</b> controls selected by the hierarchy with ALARP reasoning, each with an owner role, priority and a measurable completion criterion. Include a revised procedure extract for the critical steps written to the M6 standard and a validation plan.</li>
<li><b>Report:</b> a concise report (guide: 12 to 20 pages plus appendices) with an executive summary of no more than one page for the site manager.</li></ol>
<div class="callout"><h4>Assessor expectations</h4><p>The strongest reports find the interlock key management problem (spare and master keys, key cabinet control, interlock design that permits both PSVs isolated during a fault), the bleed valve and depressurisation checks, the communication with the control room about relief availability, the reinstatement phase (often analysed less carefully than removal), and the dependency between the two operators' checks. Recommendations that rely only on training and procedures will not reach Competent.</p></div>`,
    deliverables: [
      "SCTA report (12 to 20 pages plus appendices) with a one-page executive summary for the site manager.",
      "HTA in tabular form (and optionally a diagram) with plans, roles and work-as-done variations.",
      "Human error analysis table covering every critical step: failure mode code, mechanism, consequence, recovery, PIF ratings, existing controls and recommendations.",
      "Quantification decision record: HEART worksheet with sensitivity tests, or a written justification for not quantifying.",
      "Recommendations register with hierarchy level, ALARP justification, owner role, priority and completion criterion.",
      "Revised procedure extract for the critical steps to the M6 writing standard, plus a validation plan.",
      "10-minute presentation of findings to the course group on day 3 (draft findings) and, where possible, to the site's responsible manager."
    ],
    rubric: [
      { criterion: "Task selection, scope and MAH/bow-tie link", competent: "Explains why the task is safety critical, its category and barrier links, with a clear scope and boundary.", distinction: "Also places the task in the context of the site SCT register and LOPA, identifying related tasks that share the same failures." },
      { criterion: "HTA quality", competent: "Correct hierarchy with plans to an appropriate depth; checks and communications included; roles shown; validated with at least one task performer or the supplied interview notes.", distinction: "Depth is clearly driven by P x C reasoning; abnormal branches and the reinstatement phase are analysed as carefully as removal; variations are traced to their causes." },
      { criterion: "Human failure identification", competent: "Credible, specific failures for every critical step with mode codes, mechanisms, consequences and recovery; violations considered.", distinction: "Identifies dependent failures (e.g. both operators sharing the same wrong assumption) and latent conditions such as key management, with evidence." },
      { criterion: "PIF assessment", competent: "PIFs rated for each critical step with evidence from documents and interviews.", distinction: "Shows how PIFs combine to make particular failures likely and links them to organisational causes." },
      { criterion: "Quantification decision", competent: "Clear, justified decision; if quantified, the HEART calculation is correct and sensitivity is tested; limits stated.", distinction: "Uses HRA to compare options and to test LOPA assumptions, explicitly addressing dependence and avoiding false precision." },
      { criterion: "Controls and ALARP", competent: "Controls selected by the hierarchy, with reasons why higher levels are or are not reasonably practicable; each has an owner role, priority and completion criterion.", distinction: "Recommendations are specific enough to implement directly, address recovery as well as prevention, and include monitoring of effectiveness." },
      { criterion: "Procedure and validation", competent: "Revised critical steps follow the writing standard; warnings and critical steps correctly placed; a credible validation plan with users.", distinction: "Procedure is supported by a checklist or line-up sheet designed for field use, and the validation plan includes usability measures and acceptance criteria." },
      { criterion: "Report and communication", competent: "Clear, logically structured report; executive summary readable by a site manager in five minutes; British English; no blame language.", distinction: "Persuasive for decision-makers, with costs and benefits outlined and an implementation sequence; presentation handles challenge well." }
    ]
  },
  schedule: [
    { block: "Day 1 07:30-08:00", items: "Welcome, safety brief, objectives, how HP-3 builds on HP-2; participants introduce the safety-critical task they brought from site." },
    { block: "Day 1 08:00-10:00", items: "M1 Identifying and screening safety-critical tasks: seven-step approach, SCT categories, task inventory, screening and prioritisation, SCT register. Exercise: Screening the Al Rimal inlet facilities." },
    { block: "Day 1 10:00-10:15", items: "Break." },
    { block: "Day 1 10:15-12:15", items: "M2 Hierarchical task analysis (part 1): data collection, hierarchy, plans, stopping rule, pig launcher worked example." },
    { block: "Day 1 12:15-13:00", items: "Lunch and prayer." },
    { block: "Day 1 13:00-14:00", items: "M2 (part 2) Exercise: HTA of filter separator preparation, with operator talk-through role-play, gallery critique." },
    { block: "Day 1 14:00-14:15", items: "Break." },
    { block: "Day 1 14:15-16:15", items: "M3 Human error analysis, PIFs and the hierarchy of controls (part 1): SHERPA taxonomy, credibility, error analysis table, PIFs, recovery, hierarchy and ALARP; start of group work on the exercise: Draining sour water from a separator boot." },
    { block: "Day 1 16:15-16:30", items: "Day review; capstone brief issued for reading." },
    { block: "Day 2 07:30-08:30", items: "M3 (part 2): boot-draining exercise plenary; applying the method to two critical steps of the group's own filter separator HTA; close." },
    { block: "Day 2 08:30-10:00", items: "M4 Human reliability assessment (part 1): why and when to quantify, HEART method, worked example, individual HEART calculation (P4)." },
    { block: "Day 2 10:00-10:15", items: "Break." },
    { block: "Day 2 10:15-11:30", items: "M4 (part 2): limits and dependence, humans in LOPA. Exercise: Can the operator be an IPL? When not to quantify." },
    { block: "Day 2 11:30-12:15", items: "Lunch and prayer." },
    { block: "Day 2 12:15-15:15", items: "M5 Human factors engineering in design and MoC: IOGP 454, access and labelling, ISO 11064, EEMUA 191 alarms, MoC HF screening. Exercise: One control room, two plants. (Break 13:45-14:00.)" },
    { block: "Day 2 15:15-16:30", items: "M6 Procedure design (part 1): why procedures fail, level of use, writing standard, warnings and critical steps, verification and validation." },
    { block: "Day 3 07:30-08:45", items: "M6 (part 2) Exercise: Rewrite and validate the sour water pump procedure; live walk-through with a volunteer user." },
    { block: "Day 3 08:45-09:00", items: "Break." },
    { block: "Day 3 09:00-11:45", items: "Capstone workshop: supervised start on the PSV changeover (or approved own-site task): screening, HTA and first critical steps, with facilitator coaching at each table." },
    { block: "Day 3 11:45-12:30", items: "Lunch and prayer." },
    { block: "Day 3 12:30-14:00", items: "Capstone draft findings: 10-minute presentations per participant or pair, peer and facilitator challenge." },
    { block: "Day 3 14:00-14:15", items: "Break." },
    { block: "Day 3 14:15-15:00", items: "Knowledge check (30 MCQs, 40 minutes)." },
    { block: "Day 3 15:00-16:00", items: "Results and feedback; capstone submission requirements and 6-week plan; how to build and maintain the site SCT register; CPD and progression to HP-4/HP-5." },
    { block: "Day 3 16:00-16:30", items: "Course evaluation and close." },
    { block: "Weeks 1-6 after course", items: "Capstone completed at the workplace with one optional 30-minute coaching call; report submitted and marked against the rubric; feedback within 3 weeks." }
  ]
});
