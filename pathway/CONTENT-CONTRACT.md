# Human Performance Pathway: content contract

The pathway app (`pathway/index.html`) loads one script per level from `pathway/content/`.
Each file registers exactly one level object by calling `HP.level({...})`.
Files are plain browser JavaScript (no modules, no imports, no build). Use template literals (backticks) for HTML strings.
Do not use `${` inside HTML strings (they are template literals). Escape backticks if needed.

## Audience and setting
Operations, maintenance, engineering, HSE and leadership teams in oil & gas / energy (upstream, midstream,
gas processing, refining, offshore), with Gulf-region facility scenarios as in the existing workshop
(`index.html`). Brand: H²S Consultants. British English spelling (organisation, behaviour, colour).
Scenarios are composite and fictional: never name a real company, a real person or claim to describe a
real incident. You MAY reference well-known public incidents (e.g. Texas City 2005, Piper Alpha 1988,
Buncefield 2005, Deepwater Horizon 2010, Longford 1998) as public learning cases, accurately and briefly.

Authoritative sources to draw on and cite in each module's `src` line (only cite what you actually use, accurately):
Energy Institute human performance / human factors resources (incl. "Human Factors Briefing Notes",
"Guidance on human factors safety critical task analysis" 2nd ed.), HSE HSG48 "Reducing error and influencing behaviour",
HSE Core Topics, IOGP Report 460/621 (HF in incident investigation / Human performance), IOGP 454 "Human factors engineering in projects",
CCPS "Human Factors Methods for Improving Performance in the Process Industries", CCPS "Guidelines for Preventing Human Error in Process Safety",
EI/CIEHF "Situation awareness" tools, Reason (1990, 1997), Dekker "Field Guide to Understanding Human Error", Conklin "Pre-Accident
Investigations" / HOP, Hollnagel (Safety-II, ETTO, FRAM), Rasmussen (SRK, drift), Endsley (SA), Flin et al. "Safety at the Sharp End" (NOTECHS/NTS),
Williams HEART, Kirwan "A Guide to Practical Human Reliability Assessment", ISO 11064 / ISO 6385, EEMUA 191 (alarms), API RP 755 (fatigue),
INPO Human Performance Tools / DOE-HDBK-1028-2009, Westrum culture typology, Hudson safety culture ladder, Just Culture (Marx; Dekker).

## Level object

```js
HP.level({
  id: "L1",                 // L1..L5
  n: 1,
  name: "Foundation",       // short level name
  title: "Human Performance Foundations",   // full course title
  badge: "HP-1",
  tagline: "one sentence",
  audience: "who attends",
  prereq: "entry requirement",
  duration: "e.g. 1 day (6.5 h contact)",
  format: "delivery format",
  outcomes: ["By the end, participants can ...", ...],   // 5-8 measurable outcomes (Bloom verbs at the right level)
  competencies: [            // 4-8 competency statements this level certifies
    { code: "HP1.1", statement: "...", evidence: "how it is evidenced" }
  ],
  modules: [ /* 5-7 modules, see below */ ],
  assessment: {
    summary: "how the level is assessed",
    pass: "pass criteria e.g. 80% on knowledge check + competent on practical",
    practical: "HTML: the practical / workplace assessment brief, with marking rubric as a table"
  },
  capstone: null | { title, brief: "HTML", deliverables: ["..."], rubric: [{criterion, competent, distinction}] }, // L3-L5 must have one
  schedule: [ { block: "Day 1 08:00-09:30", items: "M1 ..." } ]   // timetable rows
});
```

## Module object

```js
{
  id: "L1M1", n: 1,
  t: "Module title",
  mins: 75,                       // total minutes (teach + activity + debrief)
  obj: "One-sentence objective",
  learn: `HTML teaching content`, // 700-1400 words. See allowed HTML below.
  activity: {
    title: "Exercise title",
    time: "40 minutes",
    scn: `HTML scenario`,          // start with <p><span class="tag">Site · Region</span><span class="tag">Shift · conditions</span></p>
    qs: [ { q: "Question", hint: "What a good answer covers" } ],   // 3-5 questions
    fac: ["Facilitator model answer / debrief point", ...]          // 4-8 bullets, specific
  },
  quiz: [   // 5-6 knowledge-check MCQs, 4 options each, exactly one correct
    { q: "Question", opts: ["A","B","C","D"], a: 2, why: "Why the right answer is right" }
  ],
  tools: ["Named tool / template introduced, e.g. 'STAR self-check card'"],  // 0-4
  facGuide: "HTML: facilitator delivery notes - timings, how to run it, common misconceptions, kit needed"  // 120-250 words
}
```

Vary the correct answer index `a` across 0..3. Distractors must be plausible, not silly.

## Allowed HTML in `learn`, `scn`, `practical`, `brief`, `facGuide`
Use only these elements/classes (the app styles them):
- `<h2>`, `<h3>`, `<p>`, `<ul>/<ol>/<li>`, `<b>`, `<i>`
- Callouts: `<div class="callout"><h4>Title</h4><p>..</p></div>`, highlighted: `<div class="callout or">...</div>`
- Cards: `<div class="grid2">` or `<div class="grid3">` containing `<div class="card"><h4>..</h4><p>..</p></div>`
- Tables: `<div class="tbl"><table><thead><tr><th>..</th></tr></thead><tbody><tr><td>..</td></tr></tbody></table></div>`
- Reveal: `<div class="rev"><button type="button">Prompt</button><div class="body"><p>..</p></div></div>`
- Sorting interaction (1 per module max, 4-6 items): `<div class="sortq" data-sort='[["item text","Category"],...]' data-opts='["Cat A","Cat B"]'></div>`
  (single quotes around the JSON attribute; NO apostrophes inside items - rephrase instead)
- Source line at the end of `learn`: `<p class="src">Based on ...</p>`
No `<script>`, no inline styles, no images, no external links.
