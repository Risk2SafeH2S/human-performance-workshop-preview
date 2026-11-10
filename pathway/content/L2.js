/* Human Performance Pathway - Level 2: Practitioner (HP-2)
   H²S Consultants. Content follows pathway/CONTENT-CONTRACT.md.
   All scenarios are composite and fictional. */
HP.level({
  id: "L2",
  n: 2,
  name: "Practitioner",
  title: "Human Performance Tools in Practice",
  badge: "HP-2",
  tagline: "Turn human performance principles into the everyday tools that catch errors before they reach the plant: briefs, self-checks, verification, clear communication, a questioning attitude and situation awareness at the workface.",
  audience: "Frontline operators (field and control room), maintenance technicians and crews, permit holders and performing authorities, first-line supervisors, and contractor supervisors working on operating plant, during turnarounds or under SIMOPS.",
  prereq: "HP-1 Human Performance Foundations (or equivalent), plus current site permit-to-work and isolation awareness. Supervisors attending Module 7 should hold, or be about to take up, a supervisory role.",
  duration: "2 days (approximately 14 h contact including assessment)",
  format: "Face-to-face, maximum 16 participants in mixed crews of 4. About 60% practice: role-play briefs and handovers, table-top procedure walk-throughs, verification drills with tagged mock-ups, radio exercises and field-observation simulations. Delivered in English with bilingual facilitation available; all job aids are pocket cards participants keep.",
  outcomes: [
    "Lead a pre-job brief that identifies the critical steps of a real task, what could go wrong, the worst credible outcome and agreed if-then contingencies, and run a post-job review that produces at least one actionable learning.",
    "Demonstrate STAR self-checking at critical steps and circle-slash place-keeping on a continuous-use procedure, including correct recovery after an interruption.",
    "Select and perform the right verification practice (peer check, concurrent verification or independent verification) for a given task, and explain what makes a verification genuinely independent.",
    "Use three-way communication, the phonetic alphabet and digit-by-digit read-back for safety-critical instructions, and deliver a structured shift and permit handover combining written, verbal and walk-down elements.",
    "Apply a questioning attitude, call a time-out when unsure, recognise signs of drift and normalisation of deviance, and use flagging to prevent wrong-unit, wrong-train and wrong-component errors.",
    "Use Endsley's three levels to check their own and their crew's situation awareness, recognise SA red flags, and apply practical techniques to manage interruptions, distraction and expectation bias.",
    "(Supervisors) Coach crews in the use of HP tools in the field, carry out a task observation that identifies error-likely situations, and hold a field learning conversation without blame."
  ],
  competencies: [
    { code: "HP2.1", statement: "Prepares for and closes out work using pre-job briefs focused on critical steps and post-job reviews that capture learning.", evidence: "Observed role-play brief scored against the brief checklist, plus one workplace brief and post-job review signed off by the supervisor within 30 days." },
    { code: "HP2.2", statement: "Uses STAR self-checking and place-keeping correctly, and follows the required procedure use level.", evidence: "Practical station: performs a continuous-use procedure with an injected interruption; place-keeping marks and recovery assessed." },
    { code: "HP2.3", statement: "Applies peer check, concurrent verification and independent verification appropriately and without rubber-stamping.", evidence: "Practical station: verifies a tagged isolation mock-up with seeded errors; selection of verification type explained." },
    { code: "HP2.4", statement: "Communicates safety-critical information accurately using three-way communication, phonetic alphabet and structured handover.", evidence: "Radio exercise and handover role-play scored on the communication rubric; written handover log reviewed." },
    { code: "HP2.5", statement: "Challenges uncertainty, stops when unsure and uses flagging to protect against wrong-component errors.", evidence: "Scenario response in the practical assessment and knowledge check items; workplace example of a time-out or flagging recorded in the logbook." },
    { code: "HP2.6", statement: "Maintains situation awareness at the workface and manages interruptions and distraction.", evidence: "SA scenario debrief and knowledge check; self-assessment against the SA red-flag card." },
    { code: "HP2.7", statement: "(Supervisors) Coaches HP tool use, observes tasks for error-likely situations and leads blame-free field learning conversations.", evidence: "Coaching role-play scored against the coaching rubric, plus two workplace task observations with learning conversation notes reviewed by the HP lead." }
  ],
  modules: [
    {
      id: "L2M1", n: 1,
      t: "Pre-job briefs and post-job reviews",
      mins: 100,
      obj: "Lead a pre-job brief built around critical steps, credible failure and if-then contingencies, and close the job with a post-job review that feeds learning back into the next job.",
      learn: `
<h2>The brief is the last planning meeting</h2>
<p>Planners, permit issuers and engineers have done their thinking before the crew arrives. The pre-job brief is the last chance for the people who will actually touch the plant, standing in front of it with the permit, the isolation certificate and the procedure in hand, to think through what could go wrong and agree what they will do about it. A good brief changes what happens next. A poor brief is a reading exercise followed by signatures.</p>
<p>Most sites already have a toolbox talk and a job safety analysis (JSA) or task risk assessment. The HP-2 brief does not replace them. It sharpens them by asking four questions that a generic hazard list rarely answers.</p>
<div class="callout or"><h4>The four brief questions</h4><ol>
<li><b>What are the critical steps?</b> The points in the job where an error would cause immediate, irreversible harm.</li>
<li><b>What could go wrong at each one?</b> Wrong component, wrong sequence, trapped pressure, unexpected material, a step missed.</li>
<li><b>What is the worst thing that could happen?</b> Said out loud, in plain words, so everyone understands what is at stake.</li>
<li><b>What will we do if...?</b> Agreed if-then contingencies and stop criteria, decided before the pressure is on.</li></ol></div>
<h2>Critical steps</h2>
<p>A critical step is an action that, if performed wrongly, will cause immediate and irreversible harm to people, plant or the environment, with no chance to recover before the consequence arrives. The idea comes from nuclear and US Department of Energy human performance practice and is now used widely in oil and gas. Most of a job is recoverable: if you pick up the wrong spanner you put it down again. A small number of steps are not. Those are where the crew's attention, self-checking and verification should be concentrated.</p>
<p>To find them, ask three questions about each step: Does this action release energy or hazardous material, or remove a barrier? Once done, can it be undone before harm occurs? Would an error here be noticed only after the consequence? Typical critical steps on oil and gas plant include:</p>
<ul>
<li>Cracking the first flange or removing the last bolts on a line after isolation and draining.</li>
<li>Opening a drain or vent on sour service, or on a line that may still hold liquid under pressure.</li>
<li>Opening the closure door on a pig launcher or receiver.</li>
<li>Removing a spade or blind before introducing hydrocarbons.</li>
<li>Applying or removing a trip override, or an inhibit on fire and gas detection.</li>
<li>Energising or de-energising a motor or feeder, and the first start after maintenance.</li>
<li>Lifting a load over live hydrocarbon plant.</li></ul>
<p>Before each critical step, the crew should pause, confirm the conditions they agreed in the brief, and self-check. Many sites call this a "critical step pause" or "hold point".</p>
<h2>A structure for the brief: SAFER</h2>
<p>The DOE human performance handbook offers a simple structure, SAFER, that maps onto the four questions.</p>
<div class="tbl"><table><thead><tr><th>Letter</th><th>Meaning</th><th>What it sounds like at the job site</th></tr></thead><tbody>
<tr><td><b>S</b></td><td>Summarise the critical steps</td><td>"There are three critical steps today: opening the low-point drain, breaking the flange at the control valve inlet, and removing the spade before reinstatement."</td></tr>
<tr><td><b>A</b></td><td>Anticipate error-likely situations</td><td>"Train A and Train B are mirror images. The drain valve is behind the pipe rack and hard to reach. We are on night shift after a long day."</td></tr>
<tr><td><b>F</b></td><td>Foresee probable and worst-case consequences</td><td>"If the line is not fully drained, we get a release of sour condensate at the flange. Worst case: an H₂S exposure to the fitter."</td></tr>
<tr><td><b>E</b></td><td>Evaluate controls and contingencies</td><td>"Gas test at the flange before breaking. Personal monitors on. If the drain will not run clear we stop and call the area operator. Nobody rods a blocked drain."</td></tr>
<tr><td><b>R</b></td><td>Review previous experience</td><td>"Last time this valve was removed on Train A the drain was blocked with iron sulphide. What did we learn?"</td></tr></tbody></table></div>
<h2>If-then contingencies and stop criteria</h2>
<p>Under stress people fall back on what they have already rehearsed. An if-then contingency is a decision made in advance, while everyone is calm. It turns "be careful" into a specific action. Good contingencies are specific, observable and owned by a named person:</p>
<ul>
<li>"<b>If</b> your personal H₂S monitor goes into low alarm, <b>then</b> you stop, close the drain valve only if it is within reach, and walk upwind to the assembly point at the east gate. Ahmed calls the control room."</li>
<li>"<b>If</b> the pressure gauge on the spool does not read zero after venting, <b>then</b> we do not break the flange. We call the area operator and re-check the isolation."</li>
<li>"<b>If</b> the scaffold crew arrives to work above us, <b>then</b> the permit holder stops our job until the SIMOPS controls are agreed with the area authority."</li></ul>
<p>Stop criteria are the conditions under which the crew will stop and not continue, whoever is asking them to carry on: unexpected pressure, unexpected material, a change in wind or weather, a gas alarm, a change in the job scope, or anyone feeling unsure.</p>
<h2>Good briefs and poor briefs</h2>
<div class="grid2"><div class="card"><h4>Poor brief</h4><p>The supervisor reads the JSA aloud in the shelter, far from the job. The crew sign. "Any questions?" Silence. The same brief as yesterday. Critical steps are not named. Nobody says what the worst outcome could be. The area operator is not there.</p></div>
<div class="card"><h4>Good brief</h4><p>Held at or near the job site with the P&amp;ID, permit and isolation certificate in hand. The performer explains the job back. Critical steps are named and pointed at. Everyone, including the newest contractor, states their role and one thing that could go wrong. Contingencies are agreed. The brief is scaled to the risk.</p></div></div>
<p>Scale the brief to the job. A routine, low-risk task on equipment the crew know well may need five minutes. A first-time job, an infrequent task, a job with several critical steps, sour service, SIMOPS, or a crew that has not worked together before needs more: often a walk-down of the job site, and sometimes a dry run.</p>
<div class="rev"><button type="button">Why should the performer, not the supervisor, do most of the talking?</button><div class="body"><p>When the performer explains the job back, gaps in understanding become visible. A supervisor reading a document can only find out what people do not know if they are brave enough to say so. Asking open questions ("Walk me through how you will drain this", "What will you do if the gauge does not read zero?") tests understanding far better than "Is everyone clear?"</p></div></div>
<h2>Post-job reviews</h2>
<p>A post-job review is a short, structured conversation, usually five to ten minutes, held while the job is fresh. Its purpose is to capture what the next crew needs to know and to feed it back to planners, procedure owners and the permit system. It is not a fault-finding session. Five questions are enough:</p>
<ol>
<li>What went as planned?</li>
<li>What surprised us, or was different from what we expected?</li>
<li>Where did the procedure, permit, drawings, tools or materials not match the real job?</li>
<li>What did we have to adapt, and why?</li>
<li>What should we change for next time, who will pass it on, and by when?</li></ol>
<p>The learning has to go somewhere. Record it in the work order history in the maintenance management system, raise a procedure change request, update the job pack or the JSA library, and tell the planner. The crew should see that their input changed something; if it never does, they will stop giving it.</p>
<h3>Sort it</h3><p>Decide whether each action is a critical step or a recoverable step.</p>
<div class="sortq" data-sort='[["Cracking the first flange on a line after isolation and draining","Critical step"],["Collecting hand tools from the workshop","Recoverable step"],["Removing the last spade before introducing hydrocarbons","Critical step"],["Fitting barrier tape around the work area","Recoverable step"],["Opening the bottom drain on a sour water knock-out drum","Critical step"],["Checking the permit is displayed at the job site","Recoverable step"]]' data-opts='["Critical step","Recoverable step"]'></div>
<p class="src">Based on DOE-HDBK-1028-2009 Human Performance Improvement Handbook (Vol. 2: pre-job briefing, SAFER, post-job review), INPO human performance tools, Conklin "Pre-Accident Investigations", HSE HSG48 and HSE HSG250 Guidance on permit-to-work systems.</p>`,
      activity: {
        title: "Removing a control valve on sour condensate service",
        time: "45 minutes (20 group work, 15 role-play, 10 debrief)",
        scn: `<p><span class="tag">Gas processing plant · condensate stabilisation, Train B · Gulf region</span><span class="tag">Day shift · 46 °C · light northerly wind</span></p>
<p>A level control valve on the sour condensate line from the Train B inlet separator to the stabiliser is passing and must be removed for overhaul while the plant keeps running on Train A and a reduced-rate Train B. The condensate contains dissolved H₂S; flash gas at the stabiliser contains around 2% H₂S. The job has been planned: isolation by double block and bleed, drain to the closed drain header, nitrogen purge, gas test, then removal of the valve by a contractor mechanical crew using a chain block.</p>
<p>At 07:15 the contractor supervisor holds the brief in the crew cabin, 300 metres from the unit. He reads the JSA aloud in English; two of the four fitters have limited English. He says: "Same job we did on Train A last month, nothing new. Be careful with H₂S, monitors on." The area operator who did the isolation is not present; she is lining up a pump on Train A. Nobody mentions that the Train A job was delayed because the low-point drain was blocked with iron sulphide and a fitter rodded it with welding rod until it cleared. The crew sign the brief sheet and walk to the unit. A scaffolding crew is due at 09:00 to build an access platform on the pipe rack directly above the valve.</p>`,
        qs: [
          { q: "1. Identify the critical steps in this job.", hint: "List each step where an error would cause immediate, irreversible harm, and say why it is critical." },
          { q: "2. For two of those critical steps, what could go wrong and what is the worst thing that could happen?", hint: "Be specific to this plant: sour service, Train A and B, blocked drain, heat, language." },
          { q: "3. Write three if-then contingencies and the crew's stop criteria.", hint: "Each contingency needs a trigger, an action and a named owner." },
          { q: "4. Role-play: run a ten-minute brief for this job at the job site.", hint: "One participant leads, three are crew, one observes with the brief checklist. The performer must explain the job back." },
          { q: "5. The job finished two hours late because the drain was blocked again. What should the post-job review capture and where should it go?", hint: "Think about the planner, the procedure owner, the maintenance history and the next crew on Train A or B." }
        ],
        fac: [
          "Critical steps: opening the low-point drain to the closed drain (possible liquid and H₂S); first break of the inlet and outlet flanges (trapped pressure or liquid if isolation or draining incomplete); removal of the valve body (residual condensate in the body cavity); and on reinstatement, opening the isolation valves to repressurise. Strong groups also flag confirming the job is on Train B, not Train A, as a critical check before the first break.",
          "What could go wrong: drain blocked so the line looks drained but is not; gauge reads zero because it is isolated or blocked itself; crew go to the Train A valve because it is the one they worked on last month; iron sulphide deposits exposed to air can self-heat (pyrophoric); a fitter rods the drain and releases sour liquid in his face. Worst case named plainly: an H₂S exposure that incapacitates a fitter on the pipe rack.",
          "Good contingencies: 'If the drain will not run clear, we stop and call the area operator; nobody rods the drain' (owner: permit holder); 'If any monitor alarms, we stop, leave upwind to the agreed assembly point, permit holder informs the control room'; 'If the scaffold crew arrives, the permit holder stops the job until the area authority agrees SIMOPS controls'. Stop criteria: unexpected pressure or liquid, gas alarm, wind change towards the crew, anyone unsure.",
          "Role-play debrief: watch for the leader doing all the talking. Prompt the observer to note whether each crew member said what they will do at each critical step, and whether the two fitters with limited English were checked for understanding, for example by asking them to point at the valve and the drain.",
          "The absent area operator is a major gap: she knows the isolation and the drain. The brief should be held at the job site with her there, or delayed until she can attend.",
          "Post-job review: blocked drain (second time) goes to the planner and the maintenance engineer as a recurring defect with a request for a drain design review or a chemical cleaning step in the job plan; the 'rodding' practice from Train A should be raised as a safety observation and discussed openly, not punished; the SIMOPS clash with scaffolding goes to the work planning meeting; the JSA library is updated with the iron sulphide hazard.",
          "Common misconception: 'same job as last month' is a reason to brief less. Familiarity with the twin train is in fact an error-likely situation and a reason to brief carefully."
        ]
      },
      quiz: [
        { q: "Which statement best describes a critical step?", opts: ["Any step that is written in bold in the procedure", "An action that, if done wrongly, causes immediate and irreversible harm with no chance to recover first", "A step that takes longer than fifteen minutes to complete", "Any step that involves a hazardous substance, whether or not an error could be recovered"], a: 1, why: "A critical step is defined by its consequence: immediate, irreversible harm with no chance to recover. Formatting, duration or the mere presence of a hazard do not make a step critical; many hazardous steps are recoverable." },
        { q: "In the SAFER brief structure, what does the A stand for?", opts: ["Assign roles to the crew", "Assess the permit conditions", "Anticipate error-likely situations", "Agree the start time"], a: 2, why: "SAFER is Summarise critical steps, Anticipate error-likely situations, Foresee consequences, Evaluate controls, Review previous experience." },
        { q: "Which is the best if-then contingency?", opts: ["If the gauge on the spool does not read zero after venting, we do not break the flange and the permit holder calls the area operator", "If anything goes wrong, be careful and call someone", "If there is a problem, follow the emergency procedure", "If the job takes too long, the supervisor will decide"], a: 0, why: "A good contingency has a specific, observable trigger, a specific action and a named owner. The others are vague and give no decision in advance." },
        { q: "A supervisor reads the JSA aloud and asks 'Is everyone clear?'. Nobody answers. What is the main weakness?", opts: ["The JSA should have been read more slowly", "The JSA should have been handed out for each person to read and sign individually", "The crew should have signed before the brief", "Silence does not show understanding; the crew should explain the job and their role back"], a: 3, why: "A closed question invites silence. Asking the performer to explain the job, the critical steps and the contingencies tests real understanding." },
        { q: "What is the main purpose of a post-job review?", opts: ["To identify who made mistakes during the job", "To complete the permit close-out paperwork", "To capture what the next crew and the planners need to know and feed it back into the system", "To calculate the job's labour hours"], a: 2, why: "The post-job review is a learning tool. It captures surprises, mismatches and adaptations and sends them to the people who can change the job pack, procedure or plan." },
        { q: "Which situation most needs a longer, walk-down brief rather than a short one?", opts: ["Routine weekly greasing of a pump the crew know well", "Replacing a pressure gauge on a utility air header, a job the crew have done many times", "A first-time job on sour service with a crew new to each other and a SIMOPS clash", "Collecting a sample of cooling water"], a: 2, why: "First-time work, sour service, an unfamiliar crew and SIMOPS are all error-likely conditions. The depth of the brief should scale with the risk." }
      ],
      tools: ["SAFER pre-job brief card", "Critical step identification questions", "If-then contingency worksheet", "Five-question post-job review card"],
      facGuide: `<p><b>Timing:</b> 40 minutes teaching, 45 minutes exercise and role-play, 15 minutes debrief and quiz. Keep the teaching tight; the value is in the role-play.</p>
<p><b>Kit:</b> A3 copies of a simplified P&amp;ID of the Train B separator to stabiliser line, a mock permit and isolation certificate, SAFER cards, brief observation checklists, a timer.</p>
<p><b>Running the role-play:</b> Set up the room as the job site, with the P&amp;ID on a flip chart. The leader must not read from the JSA. Give the "fitters" private role cards: one has limited English, one did the Train A job and remembers the rodding. Stop the role-play at ten minutes even if unfinished; unfinished briefs are a useful learning point about time pressure.</p>
<p><b>Common misconceptions:</b> "A longer brief is a better brief" (it is the quality of the questions that matters); "the brief is the supervisor's job" (the performer should talk most); "critical steps are the hazardous ones" (they are the irreversible ones).</p>
<p><b>Sensitivity:</b> Some participants will have rodded a drain themselves. Treat it as a normal adaptation to a real problem and ask what made it seem reasonable, then ask what the system should provide instead.</p>`
    },
    {
      id: "L2M2", n: 2,
      t: "Self-checking (STAR), place-keeping and procedure use",
      mins: 95,
      obj: "Demonstrate STAR self-checking at critical steps, use circle-slash place-keeping on a continuous-use procedure, and apply the correct procedure use level and adherence rules.",
      learn: `
<h2>Why skilled people need a self-check</h2>
<p>Slips and lapses happen to experienced people doing familiar work. When a task is routine, the brain runs it on autopilot (skill-based behaviour, in Rasmussen's terms), and attention drifts to the next job, the radio, the heat or the end of the shift. Most of the time this is efficient and safe. At a critical step it is not. Self-checking is a deliberate, short switch from autopilot to conscious attention at the moment it matters most.</p>
<h2>STAR: Stop, Think, Act, Review</h2>
<div class="tbl"><table><thead><tr><th>Step</th><th>What you do</th><th>Example: opening a sour drain valve</th></tr></thead><tbody>
<tr><td><b>Stop</b></td><td>Pause before the action. Remove distractions. Put the radio call on hold.</td><td>Hand off the valve. Tell the control room "Wait one" if they call.</td></tr>
<tr><td><b>Think</b></td><td>Confirm the right component, the right action and the expected result. Ask: what will I see if this goes right, and what will I do if it does not?</td><td>"This is Two-One-Hotel-Victor-Zero-Four-Seven, the low-point drain on Train B. I expect liquid to the closed drain and the sight glass to show flow. If I get gas at the vent or my monitor alarms, I close and walk upwind."</td></tr>
<tr><td><b>Act</b></td><td>Touch the label, then the component. Perform the action once, deliberately.</td><td>Touch the tag, read it aloud, then open the valve slowly.</td></tr>
<tr><td><b>Review</b></td><td>Check that the result is what you expected. If not, stop and put the plant in a safe state.</td><td>Watch the sight glass and the gauge. Confirm flow and falling pressure before moving on.</td></tr></tbody></table></div>
<p>Two practical techniques strengthen the Act and Review steps. <b>Touch-and-verify</b>: physically touch the equipment label, then the component, before acting. <b>Point and call</b>: point at the component and say its identity and the intended action aloud. Pointing and calling is long established on Japanese railways and has been adopted on many process plants because it forces the eyes, hands and voice to agree.</p>
<div class="callout"><h4>What defeats a self-check</h4><p>Self-checking is weakest exactly where it is most needed: under time pressure, when fatigued, when the component looks like its neighbour, and when you expect to see something. You can look straight at a tag and read what you expect, not what is written. That is why STAR is backed by labelling, flagging and, for the highest-consequence steps, a second person.</p></div>
<h2>Procedure use levels</h2>
<p>Not every procedure needs to be read line by line in the field. Many organisations, following DOE and nuclear practice, assign each procedure one of three use levels based on the consequence of error, the complexity of the task and how often it is done.</p>
<div class="tbl"><table><thead><tr><th>Use level</th><th>What it requires</th><th>Typical oil and gas examples</th></tr></thead><tbody>
<tr><td><b>Continuous use</b></td><td>The procedure is at the work location and open. Each step is read before it is performed and marked as complete before moving on. Place-keeping is required.</td><td>Plant start-up after a turnaround; fired heater burner light-off; ESD and trip function testing; sour sampling with a sample cylinder; first-time or infrequent tasks; any procedure with several critical steps.</td></tr>
<tr><td><b>Reference use</b></td><td>The procedure is available at the work location. It is consulted at defined points or for the sections the user is less familiar with, and critical sections are followed step by step.</td><td>Routine pump changeovers by an experienced operator; filter changeovers; routine chemical injection rate changes.</td></tr>
<tr><td><b>Information use</b></td><td>The task may be done from memory. The document is available for information and training.</td><td>General operating guidelines; housekeeping routines; low-consequence, frequent tasks.</td></tr></tbody></table></div>
<p>The use level should be printed on the front page of the procedure. If it is not, ask the procedure owner, and treat any task with a critical step as continuous use until told otherwise.</p>
<h2>Procedure adherence</h2>
<p>Adherence means doing the task as the procedure describes, in the sequence written. Procedures are imperfect; HSG48 and the Energy Institute both note that unworkable procedures are a major cause of violations. The answer is not to improvise, and not to follow a wrong procedure blindly. The answer is:</p>
<ol>
<li>If a step cannot be done as written, or the plant does not respond as the procedure expects, <b>stop</b>.</li>
<li>Put the plant and the work in a safe, stable condition.</li>
<li>Contact the supervisor or the control room.</li>
<li>Get the procedure changed through the site's temporary change or management of change process before continuing.</li>
<li>Report the problem so the procedure is fixed permanently.</li></ol>
<p>A procedure that is regularly worked around is a signal to the organisation, not just a failing of the people working around it.</p>
<h2>Place-keeping</h2>
<p>Place-keeping is the physical marking of a procedure so that you always know which steps are complete, which is in progress and which come next. It protects against the most common lapse in procedural work: losing your place after an interruption, then skipping or repeating a step. The method most widely taught is <b>circle-slash</b>:</p>
<ol>
<li>Before starting a step, read it and <b>circle</b> the step number.</li>
<li>Perform the step, self-checking as required.</li>
<li>When the step is complete and the result confirmed, draw a <b>slash</b> through the circle.</li>
<li>For a step that does not apply, mark it "N/A" with your initials, following the site's rules for who may authorise N/A.</li>
<li>Where the procedure requires sign-off or a recorded value, record it at the time, not at the end.</li></ol>
<p>A circle without a slash tells you, or the person who takes over from you, that a step was started but not confirmed. That is exactly the information you need after an interruption.</p>
<h3>Recovering from an interruption</h3>
<p>When interrupted during a continuous-use procedure: mark your place before you leave (a circle on the current step); on return, go back to the <b>last fully completed step</b>, re-read it, and confirm in the field that the plant is in the state the procedure expects; then continue. Never resume from memory. If someone else has to take over, hand over the marked-up copy in person and walk through it.</p>
<div class="rev"><button type="button">Is a tick at the end of the job place-keeping?</button><div class="body"><p>No. Ticking all the steps after the job is complete is record-keeping, and a poor one, because it records what you believe you did. Place-keeping is done step by step in real time. The order of the marks matters: circle before, slash after.</p></div></div>
<h3>Sort it</h3><p>Decide which procedure use level fits each task best.</p>
<div class="sortq" data-sort='[["First start-up of a gas turbine compressor after a major overhaul","Continuous use"],["Taking an H2S sour gas sample using a sample cylinder","Continuous use"],["Routine changeover of duty and standby cooling water pumps by an experienced operator","Reference use"],["Changing over a duplex lube oil filter","Reference use"],["General housekeeping guidance for the control building","Information use"]]' data-opts='["Continuous use","Reference use","Information use"]'></div>
<p class="src">Based on DOE-HDBK-1028-2009 (self-checking, procedure use and adherence, place-keeping), INPO human performance tools, HSE HSG48 (procedures and violations), Energy Institute human factors briefing notes on procedures, and Rasmussen's skill-rule-knowledge framework.</p>`,
      activity: {
        title: "The sour gas sample that vented",
        time: "40 minutes (15 group work, 15 practical demonstration, 10 debrief)",
        scn: `<p><span class="tag">Sour gas plant · inlet facilities · Gulf region</span><span class="tag">Night shift · 02:10 · humid, 31 °C</span></p>
<p>The laboratory asked for an inlet gas sample from the slug catcher outlet for H₂S and CO₂ analysis. The sampling procedure is a 14-step continuous-use procedure on two pages. It includes connecting the sample cylinder, purging through the cylinder to the flare via a purge valve, closing the cylinder valves in sequence, closing the purge valve, and depressurising the sample tubing to flare before disconnecting.</p>
<p>The field operator is experienced and has taken this sample many times. He carries the procedure folded in his coverall pocket and does not take it out; he is wearing breathing apparatus as the procedure requires. At step 8 the control room calls him on the radio to support a permit sign-off at the compressor house 200 metres away. He leaves the sample point with the cylinder connected and the purge valve open to flare. Twenty minutes later he returns and resumes from memory at step 10, closing the cylinder outlet valve. Believing he had already closed the purge valve before he left, he goes straight to the second half of step 11 and opens vent valve V-3 to depressurise the tubing. With the purge valve still open, the sample point is now lined up to V-3; sour gas vents locally, the fixed H₂S detector next to the sample point goes into high alarm and the control room initiates the area evacuation. Nobody is hurt.</p>
<p>The procedure's step 11 combines two actions in one sentence: "Close purge valve and depressurise tubing to flare via vent valve V-3." The procedure says "to flare" but V-3 on the panel actually vents to atmosphere through a short stack; the flare connection was removed in a modification three years ago.</p>`,
        qs: [
          { q: "1. What use level should this procedure have, and was it applied?", hint: "Consider consequence of error, H₂S, frequency, and how the operator actually used the document." },
          { q: "2. Exactly where would circle-slash place-keeping have changed the outcome?", hint: "Walk through steps 8 to 11 and say what marks would have been on the page when he left and when he returned." },
          { q: "3. At which steps should STAR have been applied, and what would 'Think' have sounded like at step 11?", hint: "Name the expected result and the if-then for each critical step." },
          { q: "4. What system factors made this event likely?", hint: "Look at the procedure design, the modification, the interruption and the radio call." },
          { q: "5. Practical: using the training procedure provided, demonstrate STAR and circle-slash, including an injected interruption.", hint: "The observer checks the marks, the recovery to the last completed step, and touch-and-verify." }
        ],
        fac: [
          "Use level: continuous use is correct (sour service, critical steps, BA work). It was applied as information use in practice: the procedure stayed in the pocket. Ask why this felt reasonable: experience, BA mask makes reading hard, procedure on two pages, wind and night.",
          "Place-keeping: at the interruption the page would have shown steps 1 to 7 slashed, step 8 circled. On return the operator would go back to the last completed step (7), re-read step 8 and check the field, and would find the purge valve still open. Without marks he resumed from memory, skipped steps 8 and 9, and then performed only the second action of the combined step 11.",
          "STAR points: connection of the cylinder, opening the purge, closing the purge, depressurising the tubing, disconnection. 'Think' at step 11: 'I am closing the purge valve and then opening V-3. I expect the tubing gauge to fall to zero and nothing at the vent stack. If the gauge does not fall or the detector alarms, I close V-3 and leave upwind.'",
          "System factors: interruption at a critical point initiated by the control room (who did not know where he was in the sequence); a combined two-action step; a procedure inaccurate since an unrecorded modification (an MOC failure that let 'to flare' remain); BA mask making reading difficult; procedure layout across two pages.",
          "Fixes beyond the individual: split step 11 into two steps; correct the vent destination after an MOC review; add a 'safe to leave' hold point so an operator can pause safely; a control room rule not to call field operators during sour sampling except in emergency; laminated single-sheet card with place-keeping marks usable in BA (grease pencil).",
          "For the practical, inject the interruption at a step where the circle is drawn but the slash is not. Strong performers return to the last slashed step and verify in the field before continuing."
        ]
      },
      quiz: [
        { q: "What does the R in STAR stand for, and what does it require?", opts: ["Repeat: do the action twice to be sure", "Report: tell the control room after every step", "Review: confirm the result is what you expected, and stop if it is not", "Record: write the step number on the permit"], a: 2, why: "Review is the check that the action produced the expected result. If it did not, the person stops and puts the plant in a safe state." },
        { q: "In circle-slash place-keeping, when is the slash drawn?", opts: ["When the step has been performed and its result confirmed", "Before reading the step", "At the end of the whole procedure", "When the supervisor signs the procedure"], a: 0, why: "The circle is drawn before a step is performed and the slash only once it is complete and confirmed. The order shows exactly where you are." },
        { q: "An operator returns to a continuous-use procedure after an interruption. What should they do?", opts: ["Carry on from the step they remember being on", "Start the whole procedure again from step 1", "Ask the control room which step they were on", "Go back to the last fully completed step, re-read it and confirm the plant state in the field before continuing"], a: 3, why: "Resuming from memory is the classic cause of skipped steps. Returning to the last completed step and verifying the field condition re-establishes the correct place." },
        { q: "A step in a procedure cannot be done as written because the valve has been removed. What is the correct response?", opts: ["Skip the step and note it at the end", "Stop, make the situation safe, contact the supervisor and get the procedure changed through the proper process before continuing", "Do the nearest equivalent action and continue", "Ask a colleague what they normally do"], a: 1, why: "Adherence does not mean following a wrong procedure or improvising. Stop, make safe, and get the procedure changed through the site's temporary change or MOC route." },
        { q: "Which task is most likely to require continuous use?", opts: ["Daily housekeeping of the control building", "Changing over a duplex filter on a familiar lube oil system", "Reading the weekly operations bulletin", "Fired heater burner light-off after a turnaround"], a: 3, why: "Burner light-off is infrequent, complex and has critical steps with severe consequences, all of which point to continuous use." },
        { q: "Why do self-checks sometimes fail even when the person does stop and look?", opts: ["People see what they expect to see, especially when components look alike and they are tired or rushed", "Self-checks only work for new staff", "Labels are always correct so checking them adds nothing", "Self-checking only works when a second person is present"], a: 0, why: "Expectation bias means a person can read the tag they expect rather than the one written. That is why self-checking is backed by good labelling, flagging and, for high-consequence steps, verification by a second person." }
      ],
      tools: ["STAR self-check card", "Circle-slash place-keeping guide", "Procedure use level decision aid", "Interruption recovery checklist"],
      facGuide: `<p><b>Timing:</b> 35 minutes teaching, 40 minutes exercise including the practical, 20 minutes debrief and quiz.</p>
<p><b>Kit:</b> A two-page training procedure (a mock sample-cylinder procedure with 14 steps works well), grease pencils or chinagraph pencils, a valve board or table-top mock-up with labelled valves, a radio or phone to inject the interruption.</p>
<p><b>Running the practical:</b> Pair participants as performer and observer. Without warning, interrupt the performer at a step where the circle is drawn but not slashed: call them away for two minutes to a different table. Observe whether they return to the last slashed step and check the "field" condition. Swap roles.</p>
<p><b>Points to land:</b> STAR is fast (a few seconds) and belongs at critical steps, not every step. Point and call can feel awkward at first; acknowledge it and practise it until it feels normal. Place-keeping in BA or with gloves needs the right materials: chinagraph on laminated cards.</p>
<p><b>Common misconception:</b> "Experienced people do not need the procedure." Experience makes slips more likely on familiar tasks, not less. Ask: when were you last surprised by a familiar job?</p>`
    },
    {
      id: "L2M3", n: 3,
      t: "Verification practices: peer check, concurrent and independent verification",
      mins: 90,
      obj: "Select and perform the right verification practice for a task, and recognise and prevent rubber-stamp verification.",
      learn: `
<h2>Why a second person</h2>
<p>Self-checking catches many errors, but not all. A person who has misread a tag, misunderstood the instruction or formed the wrong picture of the plant will check against that wrong picture. A second person, who did not form the same expectation, can catch what the first cannot see. That is the logic of verification. It only works if the second person is genuinely checking, with their own eyes and their own reference, not confirming what they have been told.</p>
<h2>Three verification practices</h2>
<div class="tbl"><table><thead><tr><th>Practice</th><th>When it happens</th><th>Who and how</th><th>Purpose</th><th>Oil and gas example</th></tr></thead><tbody>
<tr><td><b>Peer check</b></td><td>Before the action</td><td>A co-worker watches the performer identify the component and state the intended action, and agrees or challenges before it is done.</td><td>Catch a wrong component or wrong action before it happens. Informal and quick.</td><td>Before an operator opens a valve on a crowded manifold, a colleague confirms the tag and direction.</td></tr>
<tr><td><b>Concurrent verification</b></td><td>Before, during and immediately after the action</td><td>Two qualified people are present together. The performer and verifier agree the component, the verifier watches the action, and both confirm the result.</td><td>Protect against errors whose consequence would be immediate and irreversible, where there is no later chance to correct.</td><td>Applying a trip override on a running compressor; first opening of the closure door on a pig receiver; energising a high-voltage feeder.</td></tr>
<tr><td><b>Independent verification</b></td><td>After the action, separated in time and place</td><td>A second qualified person, not present when the action was done, checks the condition with their own copy of the list and their own eyes.</td><td>Confirm that a condition is correct when it will be relied on later and a single error would not be noticed until too late.</td><td>Checking isolation points on an isolation certificate; walking a spade list before start-up; confirming a valve line-up for a tank transfer.</td></tr></tbody></table></div>
<h3>Choosing the practice</h3>
<ul>
<li>If the action itself can cause immediate, irreversible harm, the second person must be there at the moment of action: <b>concurrent verification</b>.</li>
<li>If the action sets up a condition (an isolation, a line-up, a blind, an override) that others will rely on later, the condition must be checked afterwards by someone independent: <b>independent verification</b>.</li>
<li>For everyday actions where a wrong component is plausible but recoverable, a quick <b>peer check</b> is proportionate.</li></ul>
<p>Site procedures should state which tasks require which practice. Typical mandatory independent verification on oil and gas plant includes process and electrical isolations for breaking containment, spade and blind lists at turnarounds, removal of overrides and inhibits before handing equipment back, and valve line-ups for start-up. HSE HSG250 and HSG253 both expect isolations to be checked by a competent person before work starts.</p>
<h2>Rubber-stamp verification</h2>
<p>Two-person checks can be less reliable than they look. When people know someone else is checking, each may relax: the performer because "the verifier will catch it", the verifier because "the performer knows the job". This is sometimes called shared or diffused responsibility. The result is a signature that records a check nobody really made.</p>
<div class="callout or"><h4>Signs of rubber-stamp verification</h4><ul>
<li>The verifier signs from the control room, from a radio call, or from the performer's say-so.</li>
<li>The verifier walks the job with the performer, who points out each item ("that one, that one, that one").</li>
<li>The verifier uses the performer's marked-up list instead of a clean copy.</li>
<li>Verification takes less time than it physically could to walk the points.</li>
<li>The verifier is not competent in the equipment or the isolation method.</li>
<li>Every verification ever recorded found zero errors.</li>
<li>The same person "independently" verifies their own crew's work every time under schedule pressure.</li></ul></div>
<h2>Making independent verification real</h2>
<ol>
<li><b>Different person</b>, competent for the isolation type, not involved in carrying out the action.</li>
<li><b>Separate in time and place</b>: the performer is not present and does not guide the verifier.</li>
<li><b>Own reference</b>: the verifier uses the approved isolation certificate or a clean copy of the line-up, not the performer's working copy.</li>
<li><b>Physical check</b>: touch the valve, check the position indicator, try the handwheel within the site rules, see the lock and tag, read the tag number, confirm the spade is in the right flange (correct side of the valve, correct line).</li>
<li><b>Prove the isolation</b> where the method requires it: confirm zero pressure on the gauge and at the bleed, try-start an electrically isolated motor from the local station, confirm the drain is running clear or dry.</li>
<li><b>Record honestly</b>: a discrepancy found is a success of the system, not a failure of the verifier. Record it and report it.</li></ol>
<p>Organisations can support this by designing independence in: some sites use "blind" verification, where the verifier is given the list of points but not the expected positions and must record what they find, which is then compared with the certificate.</p>
<h2>Verification is not a substitute for design</h2>
<p>A verification step adds a barrier that depends on human attention. It is valuable, but it is weaker than engineering controls such as a positive isolation (spade or spool removal), interlocked valves, key-exchange systems or clear, unique labelling. HSG48 and the hierarchy of control both point the same way: design out the error first, then add checks.</p>
<h3>Sort it</h3><p>Choose the verification practice that fits each task.</p>
<div class="sortq" data-sort='[["Checking a 40-point spade list before hydrocarbons are introduced after a turnaround","Independent verification"],["Applying a trip override on a running export compressor","Concurrent verification"],["Confirming the right valve before opening it on a busy manifold","Peer check"],["Checking the process isolations listed on an isolation certificate before breaking containment","Independent verification"],["Opening the closure door of a pig receiver for the first time after depressurising","Concurrent verification"]]' data-opts='["Peer check","Concurrent verification","Independent verification"]'></div>
<p class="src">Based on DOE-HDBK-1028-2009 (peer-checking, concurrent verification, independent verification), INPO human performance tools, HSE HSG253 The safe isolation of plant and equipment, HSE HSG250 Guidance on permit-to-work systems, and HSE HSG48.</p>`,
      activity: {
        title: "The spade list signed from the control room",
        time: "40 minutes (20 group work, 10 verification drill, 10 debrief)",
        scn: `<p><span class="tag">Refinery · diesel hydrotreater · Gulf coast</span><span class="tag">Turnaround day 26 of 30 · night shift · start-up pressure</span></p>
<p>The diesel hydrotreater is being prepared for start-up after a 30-day turnaround. The spade list has 64 points. Spades were installed and removed by a contractor blinding crew, each point marked on their working copy. Unit operations must independently verify the list before the unit is pressurised with nitrogen and then hydrogen-rich gas.</p>
<p>The start-up is already 36 hours behind schedule. The night shift supervisor assigns verification to a panel operator who has just come off the board. Because the contractor blinding supervisor is "very experienced" and it is dark, the panel operator walks the unit with him; the contractor supervisor points out each spade location and calls "removed" or "installed" and the operator ticks the list. Twenty-two points on the reactor structure are signed off from the ground "because the blinding crew radioed them in". The verification of 64 points takes 70 minutes.</p>
<p>During the nitrogen leak test, a day-shift operator walking the unit notices that the spade on the 6-inch recycle gas compressor discharge line is still in place on the bypass flange, while a spade that should have stayed in place to isolate an out-of-service exchanger has been removed. The two flanges are 1.5 metres apart on the same pipe rack; the spade tags were swapped when the crew re-used tags.</p>`,
        qs: [
          { q: "1. Which features of this verification made it a rubber stamp rather than an independent check?", hint: "Use the signs listed in the module." },
          { q: "2. What would a genuinely independent verification of this spade list have looked like?", hint: "Who, when, with what reference, and what physical checks at each point, including those at height." },
          { q: "3. What was the potential consequence if the error had not been found, and which practice would have caught it?", hint: "Think about what would happen at hydrogen introduction and at compressor start-up." },
          { q: "4. What organisational conditions led to this, and what should managers change?", hint: "Schedule pressure, fatigue, resourcing, tag control, how verification time is planned." },
          { q: "5. Drill: verify the tagged mock-up spade board using a clean copy of the list.", hint: "Seeded errors are present. Record what you find, not what you expect." }
        ],
        fac: [
          "Rubber-stamp signs: verifier guided by the performer; 22 points signed from a radio report; a fatigued panel operator just off the board; 70 minutes for 64 points including the reactor structure (barely a minute per point including climbing); schedule pressure; tick list rather than recorded findings.",
          "Genuine independent verification: a competent operator not involved in blinding, rested, with a clean copy of the approved spade list and the P&amp;ID mark-ups; walks every point alone, including at height with suitable access and lighting; reads the spade tag and the line number and checks which side of the valve and which flange the spade is in; records what is found; discrepancies reported, not corrected silently. Plan realistic time (several hours for 64 points with structure access).",
          "Consequence: with the bypass spaded and the exchanger isolation removed, hydrogen-rich gas could reach the out-of-service exchanger, which may be open or have flanges not fully made up, creating a hydrogen release and fire risk; the blocked compressor discharge path could cause overpressure or a compressor trip at start-up. The nitrogen leak test and a field walk by an alert operator caught it; that was luck as much as design.",
          "Organisational fixes: build verification time into the turnaround start-up schedule as a fixed activity, not slack; use a dedicated, rested verification team; a spade tag register so tags cannot be re-used or swapped; spade numbers painted on the flange as well as on the tag; supervisors who praise discrepancies found rather than speed; managers who ask 'how many verification findings this turnaround?' and treat zero as suspicious.",
          "Drill debrief: ask how many participants found all seeded errors. Typically some miss an error where the tag is correct but the spade is on the wrong side of the valve. Use it to show that reading tags is not the same as checking the condition.",
          "Land the key distinction: independent verification checks the condition of the plant, not the paperwork or the word of the person who did the work."
        ]
      },
      quiz: [
        { q: "What distinguishes independent verification from concurrent verification?", opts: ["Independent verification is done by a supervisor; concurrent by an operator", "Independent verification is separated in time and place from the action and done without the performer; concurrent verification is done together at the time of the action", "Independent verification is optional; concurrent verification is mandatory", "They are the same practice with different names"], a: 1, why: "Concurrent verification protects the moment of action; independent verification checks the resulting condition later, without the performer present." },
        { q: "Applying a trip override on a running compressor is best protected by:", opts: ["A peer check after the event", "Independent verification at the end of the shift", "A note in the shift log", "Concurrent verification at the time of the action"], a: 3, why: "A wrong override could cause immediate, irreversible harm. The second person must be present at the moment of action." },
        { q: "Which practice is a sign of rubber-stamp verification?", opts: ["The verifier uses a clean copy of the isolation certificate", "The verifier records a discrepancy and reports it", "The performer walks the verifier round, pointing out each isolation point", "The verifier takes longer than expected"], a: 2, why: "When the performer guides the verifier, the verifier is checking the performer's belief, not the plant. Independence is lost." },
        { q: "Why can a two-person check be less reliable than expected?", opts: ["Each person may rely on the other to catch errors, so neither checks fully", "The second person is usually less experienced than the first", "Second checks are only for new staff", "Verification forms are too long"], a: 0, why: "Diffusion of responsibility means each relies on the other. Clear roles, independence and a culture that values findings counteract this." },
        { q: "During independent verification of an isolation, the verifier finds a valve open that the certificate shows as closed. What is the right response?", opts: ["Close it quietly and sign the certificate", "Assume the certificate is wrong and sign", "Ask the performer to fix it and sign once done", "Do not sign; leave the valve as found, report the discrepancy to the issuing authority so the isolation is re-established and re-verified"], a: 3, why: "A discrepancy is the system working. It must be reported, corrected through the isolation process and re-verified, so that the cause is understood and the record is true." },
        { q: "Which is generally the strongest protection against a wrong-line spade error?", opts: ["An additional signature on the spade list", "A reminder at the toolbox talk", "Engineering and identification controls such as a controlled spade tag register and line numbers marked at each flange, backed by independent verification", "Asking the blinding crew to work more carefully"], a: 2, why: "Design and identification controls reduce the chance of the error; verification then provides a check. Signatures and reminders alone rely on attention." }
      ],
      tools: ["Verification type selector", "Independent verification checklist", "Rubber-stamp warning signs card"],
      facGuide: `<p><b>Timing:</b> 35 minutes teaching, 40 minutes exercise and drill, 15 minutes debrief and quiz.</p>
<p><b>Kit:</b> A spade board or table-top mock-up with 10 to 12 labelled flanges and removable spade tags, a spade list with a clean copy and a "performer's working copy", torches. Seed three errors: a swapped tag, a spade on the wrong side of a valve, and a missing tag with the spade present.</p>
<p><b>Running the drill:</b> Run it twice. First, let a "performer" walk the verifier round and point out each item. Then run it with the verifier alone using a clean copy. Compare findings. The difference is usually striking and makes the point better than any slide.</p>
<p><b>Points to land:</b> Verification is a check of the plant condition. A discrepancy found is good news. Independence must be planned and resourced; it cannot be squeezed into slack time at the end of a turnaround.</p>
<p><b>Common misconception:</b> "More signatures make it safer." Additional signatures without independence can reduce reliability because everyone assumes someone else checked.</p>`
    },
    {
      id: "L2M4", n: 4,
      t: "Safety-critical communication and handover",
      mins: 110,
      obj: "Use three-way communication, the phonetic alphabet and read-back for safety-critical instructions, and deliver a structured shift and permit handover combining written, verbal and walk-down elements.",
      learn: `
<h2>Why communication fails on plant</h2>
<p>A message passes from a sender, through a channel, to a receiver who must turn it into the same understanding the sender intended. On a gas plant or platform every part of that chain is under stress: radios clip the first word, ear defenders and BA masks muffle speech, compressors and flare noise mask it, and crews often work in a second or third language. Tag numbers are long and similar. "Fifteen" and "fifty" sound alike on a poor radio. People also hear what they expect, and they rarely ask a supervisor to repeat an instruction.</p>
<p>HSE identifies safety-critical communication, and shift handover in particular, as one of its human factors key topics, and it has featured in major accident investigations. At Piper Alpha in 1988, the fact that a pressure safety valve had been removed from condensate pump A, under a permit, did not reach the night shift effectively; when pump B tripped, the night crew started pump A and condensate escaped from the blind flange fitted in place of the valve. At Texas City in 2005, communication about the state of the raffinate splitter tower between the night and day shifts was poor before the tower was overfilled.</p>
<h2>Three-way communication</h2>
<p>Three-way communication closes the loop so that the sender knows the message was received correctly.</p>
<div class="tbl"><table><thead><tr><th>Step</th><th>Who</th><th>Example on the radio</th></tr></thead><tbody>
<tr><td>1. Send</td><td>Sender identifies the receiver and themselves, then gives the instruction clearly, using the full equipment tag.</td><td>"Field Two, this is Control. Close valve Two-Two-Hotel-Victor-One-Zero-Three-Bravo, the Train B separator inlet."</td></tr>
<tr><td>2. Repeat back</td><td>Receiver repeats the message in full, not "copy" or "roger".</td><td>"Control, Field Two. Close Two-Two-Hotel-Victor-One-Zero-Three-Bravo, Train B separator inlet."</td></tr>
<tr><td>3. Confirm</td><td>Sender confirms it is correct, or corrects it and the cycle repeats.</td><td>"Correct." (Then, after the action) "Control, Field Two. Valve One-Zero-Three-Bravo is closed." "Control copies, One-Zero-Three-Bravo closed."</td></tr></tbody></table></div>
<p>Use three-way communication for every instruction that changes the plant state, every isolation and de-isolation, every override or inhibit, and any figure that will be acted on (set points, levels, pressures, gas test results).</p>
<h2>Phonetic alphabet, numbers and plain words</h2>
<p>The international radiotelephony (ICAO/NATO) alphabet removes ambiguity in letters: Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</p>
<ul>
<li>Say numbers <b>digit by digit</b>: "one-five bar", not "fifteen bar"; "set point two-four-zero degrees". Many radio users say "niner" for nine so that it is not confused with "five".</li>
<li>Give <b>units</b> every time: bar gauge or psi, ppm or %LEL, cubic metres or barrels.</li>
<li>Use the <b>agreed words</b> of your site: open, close, start, stop, isolated, de-isolated. Avoid "shut it off" or "kill it", and avoid "OK" as an instruction.</li>
<li>Identify <b>unit and train</b> first: "Train B" before the tag, because Train A and Train B tags often differ by one character.</li>
<li>Do not transmit an instruction while someone is mid-task unless it is urgent; ask "Are you free to copy?"</li>
<li>If you are not sure, say so: "Say again" or "Confirm the tag, I did not hear the last letter."</li></ul>
<h2>Shift handover</h2>
<p>Shift change is a period of elevated risk: the outgoing shift is tired and wants to leave, the incoming shift does not yet have the picture, and important information exists only in people's heads. HSE guidance, drawing on Lardner's 1996 review for HSE, describes good handover as a two-way, face-to-face process that both parties treat as a key task, supported by a structured written record and, where it matters, a joint visit to the plant.</p>
<div class="callout or"><h4>Written + verbal + walk-down</h4><ul>
<li><b>Written:</b> a structured log or electronic handover template, completed during the shift (not in the last ten minutes), with fixed headings.</li>
<li><b>Verbal:</b> face to face, with time to ask questions. The incoming person summarises back what they have understood.</li>
<li><b>Walk-down:</b> a joint field visit to anything abnormal, temporary or under work: isolations, temporary hoses, bypassed equipment, open permits.</li></ul></div>
<div class="tbl"><table><thead><tr><th>Handover heading</th><th>What to include</th></tr></thead><tbody>
<tr><td>Plant status</td><td>Rates, trains in and out of service, key levels, pressures, trends that are changing.</td></tr>
<tr><td>Abnormal conditions</td><td>Equipment out of service, standing alarms, anything running outside normal limits, temporary operating instructions.</td></tr>
<tr><td>Overrides and inhibits</td><td>Every trip override, F&amp;G inhibit and bypass: why, who authorised it, when it must be removed.</td></tr>
<tr><td>Permits and isolations</td><td>Live, suspended and planned permits; isolations in place; work at critical points; SIMOPS.</td></tr>
<tr><td>Planned activities</td><td>What will happen next shift: start-ups, sampling, deliveries, lifts.</td></tr>
<tr><td>Watch-outs</td><td>"What I would keep an eye on": the outgoing person's judgement of risk.</td></tr></tbody></table></div>
<p>Handover quality is shaped by the organisation: whether shift patterns allow overlap time, whether the template is fit for purpose, and whether supervisors protect handover time from other demands. Handovers between disciplines (operations to maintenance) and between companies (operator to contractor) need the same care.</p>
<h2>Permit-to-work handover</h2>
<p>HSE HSG250 is clear that a permit system must cover shift change and suspension. When work continues across a shift change, the permit must be handed over formally: the outgoing and incoming issuers and performing authorities confirm the status of the work, the isolations in place, any changes in conditions, and sign the permit to show that responsibility has transferred. Where work stops, the permit is suspended and the job left in a safe state, with the isolations recorded so that no one de-isolates or starts equipment under a suspended permit. The cross-reference between permits and isolation certificates must be visible to the control room so that nobody can start equipment that is isolated for work.</p>
<div class="rev"><button type="button">What is the most common handover failure?</button><div class="body"><p>Assuming the other person knows. Outgoing staff leave out what is "obvious" to them, and incoming staff do not ask about what they do not know exists. A structured template and the instruction to summarise back are the main defences.</p></div></div>
<h3>Sort it</h3><p>Decide whether each radio exchange is complete three-way communication or incomplete.</p>
<div class="sortq" data-sort='[["Control: close one-zero-three Bravo. Field: copy.","Incomplete"],["Field repeats the full tag and action, Control replies Correct","Complete"],["Control gives the set point as fifteen bar and Field replies roger","Incomplete"],["Field repeats Train B, tag and action; Control corrects the tag; Field repeats the corrected tag; Control confirms","Complete"],["Field reports valve closed and Control does not acknowledge","Incomplete"]]' data-opts='["Complete","Incomplete"]'></div>
<p class="src">Based on HSE human factors key topic: safety-critical communications and shift handover; Lardner (1996) Effective shift handover, HSE OTO 96 003; HSE HSG250 Guidance on permit-to-work systems; DOE-HDBK-1028-2009 (three-way communication, phonetic alphabet, turnover); Flin et al. Safety at the Sharp End; public reports on Piper Alpha (Cullen, 1990) and Texas City (CSB, 2007).</p>`,
      activity: {
        title: "Handover at the sulphur recovery unit",
        time: "50 minutes (15 radio exercise, 25 handover role-play, 10 debrief)",
        scn: `<p><span class="tag">Gas plant · sulphur recovery unit and tail gas treatment · Gulf region</span><span class="tag">Shift change 18:00 · Ramadan · outgoing crew on 12-hour day shift</span></p>
<p>The outgoing SRU field operator has had a busy day. Thermal reactor Train 2 was brought down at 11:00 for a burner inspection; the burner management system for Train 2 has a manufacturer's representative working under a permit with the fuel gas and acid gas isolations in place. Sulphur pit pump P-2B has been isolated electrically and mechanically for a seal change; the work stopped at 16:30 waiting for a part and the permit was suspended. A temporary steam hose has been connected to the sulphur rundown line on Train 1 to clear a plug. The H₂S detector at the Train 2 sulphur pit has been inhibited since 14:00 because it kept alarming during steaming; the inhibit was approved by the shift supervisor and is due to be removed "when steaming finishes".</p>
<p>The outgoing operator writes four lines in the logbook at 17:50: "T2 down for burner insp. P-2B seal change, waiting parts. Steam hose on T1 rundown. All OK." The incoming operator arrives at 18:05 after breaking his fast at home in a hurry. The two talk for three minutes in the control room, where the panel operator is on the phone. At 22:30 the night crew are asked by the control room to "start the standby pump on Two" because the sulphur pit level is rising.</p>`,
        qs: [
          { q: "1. Radio exercise: run the instruction at 22:30 using three-way communication with tag numbers in phonetic form.", hint: "Include unit, train, tag, action and the receiver's challenge if the equipment may be isolated." },
          { q: "2. What is missing from the written handover? Rewrite it under the handover headings.", hint: "Plant status, abnormal conditions, overrides and inhibits, permits and isolations, planned activities, watch-outs." },
          { q: "3. Role-play the handover as written + verbal + walk-down. Which items would you walk down?", hint: "Pick the items that are temporary, abnormal or under isolation." },
          { q: "4. What could have happened at 22:30, and which barriers would have stopped it?", hint: "Think about P-2B, the suspended permit, and the inhibited H₂S detector." },
          { q: "5. What organisational factors made this handover weak?", hint: "Time, place, template, overlap, fasting and fatigue." }
        ],
        fac: [
          "Radio exchange: Control: 'Field SRU, this is Control. Are you free to copy?' ... 'Start the standby sulphur pit pump on Train Two, Papa-Two-Bravo.' Field: 'Control, Field SRU. Start Papa-Two-Bravo, Train Two sulphur pit. Be advised Papa-Two-Bravo is isolated under a suspended permit for seal change. I will not start it. Say again your intention.' This shows three-way communication as a challenge tool, not just a repeat.",
          "Missing items: Train 2 isolations and the active vendor permit; P-2B electrical and mechanical isolation with suspended permit number; the H₂S detector inhibit, who authorised it, the removal condition and that steaming is still ongoing; the temporary steam hose, its pressure and who is monitoring it; sulphur pit levels and trend; what to watch (pit level on Train 2 with the pump out).",
          "Walk-down: P-2B isolation points and the suspended permit at the job; the inhibited detector and the Train 2 pit area; the temporary steam hose and its connections; the Train 2 burner work site.",
          "Potential consequence: if the night crew de-isolate or try to start P-2B, a pump with the seal half-changed could release molten sulphur and H₂S at the pit; with the detector inhibited, the first warning would be personal monitors or people feeling unwell. Barriers: permit and isolation cross-referencing visible in the control room, locks and tags at P-2B, a three-way challenge by the field operator, an inhibit register reviewed at handover with time limits.",
          "Organisational factors: no protected overlap time; handover in a noisy control room; a free-text logbook rather than a template; inhibits not tracked in a register with expiry; Ramadan timing pressure around iftar; 12-hour shift fatigue for the outgoing crew. Recommend structured template, 15 minutes' paid overlap, an inhibit and override register reviewed at every handover.",
          "Key message: 'All OK' is the most dangerous phrase in a handover. Ask participants to ban it."
        ]
      },
      quiz: [
        { q: "In three-way communication, what is the third step?", opts: ["The receiver says 'roger'", "The sender confirms the repeat-back is correct, or corrects it", "The receiver writes it in the log", "The supervisor approves the message"], a: 1, why: "The sender closes the loop by confirming the repeat-back is correct or correcting it. Without this the sender does not know the message was received as intended." },
        { q: "How should a set point of 15 bar be passed on the radio?", opts: ["'Fifteen'", "'About fifteen bar'", "'Set point one-five bar gauge'", "'One-five'"], a: 2, why: "Digit-by-digit with the unit removes the fifteen/fifty confusion and avoids pressure unit errors." },
        { q: "Which combination best describes a structured shift handover for a plant with abnormal conditions?", opts: ["Written log only, completed at end of shift", "A phone call between supervisors", "Verbal handover in the control room", "Written structured log, face-to-face verbal handover with summary back, and a joint walk-down of abnormal items"], a: 3, why: "HSE good practice combines a structured written record, a two-way verbal exchange and a joint field visit for anything abnormal, temporary or under work." },
        { q: "Work under a permit stops at the end of a shift and will continue tomorrow. What should happen to the permit?", opts: ["It should be suspended, the job left safe and the isolations recorded so nobody de-isolates or starts the equipment", "It stays live with no action", "It is cancelled and the isolations removed", "It stays live and the incoming crew are told about it informally at handover"], a: 0, why: "HSG250 expects permit suspension and handover arrangements so that equipment under work cannot be started and the next crew knows its status." },
        { q: "What does the Piper Alpha disaster illustrate about handover?", opts: ["That handovers should be shorter", "That information about a permit and a removed safety valve did not reach the night shift effectively, and they started the pump", "That the phonetic alphabet was not used", "That written logs are unnecessary"], a: 1, why: "The removal of the PSV from condensate pump A under a permit was not effectively communicated to the night shift, who started the pump when pump B tripped." },
        { q: "Why should the train be stated before the tag number?", opts: ["It is shorter", "It is required by the phonetic alphabet", "Twin-train tags often differ by a single character, so naming the train first frames the receiver's attention", "Control room software needs it"], a: 2, why: "Stating the unit and train first sets the context and reduces wrong-train errors where tags look and sound alike." }
      ],
      tools: ["Three-way communication card with phonetic alphabet", "Structured shift handover template", "Permit and isolation handover checklist", "Override and inhibit register prompt"],
      facGuide: `<p><b>Timing:</b> 40 minutes teaching, 50 minutes exercise, 20 minutes debrief and quiz. This is the longest module on Day 1; protect the role-play time.</p>
<p><b>Kit:</b> Two radios (or phones in separate corners), ear defenders to make the radio exercise realistic, background plant noise played at moderate volume, copies of the SRU sketch, the four-line logbook entry, blank handover templates.</p>
<p><b>Radio exercise:</b> Put "Control" and "Field" in different corners with ear defenders and noise. Use real-style tags such as 22-HV-103B and 31-P-2B. Count how often "copy" replaces a full repeat-back. Then repeat with the card.</p>
<p><b>Handover role-play:</b> Outgoing operator gets a role card with all the facts; incoming gets only the logbook. Give the pair five minutes in a noisy corner first, then ten minutes with the template and a table-top walk-down on the sketch. Compare what the incoming operator knows each time.</p>
<p><b>Sensitivity:</b> Many participants will recognise four-line logbooks. Focus on the system (template, overlap, culture), not the outgoing operator.</p>`
    },
    {
      id: "L2M5", n: 5,
      t: "Questioning attitude, stop when unsure, drift and flagging",
      mins: 85,
      obj: "Apply a questioning attitude and call a time-out when unsure, recognise drift and normalisation of deviance in their own work, and use flagging to prevent wrong-unit, wrong-train and wrong-component errors.",
      learn: `
<h2>A questioning attitude</h2>
<p>A questioning attitude is the habit of noticing when something does not fit and doing something about it before acting. It is not suspicion of colleagues; it is curiosity about the plant. People with a questioning attitude treat their own assumptions as things to check, not facts.</p>
<div class="callout"><h4>Triggers that should make you pause</h4><ul>
<li>Words in your own head or on the radio: "I think", "probably", "should be", "it was like that last time", "don't worry about it".</li>
<li>An indication that does not match expectation: a gauge reading pressure on a line that should be depressurised; a valve that turns too easily or will not move.</li>
<li>Conflicting information: the permit says one thing, the tag another, the operator a third.</li>
<li>Something new or changed: first-time task, new crew member, changed procedure, different contractor, changed weather or wind.</li>
<li>Missing information: no drawing, no gas test result, a step you do not understand.</li>
<li>Pressure to hurry or to skip a check "just this once".</li></ul></div>
<p>The response to a trigger is to <b>validate the assumption</b>: find a fact that confirms or disproves it. Check the gauge at a second point, read the tag, call the control room for the DCS indication, look at the P&amp;ID, ask the person who did the isolation.</p>
<h2>Stop when unsure and time-out</h2>
<p>When an assumption cannot be validated, or something unexpected happens, the safe response is to stop. Many sites formalise this as a <b>time-out</b>:</p>
<ol>
<li><b>Stop</b> the task at a safe point. Do not carry on "just to finish this bit".</li>
<li><b>Make safe</b>: put the plant and the job in a stable condition (close the valve you were opening, leave the flange made up).</li>
<li><b>Gather</b> the crew and the right people: area operator, permit issuer, supervisor, engineer.</li>
<li><b>Resolve</b>: understand what is different, get the facts, change the plan or the procedure if needed.</li>
<li><b>Re-brief</b> the changed plan, including new critical steps and contingencies.</li>
<li><b>Proceed</b> only when everyone is satisfied.</li></ol>
<p>Stop-work authority means little unless people believe using it is safe for them. The response of the first supervisor who hears "I stopped the job" decides whether the next person will stop. A useful supervisor response is: "Thank you for stopping. Tell me what you saw." The wrong response, even said as a joke, is "Why is the job not finished?"</p>
<div class="rev"><button type="button">What if stopping causes a bigger problem?</button><div class="body"><p>Some tasks cannot be stopped at any point; for example halfway through draining a vessel or during a lift. That is why the pre-job brief should identify safe stopping points and agree if-then contingencies. "Stop" means stop at the next safe point and make safe, not freeze in a dangerous position.</p></div></div>
<h2>Drift and normalisation of deviance</h2>
<p>Rasmussen described how work drifts towards the boundary of safe performance under constant pressure for efficiency and least effort. Each small step seems reasonable and nothing bad happens, so the step becomes the new normal. Diane Vaughan, studying the 1986 Challenger launch decision, called the process by which unacceptable practice comes to be accepted the <b>normalisation of deviance</b>. In oil and gas the same pattern shows up as:</p>
<div class="grid2"><div class="card"><h4>Signals in the field</h4><p>Standing alarms everyone ignores; "temporary" hoses and bypasses months old; gas detectors left inhibited; isolation points "everyone knows"; steps routinely skipped because "the procedure is out of date"; sampling done without BA "because it is a quick one".</p></div>
<div class="card"><h4>Signals in the language</h4><p>"We always do it this way." "It has never been a problem." "The procedure is only for new people." "Engineering said it is fine" (but nobody has it in writing). "Just this once." "Everyone does it."</p></div></div>
<p>Drift is not mainly a problem of bad people; it is a sign that the system is under pressure, the procedure does not fit the work, or a defect has been tolerated. The individual's job is to notice it and raise it. The supervisor's job is to find out why the gap exists and fix the cause.</p>
<h2>Flagging and labelling: wrong unit, wrong train, wrong component</h2>
<p>Oil and gas plants are full of identical equipment: Train A and Train B, pumps A and B, mirror-image layouts, parallel compressors, identical wellheads on a platform. Wrong-component errors happen to experienced people because the components look the same and expectation fills in the rest. Defences, in order of strength:</p>
<ol>
<li><b>Design and permanent identification</b>: unique, legible, durable tags facing the walkway; train identification at unit entrances and on major equipment (large letters, colour bands); mirror layouts avoided where possible.</li>
<li><b>Flagging</b>: before work begins, the area operator and the performer go together to the job site and attach a temporary, highly visible flag or tag to the exact component to be worked on, matching the permit. The performer then works only on the flagged item. Flags are removed at job completion as part of the close-out.</li>
<li><b>Job-site confirmation</b>: at the first critical step, the performer reads the flag, the permanent tag and the permit and confirms they agree (touch-and-verify).</li>
<li><b>Communication</b>: train and unit named first in every instruction; permits that name the train, tag and location, not just "pump B".</li></ol>
<p>Some sites also use "do not operate" flags on adjacent live equipment in high-risk cases, for example the running pump next to the one being worked on.</p>
<h3>Sort it</h3><p>Decide whether each item is a drift signal or healthy practice.</p>
<div class="sortq" data-sort='[["An F and G detector has been inhibited for three weeks with no expiry date","Drift signal"],["A fitter calls a time-out because the flange tag does not match the permit","Healthy practice"],["Operators say the start-up procedure is only for new people","Drift signal"],["A temporary hose has a register entry, an owner and a removal date","Healthy practice"],["Sampling without BA because it is a quick one","Drift signal"],["The area operator and fitter flag the pump together before the job","Healthy practice"]]' data-opts='["Drift signal","Healthy practice"]'></div>
<p class="src">Based on DOE-HDBK-1028-2009 (questioning attitude, validate assumptions, stop when unsure, flagging), Rasmussen (1997) Risk management in a dynamic society, Vaughan (1996) The Challenger Launch Decision, Dekker "Field Guide to Understanding Human Error", HSE HSG48 and HSE HSG253.</p>`,
      activity: {
        title: "Lean amine pump B on the wrong train",
        time: "35 minutes (20 group work, 15 debrief)",
        scn: `<p><span class="tag">Gas sweetening plant · amine Trains 1 and 2 (mirror image) · Gulf region</span><span class="tag">Day shift · contractor maintenance crew · second week on site</span></p>
<p>The permit is for "replacement of mechanical seal on lean amine pump B". It names Train 2 in the location box, but the tag field has been written as "P-B" because the full tag would not fit. The Train 2 area operator isolated the pump at 07:30: electrical isolation at the motor control centre and suction and discharge valves closed, chained and locked, with the casing drained to the closed drain. She did not go to the job site with the crew because she was called to a compressor alarm.</p>
<p>The contractor crew arrive at 09:00. Trains 1 and 2 are mirror images separated by a pipe rack; the train identification signs at both entrances have faded in the sun. The crew go to lean amine pump B on Train 1, which is the standby pump and not running. One fitter notices there are no locks on the valves and says, "Maybe the locks are on the other side." The crew leader says, "It is the standby, it is not running, the operator probably used the MCC only. We have done this job twenty times." They begin loosening the seal housing bolts. Lean amine at 6 bar sprays from the seal area as the bolts loosen. The crew withdraw; the Train 1 field operator closes the suction and discharge valves. Nobody is injured, although one fitter's coverall is soaked with amine.</p>
<p>When interviewed, operators say that crews regularly work on standby pumps with only electrical isolation "for quick jobs", and that faded train signs were reported months ago.</p>`,
        qs: [
          { q: "1. List every point where a questioning attitude should have triggered a pause.", hint: "Look for words, missing items and mismatches." },
          { q: "2. What should the crew have done at the moment the fitter noticed there were no locks?", hint: "Describe the time-out step by step." },
          { q: "3. Which drift signals are visible in this site's normal work?", hint: "Look at the interview findings as well as the event." },
          { q: "4. Design the flagging and identification arrangements that would have prevented the wrong-train error.", hint: "Think about the permit, the area operator's role, flags, permanent signs and communication." }
        ],
        fac: [
          "Pause points: tag written as 'P-B' without train; the area operator not at the job site; faded train signs; no locks on the valves; 'maybe', 'probably', 'we have done this twenty times'; no flag at the pump; nobody compared the permit with the equipment tag.",
          "Time-out: stop before loosening any bolt; leave the pump as it is; call the area operator and the permit issuer; confirm the train and tag from the permit and isolation certificate; go to Train 2 with the operator; re-brief at the right pump, confirming locks, zero pressure on the casing and a dry drain before the first critical step (loosening the seal housing).",
          "Drift signals: working on standby pumps with electrical isolation only (a standby pump can be pressurised through its open suction or a passing discharge check valve, and may be set to auto-start, which is why positive valve isolation and a proven zero-pressure casing are required); faded signs reported but not fixed; permit fields abbreviated; area operators not attending job starts; crew leader treating experience as a reason to skip checks. These are system signals: resourcing, maintenance of signage, permit form design, and tolerance of 'quick job' isolations.",
          "Flagging design: the area operator and the performer attend the job site together after isolation and attach a numbered flag to Train 2 lean amine pump B, matching the permit number; the performer reads permit, flag and permanent tag at the first critical step; permit form with a full tag and train field; large train identification (for example 'TRAIN 2' in colour bands) on each pump; 'live: do not work' flags on the running duty pump in high-risk jobs.",
          "Highlight the fitter who noticed: he had a questioning attitude, but the team did not act on it. Ask what would make a junior fitter's 'maybe' become a stop. Answers usually include the crew leader's reaction and whether stopping has ever been praised on site.",
          "Avoid the conclusion 'the crew leader failed'. The same crew would be set up to fail again by the same permit form, signs and isolation practice."
        ]
      },
      quiz: [
        { q: "Which phrase is the strongest trigger for a questioning attitude?", opts: ["'The gas test is zero at all four points'", "'It should be isolated, the operator probably did it'", "'The permit, flag and tag all show Train 2 pump B'", "'The drain is running clear'"], a: 1, why: "'Should be' and 'probably' signal an unvalidated assumption. The others are validated facts." },
        { q: "What is the correct first action in a time-out?", opts: ["Stop at a safe point and make the job safe", "Call the plant manager", "Finish the current step quickly", "Write an incident report"], a: 0, why: "Stopping at a safe point and making safe comes first; then gather people, resolve, re-brief and proceed." },
        { q: "Normalisation of deviance is best described as:", opts: ["Deliberate sabotage of safety systems", "The use of standard procedures", "A gradual process in which unacceptable practice comes to be accepted as normal because nothing bad has happened", "A legal term for breaking regulations"], a: 2, why: "Vaughan described how deviations become normal through repeated success without visible harm." },
        { q: "What is the main purpose of flagging?", opts: ["To show that a permit has been signed", "To mark the area as a no-go zone", "To show that a job is complete", "To identify the exact component to be worked on, agreed by the operator and performer at the job site, so the wrong one is not worked on"], a: 3, why: "Flagging marks the specific component, agreed jointly at the job site, so the performer works only on the flagged item." },
        { q: "A supervisor hears that a crew stopped a job because a valve tag did not match the permit. What response best supports stop-work authority?", opts: ["'Why did it take you an hour to sort out?'", "'Next time just use your judgement'", "'Thank you for stopping. Tell me what you saw.'", "'We will discuss this at the disciplinary meeting'"], a: 2, why: "The first supervisor response shapes whether people will stop next time. Thanks and curiosity reinforce it." },
        { q: "Which is the strongest defence against wrong-train errors on mirror-image plant?", opts: ["Permanent, durable train and equipment identification, backed by flagging at the job site", "Reminding crews to be careful", "A note on the permit saying 'check train'", "Experienced crews"], a: 0, why: "Design and identification controls work regardless of attention; flagging and self-checking add layers. Reminders and experience do not remove the trap." }
      ],
      tools: ["Questioning attitude trigger card", "Time-out procedure card", "Job-site flagging standard", "Drift spotting checklist"],
      facGuide: `<p><b>Timing:</b> 35 minutes teaching, 35 minutes exercise, 15 minutes debrief and quiz.</p>
<p><b>Kit:</b> Two identical photos or sketches of mirror-image pump bays labelled only with small faded signs; sample flags; a copy of the abbreviated permit.</p>
<p><b>Running it:</b> Start with a short "spot the difference" between the two pump bays to show how hard identification is. Then run the scenario in groups of four. Ask one group to argue the crew leader's case honestly: why did continuing make sense to him? This builds the inside view from HP-1.</p>
<p><b>Drift discussion:</b> Ask each table to write, anonymously on sticky notes, one "we always do it this way" from their own site. Read a few aloud without comment, then ask: what pressure created this? Who would need to know? Collect them for the site HP lead if participants agree.</p>
<p><b>Common misconception:</b> "Questioning attitude means questioning people." It means questioning assumptions and conditions. Frame challenges about the plant: "Can we confirm the train?" rather than "Did you isolate it properly?"</p>`
    },
    {
      id: "L2M6", n: 6,
      t: "Situation awareness at the workface",
      mins: 95,
      obj: "Use Endsley's three levels to check situation awareness, recognise SA red flags, and apply practical techniques to manage interruptions, distraction and expectation bias in field and control room work.",
      learn: `
<h2>What situation awareness is</h2>
<p>Mica Endsley defined situation awareness (SA) as the perception of the elements in the environment, the comprehension of their meaning, and the projection of their status in the near future. In plain terms: <b>What is happening? What does it mean? What will happen next?</b> SA is what lets an operator or a crew stay ahead of the plant rather than reacting to it.</p>
<div class="tbl"><table><thead><tr><th>Level</th><th>Question</th><th>Field example: pig receiving</th><th>Control room example</th></tr></thead><tbody>
<tr><td><b>Level 1: Perception</b></td><td>What is happening?</td><td>The receiver pressure gauge reads 3 bar; the pig signaller has not tripped; there is a smell of gas near the kicker valve.</td><td>Separator level is rising slowly; the level control valve output is at 100%.</td></tr>
<tr><td><b>Level 2: Comprehension</b></td><td>What does it mean?</td><td>The pig is not yet in the barrel, and the kicker valve gland may be leaking.</td><td>The control valve is not keeping up: it may be stuck, or downstream pressure has risen.</td></tr>
<tr><td><b>Level 3: Projection</b></td><td>What will happen next?</td><td>If I start isolating and depressurising now, the pig may still be in the line and the whole operation will have to be repeated; if the gland leak grows when I open the kicker valve further, gas will drift across my access route in this wind.</td><td>In about ten minutes the high-high level trip will shut in the train unless I act.</td></tr></tbody></table></div>
<p>Errors occur at all three levels. In Jones and Endsley's 1996 analysis of aviation incident reports, most SA errors were at Level 1: information that was not available, not noticed or misread. The practical lesson for the workface is that many SA failures start with not seeing, not with not thinking.</p>
<h2>Team SA</h2>
<p>On a plant, SA is shared between the control room, field operators, maintenance crews and contractors. Team SA means each person has the SA their role needs, and shared SA means the overlapping parts are the same picture. Handovers, three-way communication, pre-job briefs and quick "where are we?" updates are the tools that keep the pictures aligned. A classic failure is the control room and the field each believing the other is managing a problem.</p>
<h2>SA red flags</h2>
<p>Endsley calls the common causes of lost SA "SA demons": attentional tunnelling, the requisite memory trap, workload, fatigue and stress, data overload, misplaced salience, complex mental models, being out of the loop, and errant mental models. Several aviation and process safety programmes turn these into a short list of red flags, sometimes called SA killers. Treat any of these as a trigger to stop and rebuild the picture:</p>
<div class="grid3"><div class="card"><h4>Confusion</h4><p>Ambiguous or conflicting indications; "that is strange"; nobody can explain a reading.</p></div>
<div class="card"><h4>Fixation</h4><p>Everyone focused on one problem or one screen while the rest of the plant is unwatched.</p></div>
<div class="card"><h4>Unresolved discrepancy</h4><p>The permit, the DCS and the field disagree and the difference is not chased down.</p></div>
<div class="card"><h4>Departure from plan</h4><p>Deviating from the procedure, the brief or the agreed sequence without a re-brief.</p></div>
<div class="card"><h4>Overload or underload</h4><p>Too many tasks at once, or long monotonous periods (night shift, steady state) where attention fades.</p></div>
<div class="card"><h4>Fatigue and heat</h4><p>Long shifts, night work, summer heat and dehydration all degrade attention. API RP 755 addresses fatigue risk management in the refining and petrochemical industries.</p></div></div>
<h2>Attention and expectation</h2>
<p>Attention is limited. We cannot attend to everything, so the brain selects, and it selects according to what we expect and what we are looking for. Three well-researched effects matter at the workface:</p>
<ul>
<li><b>Inattentional blindness</b>: people focused on one task can fail to see an obvious, unexpected object in plain view. Simons and Chabris (1999) showed that about half of observers counting basketball passes failed to notice a person in a gorilla suit walking through the scene.</li>
<li><b>Expectation (confirmation) bias</b>: we look for and accept information that fits the picture we already have, and explain away information that does not. An operator convinced a level transmitter is faulty may ignore the second, independent indication that the level really is rising.</li>
<li><b>Change blindness</b>: gradual changes, such as a slowly rising temperature or a valve position that has crept, are easily missed, especially across a shift change.</li></ul>
<h2>Distractions and interruptions</h2>
<p>Interruptions are one of the commonest precursors of lapses. When a task is interrupted, the intention to resume it is held in prospective memory, which is fragile. On return there is a resumption lag, and the risk of skipping or repeating a step rises. Practical techniques:</p>
<div class="tbl"><table><thead><tr><th>Technique</th><th>How it works on plant</th></tr></thead><tbody>
<tr><td>Protect critical steps</td><td>Agree in the brief that the control room will not call the performer during critical steps except in an emergency; the field says "Wait one" if called mid-step.</td></tr>
<tr><td>Sterile periods</td><td>Borrowed from the aviation "sterile cockpit" concept: during start-up, sour sampling, ESD testing or a lift, only task-related conversation is allowed.</td></tr>
<tr><td>Mark your place</td><td>Use place-keeping (Module 2) and, for physical tasks, leave a visible marker at the point reached.</td></tr>
<tr><td>Defer, delegate or decline</td><td>Ask whether the interruption must be handled now, by you. If not, note it and come back.</td></tr>
<tr><td>Re-orient on return</td><td>Before resuming, re-read the last completed step and look at the plant: has anything changed while I was away?</td></tr></tbody></table></div>
<h2>Building SA at the workface</h2>
<p>The Energy Institute, the Chartered Institute of Ergonomics and Human Factors (CIEHF) and other industry bodies have published SA guidance and simple tools for frontline staff. Check which version your site has adopted; the common elements are:</p>
<ol>
<li><b>Look before you start</b>: a short walk-around of the job site, the equipment and the surroundings (wind direction, other work, escape routes, gas detection) before the first action.</li>
<li><b>Use the three questions</b> at the start of the job and at each critical step: what is happening, what does it mean, what will happen next?</li>
<li><b>Look up</b> periodically from the task: scan for change, other crews arriving, wind shift, alarms or horns.</li>
<li><b>Share the picture</b>: quick updates within the crew and to the control room ("we are at step 9, line drained, about to break the flange").</li>
<li><b>Act on red flags</b>: stop and rebuild the picture rather than pressing on.</li></ol>
<h3>Sort it</h3><p>Decide which SA level each statement shows.</p>
<div class="sortq" data-sort='[["The windsock now points towards the muster point we planned to use","Level 1 Perception"],["The wind change means our planned escape route is now downwind of the release point","Level 2 Comprehension"],["If the release continues, the gas cloud will reach the scaffold crew on the pipe rack within minutes","Level 3 Projection"],["The fixed detector at the wellhead shows 8 ppm H2S","Level 1 Perception"],["The rising reading means the leak on the choke body is getting worse","Level 2 Comprehension"]]' data-opts='["Level 1 Perception","Level 2 Comprehension","Level 3 Projection"]'></div>
<p class="src">Based on Endsley (1995) Toward a theory of situation awareness in dynamic systems; Jones and Endsley (1996) Sources of situation awareness errors in aviation; Simons and Chabris (1999) Gorillas in our midst; Flin et al. Safety at the Sharp End (situation awareness); Endsley and Jones (2012) Designing for Situation Awareness (SA demons); Energy Institute and CIEHF situation awareness resources; API RP 755 Fatigue risk management systems; DOE-HDBK-1028-2009.</p>`,
      activity: {
        title: "Wireline and production on the same deck",
        time: "40 minutes (20 group work, 10 SA freeze-frame, 10 debrief)",
        scn: `<p><span class="tag">Offshore wellhead platform · Arabian Gulf · normally unmanned, crew of 9 on board</span><span class="tag">SIMOPS · day 3 of wireline campaign · 41 °C, humid, wind 12 knots NW</span></p>
<p>A slickline crew is setting a plug in well 4 while wells 1 to 3 and 5 to 8 continue producing sour crude (around 1.5% H₂S in associated gas). The SIMOPS matrix allows wireline on one well slot with adjacent wells producing, provided the crane is not lifting over the wellbay. The production operator is the area authority and also the permit issuer for a scaffolding job on the cellar deck.</p>
<p>At 13:40 the production operator is on the cellar deck re-checking the scaffold permit when the wireline supervisor calls him on the radio to witness the lubricator pressure test. While walking up, the crane operator asks him on the radio whether he can approve a lift of a gas bottle rack "quickly, before the wind picks up". He agrees, intending to go back to check the lift path. At the wellbay, the lubricator test is underway. He notices a faint smell of gas near well 6 but the fixed detector reads 3 ppm, which the crew say "has been like that since yesterday; it is the choke". He also notices the windsock has backed to the west. He becomes absorbed in the pressure test, which shows a small leak at the lubricator quick union. Five minutes later the detector at well 6 reads 9 ppm and the crane is slewing a load towards the wellbay edge.</p>`,
        qs: [
          { q: "1. Describe the production operator's SA at 13:50 at each of Endsley's three levels. What did he perceive, comprehend and project, and what did he miss?", hint: "Separate what he saw from what he understood and what he predicted." },
          { q: "2. Which SA red flags and attention effects are present?", hint: "Look for fixation, overload, unresolved discrepancy, normalised readings, interruptions and environmental factors." },
          { q: "3. How should the interruptions have been managed?", hint: "Use defer, delegate, decline; protecting critical steps; re-orienting." },
          { q: "4. What should he do now, in priority order?", hint: "Think about the H₂S trend, the wind, the lift and the leaking lubricator." },
          { q: "5. What system changes would protect SA on this platform during SIMOPS?", hint: "Roles, communication, alarm management, SIMOPS controls." }
        ],
        fac: [
          "Level 1: perceived the gas smell, 3 ppm reading, wind backing west, lubricator leak; missed the crane's lift path and the rising trend at well 6 (he was focused on the test). Level 2: comprehended the lubricator leak, but accepted 'it is the choke' for the gas reading, an untested explanation. Level 3: no projection of the wind change carrying gas from well 6 towards the scaffold crew or the deck where the crane would land the rack.",
          "Red flags: overload (area authority, permit issuer, witness and lift approver at once); fixation on the pressure test; unresolved discrepancy (gas smell and a non-zero reading normalised since yesterday); departure from the SIMOPS plan (lift approved without checking the path near the wellbay); rushed request ('quickly'); heat and humidity.",
          "Interruption management: tell the wireline supervisor 'Wait one, I will be there in ten minutes' or delegate the witness role to a competent person; decline the crane request until the lift path has been checked or delegate it to the deck foreman; write down the commitment to return to the lift; on arriving at the wellbay, do a quick look-around before getting absorbed.",
          "Priorities now: stop the lift (radio the crane operator to hold the load clear of the wellbay); stop the wireline operation and make the lubricator safe; warn the scaffold crew and consider the wind direction for their muster route; check personal monitors, consider BA and increase the response for the well 6 reading per the platform H₂S procedure; inform the control room or the host platform; investigate the well 6 leak rather than accepting the 'choke' explanation.",
          "System changes: separate the area authority role from the witness and lift approver roles during SIMOPS; a SIMOPS coordinator or an extra person on board for wireline campaigns; a rule that any non-zero H₂S reading is investigated and logged, not normalised; the crane lift plan to include an exclusion zone around the wellbay, enforced by the deck foreman; scheduled SA updates between crews.",
          "SA freeze-frame technique: pause the scenario at 13:45 and ask each person to write what is happening, what it means and what will happen next. Compare answers. Usually nobody projects the wind and gas interaction, which is the teaching point."
        ]
      },
      quiz: [
        { q: "Endsley's Level 2 situation awareness is:", opts: ["Perceiving the elements in the environment", "Comprehending what those elements mean together", "Projecting the future state", "Acting on the information"], a: 1, why: "Level 1 is perception, Level 2 comprehension, Level 3 projection. Action is outside the SA model itself." },
        { q: "Most SA errors in Jones and Endsley's analysis of aviation reports were at which level?", opts: ["Level 3 projection", "Level 2 comprehension", "Equally spread across the three levels", "Level 1 perception"], a: 3, why: "Most SA errors involved failing to perceive or misperceiving information, which is why scanning and good displays matter so much." },
        { q: "An operator dismisses a second level indication because she is convinced the first transmitter is faulty. This is an example of:", opts: ["Expectation or confirmation bias", "Inattentional blindness", "A routine violation", "Change blindness"], a: 0, why: "Accepting information that fits the existing picture and explaining away information that does not is confirmation (expectation) bias." },
        { q: "A field operator is mid-way through a sour sampling procedure when the control room calls with a non-urgent request. The best response is:", opts: ["Leave the sample point and deal with the request", "Ignore the radio", "Say 'Wait one', complete the step to a safe point, mark the place, then respond", "Hand the procedure to a colleague who has not been briefed"], a: 2, why: "Deferring a non-urgent interruption and marking your place protects the critical step and recovery from the interruption." },
        { q: "Which is an SA red flag?", opts: ["The permit, the field and the DCS all show the same status", "A fixed gas detector reading has been non-zero since yesterday and the crew have stopped noticing it", "The crew give a quick update to the control room before a critical step", "The operator walks around the job site before starting"], a: 1, why: "A normalised abnormal reading is an unresolved discrepancy. The other options are good SA practices." },
        { q: "What is a sterile period?", opts: ["A time when the plant is shut down for cleaning", "A rest break during a long shift", "A period when the control room cannot be contacted", "A period during a high-risk activity when only task-related communication is allowed"], a: 3, why: "Borrowed from aviation's sterile cockpit concept, it limits distraction during critical activities such as start-ups or sour sampling." }
      ],
      tools: ["Three-question SA card (What is happening? What does it mean? What next?)", "SA red-flag card", "Interruption management card (defer, delegate, decline)"],
      facGuide: `<p><b>Timing:</b> 35 minutes teaching, 40 minutes exercise, 20 minutes debrief and quiz.</p>
<p><b>Kit:</b> A platform deck sketch on A1 showing wells 1 to 8, the crane, the windsock and the cellar deck scaffold; radios; a short attention demonstration (a selective attention video, if licensing allows, or a live counting task).</p>
<p><b>SA freeze-frame:</b> Read the scenario aloud in three timed segments. At each pause, give participants 60 seconds to write their Level 1, 2 and 3 SA, then compare. Give one table extra radio "interruptions" while they work and compare their answers with a quiet table.</p>
<p><b>Points to land:</b> SA is lost at Level 1 more often than people think; the remedy is to look and to share. Interruptions should be managed deliberately, not tolerated. Roles that load too much on one person during SIMOPS are a system problem.</p>
<p><b>Sensitivity:</b> Avoid presenting SA as "pay more attention". The aim is to design work, roles and communication so that attention is protected.</p>`
    },
    {
      id: "L2M7", n: 7,
      t: "Supervisor field skills: coaching, task observation and learning conversations",
      mins: 95,
      obj: "Coach crews in the use of HP tools, carry out a task observation that identifies error-likely situations, and lead a blame-free field learning conversation that produces action.",
      learn: `
<h2>The supervisor makes the tools real</h2>
<p>Human performance tools live or die at the first-line supervisor. Crews use STAR, three-way communication and time-outs when their supervisor uses them, asks about them and protects the time they take. They drop them quickly when the supervisor rushes the brief, signs off verification from the cabin or reacts to a stop with irritation. This module is for supervisors and senior technicians who lead crews, including contractor supervisors.</p>
<h2>Recognising error-likely situations</h2>
<p>Errors cluster in situations that make them likely. The DOE handbook groups the conditions that provoke error, called <b>error precursors</b>, into four categories, remembered as <b>TWIN</b>: Task demands, Work environment, Individual capabilities and human Nature.</p>
<div class="tbl"><table><thead><tr><th>Category</th><th>Examples of precursors on plant</th></tr></thead><tbody>
<tr><td><b>T</b>ask demands</td><td>Time pressure; high workload; simultaneous tasks; repetitive actions; irreversible acts; interpretation needed; unclear goals, roles or standards; long or complex procedures.</td></tr>
<tr><td><b>W</b>ork environment</td><td>Distractions and interruptions; changes or departures from routine; confusing displays, controls or missing labels; hidden system responses; unexpected equipment conditions; workarounds; heat, noise, poor lighting; out-of-service instruments; SIMOPS; poor access.</td></tr>
<tr><td><b>I</b>ndividual capabilities</td><td>Unfamiliar task or first time; lack of knowledge or experience; new technique; imprecise communication habits; language differences; fatigue; illness.</td></tr>
<tr><td>Human <b>N</b>ature</td><td>Stress; habit patterns; assumptions; complacency and overconfidence; mindset; inaccurate risk perception; limited short-term memory; mental shortcuts.</td></tr></tbody></table></div>
<p>A practical rule: when you see two or more precursors together at a critical step, the situation is error-likely. Act on it: re-brief, add a peer check, slow the job, change the sequence, or stop until conditions improve.</p>
<h2>Task observation, not just behaviour counting</h2>
<p>Many sites run behaviour-based safety (BBS) observation programmes. Used well they open conversations; used badly they become a numbers game that focuses on the person rather than the work.</p>
<div class="grid2"><div class="card"><h4>Pitfalls of behavioural observation</h4><p>Card quotas that encourage trivial observations; focus on PPE and housekeeping rather than critical steps; counting "unsafe acts" as if they explained the job; observers who stand at a distance and tick boxes; the observer effect (people perform differently when watched); findings that blame individuals and are never acted on.</p></div>
<div class="card"><h4>Task observation</h4><p>Watches a whole task, or the critical part of it, with the crew's knowledge. Focuses on how the work is actually done compared with how it was planned, the conditions the crew work with, error precursors, and whether HP tools are used at critical steps. Ends with a conversation and actions on the system.</p></div></div>
<h3>Planning and running a task observation</h3>
<ol>
<li><b>Choose</b> a task with critical steps: isolation, breaking containment, sour sampling, a lift, a start-up.</li>
<li><b>Prepare</b>: read the procedure, permit and JSA; note the critical steps.</li>
<li><b>Agree</b> with the crew that you are there to learn how the work is done, not to catch anyone out. Ask permission to watch.</li>
<li><b>Observe</b> the brief, the critical steps, the use of HP tools, the precursors, any adaptations, and anything that differs from the plan. Stay close enough to see and hear.</li>
<li><b>Intervene</b> immediately only if there is imminent danger. Otherwise hold your observations until a natural break or the end.</li>
<li><b>Talk</b>: hold a learning conversation (below).</li>
<li><b>Act and close the loop</b>: record what you learnt, raise the system fixes, and go back to tell the crew what changed.</li></ol>
<h2>Coaching HP tools</h2>
<p>Coaching is helping someone improve their own practice by observing, asking and giving specific feedback. A simple field coaching sequence:</p>
<div class="tbl"><table><thead><tr><th>Step</th><th>What the supervisor does</th><th>Example</th></tr></thead><tbody>
<tr><td>Observe</td><td>Watch the specific behaviour and its context.</td><td>A technician opens a drain without touching the tag first.</td></tr>
<tr><td>Ask</td><td>Invite their view first.</td><td>"How did you make sure that was the right drain?"</td></tr>
<tr><td>Listen</td><td>Find the reason, which often reveals a condition.</td><td>"The tag is behind the pipe; you cannot reach it from the walkway."</td></tr>
<tr><td>Feedback</td><td>Be specific; reinforce what was done well; explain why the tool matters at this step.</td><td>"Your three-way with the control room was spot on. On the drain, this is a critical step; if the tag cannot be reached, we read it with a torch and point and call."</td></tr>
<tr><td>Agree and fix</td><td>Agree what the person will do, and what you will fix.</td><td>"I will get the tag moved to face the walkway this week."</td></tr></tbody></table></div>
<p>Reinforce good use of tools at least as often as you correct poor use. People repeat what is noticed and valued.</p>
<h2>Field learning conversations</h2>
<p>A learning conversation, in the spirit of Conklin's Human and Organisational Performance (HOP) approach and learning teams, is a structured, curious discussion with the people who do the work about how it really gets done. It can follow a task observation, a near miss, a good catch or simply a job that "always works". Its aim is to understand work-as-done and the conditions that shape it, not to judge.</p>
<div class="callout or"><h4>Questions that open up learning</h4><ul>
<li>"Talk me through how this job really gets done."</li>
<li>"What makes this job hard? What gets in the way?"</li>
<li>"Where could this go wrong? What would surprise you?"</li>
<li>"What do you need that you do not have?"</li>
<li>"When did the procedure not match the plant? What did you do?"</li>
<li>"If a new person did this tomorrow, what would you warn them about?"</li></ul></div>
<p>Avoid "why did you...?", which sounds like an accusation, and closed questions answered with yes or no. Listen more than you speak, write down what you hear, and summarise back. Then agree what will be done, by whom and by when, and report back on progress. The conversation is wasted if nothing changes.</p>
<h3>Sort it</h3><p>Decide whether each question opens a learning conversation or shuts it down.</p>
<div class="sortq" data-sort='[["What makes this job hard to do as written?","Opens learning"],["Why did you not follow the procedure?","Shuts it down"],["Talk me through how you normally isolate this pump","Opens learning"],["Did you do a gas test, yes or no?","Shuts it down"],["What would you warn a new person about on this job?","Opens learning"],["Who was responsible for checking the tag?","Shuts it down"]]' data-opts='["Opens learning","Shuts it down"]'></div>
<p class="src">Based on DOE-HDBK-1028-2009 (error precursors and TWIN, task observation, coaching), Conklin "Pre-Accident Investigations" and HOP learning teams, Hollnagel (work-as-imagined and work-as-done, Safety-II), Dekker "Field Guide to Understanding Human Error", Flin et al. Safety at the Sharp End (leadership), and the Energy Institute human factors briefing notes.</p>`,
      activity: {
        title: "Night shift at the turnaround exchanger bay",
        time: "45 minutes (15 observation, 20 coaching role-play, 10 debrief)",
        scn: `<p><span class="tag">Refinery turnaround · crude unit heat exchanger bay · Gulf coast</span><span class="tag">Day 12 of 28 · night shift 19:00-07:00 · 34 °C</span></p>
<p>A contractor crew of six is pulling the tube bundle from a crude preheat exchanger using a bundle extractor and a 60-tonne mobile crane. Their supervisor has run this crew for nine nights. The crew includes two new riggers who arrived yesterday, one with limited Hindi and English; the crew mostly speak Malayalam and Hindi. The job pack includes a lift plan, a permit, an isolation certificate and a procedure, written in English.</p>
<p>As the night shift area supervisor, you arrive at 01:30 to carry out a task observation. You see: the pre-job brief sheet signed at 19:15 by six names, with the critical steps column blank; the bundle extractor positioned by eye rather than with the alignment marks in the procedure; the crane operator receiving signals from two different people; one of the new riggers standing under the suspended bundle to guide a tag line; floodlighting on one side only, casting shadows on the shell flange; a fitter who stops the lift when he sees the bundle catch on a baffle, and the crane operator who restarts after a radio call from the contractor supervisor saying "carry on, it always catches there". The crew are visibly tired. The job is two shifts behind schedule.</p>`,
        qs: [
          { q: "1. Identify the error-likely situations using TWIN. Which are at critical steps?", hint: "Sort what you see into Task, Work environment, Individual, Nature of people." },
          { q: "2. Which observations require you to intervene immediately, and how?", hint: "Separate imminent danger from learning points." },
          { q: "3. Role-play: coach the contractor supervisor after the lift is safely landed.", hint: "Use observe, ask, listen, feedback, agree and fix. Include something to reinforce." },
          { q: "4. Plan a ten-minute learning conversation with the crew. Write your opening and three questions.", hint: "Make it safe to speak, and allow for the language mix." },
          { q: "5. What system issues would you escalate to the turnaround manager?", hint: "Think beyond this crew: schedule, staffing, lighting, language, briefs." }
        ],
        fac: [
          "TWIN: Task (heavy lift, irreversible, two signallers, alignment by eye, schedule pressure); Work environment (one-sided lighting, shadows, night, heat, SIMOPS in a congested bay); Individual (new riggers, language, fatigue on night nine); Human nature (habit 'it always catches there', overconfidence, shortcuts under pressure). Critical steps: the extraction pull and the lift with load suspended.",
          "Immediate intervention: rigger under the suspended load (stop the lift now, clear the person); two signallers (stop and appoint one banksman); restart after a stop without resolving the snag (stop and resolve as a time-out). Intervene calmly and directly; explain afterwards.",
          "Coaching role-play: reinforce the fitter who stopped the lift and the crew's commitment. Ask: 'When the bundle caught, how did you decide to carry on?' Listen for schedule pressure and habit. Feedback: a stop should only be lifted after the cause is understood and agreed with the person who stopped it. Agree: re-brief the critical steps, one banksman, alignment marks used. Supervisor's fix: lighting and a rested crew.",
          "Learning conversation opening: 'I am here to understand what makes this job hard, not to find fault. You know this work better than I do.' Use an interpreter from the crew for the new riggers. Questions: 'What makes pulling these bundles hard at night?', 'Where does it usually go wrong?', 'What do you need that you do not have?', 'If a new rigger joined tomorrow, what would you tell him?'",
          "Escalate: blank critical-steps columns across briefs (a brief quality issue); schedule pressure leading to restarts after stops; inadequate lighting; job packs only in English for a crew that mostly does not read it; fatigue on long night rotations; integration of new crew members. These are turnaround management issues, not crew failings.",
          "Debrief point: the fitter's stop was the best event of the night; how the supervisor responded to it was the most important moment. Ask what message the 'carry on' radio call sent to the new riggers."
        ]
      },
      quiz: [
        { q: "In the TWIN model of error precursors, the W stands for:", opts: ["Workload", "Work environment", "Worker attitude", "Written procedures"], a: 1, why: "TWIN is Task demands, Work environment, Individual capabilities and Human nature." },
        { q: "Which is a common pitfall of behavioural observation programmes?", opts: ["Observing the whole task including critical steps", "Talking with the crew afterwards", "Card quotas that drive trivial observations focused on PPE rather than critical steps", "Acting on system issues raised"], a: 2, why: "Quotas and a narrow focus on PPE or housekeeping turn observation into counting and miss the conditions that create serious risk." },
        { q: "During a task observation you see a person standing under a suspended load. What should you do?", opts: ["Note it and discuss it at the end", "Report it in the weekly BBS statistics", "Wait for the crane operator to notice", "Intervene immediately to stop the lift and clear the person"], a: 3, why: "Imminent danger always requires immediate intervention. Learning points can wait; danger cannot." },
        { q: "Which question is most likely to open a learning conversation?", opts: ["'What makes this job hard to do as written?'", "'Why did you not follow the procedure?'", "'Who was supposed to check the tag?'", "'Did you do the gas test, yes or no?'"], a: 0, why: "Open, curious questions about the work invite people to describe real conditions. 'Why did you' and closed questions put people on the defensive." },
        { q: "When coaching, what should a supervisor do first after observing a behaviour?", opts: ["Tell the person what they did wrong", "Ask the person for their view of what happened and why", "Write it up in the observation system", "Report it to the manager"], a: 1, why: "Asking first reveals the conditions behind the behaviour and treats the person as the expert on their work." },
        { q: "What is the most important final step of a learning conversation?", opts: ["Getting signatures from the crew", "Recording the names of those present", "Agreeing actions, owners and dates, then reporting back to the crew on what changed", "Filing the notes with HSE"], a: 2, why: "If nothing changes and the crew are not told, people stop sharing. Closing the loop is what makes learning conversations work." }
      ],
      tools: ["TWIN error precursor card", "HP task observation checklist", "Five-step field coaching guide", "Learning conversation question card"],
      facGuide: `<p><b>Timing:</b> 35 minutes teaching, 45 minutes exercise, 15 minutes debrief and quiz. If the cohort has few supervisors, pair frontline participants with supervisors and let them play the crew; they give the most honest feedback.</p>
<p><b>Kit:</b> A short video or photo sequence of a task (a site-approved recording or a staged training video), HP task observation checklists, coaching role cards (contractor supervisor under schedule pressure; a defensive crew leader; a quiet new rigger).</p>
<p><b>Running it:</b> First, everyone observes the same video or scenario and completes the observation checklist individually; compare how many precursors each person found. Then run the coaching role-play in threes (coach, coachee, observer with the coaching rubric). Rotate so each supervisor coaches once.</p>
<p><b>Points to land:</b> Intervene on imminent danger; otherwise observe, then talk. The way a supervisor responds to a stop shapes the whole crew. Task observation looks at the work and its conditions, not at counting unsafe acts.</p>
<p><b>Common misconception:</b> "Coaching means telling." It means asking first, then giving specific feedback, and fixing what the organisation owes the crew.</p>`
    }
  ],
  assessment: {
    summary: "Three parts. (1) A 30-question knowledge check drawn from the module quizzes and new items, closed book, 30 minutes. (2) A practical assessment of four rotating stations on Day 2 (five for supervisors), observed by a qualified assessor using the rubric below. (3) A workplace evidence logbook completed within 30 days of the course and signed off by the participant's supervisor and the site HP lead.",
    pass: "At least 80% (24 of 30) on the knowledge check; Competent or Strong on every practical station, with no critical fail; and a completed workplace logbook with the required entries. Supervisors must also be Competent on Station E. A participant who is Not Yet Competent on one station may be reassessed on that station once, on the day or within 30 days.",
    practical: `<h3>Practical assessment brief</h3>
<p>Participants rotate through four stations in crews of four; supervisors are also assessed on a fifth (Station E). Each station is a realistic Gulf-region task set up as a table-top or mock-up. The assessor observes, records evidence against the rubric and gives brief feedback at the end of each station. Stations A to D take about 20 minutes each. Every participant must be assessed on every criterion: within a station each crew member takes the assessed lead role for one part of the task (for example, at Station A each leads the brief for one critical step and its contingencies while the others play crew; at Stations B and C each works individually on their own copy), and the assessor also scores individual answers to probing questions. Where the assessor directly observed a participant in a scored module practical (M1 brief, M2 interruption practical, M3 drill, M4 radio exercise), that evidence may be used alongside station evidence. Station E is scored during the Module 7 coaching role-play.</p>
<div class="tbl"><table><thead><tr><th>Station</th><th>Task</th><th>Competencies</th></tr></thead><tbody>
<tr><td>A. Brief</td><td>Lead a pre-job brief for a breaking-containment job on sour service, using the permit, isolation certificate and P&amp;ID provided. Crew members hold role cards.</td><td>HP2.1, HP2.5</td></tr>
<tr><td>B. Procedure</td><td>Perform a continuous-use procedure on the valve board. The assessor injects an interruption at an unannounced step.</td><td>HP2.2, HP2.6</td></tr>
<tr><td>C. Verification</td><td>Independently verify a 10-point isolation and spade board with two or three seeded errors, using a clean copy of the certificate. Explain which verification type each listed activity requires.</td><td>HP2.3</td></tr>
<tr><td>D. Communication</td><td>Receive and execute radio instructions in a noisy setting, then deliver a shift and permit handover from a log, including a table-top walk-down.</td><td>HP2.4, HP2.6</td></tr>
<tr><td>E. Coaching (supervisors)</td><td>Scored during the Module 7 exercise: observe a short staged task, identify error precursors with the TWIN card, then coach the performer and open a learning conversation.</td><td>HP2.7</td></tr></tbody></table></div>
<h3>Marking rubric</h3>
<div class="tbl"><table><thead><tr><th>Criterion</th><th>Not yet competent</th><th>Competent</th><th>Strong</th></tr></thead><tbody>
<tr><td>Critical steps identified (A)</td><td>Critical steps not named, or confused with general hazards.</td><td>Names the irreversible steps and states what could go wrong and the worst credible outcome.</td><td>Also identifies the error-likely situations at each critical step and the checks to apply there.</td></tr>
<tr><td>Contingencies and engagement (A)</td><td>Reads out the JSA; asks "any questions?"; no if-then contingencies.</td><td>Agrees at least three specific if-then contingencies with owners and states the stop criteria; crew explain their roles back.</td><td>Checks understanding of every crew member, including those with limited English, and adjusts the plan in response to challenges.</td></tr>
<tr><td>STAR and place-keeping (B)</td><td>Works from memory; marks steps after the event or not at all.</td><td>Circles before and slashes after each step; uses touch-and-verify at critical steps.</td><td>Uses point-and-call naturally; states the expected result and the response if it does not occur.</td></tr>
<tr><td>Interruption recovery (B)</td><td>Resumes from memory; skips or repeats a step. <b>Critical fail.</b></td><td>Marks place before leaving; on return goes back to the last completed step and checks the field condition.</td><td>Also defers the interruption to a safe point and tells the "control room" when free.</td></tr>
<tr><td>Independent verification (C)</td><td>Signs from the list without physical checks, or misses any seeded error. Signs with a known discrepancy: <b>critical fail.</b></td><td>Checks each point physically with a clean copy, finds all seeded errors, does not correct them silently, reports them.</td><td>Explains clearly why each listed activity needs a peer check, concurrent or independent verification, and how independence could be lost.</td></tr>
<tr><td>Three-way communication (D)</td><td>Replies "copy" or "roger" to instructions; numbers not given digit by digit.</td><td>Repeats back in full with train, tag and action; uses the phonetic alphabet and digits; waits for confirmation.</td><td>Uses the read-back to challenge an unsafe instruction (for example to start isolated equipment).</td></tr>
<tr><td>Handover (D)</td><td>Unstructured; misses an override, inhibit or isolation. Missing a live isolation or inhibit: <b>critical fail.</b></td><td>Covers all template headings; incoming person summarises back; identifies items for walk-down.</td><td>Adds clear "watch-outs" with reasons and checks the permit and isolation cross-references.</td></tr>
<tr><td>Coaching and learning conversation (E)</td><td>Tells rather than asks; blames; no actions agreed.</td><td>Identifies at least four precursors with TWIN; asks first; gives specific feedback including reinforcement; agrees actions.</td><td>Separates individual and system actions, uses open questions throughout, and plans how to close the loop with the crew.</td></tr></tbody></table></div>
<h3>HP tool observation checklist (used at stations and in the workplace)</h3>
<ul>
<li>Pre-job brief held at or near the job site, critical steps named, contingencies agreed, crew explain back.</li>
<li>Correct procedure use level; place-keeping marks made in real time.</li>
<li>STAR or touch-and-verify at each critical step.</li>
<li>Verification type matches the task; verifier independent where required.</li>
<li>Three-way communication with full repeat-back for every plant change.</li>
<li>Questioning attitude shown; time-out used when unsure; flagging in place on twin equipment.</li>
<li>Look-around and SA updates; interruptions deferred at critical steps.</li>
<li>Post-job review held and learning recorded.</li></ul>
<h3>Workplace evidence logbook (within 30 days)</h3>
<ul>
<li>Two pre-job briefs led, each with critical steps and if-then contingencies recorded, and one post-job review with the learning and where it was sent.</li>
<li>One observed use of STAR and place-keeping on a continuous-use procedure.</li>
<li>One verification (concurrent or independent) performed, with the type justified.</li>
<li>One structured handover delivered and one received.</li>
<li>One example of a questioning attitude, time-out or flagging, described from the inside view.</li>
<li>Supervisors: two task observations with learning conversation notes and the actions raised.</li></ul>`
  },
  capstone: null,
  schedule: [
    { block: "Day 1 07:30-07:50", items: "Welcome, course safety brief, HP-1 recap: error types, local rationality and the systems view. Crews formed for the two days." },
    { block: "Day 1 07:50-09:30", items: "M1 Pre-job briefs and post-job reviews: critical steps, SAFER, if-then contingencies; brief role-play at a mock job site." },
    { block: "Day 1 09:30-09:45", items: "Break" },
    { block: "Day 1 09:45-11:20", items: "M2 Self-checking (STAR), place-keeping and procedure use: sour sampling scenario; circle-slash practical with injected interruption." },
    { block: "Day 1 11:20-12:05", items: "Lunch and prayer" },
    { block: "Day 1 12:05-13:35", items: "M3 Verification practices: peer check, concurrent and independent verification; spade board drill run twice." },
    { block: "Day 1 13:35-13:50", items: "Break" },
    { block: "Day 1 13:50-15:40", items: "M4 Safety-critical communication and handover: radio exercise with noise and ear defenders; SRU handover role-play; permit handover." },
    { block: "Day 1 15:40-16:00", items: "Day 1 post-job review: crews run the five-question review on the day itself and post one learning each." },
    { block: "Day 2 07:30-07:45", items: "Recap and quick radio drill with the phonetic alphabet." },
    { block: "Day 2 07:45-09:10", items: "M5 Questioning attitude, stop when unsure, drift and flagging: wrong-train scenario; drift sticky-note exercise." },
    { block: "Day 2 09:10-09:25", items: "Break" },
    { block: "Day 2 09:25-11:00", items: "M6 Situation awareness at the workface: SIMOPS freeze-frame exercise; interruption management." },
    { block: "Day 2 11:00-11:45", items: "Lunch and prayer" },
    { block: "Day 2 11:45-13:20", items: "M7 Supervisor field skills: TWIN task observation, coaching role-play in threes (assessed as Station E for supervisors), learning conversations. Frontline participants play crew and give feedback." },
    { block: "Day 2 13:20-13:30", items: "Break and station briefing" },
    { block: "Day 2 13:30-15:00", items: "Practical assessment: Stations A to D in rotation, about 20 minutes each, with feedback after each. (Station E for supervisors is scored during the M7 coaching role-play.)" },
    { block: "Day 2 15:00-15:30", items: "Knowledge check: 30 questions, closed book." },
    { block: "Day 2 15:30-16:00", items: "Personal application plan, workplace logbook briefing, course post-job review and close." }
  ]
});
