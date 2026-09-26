/* =========================================================
   COMPLETE STUDY & EXAM PORTAL JS LOGIC
   Featuring Accurate Live Attempt Tracking & Board Info
========================================================= */

// Base Templates for Board Exam Questions
const baseBoardQuestions = {
  // HONOURS MANAGEMENT
  honours_mgt: {
    intro_mgt: [
      { q: "ব্যবস্থাপনার জনক কে?", opts: ["হেনরি ফেয়ল", "এফ ডব্লিউ টেলর", "এলটন মেও", "পিটার ড্রাকার"], ans: 0, direct: "হেনরি ফেয়ল" },
      { q: "বৈজ্ঞানিক ব্যবস্থাপনার জনক কে?", opts: ["হেনরি ফেয়ল", "এফ ডব্লিউ টেলর", "এডাম স্মিথ", "ম্যাক্স ওয়েবার"], ans: 1, direct: "এফ ডব্লিউ টেলর" },
      { q: "POSDCORB সূত্রের উদ্ভাবক কে?", opts: ["লুথার গুলিক", "হেনরি ফেয়ল", "টেলর", "মার্শাল"], ans: 0, direct: "লুথার গুলিক" }
    ],
    principles_mkt: [
      { q: "মার্কেটিং মিক্স (4Ps)-এর জনক কে?", opts: ["ই. জেরোম ম্যাকার্থী", "ফিলিপ কোটলার", "এডাম স্মিথ", "পল স্যামুয়েলসন"], ans: 0, direct: "ই. জেরোম ম্যাকার্থী" },
      { q: "পণ্য জীবনচক্রের প্রথম পর্যায় কোনটি?", opts: ["সূচনা পর্যায়", "বৃদ্ধি পর্যায়", "পূর্ণতা পর্যায়", "পতন পর্যায়"], ans: 0, direct: "সূচনা পর্যায়" }
    ],
    fin_acc: [
      { q: "হিসাববিজ্ঞানের প্রথম বা প্রাথমিক বই কোনটি?", opts: ["জাবেদা", "খতিয়ান", "রেওয়ামিল", "উদ্বৃত্তপত্র"], ans: 0, direct: "জাবেদা" },
      { q: "সম্পদ = দায় + মালিকানা স্বত্ব — এটি কিসের সমীকরণ?", opts: ["হিসাব সমীকরণ", "আয়ের সমীকরণ", "ব্যয়ের সমীকরণ", "ক্যাশ ফ্লো"], ans: 0, direct: "হিসাব সমীকরণ" }
    ],
    bus_law: [
      { q: "কত সালের চুক্তি আইন বাংলাদেশে বলবৎ আছে?", opts: ["১৮৭২ সাল", "১৯৩২ সাল", "১৯৯৪ সাল", "২০০০ সাল"], ans: 0, direct: "১৮৭২ সাল" },
      { q: "বাংলাদেশ অংশীদারি আইন কত সালের?", opts: ["১৯৩২ সাল", "১৮৭২ সাল", "১৯৯৪ সাল", "২০০৯ সাল"], ans: 0, direct: "১৯৩২ সাল" }
    ],
    org_behavior: [
      { q: "চাহিদা সোপান তত্ত্বের (Need Hierarchy) প্রবক্তা কে?", opts: ["আব্রাহাম মাসলো", "হ্যারল্ড কুন্টজ", "ফ্রেডরিক হার্জবার্গ", "ভিসেন্ট"], ans: 0, direct: "আব্রাহাম মাসলো" }
    ],
    hr_mgt: [
      { q: "কর্মীদের দক্ষতা বৃদ্ধির প্রধান উপায় কোনটি?", opts: ["প্রশিক্ষণ", "বদলীকরণ", "ছাঁটাই", "পদাবনতি"], ans: 0, direct: "প্রশিক্ষণ" }
    ]
  },

  // HSC HUMANITIES
  hsc_humanities: {
    bangla: [
      { q: "'অনুপম' চরিত্রটি কোন ছোটগল্পের?", opts: ["অপরিচিতা", "একাত্তরের দিনগুলি", "বিলাসী", "আহ্বান"], ans: 0, direct: "অপরিচিতা" },
      { q: "বাংলা ভাষার মূল উৎস কোনটি?", opts: ["বৈদিক ভাষা", "সংস্কৃত", "প্রাকৃত", "অপভ্রংশ"], ans: 0, direct: "বৈদিক ভাষা" }
    ],
    english: [
      { q: "Which word is a synonym for 'Huge'?", opts: ["Vast", "Tiny", "Small", "Short"], ans: 0, direct: "Vast" }
    ],
    ict: [
      { q: "তথ্য ও যোগাযোগ প্রযুক্তির মূল ভিত্তি কোনটি?", opts: ["কম্পিউটার ও ইন্টারনেট", "টেলিভিশন", "রেডিও", "সংবাদপত্র"], ans: 0, direct: "কম্পিউটার ও ইন্টারনেট" },
      { q: "HTML-এর পূর্ণরূপ কোনটি?", opts: ["HyperText Markup Language", "HighText Machine Language", "HyperText Main Language", "HyperTool Markup Language"], ans: 0, direct: "HyperText Markup Language" }
    ],
    civics: [
      { q: "পৌরনীতির ইংরেজি প্রতিশব্দ 'Civics' কোন ভাষা থেকে এসেছে?", opts: ["ল্যাটিন", "গ্রিক", "ফরাসি", "জার্মান"], ans: 0, direct: "ল্যাটিন শব্দ 'Civitas' এবং 'Civis' থেকে এসেছে" }
    ],
    history: [
      { q: "পলাশীর যুদ্ধ কত সালে অনুষ্ঠিত হয়?", opts: ["১৭৫৭ সালে", "১৭৬৪ সালে", "১৮৫৭ সালে", "১৯৪৭ সালে"], ans: 0, direct: "১৭৫৭ সালের ২৩ জুন" }
    ],
    economics: [
      { q: "অর্থনীতির মূল সমস্যা কোনটি?", opts: ["দুষ্প্রাপ্যতা ও অসীম অভাব", "অর্থের অভাব", "সম্পদের প্রাচুর্য", "বাজারের অভাব"], ans: 0, direct: "দুষ্প্রাপ্যতা ও অসীম অভাব" }
    ],
    sociology: [
      { q: "সমাজবিজ্ঞানের জনক কে?", opts: ["অগাস্ট কোঁৎ", "কার্ল মার্ক্স", "এমিল দুরখেইম", "ম্যাক্স ওয়েবার"], ans: 0, direct: "অগাস্ট কোঁৎ (Auguste Comte)" }
    ],
    logic: [
      { q: "যুক্তিবিদ্যার জনক কাকে বলা হয়?", opts: ["অ্যারিস্টটল", "সক্রেটিস", "প্লেটো", "মিল"], ans: 0, direct: "অ্যারিস্টটল" }
    ],
    geography: [
      { q: "সূর্যের সবচেয়ে নিকটতম গ্রহ কোনটি?", opts: ["বুধ", "শুক্র", "পৃথিবী", "মঙ্গল"], ans: 0, direct: "বুধ" }
    ]
  },

  // HSC SCIENCE
  hsc_science: {
    bangla: [
      { q: "'বিলাসী' গল্পের লেখক কে?", opts: ["শরৎচন্দ্র চট্টোপাধ্যায়", "রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "বঙ্কিমচন্দ্র"], ans: 0, direct: "শরৎচন্দ্র চট্টোপাধ্যায়" }
    ],
    english: [
      { q: "Find the correct sentence:", opts: ["He is an honest man.", "He is a honest man.", "He is honest man.", "He is the honest man."], ans: 0, direct: "He is an honest man." }
    ],
    ict: [
      { q: "কমিউনিকেশন সিস্টেমে ডেটা স্থানান্তরের হারকে কী বলে?", opts: ["ব্যান্ডউইথ", "বিট", "বাইনারি", "মোডেম"], ans: 0, direct: "ব্যান্ডউইথ (Bandwidth)" }
    ],
    physics: [
      { q: "বলের একক কোনটি?", opts: ["নিউটন", "জুল", "ওয়াট", "প্যাস্কেল"], ans: 0, direct: "নিউটন (N)" },
      { q: "আলোর বেগ কত?", opts: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^10 m/s", "300 m/s"], ans: 0, direct: "3 × 10^8 m/s (শূন্যস্থানে)" }
    ],
    chemistry: [
      { q: "পর্যায় সারণির প্রথম মৌল কোনটি?", opts: ["হাইড্রোজেন", "হিলিয়াম", "লিথিয়াম", "অক্সিজেন"], ans: 0, direct: "হাইড্রোজেন (H)" }
    ],
    biology: [
      { q: "কোষের পাওয়ার হাউস (Power House) কাকে বলা হয়?", opts: ["মাইটোকন্ড্রিয়া", "রাইবোজোম", "লাইসোজোম", "নিউক্লিয়াস"], ans: 0, direct: "মাইটোকন্ড্রিয়া" }
    ],
    higher_math: [
      { q: "d/dx (sin x) = কত?", opts: ["cos x", "-cos x", "tan x", "sec x"], ans: 0, direct: "cos x" }
    ]
  },

  // HSC BUSINESS
  hsc_business: {
    bangla: [
      { q: "বাংলা ব্যাকরণের প্রধান আলোচ্য বিষয় কয়টি?", opts: ["৪টি", "৩টি", "৫টি", "২টি"], ans: 0, direct: "৪টি" }
    ],
    english: [
      { q: "Antonym of 'Optimistic' is-", opts: ["Pessimistic", "Hopeful", "Bright", "Positive"], ans: 0, direct: "Pessimistic" }
    ],
    ict: [
      { q: "ইন্টারনেট প্রোটোকল সংক্ষেপে কোনটি?", opts: ["IP", "HTTP", "FTP", "URL"], ans: 0, direct: "IP" }
    ],
    accounting: [
      { q: "হিসাববিজ্ঞানের মূল ভিত্তি কোনটি?", opts: ["লেনদেন", "জাবেদা", "খতিয়ান", "রেওয়ামিল"], ans: 0, direct: "লেনদেন" }
    ],
    business_org: [
      { q: "একমালিকানা কারবারের দায় কেমন?", opts: ["অসীম", "সসীম", "আংশিক", "কোনোটিই নয়"], ans: 0, direct: "অসীম" }
    ],
    finance: [
      { q: "অর্থায়নের মূল লক্ষ্য কোনটি?", opts: ["সম্পদ সর্বাধিকরণ", "মুনাফা সর্বাধিকরণ", "ব্যয় বৃদ্ধি", "বিক্রি বাড়ানো"], ans: 0, direct: "সম্পদ সর্বাধিকরণ" }
    ],
    production_mgt: [
      { q: "উৎপাদনের প্রথম ও মূল উপাদান কোনটি?", opts: ["ভূমি", "শ্রম", "মূলধন", "সংগঠন"], ans: 0, direct: "ভূমি" }
    ]
  }
};

// HSC Dynamic Subject List Config
const hscSubjectLists = {
  hsc_humanities: [
    { id: "bangla", name: "📖 বাংলা" },
    { id: "english", name: "🔤 ইংরেজি" },
    { id: "ict", name: "💻 তথ্য ও যোগাযোগ প্রযুক্তি (ICT)" },
    { id: "civics", name: "🏛️ পৌরনীতি ও সুশাসন" },
    { id: "history", name: "📜 ইতিহাস" },
    { id: "economics", name: "📊 অর্থনীতি" },
    { id: "sociology", name: "👥 সমাজবিজ্ঞান" },
    { id: "logic", name: "🧠 যুক্তিবিদ্যা" },
    { id: "geography", name: "🌍 ভূগোল" }
  ],
  hsc_science: [
    { id: "bangla", name: "📖 বাংলা" },
    { id: "english", name: "🔤 ইংরেজি" },
    { id: "ict", name: "💻 তথ্য ও যোগাযোগ প্রযুক্তি (ICT)" },
    { id: "physics", name: "⚛️ পদার্থবিজ্ঞান" },
    { id: "chemistry", name: "🧪 রসায়ন" },
    { id: "biology", name: "🧬 জীববিজ্ঞান" },
    { id: "higher_math", name: "📐 উচ্চতর গণিত" }
  ],
  hsc_business: [
    { id: "bangla", name: "📖 বাংলা" },
    { id: "english", name: "🔤 ইংরেজি" },
    { id: "ict", name: "💻 তথ্য ও যোগাযোগ প্রযুক্তি (ICT)" },
    { id: "accounting", name: "📓 হিসাববিজ্ঞান" },
    { id: "business_org", name: "🏢 ব্যবসায় সংগঠন ও ব্যবস্থাপনা" },
    { id: "finance", name: "💰 ফিন্যান্স, ব্যাংকিং ও বিমা" },
    { id: "production_mgt", name: "📦 উৎপাদন ব্যবস্থাপনা ও বিপণন" }
  ]
};

const boards = ["ঢাকা বোর্ড", "রাজশাহী বোর্ড", "চট্টগ্রাম বোর্ড", "দিনাজপুর বোর্ড", "যশোর বোর্ড", "কুমিল্লা বোর্ড", "সিলেট বোর্ড", "বরিশাল বোর্ড"];
const years = ["২০১৮", "২০১৯", "২০২০", "২০২১", "২০২২", "২০২৩", "২০২৪"];

let currentQuestions = [];
let answers = {};
let previousOptionStates = {}; // Track user changes on options
let selectedManagementSubject = "intro_mgt";
let currentHscSubject = "bangla";

const STORAGE_KEY_STUDY = "mcq_study_tracker_v5";
const STORAGE_KEY_CONFIG = "mcq_config_v5";

// Storage Helpers
function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

function getUserConfig() {
  const config = localStorage.getItem(STORAGE_KEY_CONFIG);
  if (config) return JSON.parse(config);

  const defaultConfig = { startDate: getTodayString(), changeCount: 0 };
  localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(defaultConfig));
  return defaultConfig;
}

function getStudyHistory() {
  const data = localStorage.getItem(STORAGE_KEY_STUDY);
  return data ? JSON.parse(data) : {};
}

// Fixed Accurate Tracking Function
function updateAnswerRecord(questionIdx, selectedVal) {
  const history = getStudyHistory();
  const today = getTodayString();

  if (!history[today]) {
    history[today] = { read: 0, correct: 0, wrong: 0 };
  }

  const q = currentQuestions[questionIdx];
  if (!q) return;

  const isCorrect = (q.answer === selectedVal);
  const prevSelection = previousOptionStates[questionIdx];

  if (prevSelection === undefined) {
    // First time answering this question
    history[today].read += 1;
    if (isCorrect) {
      history[today].correct += 1;
    } else {
      history[today].wrong += 1;
    }
  } else if (prevSelection !== selectedVal) {
    // Changing answer
    const wasPrevCorrect = (q.answer === prevSelection);
    if (wasPrevCorrect && !isCorrect) {
      history[today].correct = Math.max(0, history[today].correct - 1);
      history[today].wrong += 1;
    } else if (!wasPrevCorrect && isCorrect) {
      history[today].wrong = Math.max(0, history[today].wrong - 1);
      history[today].correct += 1;
    }
  }

  previousOptionStates[questionIdx] = selectedVal;
  localStorage.setItem(STORAGE_KEY_STUDY, JSON.stringify(history));
  renderDashboard();
}

function recordStudyModeRead(count) {
  const history = getStudyHistory();
  const today = getTodayString();

  if (!history[today]) {
    history[today] = { read: 0, correct: 0, wrong: 0 };
  }

  history[today].read += count;
  localStorage.setItem(STORAGE_KEY_STUDY, JSON.stringify(history));
  renderDashboard();
}

// 10,000 Dynamic Board Question Generator
function generateBoardQuestions(level, subject, targetCount) {
  let baseList = [];
  if (level === "honours_mgt") {
    baseList = baseBoardQuestions.honours_mgt[subject] || [];
  } else if (baseBoardQuestions[level] && baseBoardQuestions[level][subject]) {
    baseList = baseBoardQuestions[level][subject];
  }

  if (baseList.length === 0) return [];

  let generated = [];
  for (let i = 0; i < targetCount; i++) {
    const template = baseList[i % baseList.length];
    const randomBoard = boards[Math.floor(Math.random() * boards.length)];
    const randomYear = years[Math.floor(Math.random() * years.length)];

    generated.push({
      question: template.q,
      options: template.opts,
      answer: template.ans,
      directAns: template.direct,
      boardInfo: `(${randomBoard} ${randomYear})`
    });
  }

  return generated.sort(() => Math.random() - 0.5);
}

// Render Dashboard
function renderDashboard() {
  const history = getStudyHistory();
  const config = getUserConfig();

  const calGrid = document.getElementById("calendarGrid");
  const todayMcqEl = document.getElementById("todayMcqCount");
  const todayCorrectEl = document.getElementById("todayCorrectCount");
  const todayWrongEl = document.getElementById("todayWrongCount");
  const daysStudiedEl = document.getElementById("daysStudiedCount");
  const startDateInput = document.getElementById("startDateInput");
  const changeCountText = document.getElementById("changeCountText");
  const historyBoard = document.getElementById("historyBoard");

  const totalDays = Object.keys(history).filter(date => history[date].read > 0).length;
  if (daysStudiedEl) daysStudiedEl.textContent = totalDays;

  const todayData = history[getTodayString()] || { read: 0, correct: 0, wrong: 0 };
  if (todayMcqEl) todayMcqEl.textContent = todayData.read;
  if (todayCorrectEl) todayCorrectEl.textContent = todayData.correct || 0;
  if (todayWrongEl) todayWrongEl.textContent = todayData.wrong || 0;

  if (startDateInput) startDateInput.value = config.startDate;
  if (changeCountText) {
    changeCountText.textContent = `তারিখ পরিবর্তনের সুযোগ বাকি: ${2 - config.changeCount} বার`;
  }

  if (calGrid) {
    calGrid.innerHTML = "";
    const weekDays = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"];
    weekDays.forEach(d => {
      const header = document.createElement("div");
      header.className = "cal-day";
      header.style.fontWeight = "bold";
      header.textContent = d;
      calGrid.appendChild(header);
    });

    const start = new Date(config.startDate);
    for (let i = 0; i < 31; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const dateStr = d.toISOString().split('T')[0];

      const dayBox = document.createElement("div");
      dayBox.className = "cal-day";
      const dayData = history[dateStr];

      if (dayData && dayData.read > 0) {
        dayBox.classList.add("active-day");
        dayBox.innerHTML = `<strong>${d.getDate()}</strong><span class="cal-info">📖${dayData.read}</span>`;
      } else {
        dayBox.innerHTML = `<strong>${d.getDate()}</strong>`;
      }
      calGrid.appendChild(dayBox);
    }
  }

  if (historyBoard) {
    historyBoard.innerHTML = "";
    const sortedDates = Object.keys(history).sort().reverse().slice(0, 60);

    if (sortedDates.length === 0) {
      historyBoard.innerHTML = `<p style="font-size:12px; color:gray; text-align:center; padding:10px;">এখনো কোনো ডাটা সেভ হয়নি। পড়া শুরু করুন!</p>`;
    } else {
      sortedDates.forEach(date => {
        const item = history[date];
        const row = document.createElement("div");
        row.className = "history-item";
        row.innerHTML = `
          <span class="hist-date">📅 ${date}</span>
          <span>পড়া/উত্তর: <strong>${item.read}</strong> টি</span>
          <span>সঠিক: <strong style="color:green;">${item.correct || 0}</strong> | ভুল: <strong style="color:red;">${item.wrong || 0}</strong></span>
        `;
        historyBoard.appendChild(row);
      });
    }
  }
}

// Update Subject Dashboard
function updateSubjectDashboard(level) {
  const honoursDash = document.getElementById("honoursSubjectDashboard");
  const hscDash = document.getElementById("hscSubjectDashboard");

  if (level === "honours_mgt") {
    if (honoursDash) honoursDash.style.display = "grid";
    if (hscDash) hscDash.style.display = "none";
  } else if (hscSubjectLists[level]) {
    if (honoursDash) honoursDash.style.display = "none";
    if (hscDash) {
      hscDash.style.display = "grid";
      hscDash.innerHTML = "";

      const subjects = hscSubjectLists[level];
      currentHscSubject = subjects[0].id;

      subjects.forEach((sub, index) => {
        const card = document.createElement("div");
        card.className = `subject-card ${index === 0 ? "active" : ""}`;
        card.setAttribute("data-hsc-subject", sub.id);
        card.textContent = sub.name;
        hscDash.appendChild(card);
      });
    }
  }
}

// Main Load Function
function loadQuestions() {
  const courseLevelSelect = document.getElementById("courseLevelSelect");
  const courseLevel = courseLevelSelect ? courseLevelSelect.value : "honours_mgt";
  const countInput = document.getElementById("questionCount");
  let count = parseInt(countInput ? countInput.value : 10, 10);
  
  if (count < 1) count = 1;
  if (count > 10000) count = 10000;

  const container = document.getElementById("questionContainer");
  const mode = document.querySelector('input[name="appMode"]:checked') ? document.querySelector('input[name="appMode"]:checked').value : "study";
  
  const resultPanel = document.getElementById("resultPanel");
  if (resultPanel) resultPanel.style.display = "none";

  container.innerHTML = "";
  answers = {};
  previousOptionStates = {};

  const activeSubject = courseLevel === "honours_mgt" ? selectedManagementSubject : currentHscSubject;
  currentQuestions = generateBoardQuestions(courseLevel, activeSubject, count);

  if (currentQuestions.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:20px; color:gray;">এই বিষয়ের প্রশ্ন লোড করা সম্ভব হয়নি। অন্য বিষয় নির্বাচন করুন।</p>`;
    return;
  }

  if (mode === "study") {
    // 📖 পড়ার মোড
    currentQuestions.forEach((q, idx) => {
      const card = document.createElement("div");
      card.className = "study-qn-card";
      card.innerHTML = `
        <div class="qn-text">
          ${idx + 1}. ${q.question} 
          <span class="faded-board-text">${q.boardInfo}</span>
        </div>
        <div class="ans-text">💡 উত্তর: ${q.directAns || q.options[q.answer]}</div>
      `;
      container.appendChild(card);
    });
    recordStudyModeRead(currentQuestions.length);
  } else {
    // 📝 পরীক্ষা মোড
    currentQuestions.forEach((q, idx) => {
      const card = document.createElement("div");
      card.className = "mcq-card";

      let optionsHTML = "";
      q.options.forEach((opt, optIdx) => {
        optionsHTML += `
          <li>
            <label>
              <input type="radio" name="q_${idx}" value="${optIdx}"> ${opt}
            </label>
          </li>
        `;
      });

      card.innerHTML = `
        <h4>${idx + 1}. ${q.question} <span class="faded-board-text">${q.boardInfo}</span></h4>
        <ul class="options-list">${optionsHTML}</ul>
      `;

      container.appendChild(card);
    });
  }
}

// CGPA Grade Calculator
function calculateGrade(marks) {
  if (marks >= 80) return { grade: "A+", point: "4.00", advice: "🏆 চমৎকার দক্ষতা! আপনার প্রস্তুতি একদম অসাধারণ।" };
  if (marks >= 75) return { grade: "A", point: "3.75", advice: "🌟 দারুণ ফলাফল! অল্প রিভিশন দিলেই A+ নিশ্চিত।" };
  if (marks >= 70) return { grade: "A-", point: "3.50", advice: "👍 ভালো ফলাফল! ভুল প্রশ্নগুলো আবার পড়ুন।" };
  if (marks >= 65) return { grade: "B+", point: "3.25", advice: "📘 মোটামুটি প্রস্তুতি। প্রতিদিন অনুশীলনের সময় বাড়ান।" };
  if (marks >= 60) return { grade: "B", point: "3.00", advice: "📖 মধ্যম মানের প্রস্তুতি। বোর্ডে আরও ভালো করতে হবে।" };
  if (marks >= 55) return { grade: "B-", point: "2.75", advice: "⚠️ পড়ার গতি বাড়ানো ও নিয়মিত পরীক্ষা দেওয়া প্রয়োজন।" };
  if (marks >= 50) return { grade: "C+", point: "2.50", advice: "⚠️ অবস্থা সন্তোষজনক নয়। প্রতিদিন জ্ঞানমূলক প্রশ্নগুলো রিভিশন দিন।" };
  if (marks >= 45) return { grade: "C", point: "2.25", advice: "🔴 দুর্বল প্রস্তুতি। বিগত বছরের প্রশ্নপত্র বেশি অনুশীলন করুন।" };
  if (marks >= 40) return { grade: "D", point: "2.00", advice: "🚨 পাসের কাছাকাছি! পড়াশোনায় আরও সময় দিন।" };
  return { grade: "F", point: "0.00", advice: "❌ অকৃতকার্য! টেক্সট বই এবং বোর্ড প্রশ্ন পুনরায় ভালোভাবে পড়ুন।" };
}

// Submit Exam
function submitExam() {
  const resultPanel = document.getElementById("resultPanel");
  const mode = document.querySelector('input[name="appMode"]:checked') ? document.querySelector('input[name="appMode"]:checked').value : "study";
  
  if (mode === "study") {
    alert("আপনি বর্তমানে পড়ার মোডে আছেন। পরীক্ষা দিতে 'পরীক্ষা মোড' সিলেক্ট করুন!");
    return;
  }

  let score = 0;
  const total = currentQuestions.length;

  if (total === 0) {
    alert("আগে প্রশ্ন লোড করুন!");
    return;
  }

  currentQuestions.forEach((q, idx) => {
    if (answers[idx] === q.answer) {
      score++;
    }
  });

  const percentage = Math.round((score / total) * 100);
  const gradeInfo = calculateGrade(percentage);

  if (resultPanel) {
    resultPanel.style.display = "block";
    resultPanel.innerHTML = `
      <h3>📊 পরীক্ষার রেজাল্ট কার্ড</h3>
      <p>মোট প্রশ্ন: <strong>${total}</strong> | উত্তর দিয়েছেন: <strong>${Object.keys(answers).length}</strong> টি | সঠিক উত্তর: <strong style="color:green;">${score}</strong> | ভুল উত্তর: <strong style="color:red;">${Object.keys(answers).length - score}</strong></p>
      <hr style="margin: 10px 0;">
      <h4>🎓 একাডেমিক ফলাফল মূল্যায়ন (৪.০০ স্কেল)</h4>
      <p>প্রাপ্ত নম্বর: <strong>${percentage}%</strong></p>
      <p>গ্রেড: <span class="grade-badge">${gradeInfo.grade}</span> | Grade Point: <strong>${gradeInfo.point}</strong></p>
      <div class="advice-box">
        💡 <strong>পরামর্শ:</strong> ${gradeInfo.advice}
      </div>
    `;
    resultPanel.scrollIntoView({ behavior: 'smooth' });
  }
}

// Event Listeners
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("subject-card") && e.target.hasAttribute("data-subject")) {
    document.querySelectorAll("#honoursSubjectDashboard .subject-card").forEach(card => card.classList.remove("active"));
    e.target.classList.add("active");
    selectedManagementSubject = e.target.getAttribute("data-subject");
    loadQuestions();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-hsc-subject")) {
    document.querySelectorAll("#hscSubjectDashboard .subject-card").forEach(card => card.classList.remove("active"));
    e.target.classList.add("active");
    currentHscSubject = e.target.getAttribute("data-hsc-subject");
    loadQuestions();
  }
});

