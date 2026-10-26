"use strict";

// Change this before launch.
const CONTACT_EMAIL = "REPLACE_ME@example.com";

const CAREERS = [
  {
    id: "physician", name: "Physician", emoji: "🩺", color: "#e8452c",
    overview: "Physicians are doctors. They figure out why people are sick or hurt and help them get better. They also help people stay healthy.",
    day: ["Talk with patients and listen to their health concerns", "Check patients and order tests", "Make a treatment plan", "Work with nurses, pharmacists, and other team members", "Write notes so the whole team knows the plan"],
    roadmap: [
      { step: "Bachelor's degree", detail: "About 4 years" },
      { step: "Medical school (MD or DO)", detail: "About 4 years" },
      { step: "Residency training", detail: "About 3 to 7 years" },
      { step: "Licensure", detail: "Licensing exams and a state license" }
    ],
    now: {
      Elementary: ["Read books about the human body", "Ask questions at your check-ups", "Practice healthy habits like sleep, exercise, and handwashing"],
      "Middle School": ["Join a science club or fair", "Take a kids' first aid class with a grown-up", "Help at community health events"],
      "High School": ["Shadow a physician", "Volunteer at a clinic or hospital", "Ask about Medical Explorers-style programs", "Learn CPR/BLS; EMT classes often require a minimum age"],
      College: ["Shadow in different specialties", "Do clinical volunteering or scribing", "Try a research assistantship", "Learn about the MCAT and admissions"]
    }
  },
  {
    id: "pharmacist", name: "Pharmacist", emoji: "💊", color: "#7b3fe4",
    overview: "Pharmacists are medicine experts. They make sure people get the right medicine, in the right amount, and know how to use it safely.",
    day: ["Check that each prescription is safe and correct", "Explain how and when to take medicines", "Talk with doctors about the best medicine choices", "Watch for medicines that should not be mixed", "Give vaccines in many pharmacies"],
    roadmap: [
      { step: "College coursework", detail: "Usually 2 to 4 years of prerequisites" },
      { step: "Doctor of Pharmacy (PharmD)", detail: "About 4 years" },
      { step: "Licensure", detail: "Pharmacy licensing exams plus state requirements" },
      { step: "Optional residency", detail: "1 or more years for some jobs" }
    ],
    now: {
      Elementary: ["Learn why medicine labels matter, with a grown-up", "Do safe kitchen science experiments"],
      "Middle School": ["Try a chemistry or science fair project", "Ask a pharmacist how they check prescriptions"],
      "High School": ["Take chemistry and biology", "Shadow a pharmacist", "Volunteer in a health setting"],
      College: ["Look into pharmacy technician work (rules vary by state)", "Try undergraduate research", "Meet with a pre-pharmacy advisor"]
    }
  },
  {
    id: "researcher", name: "Researcher", emoji: "🔬", color: "#2bb673",
    overview: "Researchers ask big questions about health and test them carefully. Their discoveries can lead to new medicines and better ways to treat illness.",
    day: ["Read about what scientists already know", "Plan careful experiments", "Collect and study data", "Write and share what they learn", "Work in a team in a lab or clinic"],
    roadmap: [
      { step: "Bachelor's degree", detail: "About 4 years" },
      { step: "PhD or MD-PhD", detail: "PhD often about 5 to 6 years" },
      { step: "Postdoctoral training", detail: "Often 2 to 4 years, depends on field" },
      { step: "Build a research record", detail: "No single license; published work matters" }
    ],
    now: {
      Elementary: ["Ask \"why?\" and test ideas with safe experiments", "Keep a science notebook"],
      "Middle School": ["Enter a science fair", "Learn how a fair test works"],
      "High School": ["Look for summer research programs", "Take biology, chemistry, and statistics"],
      College: ["Join a research lab", "Apply for research assistantships", "Practice presenting your results"]
    }
  },
  {
    id: "educator", name: "Science/Health Educator", emoji: "🍎", color: "#f5a623",
    overview: "Educators teach people about science and health in classrooms, museums, clinics, and communities. They make hard ideas easy to understand.",
    day: ["Plan fun lessons and activities", "Explain tricky ideas in simple words", "Answer questions", "Check what learners understood", "Create posters, demos, and handouts"],
    roadmap: [
      { step: "Bachelor's degree", detail: "About 4 years" },
      { step: "Training or graduate study", detail: "Depends on the job; some roles use a master's degree" },
      { step: "License or certification", detail: "School teachers need a state license; some health educators earn a certification" }
    ],
    now: {
      Elementary: ["Teach a family member something you learned", "Make a simple poster about staying healthy"],
      "Middle School": ["Be a peer tutor or helper", "Join a science or health club"],
      "High School": ["Volunteer as a tutor or camp helper", "Create a health lesson for younger kids"],
      College: ["Assist in a classroom or outreach program", "Practice science communication", "Explore teacher or health-education pathways"]
    }
  }
];

const COMING_SOON = ["Nurse", "Physician Assistant", "Physical Therapist", "Optometrist", "Dentist"];

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}
function list(items) {
  const ul = el("ul");
  items.forEach(t => ul.append(el("li", null, t)));
  return ul;
}

