/* Human Performance Pathway - Level 1: Human Performance Foundations (HP-1)
   H²S Consultants. Composite, fictional scenarios. British English. */
HP.level({
  id: "L1",
  n: 1,
  name: "Foundation",
  title: "Human Performance Foundations",
  badge: "HP-1",
  tagline: "Everyone on site learns why good people make errors, how to spot the traps before they bite, and which simple habits and conversations keep themselves and their crews safe.",
  audience: "All workforce on an operating site or project: operators, technicians, maintenance crafts, contractors and subcontractors, new starters, drivers, warehouse and administrative staff who work on or visit the plant. No supervisory role is assumed.",
  prereq: "None. Site induction completed (or scheduled). Participants should be able to follow a spoken and written briefing in the course language; interpreters or bilingual co-facilitators are arranged in advance for mixed-language crews.",
  duration: "1 day, 07:30-16:15 (approx. 7.5 h contact including assessment and practical sign-off)",
  format: "Classroom or site training room, 8-20 participants, one lead facilitator plus one co-facilitator for groups over 12. Highly interactive: short inputs, table-group scenario work, card sorts, role-play of tools, and a personal commitment. Designed to be delivered by a competent site trainer using this guide; no prior HF qualification required for the facilitator, but completion of HP-2 or equivalent is recommended.",
  outcomes: [
    "Describe the difference between the old view (people as the problem) and the new view (people as the solution, working inside a system) and state the five human performance principles in their own words.",
    "Recognise and give an oil and gas example of a slip, a lapse, a rule-based mistake, a knowledge-based mistake and a violation, and explain why each needs a different kind of control.",
    "Identify at least six error precursors (error-likely conditions) in a described field task, grouped by task demands, work environment, individual capabilities and human nature.",
    "Describe when and how to use STAR, a questioning attitude, three-way communication, place-keeping, peer checking and stop-work authority on their own work.",
    "Explain how fatigue, heat, stress and personal wellbeing affect performance, recognise the warning signs in themselves and others, and state what to do when they or a colleague are not fit for duty.",
    "Explain why near misses and error traps should be reported, what makes a good report, and what a just culture will and will not do with their report.",
    "Demonstrate, in a short observed role-play, a correct three-way communication and a confident stop-when-unsure intervention."
  ],
  competencies: [
    { code: "HP1.1", statement: "Explains human performance as the interaction of people, plant and process and describes the five HP principles.", evidence: "Knowledge check items (M1); contribution to M1 scenario debrief recorded by facilitator." },
    { code: "HP1.2", statement: "Recognises and classifies types of human failure (slip, lapse, mistake, violation) in workplace examples.", evidence: "Knowledge check items (M2); correct classification of at least 4 of 5 events in the M2 card sort." },
    { code: "HP1.3", statement: "Identifies error precursors and red-flag conditions before starting a task.", evidence: "Practical task A: identifies at least 6 precursors across at least 3 TWIN categories in an unseen task description." },
    { code: "HP1.4", statement: "Applies basic personal HP tools: STAR self-check, three-way communication and stop-when-unsure.", evidence: "Practical task B: observed role-play, marked against the rubric." },
    { code: "HP1.5", statement: "Recognises fatigue, heat stress and other fitness-for-duty concerns in self and others and knows the correct response.", evidence: "Knowledge check items (M5); M5 scenario answers." },
    { code: "HP1.6", statement: "Reports near misses, unsafe conditions and error traps in a clear, factual, blame-free way and understands the just culture response.", evidence: "Practical task C: completes a near-miss report from a scenario to the rubric standard; 30-day workplace follow-up report." }
  ],
  modules: [
  /* ------------------------------------------------------------------ M1 */
  {
    id: "L1M1", n: 1,
    t: "Why human performance matters",
    mins: 70,
    obj: "Explain human performance as the interaction of people, plant and process, contrast the old and new views of error, and state the five principles that the rest of the course builds on.",
    learn: `
<h2>What we mean by human performance</h2>
<p>Every barrier on a hydrocarbon facility depends on people at some point. Someone designed the relief system, someone wrote the isolation procedure, someone tested the shutdown valve last month, someone is reading the level on the separator now, and someone will sign the permit that lets work start tomorrow. <b>Human performance</b> is the study and management of how people actually do that work, so that the work goes right more often and, when something does go wrong, the result is small and recoverable.</p>
<p>Human performance is not a separate safety programme. It sits across three things that are always present on a site:</p>
<div class="grid3">
<div class="card"><h4>People</h4><p>Their skills, experience, alertness, health, expectations and the way they communicate. Includes contractors, visitors and the control room as much as the field crew.</p></div>
<div class="card"><h4>Plant</h4><p>Equipment, valves, tags, displays, alarms, access, lighting, tools and PPE. Whether the plant makes the right action easy and the wrong action hard.</p></div>
<div class="card"><h4>Process</h4><p>Procedures, permits, isolations, planning, shift patterns, handovers, supervision and how the organisation reacts to good and bad news.</p></div></div>
<p>A task goes well when these three fit together. It goes badly when one of them sets a trap: two identical drain and bypass valves side by side, a permit that does not say exactly which flanges to break, an operator on the 13th night shift in a row. The person who springs the trap is usually the last link in a chain, not the cause of it.</p>

<h2>Old view and new view</h2>
<p>For much of the last century, incidents were explained by finding the person who made the mistake. That approach is now called the <b>old view</b> (or the person approach). The <b>new view</b> (the systems approach) treats the error as a symptom of conditions in the workplace, and asks what made the action seem sensible to the person at the time.</p>
<div class="tbl"><table><thead><tr><th>Old view says</th><th>New view says</th></tr></thead><tbody>
<tr><td>Human error is the cause of the incident.</td><td>Human error is a consequence of conditions in the system. It is where the investigation starts, not where it ends.</td></tr>
<tr><td>People are the problem; take them out or control them.</td><td>People are the main source of safety: they adapt, notice and recover problems every shift.</td></tr>
<tr><td>Fix it with retraining, warnings, discipline and "be more careful".</td><td>Fix it by changing the design, the procedure, the workload or the information so that the next person cannot fall into the same trap.</td></tr>
<tr><td>Judge the action by its outcome, with hindsight.</td><td>Understand the action from inside the situation: what the person could see, knew and expected at that moment.</td></tr>
<tr><td>Safety is the absence of incidents.</td><td>Safety is the presence of capacity: barriers, margins, and people able to detect and recover from problems.</td></tr></tbody></table></div>
<div class="callout"><h4>Hindsight is not insight</h4><p>After an event we know the outcome, so the warning signs look obvious. The person inside the event did not know the outcome. Their attention was on what looked important then. Before asking "why didn't they see it?" ask "what were they looking at, and why did that make sense?"</p></div>

<h2>The five principles</h2>
<p>The human performance approach used across nuclear, aviation and now oil and gas rests on five principles, set out in the US Department of Energy Human Performance Improvement Handbook (DOE-HDBK-1028-2009) and echoed in Human and Organisational Performance (HOP). We use them all day.</p>
<ol>
<li><b>People are fallible, and even the best people make mistakes.</b> Error is normal. Experience reduces some errors and creates others (habits, overconfidence). Plan for error rather than hope it will not happen.</li>
<li><b>Error-likely situations are predictable, manageable and preventable.</b> The conditions that provoke error (time pressure, first-time tasks, confusing displays, interruptions, fatigue) can be spotted before the job starts. Module 3 is about finding them.</li>
<li><b>Individual behaviour is influenced by organisational processes and values.</b> People do what the system rewards and makes easy. If the schedule always beats the procedure, the procedure will lose.</li>
<li><b>People achieve high levels of performance largely because of the encouragement and reinforcement they receive from leaders, peers and subordinates.</b> Behaviour that is noticed and reinforced is repeated: good and bad.</li>
<li><b>Events can be avoided through an understanding of the reasons mistakes occur and application of the lessons learned from past events.</b> Learning, including from near misses and normal work, is how the system improves.</li></ol>
<p>The HOP version phrases these as: error is normal; blame fixes nothing; learning and improving is vital; context drives behaviour; and <b>how leaders respond to failure matters</b>. That last point is critical. If a crew sees a colleague disciplined for reporting a mistake, the next mistake will not be reported, and the organisation loses its warning signals.</p>
<div class="rev"><button type="button">Does the new view mean nobody is ever accountable?</button><div class="body"><p>No. The new view separates <b>blame</b> (looking back, punishing the person) from <b>accountability</b> (looking forward, everyone owning their part in making the system safer). Reckless disregard for safety is still dealt with. Module 6 covers just culture, which draws that line fairly.</p></div></div>

<h2>Why it matters in oil and gas</h2>
<p>Our industry handles large inventories of flammable and toxic material. A single wrong action at the wrong moment can bypass several engineered barriers. Public investigations of major accidents show the same pattern repeatedly:</p>
<ul>
<li><b>Piper Alpha, North Sea, 1988 (167 killed).</b> A condensate pump was started on night shift while its pressure safety valve had been removed for maintenance on day shift. The permit-to-work and shift handover did not carry that information to the people who needed it.</li>
<li><b>Longford, Australia, 1998 (2 killed).</b> After a loss of lean oil flow, metal became extremely cold. Operators restarting flow did not know of the brittle fracture hazard because training and procedures had not given them that knowledge. The Royal Commission did not accept operator error as the explanation.</li>
<li><b>Texas City, USA, 2005 (15 killed, 180 injured).</b> A raffinate splitter tower was overfilled during startup. The CSB found, among many issues, a level transmitter that gave misleading readings, a poor shift handover, and a board operator who had worked 12-hour shifts for 29 consecutive days.</li></ul>
<p>In each case individuals made errors. In each case the conditions that made those errors likely had been building for months or years, and the organisation had chances to see them.</p>

<h2>Your role at Foundation level</h2>
<p>This course does not ask you to become a human factors specialist. It asks you to do four things: understand why errors happen; notice error traps before they catch you or a colleague; use a small set of simple habits that catch errors before they matter; and speak up and report so that the organisation can fix the traps for everyone.</p>
<h3>Sort it</h3><p>Decide whether each response to an event reflects the old view or the new view.</p>
<div class="sortq" data-sort='[["Ask what made the action seem reasonable at the time","New view"],["Add a final written warning to the technician file","Old view"],["Close the report as operator carelessness","Old view"],["Move the tag so it faces the walkway and re-label the valve pair","New view"],["Remind everyone in the toolbox talk to pay more attention","Old view"],["Thank the person who reported the near miss and share the learning","New view"]]' data-opts='["Old view","New view"]'></div>
<p class="src">Based on DOE-HDBK-1028-2009 Human Performance Improvement Handbook Vol. 1 (principles of human performance); Conklin, Pre-Accident Investigations and the HOP principles; Dekker, The Field Guide to Understanding Human Error (old and new view); Reason (1997) Managing the Risks of Organizational Accidents; Energy Institute human factors briefing notes; public reports: Cullen Inquiry (Piper Alpha), Longford Royal Commission, US CSB Texas City report.</p>`,
    activity: {
      title: "The flange that was opened twice",
      time: "35 minutes",
      scn: `<p><span class="tag">Onshore gas gathering station · Gulf region</span><span class="tag">Day shift, turnaround week 2 · 41 °C</span></p>
<p>During a turnaround at a gas gathering station, a contractor mechanical crew was working on a permit to replace a spectacle blind gasket on the inlet line to a slug catcher. The line had been isolated, drained and purged by operations the previous day. The isolation certificate listed the valves locked closed and the drain points; it referred to the flange by a P&amp;ID line number but not by a physical tag.</p>
<p>At 10:30 the crew was told to pause because a crane lift was taking place overhead (a SIMOPS conflict). They returned at 13:15 after lunch and prayer. Meanwhile the area operator had changed at 12:00; the outgoing operator told the incoming operator that "the slug catcher job is done apart from re-bolting". The crew foreman went back to what he believed was the same flange. It was the adjacent flange on a parallel line that looked identical and had not been isolated. As the second stud was loosened, gas began to weep from the joint. A crew member noticed the hiss, the crew backed off, re-tightened the stud and called the control room. Personal H2S monitors did not alarm; the fixed detector nearby registered a brief low %LEL reading. No one was hurt.</p>
<p>At the morning meeting the turnaround manager says: "The foreman has 20 years' experience. He knows to check the tag. I want him off site and the crew retrained."</p>`,
      qs: [
        { q: "List the people, plant and process conditions that set up this event.", hint: "At least two in each category. Think about the flange identification, the interruption, the handover, the permit wording and the turnaround context." },
        { q: "Which of the five HP principles are most clearly illustrated? Explain two of them using details from the case.", hint: "Principle 1 (even an experienced foreman is fallible); principle 2 (the interruption and identical flanges were predictable); principle 3 (permit and handover processes); principle 5 (learning)." },
        { q: "What does the turnaround manager's response tell the workforce, and what is the likely effect on reporting?", hint: "Link to how leaders respond to failure, and to the crew member who recovered the situation." },
        { q: "Propose four actions that would make it harder for the next crew to open the wrong flange.", hint: "Prefer physical and design changes, then information, then checks. Who owns each?" }
      ],
      fac: [
        "People: interruption and loss of place; expectation (\"same place as this morning\"); experience creating confidence that skips the tag check; heat and post-lunch dip. Plant: identical parallel flanges; no physical tag or flag at the job; no local indication that a line is live. Process: isolation certificate references a line number, not the physical joint; shift handover vague (\"done apart from re-bolting\" was not true); SIMOPS pause with no re-verification step on return; turnaround schedule pressure.",
        "Principle 1: a 20-year foreman still makes a lapse/slip when interrupted, and experience may have made the check feel unnecessary. Principle 2: an interruption mid-task beside identical equipment is a textbook error-likely situation that could have been predicted at planning. Principle 3: the permit wording and handover practice shaped what the foreman did. Principle 4/5: the crew member who heard the hiss and acted is the reason this is a near miss; that behaviour should be reinforced and the learning shared.",
        "Removing the foreman signals that being involved in a near miss is dangerous to your job. Expect fewer reports, quicker re-tightening of joints without telling anyone, and loss of the information that would have revealed the flange-identification problem across the whole turnaround.",
        "Strong actions: tag or flag the exact joint to be broken at isolation time (job tag on the flange, physically attached); write permits and isolation certificates by physical joint tag, not just line number; require re-verification of the joint against the permit after any interruption or handover (a hold point); differentiate parallel lines (line markers, flow arrows); make 'restart after a pause' a standard toolbox point during SIMOPS. Owners: operations (isolation tags), permit authority (permit wording), turnaround planning (SIMOPS).",
        "If a group's first action is 'retrain the foreman', ask: what would the training change about two identical flanges with no tag? Steer to the hierarchy: design out, make visible, then check.",
        "Close by asking: how many other joints on this turnaround are identified only by line number? That is the real finding."
      ]
    },
    quiz: [
      { q: "Which statement best reflects the new view of human error?", opts: ["Most incidents are caused by careless workers who need closer supervision.", "Human error is a symptom of conditions in the system and is the starting point of an investigation.", "Human error can be eliminated with enough training and discipline.", "Errors only happen to inexperienced or poorly motivated people."], a: 1, why: "The new view treats error as a consequence of the conditions people work in. The investigation asks what made the action seem reasonable and what in the system should change." },
      { q: "According to the DOE human performance principles, error-likely situations are:", opts: ["Random and therefore impossible to prepare for.", "Only identifiable after an incident investigation.", "Predictable, manageable and preventable.", "The responsibility of the safety department alone."], a: 2, why: "Principle 2: the conditions that provoke error (time pressure, first-time tasks, interruptions, confusing equipment) can be recognised in advance and managed." },
      { q: "A crew member reports that he nearly opened the wrong valve. Which leadership response best supports future reporting?", opts: ["Thank him, find out what made the wrong valve look right, and fix the condition.", "Record a verbal warning but take no further action.", "Tell him to be more careful and close the report.", "Ask the safety department to investigate who else has made the same mistake."], a: 0, why: "How leaders respond to failure determines whether the next problem is reported. Thanking, learning and fixing the condition reinforces reporting." },
      { q: "Which of these is the best example of the 'process' element of human performance?", opts: ["The colour and position of two drain valves.", "An operator's level of fatigue.", "The wording of the isolation certificate and the shift handover practice.", "The noise level near a compressor."], a: 2, why: "Process covers procedures, permits, planning, handover and organisational arrangements. Valve layout and noise are plant/environment; fatigue is a people factor." },
      { q: "Why is hindsight dangerous when reviewing what someone did?", opts: ["It makes investigations take longer.", "Knowing the outcome makes the warning signs look more obvious than they were to the person at the time.", "It always blames management instead of the worker.", "It is not dangerous; hindsight shows exactly what the person should have done."], a: 1, why: "Hindsight bias makes the correct path look obvious after the event. The person inside the situation did not know the outcome and was paying attention to other cues." },
      { q: "In the Piper Alpha disaster (1988), which human performance issue is widely cited from the public inquiry?", opts: ["A crane operator dropped a load onto the gas compression module.", "Information about a removed pressure safety valve did not reach the night shift through the permit and handover system.", "Operators deliberately disabled the fire and gas system to increase production.", "A control room operator deliberately silenced a gas alarm to stop nuisance alarms."], a: 1, why: "The Cullen Inquiry found that the night shift started a condensate pump whose PSV had been removed under a permit; the permit-to-work and shift handover failed to communicate this." }
    ],
    tools: ["Old view / new view comparison card", "Five HP principles pocket card"],
    facGuide: `<p><b>Timing (70 min):</b> welcome link and expectations 5; teach 25 (people-plant-process 5, old/new view 8, principles 8, public cases 4); sort 5; scenario 30 in groups of 4-5; debrief 5.</p>
<p><b>How to run it:</b> open by asking the room, "Who has made a mistake at work this month?" Raise your own hand first. Then ask who reported it. The gap between the two answers is the topic of the day. For the principles, ask each table to put one principle into their own words with a site example; do not lecture all five.</p>
<p><b>Scenario:</b> give groups 20 minutes on questions 1-4, then take one answer per question from different tables. Push for physical and design actions before training.</p>
<p><b>Common misconceptions:</b> "new view means no consequences" (explain blame vs accountability and that just culture is covered in Module 6); "this is about workers, not managers" (principle 3 and the manager response in the scenario are about managers); "experienced people do not make this kind of error" (experience changes which errors you make, it does not remove them).</p>
<p><b>Kit:</b> principles pocket cards, sort cards (or app), flip chart per table.</p>`
  },
  /* ------------------------------------------------------------------ M2 */
  {
    id: "L1M2", n: 2,
    t: "How errors happen",
    mins: 70,
    obj: "Recognise slips, lapses, mistakes and violations, explain them using the skill-rule-knowledge model and fast and slow thinking, and describe why each type needs a different control.",
    learn: `
<h2>Two ways the brain works</h2>
<p>Psychologists describe two modes of thinking, labelled <b>System 1</b> and <b>System 2</b> by Keith Stanovich and Richard West and made widely known by Daniel Kahneman.</p>
<div class="grid2"><div class="card"><h4>System 1: fast</h4><p>Automatic, effortless, pattern-matching, always on. Lets an experienced operator walk a familiar unit, hear that a pump sounds wrong and reach for the right valve without thinking. Handles most of a normal shift. Prone to seeing what it expects.</p></div>
<div class="card"><h4>System 2: slow</h4><p>Deliberate, effortful, step by step. Used when you calculate a drain-down time, read an unfamiliar procedure, or work out why the separator level does not match the sight glass. Accurate but tires quickly, can only handle a few things at once, and is easily overloaded or distracted.</p></div></div>
<p>Neither system is good or bad. Skilled work depends on System 1, which is why experienced people are fast. Many errors happen when System 1 is running a task that needed System 2, for example when a non-routine job looks like a routine one.</p>

<h2>Skill, rule and knowledge</h2>
<p>Jens Rasmussen described three levels at which people perform tasks (the <b>SRK model</b>). Knowing which level you are working at tells you which errors to watch for.</p>
<div class="tbl"><table><thead><tr><th>Level</th><th>What it looks like</th><th>Oil and gas example</th><th>Typical error</th></tr></thead><tbody>
<tr><td><b>Skill-based</b></td><td>Highly practised, automatic, little conscious attention.</td><td>Opening a familiar block valve; logging readings on a routine round; keying a setpoint you enter every day.</td><td>Slips and lapses: wrong valve, wrong button, missed step after an interruption.</td></tr>
<tr><td><b>Rule-based</b></td><td>Recognise the situation and apply a stored rule: "if this, then do that".</td><td>"If the compressor trips on high discharge temperature, check cooler fans before restart." Following a startup procedure.</td><td>Rule-based mistakes: right rule in the wrong situation, or a bad rule learned on the job.</td></tr>
<tr><td><b>Knowledge-based</b></td><td>Novel situation, no rule fits, reasoning from first principles.</td><td>An unusual upset with conflicting indications; first time draining a vessel with a new crude blend; a gas release with no clear source.</td><td>Knowledge-based mistakes: wrong diagnosis from an incomplete mental model, fixation on the first explanation.</td></tr></tbody></table></div>
<p>The chance of error on any one occasion rises as you move from skill to knowledge level, and knowledge-level work is also slow and tiring. Because most of a shift is skill-based, though, slips and lapses are still the most common errors in absolute numbers. That is why good procedures, training and decision aids try to keep people in the rule-based band for foreseeable situations.</p>

<h2>Types of human failure</h2>
<p>The UK HSE (HSG48) and James Reason classify human failure into <b>errors</b> (unintended) and <b>violations</b> (deliberate departures from a rule or procedure, usually with good intentions such as getting the job done).</p>
<h3>Slips</h3>
<p>The plan was right but the action went wrong. You meant to open XV-101 and opened XV-102; you meant to type 45 and typed 54; you picked up the 3/4-inch spanner instead of the 7/8-inch. Slips happen during familiar tasks when attention is elsewhere, and when two controls or items look alike or sit close together.</p>
<h3>Lapses</h3>
<p>A step is forgotten, or you lose your place in a sequence. The vent is left open after draining; a gas test is not repeated after a break; a bypass on a trip is not removed after calibration. Lapses are strongly linked to <b>interruptions</b>, long sequences, steps that have no visual cue, and steps near the end of a job ("post-completion" errors, such as leaving the original in the photocopier, or leaving a drain cap off).</p>
<h3>Mistakes</h3>
<p>The action was carried out as planned, but the plan was wrong. In a <b>rule-based mistake</b> a normally good rule is applied where it does not fit ("the pig receiver gauge reads zero, so it is depressurised", when the gauge is blocked by wax). In a <b>knowledge-based mistake</b> a person works out a plan from an incorrect understanding, for example misreading which way a flow is going in an unfamiliar bypass arrangement.</p>
<h3>Violations</h3>
<div class="tbl"><table><thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody>
<tr><td>Routine</td><td>A shortcut that has become normal practice and is tolerated.</td><td>Skipping the second gas test because "it always reads zero" and nobody checks.</td></tr>
<tr><td>Situational</td><td>Compliance is difficult in that situation: tools, time, staffing or design make the rule hard to follow.</td><td>Climbing a pipe rack without a harness point because the scaffold has not arrived and the permit expires in an hour.</td></tr>
<tr><td>Exceptional</td><td>Rare, in an unusual situation, often believed to be the lesser risk.</td><td>Closing a valve outside the permit to stop a release spreading toward a hot work area.</td></tr></tbody></table></div>
<div class="callout or"><h4>Violations are information</h4><p>Most violations are committed by people trying to get the job done under the conditions they have been given. When a rule is routinely broken, ask why: is the rule wrong, is the equipment missing, is the time allowed unrealistic? Fix those, and make sure the rule is understood and enforced fairly.</p></div>

<h2>Why the type matters</h2>
<p>Each type of failure needs a different control. Getting this wrong is the most common reason incident actions fail.</p>
<ul>
<li><b>Slips and lapses</b> happen to skilled people. Retraining will not stop them. Use design (shape coding, separation, interlocks), clear labelling, checklists, place-keeping, and reducing interruptions.</li>
<li><b>Rule-based mistakes</b> need better cues and information: a reliable gauge, a second means of confirming pressure, a procedure that warns where the usual rule does not apply.</li>
<li><b>Knowledge-based mistakes</b> need better understanding, training on the specific hazard, decision support, and teams that challenge a single diagnosis.</li>
<li><b>Violations</b> need you to understand and remove the reasons behind them, involve the workforce in writing rules that work, and apply fair consequences where needed.</li></ul>
<div class="rev"><button type="button">A classic illustration: Three Mile Island, 1979</button><div class="body"><p>At the Three Mile Island nuclear plant, a relief valve stuck open. The control room light showed that the signal to close it had been sent, and operators reasonably took that to mean the valve was closed. Working from that understanding, they throttled back the emergency cooling water injection. The display design supported a mistake that was rational given what operators could see. It is a reminder that what an indicator actually measures matters as much as what it appears to say.</p></div></div>
<h3>Sort it</h3><p>Classify each failure.</p>
<div class="sortq" data-sort='[["An operator is called on the radio while lining up a pump and forgets to open the suction valve","Lapse"],["A technician isolates breaker 14 instead of breaker 41 on an identical panel","Slip"],["An operator assumes a blocked gauge reading zero means the vessel is depressurised","Mistake"],["A crew routinely skips the confined space re-test after lunch because it has always been clear","Violation"],["A new starter misdiagnoses rising separator pressure because he does not understand the flare header back-pressure","Mistake"]]' data-opts='["Slip","Lapse","Mistake","Violation"]'></div>
<p class="src">Based on HSE HSG48 Reducing error and influencing behaviour (types of human failure); Reason (1990) Human Error; Rasmussen (1983) skills, rules and knowledge; Kahneman (2011) Thinking, Fast and Slow; CCPS Guidelines for Preventing Human Error in Process Safety; Energy Institute Human Factors Briefing Note on human failure types.</p>`,
    activity: {
      title: "A night on the export pumps",
      time: "40 minutes",
      scn: `<p><span class="tag">Crude oil export terminal · Gulf coast</span><span class="tag">Night shift, 02:00-05:30 · humid, 34 °C</span></p>
<p>The following events were logged in one night shift at a crude export terminal while a tanker was loading.</p>
<ol>
<li><b>02:10</b> The panel operator meant to raise the setpoint on export pump P-301A flow controller from 1,800 to 1,850 m³/h. She typed 1,580. The flow dropped, a low-flow alarm came in and she corrected it within a minute.</li>
<li><b>02:45</b> A field operator drained water from the bottom of a crude tank. Halfway through, the jetty supervisor called him on the radio to help with a hose issue. He walked to the jetty and did not return to the drain for 40 minutes. The drain was still cracked open and oily water had started to reach the oily water sewer pit.</li>
<li><b>03:30</b> P-301B tripped on high bearing temperature. The field operator reset and restarted it twice because "on these pumps the temperature element always plays up at night". On the third trip the bearing had failed.</li>
<li><b>04:15</b> A contractor fitter working on a strainer took his gloves off and did not use the face shield required by the permit, because the face shield fogged in the humidity and he could not see the bolts.</li>
<li><b>05:10</b> During a pressure surge on the loading line, the shift supervisor believed the cause was the tanker closing its manifold valve. He asked the jetty to contact the ship. In fact a motor-operated valve on the shore line had partly closed after a power dip. The surge relief system lifted.</li></ol>`,
      qs: [
        { q: "Classify each of the five events as a slip, lapse, rule-based mistake, knowledge-based mistake, or a type of violation. Give one reason for each.", hint: "Think about whether the intention was right, whether a step was forgotten, whether a rule was misapplied, or whether a rule was deliberately broken." },
        { q: "For each event, say whether the person was working at skill, rule or knowledge level.", hint: "Use the SRK table. Some are debatable: explain your reasoning." },
        { q: "Which conditions on this night shift made errors more likely?", hint: "Time of night, loading pressure, humidity, interruptions, equipment reliability." },
        { q: "For events 1, 2 and 4, propose one control that matches the failure type. Why would 'retrain the operator' not work for events 1 and 2?", hint: "Match design and place-keeping to slips and lapses; remove the reason for the violation." }
      ],
      fac: [
        "1: Slip (transposition 1,850 to 1,580), skill-based; right intention, wrong execution. 2: Lapse (interruption, lost place), skill-based. 3: Rule-based mistake, or arguably a routine violation if the site rule says investigate before restart; the 'it always plays up' belief is a bad rule learned from experience. 4: Situational violation: the equipment (fogging shield) made compliance impractical in those conditions. 5: Knowledge-based mistake: an incorrect diagnosis of a complex situation, fixating on the most familiar cause.",
        "Conditions: 02:00-05:30 is the circadian low; tanker loading creates time pressure; high humidity; radio interruptions; known nuisance instrument eroding trust; possibly minimum night manning.",
        "Event 1 controls: setpoint change limits or confirmation prompt showing old and new values, rate-of-change limits, reading back the entered value before pressing enter (self-check). Event 2: never leave an open drain unattended (site rule plus a 'drain in progress' tag on the valve), use a deadman or spring-return drain valve, or radio protocol that asks 'are you at a hold point?' before tasking. Event 4: provide anti-fog face shields or a different grade of eye and face protection suited to humidity; ask the crew what works.",
        "Retraining will not fix events 1 and 2 because the operators already knew what to do. They are skilled people who were distracted or interrupted. Training targets knowledge; slips and lapses are failures of execution and memory.",
        "Event 3 is a strong discussion point: the nuisance trip taught the crew to ignore it. That is how a bad rule forms. The organisational fix is to repair or replace the unreliable instrument so the trip is believed again.",
        "Event 5: point out that the supervisor reasoned sensibly from experience. Controls are better information (MOV position indication on the loading display), and a team habit of asking 'what else could it be?'."
      ]
    },
    quiz: [
      { q: "An experienced operator intends to open the bypass but opens the identical drain valve next to it. This is best described as a:", opts: ["Knowledge-based mistake", "Routine violation", "Lapse", "Slip"], a: 3, why: "The intention (open the bypass) was correct; the action went wrong on a familiar task between two similar items. That is a slip." },
      { q: "Which control is most effective against lapses during long isolation sequences?", opts: ["Place-keeping on a step-by-step checklist and minimising interruptions.", "A refresher classroom course on isolation theory.", "A warning in the toolbox talk to concentrate harder.", "Disciplining people who miss steps."], a: 0, why: "Lapses are memory failures in skilled people. Place-keeping and controlling interruptions support memory; training and warnings do not." },
      { q: "In Rasmussen's SRK model, an operator diagnosing an unfamiliar upset with conflicting indications is working at which level?", opts: ["Skill-based", "Rule-based", "Knowledge-based", "Automatic"], a: 2, why: "Novel situations with no stored rule require reasoning from first principles, which is knowledge-based performance." },
      { q: "A crew climbs a pipe rack without fall protection because the scaffold has not arrived and the permit is about to expire. This is an example of a:", opts: ["Slip", "Situational violation", "Exceptional violation", "Lapse"], a: 1, why: "The rule was deliberately broken because the conditions at that moment (no scaffold, time pressure) made compliance difficult: a situational violation." },
      { q: "Which statement about System 1 (fast) thinking is correct?", opts: ["It is only used by inexperienced workers.", "It is slow and accurate but tires quickly.", "It is automatic and efficient but can see what it expects instead of what is there.", "It is the mode used when working carefully through an unfamiliar procedure step by step."], a: 2, why: "System 1 enables skilled, quick performance but relies on patterns and expectations, which is the mechanism behind many slips and perception errors." },
      { q: "An operator believes a pig receiver is depressurised because its gauge reads zero, but the gauge is blocked with wax. This is a:", opts: ["Rule-based mistake", "Slip", "Routine violation", "Lapse"], a: 0, why: "A normally good rule (gauge zero means depressurised) was applied in a situation where it did not hold. The action was as intended; the plan was wrong." }
    ],
    tools: ["Human failure types card (slip, lapse, mistake, violation)", "SRK quick reference"],
    facGuide: `<p><b>Timing (70 min):</b> teach 25 (System 1/2 demo 5, SRK 7, failure types 10, controls 3); sort 5; scenario 30; debrief 10.</p>
<p><b>Warm-up demo:</b> use a quick Stroop-style exercise (colour words printed in a different colour, read aloud on a flip chart or slide) or ask the room to count how many times a letter appears in a sentence. Show that System 1 runs whether we want it to or not.</p>
<p><b>How to run it:</b> make the failure types concrete with participants' own examples; ask "what is a slip you made this week?" (keys, phone, wrong door). Avoid long debates about edge cases; the point is that each type needs a different fix. Event 3 and 5 in the scenario genuinely sit on boundaries; reward reasoning rather than the label.</p>
<p><b>Common misconceptions:</b> "violations are always bad people" (most are situational); "mistakes and slips are the same" (intention vs execution); "more training fixes everything" (not slips or lapses).</p>
<p><b>Kit:</b> failure-type cards, scenario handout, flip chart.</p>`
  },
  /* ------------------------------------------------------------------ M3 */
  {
    id: "L1M3", n: 3,
    t: "Error traps and error-likely situations",
    mins: 70,
    obj: "Identify performance shaping factors and error precursors in a field task using the TWIN categories, and recognise the red-flag conditions that should make anyone pause before starting or continuing work.",
    learn: `
<h2>Errors do not come from nowhere</h2>
<p>Errors are more likely in some situations than in others. The conditions that raise the odds go by several names: <b>performance shaping factors</b> (PSFs), performance influencing factors, error-producing conditions, <b>error precursors</b> or simply <b>error traps</b>. Whatever the label, the key point from Module 1 holds: they are predictable. They can usually be seen before the job starts, by the people who will do it.</p>
<p>An <b>error-likely situation</b> is a moment when a task with an important or irreversible step meets one or more precursors. A step where a single error would cause immediate, irreversible harm (breaking containment, operating a valve on a live line, bypassing a trip) is called a <b>critical step</b>. When precursors line up around a critical step, slow down.</p>

<h2>Performance shaping factors</h2>
<p>HSE HSG48 groups the factors that shape performance into three areas: the job (the task and the environment it is done in), the individual and the organisation. All three are present on every job.</p>
<div class="grid3">
<div class="card"><h4>The task and work environment</h4><p>How complex it is; how clear the procedure is; whether controls, displays and labels are easy to read; how much time is allowed; whether it is boring, repetitive or done rarely; physical access and posture; heat, noise, lighting, weather, dust and PPE restrictions.</p></div>
<div class="card"><h4>The individual</h4><p>Competence, experience and familiarity with this exact task; fatigue; health; stress; attitude to risk; language; whether they have done it before on this unit.</p></div>
<div class="card"><h4>The organisation</h4><p>Work planning, staffing, supervision, shift patterns, handover, communication, how change is managed, and the safety culture: what really gets rewarded and what gets ignored.</p></div></div>

<h2>TWIN: the error precursor checklist</h2>
<p>The DOE human performance handbook offers a practical memory aid for spotting precursors before a job: <b>TWIN</b>. It stands for <b>T</b>ask demands, <b>W</b>ork environment, <b>I</b>ndividual capabilities and <b>H</b>uman <b>N</b>ature. The table lists common examples, translated into everyday oil and gas situations.</p>
<div class="tbl"><table><thead><tr><th>Category</th><th>Typical precursors</th><th>What it looks like on site</th></tr></thead><tbody>
<tr><td><b>Task demands</b></td><td>Time pressure; high workload; several tasks at once; repetitive or monotonous steps; irreversible actions; unclear roles or goals; vague or missing procedure; steps that need interpretation or calculation.</td><td>Getting a compressor back before the tanker window closes; draining six identical vessels in a row; a startup with steps that say "adjust as required".</td></tr>
<tr><td><b>Work environment</b></td><td>Distractions and interruptions; changes from routine; confusing displays or controls; out-of-service instruments and workarounds; hidden system response; unexpected equipment condition; lack of an independent indication; poor lighting, heat, noise.</td><td>Radio calls mid-isolation; a level transmitter known to be unreliable; identical valves with tags facing the pipe rack; SIMOPS with a crane lift overhead; working at 46 °C in full FRC and breathing apparatus.</td></tr>
<tr><td><b>Individual capabilities</b></td><td>Unfamiliar with the task or first time; lack of knowledge or wrong mental model; new technique; imprecise communication habits; lack of proficiency; illness or fatigue.</td><td>A contractor new to the site; a technician who has only done the task on a different model of analyser; a third language on the radio; the last of seven night shifts.</td></tr>
<tr><td><b>Human nature</b></td><td>Stress; habit patterns; assumptions; complacency or overconfidence; mindset ("I have done this a hundred times"); inaccurate risk perception; mental shortcuts; limited short-term memory.</td><td>"It was isolated this morning"; "the gas test is always clear"; "the other pump is on the left"; holding a five-digit tag number in your head while walking across the plot.</td></tr></tbody></table></div>
<div class="callout"><h4>Precursors combine</h4><p>One precursor on its own may be manageable. Several together multiply the risk. A first-time task, under time pressure, at night, with an out-of-service instrument, is far more dangerous than any one of those conditions alone. A useful rule of thumb: when you count three or more precursors around a critical step, treat it as an error-likely situation and use the tools in Module 4.</p></div>

<h2>Red-flag conditions</h2>
<p>Some conditions are so strongly linked to serious events that they should stop you, at least long enough to think and ask. Learn them by heart.</p>
<ul>
<li><b>The plant is not as expected:</b> an unexpected pressure, a valve in the wrong position, a gauge reading that does not match, a smell or sound that should not be there.</li>
<li><b>The procedure does not match the plant:</b> a step that cannot be done as written, a valve tag that does not exist, equipment that has been modified.</li>
<li><b>Confusion or uncertainty:</b> you are not sure which item, which line, which step, or who is in charge.</li>
<li><b>First time or infrequent:</b> a job you, or the crew, have not done before or have not done for a long time.</li>
<li><b>Interruption or handover in the middle of a critical step:</b> a break, a radio call, a SIMOPS pause, a change of operator or permit holder.</li>
<li><b>Simultaneous operations and changes:</b> other work in the same area, a late scope change, a temporary bypass or override in place.</li>
<li><b>Feeling rushed, tired or unwell</b>, or hearing the words "just this once", "quick job" or "it will be fine".</li></ul>
<div class="callout or"><h4>The phrases that signal a trap</h4><p>"We always do it this way." "It should be isolated." "I think it is that one." "Don't worry, I checked it yesterday." "We are nearly finished, just do the last bit." Train your ear to notice them.</p></div>

<h2>Gulf-region and project factors</h2>
<p>Some precursors are particularly common in our region and on our projects: extreme summer heat and humidity; mixed crews with several first languages; large contractor workforces during turnarounds and new-build projects; long rotations and commuting; fasting during Ramadan with changed working hours; sandstorms reducing visibility; and congested plots during SIMOPS. None of these is a reason not to work. All of them should be in the conversation before work starts.</p>

<h2>From spotting to acting</h2>
<p>Seeing a precursor is only useful if it changes something. The options, from strongest to weakest, are:</p>
<ol><li><b>Remove it:</b> reschedule the job out of the heat, finish the radio call before starting, fix the defective gauge, re-sequence to avoid SIMOPS.</li>
<li><b>Reduce it:</b> add a second person, tag the correct valve beforehand, mark up the procedure, take a break before the critical step.</li>
<li><b>Defend against it:</b> use a peer check or independent verification at the critical step, place-keep on the procedure, agree a stop point.</li>
<li><b>Recover from it:</b> agree in advance how you would notice and correct an error (what you will watch, who will call it).</li></ol>
<h3>Sort it</h3><p>Place each precursor in its TWIN category.</p>
<div class="sortq" data-sort='[["Permit expires in 30 minutes and the job is not finished","Task demands"],["Radio call while counting turns on a gearbox valve","Work environment"],["Contractor technician on his first day at this site","Individual capabilities"],["The belief that the line is surely empty because it was empty last week","Human nature"],["Level transmitter known to read high and a sight glass that is dirty","Work environment"],["Taking the same reading at twelve sample points in a row on a long, monotonous round","Task demands"]]' data-opts='["Task demands","Work environment","Individual capabilities","Human nature"]'></div>
<p class="src">Based on DOE-HDBK-1028-2009 Human Performance Improvement Handbook (error precursors, TWIN, error-likely situations, critical steps); HSE HSG48 (job, individual and organisational factors) and the HSE human factors toolkit on performance influencing factors; Energy Institute Human Factors Briefing Notes; CCPS Guidelines for Preventing Human Error in Process Safety; Conklin, The 5 Principles of Human Performance (critical steps).</p>`,
    activity: {
      title: "Sampling a sour separator on a busy afternoon",
      time: "30 minutes",
      scn: `<p><span class="tag">Sour gas processing plant · Gulf region</span><span class="tag">Day shift 13:30 · 45 °C, dust haze</span></p>
<p>A laboratory technician, Ravi, has been asked to take a liquid hydrocarbon sample from the HP separator outlet on a sour gas train (H2S service, approximately 2% in the gas phase). The sample is urgent: the process engineer suspects carry-over and wants a result before the 16:00 production call.</p>
<p>Ravi joined the site three weeks ago from a refinery where he sampled using closed-loop samplers. This train has an older open-type sample point with a double block valve arrangement and a purge line to the closed drain. The sampling procedure was last revised five years ago and refers to a sample cylinder rig that has since been replaced. The field operator who would normally accompany him is helping with a SIMOPS crane lift on the next train. The control room has told Ravi on the radio, "Just go ahead, the operator will join you when he can."</p>
<p>Ravi is wearing FRC, his personal H2S monitor and is carrying an escape set. The site rule is that open sampling in H2S service requires a second person and breathing apparatus. The SCBA trolley at the train is present but the cylinder gauge is in the red. It is the third week of Ramadan; Ravi is fasting and has been working since 07:00. A dust haze is reducing visibility, and the wind sock is barely moving.</p>`,
      qs: [
        { q: "Using TWIN, list every precursor you can find. Aim for at least eight across all four categories.", hint: "Task demands, Work environment, Individual capabilities, Human nature. Include the procedure, the equipment, the people and the time pressure." },
        { q: "Which red-flag conditions are present? Which single one would make you stop first?", hint: "Use the red-flag list. Consider second person, BA, procedure-plant mismatch, first-time task." },
        { q: "What is the critical step in this task, and why?", hint: "Where could one action cause irreversible harm?" },
        { q: "What should Ravi do now, and what should the control room have done differently?", hint: "Think stop when unsure, remove or reduce precursors, and organisational responsibility." }
      ],
      fac: [
        "Task demands: urgent result before 16:00; procedure out of date (refers to old rig); non-routine open sampling; irreversible exposure if valve opened. Work environment: no second person (SIMOPS); SCBA cylinder low; dust haze and low wind (poor dispersion, poor visibility); 45 °C heat; older sample point design. Individual capabilities: new to the site and to this sampler type (different mental model from closed-loop sampling); fasting and long day (fatigue, hydration). Human nature: assumption that it is like the refinery sampler; pressure to please; deference to the control room instruction.",
        "Red flags: procedure does not match plant; first time on this equipment; required second person not present; required BA not usable; low wind for H2S dispersion; instruction to proceed contrary to a site rule. The first stop trigger: no second person and no serviceable BA for an H2S open sample is a site rule breach and an immediate stop.",
        "Critical step: opening the sample valve on the H2S line (and venting/purging). Once opened, any exposure is immediate and potentially fatal; it cannot be undone.",
        "Ravi should not start. He should tell the control room he will not sample until the second person and serviceable BA are available, and that the procedure does not match the sampler. That is stop-when-unsure and is backed by stop-work authority.",
        "The control room created a situational violation by saying 'just go ahead'. Better: hold the sample until the operator is free, or reprioritise the crane lift; arrange BA cylinder change; recognise that a new starter on an unfamiliar sampler is an error-likely situation. Also raise the outdated procedure through the normal route.",
        "Discussion: the urgency was real but artificial; a sample result 30 minutes later rarely matters. Ask the group how often 'just go ahead' is heard on their site."
      ]
    },
    quiz: [
      { q: "In the TWIN model of error precursors, what does the 'W' stand for?", opts: ["Workload", "Work environment", "Worker attitude", "Written procedures"], a: 1, why: "TWIN: Task demands, Work environment, Individual capabilities, Human nature. Workload falls under task demands." },
      { q: "Which of these is a 'human nature' precursor?", opts: ["A gauge that is out of calibration", "A permit that expires in 20 minutes", "The assumption that a line is empty because it was empty last week", "A contractor on his first day at site"], a: 2, why: "Assumptions, habits, mindset and overconfidence are human nature precursors. The gauge is work environment, the permit is task demands, and the new contractor is individual capabilities." },
      { q: "What is a 'critical step'?", opts: ["Any step in a procedure that is printed in bold.", "A step that the supervisor must sign.", "The first step of a job.", "An action where a single error could cause immediate, irreversible harm."], a: 3, why: "A critical step is one where an error would immediately trigger harm that cannot be reversed, such as opening a valve on a live H2S line." },
      { q: "A crew identifies time pressure, an unreliable level transmitter and a first-time task around the same isolation step. What does this indicate?", opts: ["An error-likely situation where extra defences such as a peer check or a stop point should be used.", "Normal work that needs no special treatment.", "That the task must be cancelled permanently.", "That only the supervisor should perform the task."], a: 0, why: "Several precursors around a critical step create an error-likely situation; the right response is to remove, reduce or defend against them, not necessarily to cancel." },
      { q: "Which is the strongest way to deal with an identified precursor?", opts: ["Remind the person to be careful.", "Add a note to the procedure.", "Remove it, for example by rescheduling the task out of the heat or fixing the defective gauge.", "Rely on the person's experience."], a: 2, why: "Removing the precursor is stronger than reducing, defending or reminding: it takes the trap away for everyone." },
      { q: "Which phrase is a warning sign of a possible error trap?", opts: ["\"Let me read that tag back to you.\"", "\"Let us confirm the isolation before we break the flange.\"", "\"I'll stop here until the second person arrives.\"", "\"It should be isolated, it was done this morning.\""], a: 3, why: "\"It should be\" signals an assumption rather than a verification. The others are signs of good practice." }
    ],
    tools: ["TWIN error precursor checklist", "Red-flag conditions card"],
    facGuide: `<p><b>Timing (70 min):</b> teach 25 (PSFs 5, TWIN 10, red flags 6, regional factors 4); sort 5; scenario 30 (20 groups, 10 debrief); close 10 with a "precursor hunt" of the training room or a familiar site task.</p>
<p><b>How to run it:</b> hand each table a printed TWIN checklist. For the scenario, ask groups to count precursors on a flip chart; the table with the most valid precursors explains theirs first. Then focus on what Ravi should do, and on the control room's role.</p>
<p><b>Sensitivity:</b> handle the Ramadan point respectfully. The message is not that fasting staff are unsafe; it is that changed sleep, hydration and hours are precursors the team plans for, exactly like night shift. Invite fasting participants to share what helps.</p>
<p><b>Common misconceptions:</b> "precursors are excuses" (they are predictions); "experienced people do not need to check for them" (experience brings habit and assumption precursors); "if I spot one I must stop the job" (not always: remove, reduce or defend).</p>
<p><b>Kit:</b> TWIN checklists, red-flag cards, scenario handout, flip charts.</p>`
  },
  /* ------------------------------------------------------------------ M4 */
  {
    id: "L1M4", n: 4,
    t: "Your personal human performance toolkit",
    mins: 65,
    obj: "Describe the purpose of six basic error-reduction tools (STAR, questioning attitude, stop when unsure, three-way communication, place-keeping and peer checking) and demonstrate STAR and three-way communication in a simple field task.",
    learn: `
<h2>Why simple tools work</h2>
<p>Modules 2 and 3 showed that skilled people make predictable errors in predictable situations. Human performance tools are short, deliberate habits that switch on careful (System 2) thinking at the moment it is needed, or that use a second person or a written record to catch what one memory or one pair of eyes will miss. They were developed in nuclear power and aviation and are now standard in many oil and gas operators' operating discipline programmes.</p>
<p>The tools are not a substitute for good design, good procedures or sensible workload. They are the last layer of defence that belongs to <b>you</b>, and they work best when the whole crew uses them. At Foundation level you need to know what each tool is, when to use it, and how to do the simplest version. Level 2 (HP-2) practises them in depth.</p>

<h2>1. STAR self-check</h2>
<p>Use STAR immediately before any action that matters: operating a valve, pressing a button, breaking a joint, entering a setpoint.</p>
<div class="tbl"><table><thead><tr><th>Step</th><th>What you do</th><th>Example: closing a block valve</th></tr></thead><tbody>
<tr><td><b>S</b>top</td><td>Pause for a moment. Remove distractions. Focus on the task.</td><td>Finish the radio call. Step in front of the valve.</td></tr>
<tr><td><b>T</b>hink</td><td>Understand what you are about to do and what you expect to happen. Ask: is this the right item, and what if it is wrong?</td><td>"I am closing HV-2307, the gas outlet block on the knockout drum. Pressure upstream should stay steady."</td></tr>
<tr><td><b>A</b>ct</td><td>Touch or point to the item, verify the label against the instruction, then perform the action.</td><td>Touch the tag, read it aloud, compare to the permit, then close the valve.</td></tr>
<tr><td><b>R</b>eview</td><td>Check that the result is what you expected. If not, stop and report.</td><td>Watch the stem and the local gauge; confirm with the control room.</td></tr></tbody></table></div>
<p>Touching or pointing at the item and saying the tag out loud (sometimes called "point and call", widely used on Japanese railways) engages several senses and is reported to reduce slips on routine tasks.</p>

<h2>2. Questioning attitude</h2>
<p>A questioning attitude means not assuming that things are as they should be. It is the habit of pausing to ask:</p>
<ul><li>What am I about to do, and what could go wrong?</li><li>Is the plant, the equipment, the permit as I expect? If not, why not?</li><li>What do I not know? Who would know?</li><li>Am I sure, or do I just think so?</li></ul>
<p>It is the natural partner of the red-flag conditions in Module 3. A questioning attitude is not rudeness and it is not lack of trust in colleagues. Good teams welcome questions because they catch problems early.</p>

<h2>3. Stop when unsure, and stop-work authority</h2>
<p>When you are unsure, confused, or something unexpected happens, <b>stop</b>, place the equipment in a safe condition if you can do so safely, and get help. Do not proceed in the face of uncertainty, and do not try to "make it work".</p>
<div class="callout or"><h4>Stop-work authority</h4><p>On most sites every person, including contractors and visitors, has the authority and the obligation to stop work they believe is unsafe, without fear of reprisal. It is a standard element of operators' HSE management systems and is usually written into contractor bridging documents. Know your site's process: who you tell, how the job is made safe, and how it is restarted. Stopping a job is never a failure; restarting it without understanding why it was stopped is.</p></div>
<p>A good stop is clear and respectful: "Stop. I am not sure this line is isolated. Can we check the isolation certificate together before we break the joint?"</p>

<h2>4. Three-way communication</h2>
<p>Spoken instructions get misheard, especially on a noisy plot, on the radio, in PPE, or between people with different first languages. Three-way communication closes the loop:</p>
<ol><li><b>Sender</b> states the message clearly, using the receiver's name and the full equipment tag. "Ahmed, this is Control. Close valve HV-2307 on the KO drum outlet."</li>
<li><b>Receiver</b> repeats it back in full. "Control, Ahmed. Close HV-2307 on the KO drum outlet."</li>
<li><b>Sender</b> confirms it is correct, or corrects it. "That is correct." Only then does the receiver act.</li></ol>
<p>Use the phonetic alphabet for letters and say numbers digit by digit ("two-three-zero-seven") where confusion is possible. Avoid vague words like "the left one", "that pump" or "the usual valve".</p>

<h2>5. Place-keeping</h2>
<p>Place-keeping means physically marking your progress through a procedure or checklist so you cannot skip or repeat a step, especially after an interruption. A common method is to mark each step as you start it and tick or sign it off once complete, so that when you return after a break or radio call you know exactly which step you are on. On isolation lists, tick each valve and its lock only when you have verified it in the field, not in the office.</p>

<h2>6. Peer check</h2>
<p>A peer check is when a second qualified person watches you <b>before</b> you take an action, to confirm you have the right item and the right action. The performer still uses STAR; the peer is an extra pair of eyes. Use it for critical steps, such as the first break of containment, removing a blind, or bypassing a safety function. (Independent verification, where a second person checks separately afterwards, is covered at HP-2.)</p>
<div class="rev"><button type="button">Why can two people still miss an error?</button><div class="body"><p>If the checker assumes the performer is right, or the performer relaxes because "someone is checking", both may miss the error. Each person must check as if they were the only defence. A peer who just watches without verifying is a spectator, not a checker.</p></div></div>

<h2>When to use which tool</h2>
<div class="tbl"><table><thead><tr><th>Situation</th><th>Tools</th></tr></thead><tbody>
<tr><td>Any physical action on plant</td><td>STAR, questioning attitude</td></tr>
<tr><td>Instructions by radio, phone or across a noisy plot</td><td>Three-way communication</td></tr>
<tr><td>Long or multi-step procedure, isolations, line-ups</td><td>Place-keeping, STAR</td></tr>
<tr><td>Critical step, first-time task, error-likely situation</td><td>Peer check, STAR, stop points</td></tr>
<tr><td>Something unexpected or uncertain</td><td>Stop when unsure, questioning attitude</td></tr></tbody></table></div>
<h3>Sort it</h3><p>Which tool fits best?</p>
<div class="sortq" data-sort='[["Control room tells you by radio which pump to start","Three-way communication"],["You are interrupted halfway through a 22-step reinstatement list","Place-keeping"],["The pressure gauge reads higher than the permit says it should","Stop when unsure"],["You are about to press the button that resets a compressor trip","STAR"],["A colleague watches you select the blind flange to be removed before you start","Peer check"]]' data-opts='["STAR","Three-way communication","Place-keeping","Stop when unsure","Peer check"]'></div>
<p class="src">Based on DOE-HDBK-1028-2009 Vol. 2 Human Performance Tools for Individuals, Work Teams and Management (self-checking, questioning attitude, three-way communication, place-keeping, peer checking); INPO human performance fundamentals; Energy Institute human factors briefing notes; HSE HSG48.</p>`,
    activity: {
      title: "Draining the condensate pot",
      time: "30 minutes",
      scn: `<p><span class="tag">Offshore production platform · Arabian Gulf</span><span class="tag">Day shift 09:00 · 36 °C, high noise on the compression deck</span></p>
<p>The control room operator (CRO) needs the field operator, Joseph, to drain liquid from the condensate pot on the second-stage compressor suction scrubber, which has a high-level alarm. There are two scrubbers side by side on the compression deck, 1st stage (V-4101) and 2nd stage (V-4102). Each has a level gauge, a drain valve to the closed drain and a vent. Noise on the deck is high and Joseph wears double hearing protection with a radio headset.</p>
<p>The radio exchange went as follows:</p>
<ul><li><b>CRO:</b> "Joseph, can you drain the scrubber, the level's high."</li>
<li><b>Joseph:</b> "Copy, going now."</li></ul>
<p>Joseph went to V-4101, which he usually drains on his morning round. He opened the drain. The level in V-4101 dropped quickly to zero and gas began to pass to the closed drain drum, whose pressure began to rise. The CRO saw the closed drain drum pressure alarm and called Joseph, who closed the drain. V-4102 was still high and the compressor tripped on high-high level two minutes later.</p>
<p>In the group, you will (1) analyse what went wrong and (2) role-play the task correctly.</p>`,
      qs: [
        { q: "Identify at least three points where an HP tool would have caught the error. Name the tool for each.", hint: "Look at the radio message, the moment before opening the drain, and the moment after." },
        { q: "Rewrite the radio exchange as a correct three-way communication.", hint: "Names, full tag, action, repeat-back, confirmation. Consider the noise." },
        { q: "Describe how Joseph would apply STAR at the drain valve, step by step, including what he expects to see.", hint: "Stop, Think, Act, Review: what does he touch, read, expect and watch?" },
        { q: "Role-play: in pairs, one plays the CRO and one Joseph. Run the exchange and the STAR. Observers note what was done well and what was missed.", hint: "Use the observer checklist: name, tag, repeat-back, confirm, touch-and-read, expected result, review." }
      ],
      fac: [
        "Catch points: (1) the radio instruction (no tag, no stage, no repeat-back) - three-way communication; (2) at the valve (no verification of tag against the instruction; habit from the morning round) - STAR and questioning attitude ('which scrubber has the high level?'); (3) after opening (level falling too fast, gas sound) - Review and stop when unsure; (4) the level gauge on V-4101 did not show high level, a red flag that the plant was not as expected.",
        "Model three-way: CRO: 'Joseph, Control. Drain the condensate pot on V-4102, second-stage suction scrubber. Level is 85% and rising. Keep the level above 20%.' Joseph: 'Control, Joseph. Drain V-4102, second-stage suction scrubber, keep above 20%.' CRO: 'Correct.' Then Joseph reports 'At V-4102, local level gauge reads high, opening drain now' and the CRO confirms.",
        "STAR at the valve: Stop (stand at V-4102, pause, nothing else in hand); Think (this is the second-stage scrubber, level is high, when I open the drain I expect the gauge to fall slowly and liquid, not gas, to pass; I will close by 20%); Act (touch the tag, read V-4102 aloud, compare to instruction, crack the drain slowly); Review (watch the gauge and listen for gas; report level to the CRO).",
        "Explain that the habit precursor (draining V-4101 every morning) plus a vague instruction plus noise made this a predictable slip. The organisational fixes are clear tag labelling visible from the walkway, a standard radio protocol, and, at HP-2 level, considering whether a drain-to-closed-drain operation should be attended with a level stop point.",
        "In the role-play, insist that the receiver acts only after confirmation. Common faults: the CRO says 'yep' instead of a clear confirmation; the field operator repeats only part of the tag; nobody states the expected result.",
        "Point out that a noisy deck with double hearing protection is exactly where three-way communication is most needed, and where people are most tempted to skip it."
      ]
    },
    quiz: [
      { q: "What do the letters STAR stand for?", opts: ["Stop, Think, Act, Review", "Safety, Training, Attitude, Responsibility", "Stop, Tell, Ask, Report", "Start, Test, Adjust, Record"], a: 0, why: "STAR is the self-checking tool: Stop, Think, Act, Review, used immediately before an important action." },
      { q: "In three-way communication, when should the receiver carry out the instruction?", opts: ["Immediately after hearing it.", "After repeating it back and receiving the sender's confirmation that it is correct.", "After repeating it back, whether or not the sender replies.", "Only after receiving it in writing."], a: 1, why: "The loop is closed only when the sender confirms the repeat-back is correct (or corrects it). Acting before confirmation leaves room for a misheard instruction." },
      { q: "You are halfway through a reinstatement checklist when you are called away. Which tool helps you avoid skipping a step when you return?", opts: ["Peer check", "Questioning attitude", "Place-keeping", "Three-way communication"], a: 2, why: "Place-keeping marks your exact position in a procedure so that interruptions do not cause skipped or repeated steps." },
      { q: "What is the main purpose of a peer check?", opts: ["To assess the competence of the performer for appraisal.", "To transfer responsibility for the action to the checker.", "To complete the paperwork more quickly.", "To have a second person confirm the right item and action before a critical action is taken."], a: 3, why: "A peer check is a second set of eyes before the action. The performer remains responsible and still self-checks." },
      { q: "A gauge reads a higher pressure than the permit says it should be. What should you do first?", opts: ["Carry on carefully; gauges are often wrong.", "Stop, make the situation safe if possible, and get help to understand the difference.", "Tap the gauge and continue if the needle moves.", "Replace the gauge yourself."], a: 1, why: "An unexpected plant condition is a red flag. Stop when unsure: do not proceed until the discrepancy is understood." },
      { q: "Which instruction is the best example of a clear message for three-way communication?", opts: ["\"Close the usual valve on the left scrubber.\"", "\"Shut that one we talked about earlier.\"", "\"Saleh, Control. Close HV-2307, knockout drum gas outlet.\"", "\"Can someone close the KO drum valve when they get a moment?\""], a: 2, why: "A clear message names the receiver, the sender, the full tag and the action. The others are vague and rely on assumption." }
    ],
    tools: ["STAR self-check card", "Three-way communication radio card", "Place-keeping marking convention", "Stop-work authority script"],
    facGuide: `<p><b>Timing (65 min):</b> teach 25 (STAR demo 5, questioning and stop 6, three-way 6, place-keeping and peer check 5, matrix 3); sort 5; scenario analysis 15; role-play 15; close 5.</p>
<p><b>How to run it:</b> demonstrate STAR yourself first on a real object in the room (a light switch labelled with a fake tag). Then demonstrate a bad radio exchange and a good one with your co-facilitator. For the role-play use handheld radios or two chairs back to back; add background noise (a recording of compressor noise) if you can. Observers use the checklist in the practical assessment.</p>
<p><b>Assessment link:</b> this role-play is a rehearsal for Practical task B. Give individual feedback.</p>
<p><b>Common misconceptions:</b> "three-way communication is slow and only for the control room" (it takes seconds and applies to any spoken instruction); "a peer check means the checker is responsible" (the performer still owns the action); "stopping a job will get me in trouble" (stop-work authority is a duty, and leaders must back it).</p>
<p><b>Kit:</b> STAR cards, radios or headsets, tagged object, observer checklists.</p>`
  },
  /* ------------------------------------------------------------------ M5 */
  {
    id: "L1M5", n: 5,
    t: "Fatigue, heat, stress and fitness for duty",
    mins: 55,
    obj: "Explain how fatigue, heat, stress and wellbeing affect performance, recognise the warning signs in themselves and colleagues, and describe the correct fitness-for-duty response.",
    learn: `
<h2>The body sets the limits</h2>
<p>Every tool in Module 4 relies on a person who is alert enough to use it. Fatigue, heat, stress, illness and some medicines all reduce attention, memory, judgement and reaction time, often without the person realising it. Being <b>fit for duty</b> means being physically and mentally able to do your job safely for the whole shift. It is a shared responsibility: the company plans work so people can rest and stay well; each person arrives fit, says so when they are not, and looks out for colleagues.</p>

<h2>Fatigue</h2>
<p>Fatigue is a state of reduced mental and physical capability caused by too little sleep, too long awake, working at the wrong time of the body clock, or heavy workload. It is one of the most common performance shaping factors in our industry, because of shift work, long rotations, turnarounds, commuting and night operations.</p>
<div class="grid2">
<div class="card"><h4>What causes it</h4><ul><li>Less sleep than you need (most adults need 7 to 9 hours) and the sleep debt that builds over several short nights.</li><li>Long time awake: shift plus commute plus overtime.</li><li>Working through the body clock low point, roughly 02:00 to 06:00, with a smaller dip in the early afternoon.</li><li>Many consecutive shifts, quick shift changes, and the first nights after switching from days.</li><li>Poor sleep conditions: a hot or noisy camp room, shared rooms, daytime light.</li><li>Heavy physical work, heat, monotony, illness.</li></ul></div>
<div class="card"><h4>What it does</h4><ul><li>Slower reactions and poorer attention: alarms and radio calls are missed.</li><li>Memory lapses: skipped steps, forgotten tasks.</li><li>Poorer judgement and greater acceptance of risk: "good enough".</li><li>Irritability and poorer communication with the crew.</li><li><b>Microsleeps</b>: brief lapses of a few seconds that the person may not notice, especially dangerous when driving.</li></ul></div></div>
<div class="callout or"><h4>Awake for 17 hours</h4><p>Research published in 1997 (Dawson and Reid) and 2000 (Williamson and Feyer) found that after about 17 to 19 hours without sleep, performance on some tasks was comparable to that of a person with a blood alcohol concentration of 0.05%, and after around 24 hours it was comparable to about 0.1%. A 05:00 start after a poor night, followed by a 12-hour shift and a long drive home, reaches that range easily.</p></div>
<p><b>Warning signs</b> in yourself: heavy eyelids, frequent yawning, head nodding, rubbing eyes, wandering thoughts, missing a radio call, having to re-read the same line, not remembering the last few kilometres of a drive. In colleagues: slower responses, irritability, unusual mistakes, staring, withdrawal.</p>
<h3>API RP 755 and fatigue risk management</h3>
<p>API Recommended Practice 755, <i>Fatigue Risk Management Systems for Personnel in the Refining and Petrochemical Industries</i>, is the main industry guidance on fatigue for process plants. It sets out a fatigue risk management system (FRMS) that includes: defined roles and responsibilities; hours-of-service limits on shift length, consecutive shifts and minimum rest, with separate arrangements for normal operations and for planned outages such as turnarounds; a process for exceptions; fatigue training for workers, families and supervisors; considering fatigue in incident investigations; and periodic review. Many Gulf operators apply RP 755 or similar internal standards to their own staff and contractors. You do not need to know the numbers, but you should know that your site has limits, who manages them, and that you must report when you are too tired to work safely.</p>
<h3>What you can do</h3>
<ul><li>Protect your sleep: dark, cool and quiet room; eye mask and earplugs in camp; a consistent routine.</li><li>On nights, a short nap before the first night shift helps; avoid caffeine in the hours before you plan to sleep.</li><li>Plan the drive home; do not drive when you are fighting sleep. Use site transport or rest first.</li><li>Tell your supervisor if you have not slept, and declare overtime that would take you over the limits.</li><li>On the night shift, schedule critical steps away from 03:00 to 05:00 where possible, and use peer checks when you cannot.</li></ul>

<h2>Heat stress in the Gulf summer</h2>
<p>Summer air temperatures in the Gulf region regularly exceed 45 °C, with high humidity on the coast and offshore. Radiant heat from furnaces, flares, hot lines and steel decks, plus flame-resistant clothing, chemical suits and breathing apparatus, add to the load. Heat affects thinking before it affects the body: concentration, vigilance and decision-making decline as the body struggles to stay cool.</p>
<div class="tbl"><table><thead><tr><th>Condition</th><th>Signs</th><th>Action</th></tr></thead><tbody>
<tr><td><b>Heat cramps and rash</b></td><td>Painful muscle cramps, prickly rash.</td><td>Rest in shade, rehydrate with water and electrolytes as per site guidance, report.</td></tr>
<tr><td><b>Heat exhaustion</b></td><td>Heavy sweating, headache, dizziness, nausea, weakness, cool clammy skin, fast pulse, thirst, dark urine.</td><td>Stop work, move to a cool rest shelter, loosen clothing, cool down, drink fluids, call the site medic. Do not return to work that shift without medical clearance.</td></tr>
<tr><td><b>Heat stroke (medical emergency)</b></td><td>Confusion, slurred speech, odd behaviour, collapse, seizures, very high body temperature (above about 40 °C); skin may be hot and dry or still sweating.</td><td>Call emergency response immediately. Start aggressive cooling at once (cool water, ice packs, wet cloths with fanning). Do not leave the person alone. Do not give fluids if not fully conscious.</td></tr></tbody></table></div>
<p>Controls you will see on Gulf sites include: national summer midday outdoor work bans (dates and hours are set by each country, typically covering the middle of the day from around June to mid-September); heat stress indices such as WBGT with work-rest cycles by flag colour; shaded and air-conditioned rest shelters; water and electrolyte stations; acclimatisation programmes for new arrivals and people returning from leave (it takes one to two weeks to acclimatise and much of it is lost after time away); buddy checks; and urine-colour charts in toilets. Use them. Confusion is one of the first signs of serious heat illness, so the affected person is often the last to notice: watch your buddy.</p>

<h2>Stress, wellbeing and fitness for duty</h2>
<p>Some pressure keeps us alert, but high or prolonged stress narrows attention (tunnel vision), disrupts sleep and raises error rates. Sources include workload, conflict, job insecurity, long periods away from family, financial worries, bereavement and illness. On a rotation, problems at home can feel bigger because you cannot help. These are not weaknesses; they are human, and they affect performance.</p>
<p>A simple self-check before a shift is <b>IMSAFE</b>, borrowed from aviation: <b>I</b>llness, <b>M</b>edication, <b>S</b>tress, <b>A</b>lcohol (and drugs), <b>F</b>atigue, <b>E</b>ating and emotion. If any of these may affect your work, tell your supervisor or the site medic. Some common medicines (for example, certain antihistamines, cough and cold remedies and painkillers) cause drowsiness; ask the medic if unsure. Alcohol and drug rules on site are strict, and residual alcohol the morning after can still be present.</p>
<div class="callout"><h4>If you are concerned about a colleague</h4><p>Ask, privately and kindly: "You don't seem yourself today. Are you okay?" Listen. If they are not fit to do safety-critical work, help them speak to the supervisor or medic, or speak up yourself. Know your site's employee assistance and medical support. Looking out for each other is part of the job.</p></div>
<h3>Sort it</h3><p>Is each sign mainly linked to fatigue or to heat illness?</p>
<div class="sortq" data-sort='[["Nodding off for a few seconds while watching the DCS at 04:00","Fatigue"],["Heavy sweating, headache and nausea after an hour on the flare stack platform","Heat illness"],["Confused speech and stumbling after working in a chemical suit at midday","Heat illness"],["Missing two radio calls on the last of seven consecutive nights","Fatigue"],["Not remembering the last part of the drive home after a 12-hour shift","Fatigue"]]' data-opts='["Fatigue","Heat illness"]'></div>
<p class="src">Based on API RP 755 Fatigue Risk Management Systems for Personnel in the Refining and Petrochemical Industries; HSE HSG256 Managing shiftwork; HSE HSG48 (individual factors); Energy Institute human factors briefing note on fatigue; Dawson and Reid (1997) Nature 388:235; Williamson and Feyer (2000) Occupational and Environmental Medicine 57:649-655; DOE-HDBK-1028-2009 (individual capabilities precursors).</p>`,
    activity: {
      title: "Day 19 of the turnaround",
      time: "25 minutes",
      scn: `<p><span class="tag">Gas processing plant turnaround · Gulf region</span><span class="tag">Late August · 46 °C day, 35 °C night</span></p>
<p>It is day 19 of a 28-day turnaround. Three situations come to the attention of the area supervisor in one 24-hour period.</p>
<ol>
<li><b>The isolation authority.</b> Karim, an experienced operations isolation authority, is on his 14th consecutive 12-hour night shift (18:00 to 06:00). Because of a shortage of authorised isolators, he has also stayed on until 09:00 on three of the last five mornings to hand over permits. He lives 70 km from site and drives himself. At 04:30 he signed off an isolation certificate for a heat exchanger; the day shift found that one of the listed drain valves had not been locked, although it was ticked.</li>
<li><b>The rigger.</b> At 13:40 a contractor rigger, Tomás, who arrived on site four days ago from Europe, is working on the top level of a scaffold beside a hot air cooler in full FRC. His banksman notices he is repeating himself, has stopped sweating as much and is slow to respond to signals. Tomás says he is fine and wants to finish the lift.</li>
<li><b>The technician.</b> An instrument technician, Hassan, has been quiet and distracted all week. A colleague learns that his father is seriously ill at home overseas, and Hassan has not been sleeping. He is scheduled to calibrate and return to service a set of high-pressure trip transmitters tomorrow.</li></ol>`,
      qs: [
        { q: "For Karim, list the fatigue risk factors. Which RP 755-type controls appear to have been missed?", hint: "Consecutive shifts, extended hours, time of day, commute; hours-of-service limits, exceptions process, staffing." },
        { q: "What is happening to Tomás and what should the banksman do, right now, step by step?", hint: "Recognise heat illness signs, especially confusion; acclimatisation; emergency response." },
        { q: "How should the supervisor handle Hassan's situation? What is the fitness-for-duty concern?", hint: "Stress and sleep loss, safety-critical task, supportive conversation, alternative arrangements, employee assistance." },
        { q: "What should each person in this scenario feel able to say, and what does the organisation need to provide so they can say it?", hint: "Self-declaration, buddy care, no penalty for declaring unfit, backfill." }
      ],
      fac: [
        "Karim: 14 consecutive 12-hour nights; repeated extensions to 15 hours; working through the 02:00 to 06:00 circadian low at the time of the sign-off; a 70 km drive after extended hours; cumulative sleep debt. The ticked but unlocked drain is a classic fatigue lapse in place-keeping. Missed controls: 14 consecutive night shifts plus repeated holdovers to 15 hours is at or beyond the kind of outage limits RP 755 describes, so it should at least have triggered the exceptions process (fatigue risk assessment, management approval, mitigation) rather than becoming routine; check against the site hours-of-service limits; planning enough authorised isolators for the turnaround; transport or rest provision before driving. Also a verification gap: a second check of the isolation before handover.",
        "Tomás: confusion, slow response and reduced sweating are signs of possible heat stroke, a medical emergency; he is not acclimatised (four days from a cool climate). The banksman should stop the lift and make the load safe, call the emergency number and medic, get Tomás down safely with help (scaffold rescue plan), move him to shade or an air-conditioned shelter, remove excess clothing, start cooling immediately with water and fanning, stay with him, and not give drinks if he is confused or drowsy. His statement that he is fine must be overridden: confusion means he cannot judge.",
        "Hassan: severe personal stress and sleep loss are fitness-for-duty concerns for a safety-critical task (trip transmitter return to service). The supervisor should have a private, kind conversation, offer the employee assistance programme and compassionate leave options, and reassign or provide a peer check or independent verification for the trip work. Not a disciplinary matter.",
        "Organisational message: people only declare fatigue or stress if they know there is backfill and no penalty. Ask the group: on your site, what happens to someone who says 'I am too tired to drive'?",
        "Link back to Module 3: fatigue, heat and stress are individual capability precursors, and to Module 4: place-keeping and peer check become more important, not less, when people are tired."
      ]
    },
    quiz: [
      { q: "During which period is the body clock at its lowest alertness for most people?", opts: ["06:00 to 09:00", "10:00 to 12:00", "18:00 to 21:00", "02:00 to 06:00"], a: 3, why: "The circadian low occurs roughly between 02:00 and 06:00, with a smaller dip in the early afternoon. Errors and microsleeps are more likely then." },
      { q: "Research suggests that after about 17 to 19 hours awake, performance on some tasks is comparable to a blood alcohol concentration of roughly:", opts: ["0.05%", "0.5%", "0.01%", "0.2%"], a: 0, why: "Dawson and Reid (1997) and Williamson and Feyer (2000) found performance after 17 to 19 hours awake comparable to around 0.05% BAC." },
      { q: "A colleague working in the heat becomes confused and stops making sense. What is the correct response?", opts: ["Give him a cold drink and let him carry on if he says he is fine.", "Treat it as a possible heat stroke: call emergency response, start cooling immediately and stay with him.", "Tell him to finish the task quickly and then rest.", "Send him to walk to the clinic on his own."], a: 1, why: "Confusion is a key sign of heat stroke, a medical emergency. Call for help, cool aggressively and do not leave the person alone; do not rely on his own judgement." },
      { q: "What is API RP 755 about?", opts: ["Alarm management in control rooms.", "Fatigue risk management systems for personnel in refining and petrochemical facilities.", "Permit-to-work design.", "Heat stress limits for offshore workers."], a: 1, why: "API RP 755 sets out a fatigue risk management system, including hours-of-service limits, training, exceptions and incident investigation." },
      { q: "In the IMSAFE fitness-for-duty self-check, what does the 'M' stand for?", opts: ["Motivation", "Maintenance", "Medication", "Memory"], a: 2, why: "IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, Eating/Emotion. Some common medicines cause drowsiness and should be declared." },
      { q: "Why are workers returning from several weeks of leave at higher risk of heat illness?", opts: ["They have usually forgotten the site rules.", "Their PPE no longer fits.", "Much of their heat acclimatisation is lost after time away.", "Heat illness only affects new starters."], a: 2, why: "Acclimatisation takes about one to two weeks to build and declines after time away, so returning workers need a gradual re-introduction to heat." }
    ],
    tools: ["IMSAFE fitness-for-duty self-check", "Heat illness recognition and response card", "Fatigue warning signs card"],
    facGuide: `<p><b>Timing (55 min):</b> teach 22 (fatigue 10, heat 7, stress and FFD 5); sort 3; scenario 25; close 5.</p>
<p><b>How to run it:</b> start with a show of hands: "Who slept less than six hours last night?" and "Who drove more than an hour to get here?" Make it personal, not academic. For heat, ask experienced Gulf staff to share what they watch for in new arrivals. In the scenario, assign one situation per table and rotate answers.</p>
<p><b>Site specifics to prepare:</b> obtain the site's hours-of-service limits, heat stress procedure (WBGT flags and work-rest cycles), the local summer midday work ban dates and hours, emergency number, medic location, and the employee assistance contact. Insert them into your delivery; do not quote figures you have not checked for this site.</p>
<p><b>Sensitivity:</b> mental health and family stress can be personal topics. Keep examples general, offer the EAP contact privately, and do not ask individuals to disclose.</p>
<p><b>Common misconceptions:</b> "coffee fixes fatigue" (it masks it briefly); "experienced Gulf workers do not get heat stroke" (anyone can, especially after leave or when ill); "saying I am tired looks weak" (it is a safety declaration).</p>
<p><b>Kit:</b> heat illness card, IMSAFE card, site FRMS summary.</p>`
  },
  /* ------------------------------------------------------------------ M6 */
  {
    id: "L1M6", n: 6,
    t: "Speaking up and reporting",
    mins: 60,
    obj: "Explain why near misses and error traps must be reported, write a clear, factual report, speak up using a simple structure, and describe how a just culture treats the person who reports.",
    learn: `
<h2>Near misses are free lessons</h2>
<p>Most serious accidents are preceded by warning signs: near misses, recurring equipment faults, workarounds that everyone knows about, small leaks, alarms that are routinely ignored. Each one is a chance to fix a trap before it catches someone. The organisation can only act on what it hears about. Your report is the information it needs.</p>
<div class="grid2">
<div class="card"><h4>What to report</h4><ul><li><b>Near miss:</b> an event that could have caused harm but did not, by luck or a good catch.</li><li><b>Unsafe condition:</b> a missing guard, a corroded handrail, a leaking flange, a gas detector in fault.</li><li><b>Error trap:</b> identical valves side by side, a procedure that does not match the plant, a confusing display, a label facing the wrong way.</li><li><b>Unsafe act or practice:</b> a shortcut that has become normal.</li><li><b>Good catch:</b> when a tool or a person prevented a problem. These are worth sharing too.</li></ul></div>
<div class="card"><h4>Why people do not report</h4><ul><li>Fear of blame, discipline or losing the contract.</li><li>"Nothing happened, so it does not matter."</li><li>"Nothing ever changes when we report."</li><li>The form is long or the system is hard to use.</li><li>Not wanting to get a colleague in trouble.</li><li>Language barriers, or not knowing how.</li></ul></div></div>
<p>Each of these barriers is something leaders and organisations can fix. Your part is to report anyway, and to help colleagues do the same.</p>

<h2>Writing a good report</h2>
<p>A good report helps the reader understand what happened from inside the situation. Keep it factual, specific and free of blame. Answer these questions:</p>
<ol><li><b>What</b> happened, or nearly happened? What was the potential outcome?</li>
<li><b>Where</b> and <b>when</b>: unit, equipment tag, date and time.</li>
<li><b>What was going on:</b> the task, the conditions, who was involved (by role), the precursors you noticed (TWIN).</li>
<li><b>What you expected</b> to happen and what actually happened.</li>
<li><b>What you did</b> immediately to make it safe.</li>
<li><b>What you think would stop it happening again</b> (your suggestion is valuable; you are close to the work).</li></ol>
<div class="tbl"><table><thead><tr><th>Weak report</th><th>Strong report</th></tr></thead><tbody>
<tr><td>"Operator nearly opened the wrong valve. Careless. Told him to be more careful."</td><td>"13:20, Train 2 glycol regeneration area. During line-up for pump P-512B, operator went to drain valve DV-5121 instead of suction valve SV-5121B. Both are 2-inch valves, same colour, 30 cm apart, tags face the pipe rack. Operator noticed the tag when touching it (STAR) and stopped. Potential: glycol release to grade at 80 °C. Suggest: re-tag to face the walkway, colour-code drains, check other pumps in the train."</td></tr></tbody></table></div>

<h2>Speaking up in the moment</h2>
<p>Reporting after the event is important; speaking up during the job prevents the event. It can be hard to challenge someone more senior, more experienced, from another company or from another culture. A simple structure helps you say it clearly and respectfully. One that grew out of aviation crew resource management and is now widely used in healthcare is <b>CUS</b>:</p>
<div class="grid3">
<div class="card"><h4>C: I am Concerned</h4><p>"I am concerned that the gas test was done before the break."</p></div>
<div class="card"><h4>U: I am Uncomfortable</h4><p>"I am uncomfortable starting the hot work without a new test."</p></div>
<div class="card"><h4>S: This is a Safety issue</h4><p>"This is a safety issue. We need to stop and re-test."</p></div></div>
<p>Make it about the situation, not the person. Offer the fact you have seen, say what you are worried about, and suggest an action. If you are not heard the first time, say it again, more firmly, and if necessary escalate or use your stop-work authority. When someone speaks up to you, thank them, listen, and check, even if you think they are wrong.</p>

<h2>Psychological safety</h2>
<p>Amy Edmondson defines psychological safety as a shared belief within a team that it is safe to take interpersonal risks: to ask a question, admit a mistake, raise a concern or disagree, without being humiliated or punished. Teams with high psychological safety report more of their errors, because they are not afraid to, and they learn faster. On a site, psychological safety shows when a new contractor feels able to ask "which valve?" and when a supervisor says "good stop, thank you" in front of the crew.</p>

<h2>Just culture</h2>
<p>A <b>just culture</b>, as described by James Reason, is an atmosphere of trust in which people are encouraged, even rewarded, for providing essential safety-related information, but in which they are also clear about where the line is drawn between acceptable and unacceptable behaviour. It is neither "blame everyone" nor "blame no one".</p>
<div class="tbl"><table><thead><tr><th>Behaviour (after David Marx)</th><th>What it is</th><th>Fair response</th></tr></thead><tbody>
<tr><td><b>Human error</b></td><td>Inadvertent action: a slip, lapse or mistake.</td><td><b>Console</b> the person and fix the system: design, procedure, training, workload.</td></tr>
<tr><td><b>At-risk behaviour</b></td><td>A choice where the risk is not recognised or is believed justified; often a drifted norm or shortcut.</td><td><b>Coach</b> the person, and remove the incentives and conditions that make the shortcut attractive.</td></tr>
<tr><td><b>Reckless behaviour</b></td><td>Conscious disregard of a substantial and unjustifiable risk.</td><td><b>Sanction</b> may be appropriate, through a fair and consistent process.</td></tr></tbody></table></div>
<p>Reason's culpability approach adds a useful <b>substitution test</b> (which he credits to Neil Johnston): would another similarly trained and experienced person, in the same situation, have been likely to do the same? If yes, the problem lies mainly in the system, not the individual.</p>

<h2>What happens to your report</h2>
<p>Details vary by site, but a well-run system does the following:</p>
<ol><li><b>Acknowledge:</b> you receive confirmation, and a thank you.</li>
<li><b>Make safe:</b> immediate risks are dealt with straight away.</li>
<li><b>Triage:</b> the report is rated for actual and potential severity; high-potential near misses are investigated like incidents.</li>
<li><b>Learn:</b> a proportionate review asks what conditions created the situation, not just who was involved.</li>
<li><b>Act:</b> actions are assigned to owners, with dates, preferring design and system fixes.</li>
<li><b>Feed back:</b> you and your crew are told what was found and what changed.</li>
<li><b>Trend and share:</b> reports are combined to spot patterns across units and sites, and lessons are shared.</li></ol>
<div class="callout or"><h4>Westrum: how organisations treat the messenger</h4><p>Ron Westrum described three types of organisational culture by how they handle information. In a <b>pathological</b> culture, messengers are "shot". In a <b>bureaucratic</b> culture, messengers are neglected. In a <b>generative</b> culture, messengers are trained and rewarded. Every report you make, and every response a leader gives, moves your site one way or the other.</p></div>
<h3>Sort it</h3><p>Under a just culture, what is the fair response?</p>
<div class="sortq" data-sort='[["A technician transposes two digits when entering a setpoint","Console"],["A crew has drifted into skipping the confined space re-test because nobody ever checks","Coach"],["A worker removes a gas detector and hides it to avoid alarms during a job, knowing the area is H2S service","Sanction"],["An operator loses her place in a long reinstatement after an emergency radio call","Console"],["A driver uses a phone while driving on site because everyone does and it saves time","Coach"]]' data-opts='["Console","Coach","Sanction"]'></div>
<p class="src">Based on Reason (1997) Managing the Risks of Organizational Accidents (just culture, culpability); Marx (2001) Patient Safety and the Just Culture; Dekker (2012) Just Culture; Edmondson (1999) Psychological safety and learning behavior in work teams; Westrum (2004) A typology of organisational cultures; HSE HSG48 (reporting and learning); IOGP Report 621 human factors in investigations; CUS speaking-up structure from crew resource management and TeamSTEPPS.</p>`,
    activity: {
      title: "The welding habitat by the wellhead",
      time: "30 minutes",
      scn: `<p><span class="tag">Onshore oilfield wellsite · Gulf region</span><span class="tag">Day shift 10:00 · 39 °C, light shamal wind</span></p>
<p>A wellsite has two activities running under SIMOPS: a welding crew working inside a pressurised habitat on a flowline modification 25 m from Well 47, and a well services crew preparing to bleed down the annulus on Well 47 to the closed drain tank. Both permits were approved at the morning permit meeting; the SIMOPS matrix says the bleed-down must not start while hot work is live within 30 m unless the habitat gas detection is confirmed working and the wind is away from the habitat.</p>
<p>Mei, a production operator who joined the asset four months ago, is the area operator. At 10:05 she notices that the habitat's gas detector display shows "FAULT" and that the shamal is blowing from the wellhead towards the habitat. The well services supervisor, a senior expatriate with 25 years' experience, is about to open the bleed valve. Mei hesitates. The day before, at the toolbox talk, the same supervisor said, "My crew does not need help from production." She says nothing at first.</p>
<p>At 10:12 the bleed starts. At 10:14 Mei's personal multi-gas detector alarms at the habitat entrance (low LEL and 5 ppm H2S). She shouts "Stop!" and radios the control room. The bleed is stopped, the welders stop and leave the habitat, and the area is cleared. Readings return to zero within ten minutes. No one is hurt.</p>`,
      qs: [
        { q: "What made it hard for Mei to speak up at 10:05? List at least four factors.", hint: "Seniority, experience, previous comments, newness, company boundaries, culture, uncertainty." },
        { q: "Write what Mei could have said at 10:05 using the CUS structure.", hint: "Concerned, Uncomfortable, Safety issue, plus the specific facts and a proposed action." },
        { q: "Write the near-miss report Mei should submit (6 to 8 lines).", hint: "What, where, when, conditions, expected vs actual, immediate action, suggestion. No blame language." },
        { q: "How should the site manager respond to Mei and to the well services supervisor under a just culture? What must happen to the report?", hint: "Thank and reinforce; look at the SIMOPS controls, the detector fault, the toolbox comments; apply Marx categories honestly; feedback." }
      ],
      fac: [
        "Barriers to speaking up: Mei is new (four months); the supervisor is senior, experienced and from another department/company; his comment the previous day signalled that challenge was unwelcome (low psychological safety); possible cultural and gender dynamics; uncertainty about whether the fault display really mattered; not wanting to delay the job.",
        "Model CUS: 'Excuse me, before you open the bleed: I am concerned the habitat gas detector is showing FAULT and the wind is blowing from the wellhead to the habitat. I am uncomfortable with the bleed starting while the welders are inside. This is a safety issue: the SIMOPS matrix says we need working detection and the wind away. Can we hold the bleed until the detector is fixed and I have checked with the control room?'",
        "Model report: '10:14, Well 47 pad. Annulus bleed-down to closed drain started at 10:12 while hot work was live in pressurised habitat 25 m downwind. Habitat gas detector display showed FAULT from at least 10:05. Shamal wind from wellhead toward habitat. Personal detector at habitat entrance alarmed at low %LEL and 5 ppm H2S at 10:14. Bleed stopped, hot work stopped, habitat evacuated, area cleared; readings zero by 10:24. SIMOPS condition (working detection, wind direction) not met. I saw the fault but did not raise it before the bleed started. Suggest: SIMOPS start-up check signed by both crews; habitat detector status on control room display; review wind criteria.' The honest line about not raising it is important and should be welcomed.",
        "Just culture response: thank Mei publicly for stopping the job and reporting fully, including her hesitation. For the supervisor: was starting the bleed human error (did he know about the fault and wind?), at-risk behaviour (normalised shortcut on SIMOPS checks) or reckless (aware and dismissed the risk)? Apply the substitution test. His toolbox comment is a leadership behaviour to coach regardless. System fixes: SIMOPS start-up handshake between crews, detector status visible to control room, permit conditions verified at the work point, not only at the permit meeting.",
        "The report should be rated high-potential (H2S and flammable gas at a live hot work site), investigated, with actions tracked and feedback to Mei and both crews within an agreed time. Share it across the asset as a learning bulletin, not a blame story.",
        "Ask the room: in your crew, who is the person you would find hardest to challenge, and what would make it easier?"
      ]
    },
    quiz: [
      { q: "Which is the best reason to report a near miss where nobody was hurt?", opts: ["It reveals conditions that could cause harm next time, while there is still time to fix them.", "It protects you if someone else reports it first.", "It is the only way to get the equipment replaced.", "It helps identify who was careless."], a: 0, why: "Near misses are warning signals of the same conditions that cause accidents. Reporting them allows traps to be fixed before someone is hurt." },
      { q: "Under a just culture (after Marx), what is the fair response to a genuine human error such as a slip?", opts: ["Sanction", "Coach", "Console the person and fix the system", "Retrain the person and note it on their record"], a: 2, why: "Human error is inadvertent. The fair response is to console the person and address the system conditions that made the error likely." },
      { q: "What is Reason's 'substitution test'?", opts: ["Replacing the person involved with a more experienced worker.", "Asking whether another similarly trained and experienced person in the same situation would probably have done the same.", "Testing the replacement equipment before restart.", "Substituting the procedure with a checklist."], a: 1, why: "If a comparable person would likely have acted the same way, the cause lies mainly in the system rather than in the individual." },
      { q: "In the CUS speaking-up structure, what do the letters stand for?", opts: ["Check, Understand, Stop", "Call, Update, Secure", "Communicate, Usual, Standard", "Concerned, Uncomfortable, Safety issue"], a: 3, why: "CUS: I am Concerned; I am Uncomfortable; This is a Safety issue. It escalates clearly and respectfully." },
      { q: "Which statement best describes psychological safety?", opts: ["A team where nobody is ever held accountable.", "A shared belief that it is safe to ask questions, admit mistakes and raise concerns without humiliation or punishment.", "A programme of counselling for workers after incidents.", "The absence of any conflict within a crew."], a: 1, why: "Edmondson defines psychological safety as a shared belief that the team is safe for interpersonal risk-taking. It is not the absence of accountability or disagreement." },
      { q: "Which element of a near-miss report is most useful to the people who will fix the problem?", opts: ["The name of the person who made the error.", "A description of the conditions, what was expected versus what happened, and a suggested fix.", "A statement that everyone should be more careful.", "The reporter's opinion of the crew's attitude."], a: 1, why: "Conditions, expectations and suggestions reveal the system causes. Names, opinions and general warnings do not help fix traps." }
    ],
    tools: ["Near-miss and error trap report template", "CUS speaking-up card", "Just culture response guide (console, coach, sanction)"],
    facGuide: `<p><b>Timing (60 min):</b> teach 22 (why report and barriers 5, good report 5, speaking up and CUS 5, psychological safety and just culture 5, what happens 2); sort 3; scenario 30; close 5.</p>
<p><b>How to run it:</b> before you teach, ask: "What happened the last time someone on your crew reported a near miss?" Listen without defending the organisation; write the answers on a flip chart and return to them at the end. Practise CUS aloud in pairs, using a real concern from their site (not the scenario). Every participant should say a CUS statement once.</p>
<p><b>Site specifics to prepare:</b> show the actual reporting form or app, explain how to submit it (including for contractors and in other languages), and describe honestly what happens next, with one real example of a report that led to a change (anonymised).</p>
<p><b>Common misconceptions:</b> "just culture means no consequences" (the line is reckless behaviour); "reporting means telling on colleagues" (reports focus on conditions); "if nothing happened it is not worth reporting" (that is exactly when learning is cheapest).</p>
<p><b>Assessment link:</b> question 3 is a rehearsal for Practical task C.</p>
<p><b>Kit:</b> CUS cards, report templates, site reporting app on a screen.</p>`
  }
  ],
  assessment: {
    summary: "Two parts. (1) A closed-book knowledge check of 20 multiple-choice questions drawn from the six module question banks (minimum three per module), taken at the end of the day on paper or in the app. (2) A practical assessment of three short tasks observed and marked by the facilitator during the day (tasks B and C) and at the end (task A), against the rubric below. A 30-day workplace follow-up, confirmed by the participant's supervisor, completes the HP-1 record. Reasonable adjustments (oral assessment, interpreter, extra time) are offered for participants with limited literacy in the course language; the standard assessed is understanding, not writing ability.",
    pass: "80% or more on the knowledge check (16 of 20) AND 'Competent' on all three practical tasks. One re-sit of the knowledge check and one repeat of any practical task is allowed on the day after feedback. The 30-day workplace follow-up is required for the certificate to be issued.",
    practical: `<h3>Task A: Precursor hunt (individual, 10 minutes)</h3>
<p>The participant receives an unseen half-page description of a field task (for example: a contractor instrument technician replacing a pressure transmitter on a sour gas line on a night shift during a turnaround, with a radio-only handover and an outdated datasheet). They list the error precursors they find, grouped by TWIN, and name the critical step and one action to remove or reduce the main precursor.</p>
<h3>Task B: STAR and three-way communication role-play (pairs, observed, 5 minutes each)</h3>
<p>The participant plays the field operator receiving a radio instruction from the facilitator (acting as control room) to operate a named, tagged item on a mock-up or tagged training-room object. Partway through, the facilitator introduces a discrepancy (wrong tag in the instruction, or an unexpected indication). The participant must complete a correct three-way communication, apply STAR at the item, and stop and question when the discrepancy appears.</p>
<h3>Task C: Near-miss report (individual, 15 minutes)</h3>
<p>From a short written or video scenario, the participant writes a near-miss or error trap report on the site template (or dictates it to the facilitator where literacy support is needed).</p>
<h3>Marking rubric</h3>
<div class="tbl"><table><thead><tr><th>Task</th><th>Criterion</th><th>Not yet competent</th><th>Competent</th></tr></thead><tbody>
<tr><td>A</td><td>Identifies precursors</td><td>Fewer than 6 valid precursors, or all from one or two TWIN categories.</td><td>At least 6 valid precursors across at least 3 TWIN categories.</td></tr>
<tr><td>A</td><td>Critical step and response</td><td>No critical step named, or the action is only "be careful" or "retrain".</td><td>Names a credible critical step and one action that removes or reduces a precursor.</td></tr>
<tr><td>B</td><td>Three-way communication</td><td>Acts before repeat-back and confirmation, or repeats back only part of the tag.</td><td>Repeats back the full instruction including tag, waits for confirmation, then acts.</td></tr>
<tr><td>B</td><td>STAR at the item</td><td>Operates without verifying the tag or without stating an expected result.</td><td>Stops, verifies tag by touch/point and reading, states the expected result, reviews the outcome.</td></tr>
<tr><td>B</td><td>Stop when unsure</td><td>Continues despite the discrepancy, or "makes it work".</td><td>Stops, places the item in a safe state, and raises the discrepancy clearly with the sender.</td></tr>
<tr><td>C</td><td>Factual content</td><td>Missing location, time or equipment; vague description of what happened.</td><td>States what, where, when (with tag), conditions and potential outcome.</td></tr>
<tr><td>C</td><td>Blame-free, systems focus</td><td>Uses blame language ("careless", "stupid") or focuses on a named person.</td><td>Describes conditions and expected vs actual; free of blame language; refers to people by role.</td></tr>
<tr><td>C</td><td>Immediate action and suggestion</td><td>No immediate action or no suggestion.</td><td>States the immediate make-safe action and at least one practical suggestion to prevent recurrence.</td></tr></tbody></table></div>
<h3>30-day workplace follow-up</h3>
<p>Within 30 days of the course, the participant submits at least one near-miss, error trap or good-catch report through the site system, and discusses it with their supervisor, who confirms completion in the training record. The supervisor confirms that the participant can explain the STAR card and knows how to use stop-work authority on their site.</p>`
  },
  capstone: null,
  schedule: [
    { block: "07:30-07:45", items: "Arrival, welcome, site safety brief, course objectives and ground rules (psychological safety in the room)." },
    { block: "07:45-08:55", items: "M1 Why human performance matters: people, plant, process; old and new view; five principles. Scenario: The flange that was opened twice." },
    { block: "08:55-10:05", items: "M2 How errors happen: System 1 and 2; SRK; slips, lapses, mistakes, violations. Scenario: A night on the export pumps." },
    { block: "10:05-10:20", items: "Break (refreshments)." },
    { block: "10:20-11:30", items: "M3 Error traps and error-likely situations: PSFs, TWIN, red flags, critical steps. Scenario: Sampling a sour separator on a busy afternoon." },
    { block: "11:30-12:15", items: "Lunch and prayer." },
    { block: "12:15-13:20", items: "M4 Your personal HP toolkit: STAR, questioning attitude, stop when unsure, three-way communication, place-keeping, peer check. Scenario and role-play: Draining the condensate pot (Practical task B observed here)." },
    { block: "13:20-14:15", items: "M5 Fatigue, heat, stress and fitness for duty: API RP 755 awareness, heat illness, IMSAFE. Scenario: Day 19 of the turnaround." },
    { block: "14:15-14:25", items: "Short break." },
    { block: "14:25-15:25", items: "M6 Speaking up and reporting: near misses, CUS, psychological safety, just culture, what happens to your report. Scenario: The welding habitat by the wellhead (Practical task C completed here)." },
    { block: "15:25-16:05", items: "Assessment: knowledge check (20 MCQs, 20 min) and Practical task A precursor hunt (10 min); personal commitment card and 30-day follow-up briefing (10 min)." },
    { block: "16:05-16:15", items: "Course evaluation, feedback on results, close." }
  ]
});