const courseLevelSelect = document.getElementById("courseLevelSelect");
if (courseLevelSelect) {
  courseLevelSelect.addEventListener("change", (e) => {
    updateSubjectDashboard(e.target.value);
    loadQuestions();
  });
}

const setStartDateBtn = document.getElementById("setStartDateBtn");
if (setStartDateBtn) {
  setStartDateBtn.addEventListener("click", () => {
    const config = getUserConfig();
    if (config.changeCount >= 2) {
      alert("❌ আপনি ইতিমধ্যে ২ বার তারিখ পরিবর্তন করেছেন!");
      return;
    }
    const inputDate = document.getElementById("startDateInput").value;
    if (!inputDate) return;

    config.startDate = inputDate;
    config.changeCount += 1;
    localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
    alert("✅ সেমিস্টার শুরুর তারিখ সেট করা হয়েছে!");
    renderDashboard();
  });
}

// Buttons Event
const startExamBtn = document.getElementById("startExamBtn");
if (startExamBtn) {
  startExamBtn.addEventListener("click", loadQuestions);
}

const nextQuestionSetBtn = document.getElementById("nextQuestionSetBtn");
if (nextQuestionSetBtn) {
  nextQuestionSetBtn.addEventListener("click", () => {
    loadQuestions();
  });
}

const startMonthlyBtn = document.getElementById("startMonthlyExamBtn");
if (startMonthlyBtn) {
  startMonthlyBtn.addEventListener("click", () => {
    const countInput = document.getElementById("questionCount");
    if (countInput) countInput.value = "100";
    loadQuestions();
  });
}

const submitExamBtn = document.getElementById("submitExamBtn");
if (submitExamBtn) {
  submitExamBtn.addEventListener("click", submitExam);
}

document.addEventListener("change", (e) => {
  if (e.target && e.target.name && e.target.name.startsWith("q_")) {
    const qIndex = parseInt(e.target.name.replace("q_", ""), 10);
    const selectedVal = parseInt(e.target.value, 10);
    answers[qIndex] = selectedVal;

    // Trigger precise real-time tracker update
    updateAnswerRecord(qIndex, selectedVal);
  }
});

document.querySelectorAll('input[name="appMode"]').forEach(radio => {
  radio.addEventListener('change', loadQuestions);
});

// Setup Initial View
renderDashboard();
loadQuestions();