function renderNav() {
  const nav = document.getElementById("career-nav");
  CAREERS.forEach(c => {
    const li = el("li"), a = el("a", null, c.name);
    a.href = "#" + c.id;
    li.append(a); nav.append(li);
  });
  [["fun zone", "#fun"]].forEach(([t, h]) => {
    const li = el("li"), a = el("a", null, t);
    a.href = h; li.append(a); nav.append(li);
  });
}

function renderTiles() {
  const grid = document.getElementById("tile-grid");
  CAREERS.forEach(c => {
    const a = el("a", "tile");
    a.href = "#" + c.id;
    a.style.setProperty("--tc", c.color);
    a.append(el("span", "emoji", c.emoji), el("span", null, c.name));
    grid.append(a);
  });
  COMING_SOON.forEach(n => {
    const d = el("div", "tile soon");
    d.append(el("span", null, n), el("small", null, "Coming soon"));
    grid.append(d);
  });
}

function renderModule(c) {
  const sec = el("section", "panel module");
  sec.id = c.id;
  sec.style.setProperty("--mc", c.color);

  const head = el("div", "module-head");
  head.append(el("span", "emoji", c.emoji), el("h2", null, c.name));
  sec.append(head, el("p", null, c.overview));

  const grid = el("div", "module-grid");

  const day = el("div", "box");
  day.append(el("h3", null, "What they do day to day"), list(c.day));

  const road = el("div", "box");
  road.append(el("h3", null, "Education roadmap"));
  const ol = el("ol", "roadmap");
  c.roadmap.forEach(r => {
    const li = el("li");
    li.append(el("strong", null, r.step), el("span", null, r.detail));
    ol.append(li);
  });
  road.append(ol);

  const now = el("div", "box");
  now.append(el("h3", null, "Things you can do now"));
  const tabs = el("div", "tabs");
  const panel = el("div");
  const ages = Object.keys(c.now);
  const buttons = ages.map(age => {
    const b = el("button", null, age);
    b.type = "button";
    b.addEventListener("click", () => show(age));
    tabs.append(b);
    return b;
  });
  function show(age) {
    buttons.forEach(b => b.setAttribute("aria-pressed", String(b.textContent === age)));
    panel.replaceChildren(list(c.now[age]));
  }
  show(ages[0]);
  now.append(tabs, panel);

  grid.append(day, road, now);
  sec.append(grid, el("p", "review", "Source notes and accuracy review: pending mentor review."));
  return sec;
}

function setupPoll() {
  const form = document.getElementById("poll-form");
  const results = document.getElementById("poll-results");
  const KEY = "hce-poll-v1";
  let votes = {};
  try { votes = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { votes = {}; }

  const fs = el("fieldset");
  fs.append(el("legend", "small", "Choose one"));
  CAREERS.forEach(c => {
    const l = el("label");
    const r = document.createElement("input");
    r.type = "radio"; r.name = "poll"; r.value = c.id; r.required = true;
    l.append(r, " " + c.name);
    fs.append(l);
  });
  const btn = el("button", "btn", "Vote");
  btn.type = "submit";
  form.append(fs, btn);

  function showResults() {
    const total = Object.values(votes).reduce((a, b) => a + b, 0);
    results.replaceChildren();
    if (!total) return;
    CAREERS.forEach(c => {
      const n = votes[c.id] || 0, pct = Math.round((n / total) * 100);
      const bar = el("div", "bar"), fill = el("span", null, `${c.name}: ${n}`);
      fill.style.width = Math.max(pct, 12) + "%";
      bar.append(fill); results.append(bar);
    });
  }
  form.addEventListener("submit", e => {
    e.preventDefault();
    const pick = form.querySelector("input:checked");
    if (!pick) return;
    votes[pick.value] = (votes[pick.value] || 0) + 1;
    try { localStorage.setItem(KEY, JSON.stringify(votes)); } catch (err) { /* ignore */ }
    showResults();
  });
  showResults();
}

function mailto(subject, body) {
  return `mailto:${encodeURIComponent(CONTACT_EMAIL).replace("%40", "@")}` +
    `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setupForms() {
  const topic = document.getElementById("q-topic");
  ["General / not sure"].concat(CAREERS.map(c => c.name)).forEach(t => topic.append(el("option", null, t)));

  document.getElementById("question-form").addEventListener("submit", e => {
    e.preventDefault();
    const q = document.getElementById("q-text").value.trim();
    const status = document.getElementById("q-status");
    if (!q) { status.textContent = "Please type a question first."; return; }
    status.textContent = "Your email app should open with a draft. Press send there to ask your question.";
    window.location.href = mailto("Health Careers Explorer question: " + topic.value, q);
  });

  document.getElementById("join-btn").addEventListener("click", () => {
    window.location.href = mailto("Please add me to the opportunities list", "Hi! Please add me to the Health Careers Explorer updates list.");
  });

  document.getElementById("contact-text").textContent =
    CONTACT_EMAIL.startsWith("REPLACE") ? "(to be added before launch)" : CONTACT_EMAIL;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderTiles();
  const mods = document.getElementById("modules");
  CAREERS.forEach(c => mods.append(renderModule(c)));
  setupPoll();
  setupForms();
});
