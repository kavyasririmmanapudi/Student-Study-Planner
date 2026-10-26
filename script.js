let currentCourse = "";
let currentSubject = "";
let currentChapter = 0;

let completed = {};

const data = {
  "10th": {
    title: "10th Class",
    subtitle: "School Subjects",
    icon: "🏫",
    subjects: {
      "Mathematics": ["Real Numbers", "Polynomials", "Pair of Linear Equations", "Quadratic Equations", "Statistics"],
      "Science": ["Chemical Reactions", "Acids and Bases", "Life Processes", "Light", "Electricity"],
      "Social Studies": ["History", "Geography", "Civics", "Economics", "Democracy"],
      "English": ["Reading", "Writing", "Grammar", "Literature", "Communication"],
      "Telugu / Hindi": ["Grammar", "Poetry", "Prose", "Literature", "Writing"]
    }
  },

  "MPC": {
    title: "Intermediate - MPC",
    subtitle: "Mathematics, Physics, Chemistry",
    icon: "📖",
    subjects: {
      "Mathematics": ["Algebra", "Trigonometry", "Calculus", "Probability", "Coordinate Geometry"],
      "Physics": ["Motion", "Laws of Motion", "Work and Energy", "Waves", "Electricity"],
      "Chemistry": ["Atomic Structure", "Chemical Bonding", "Thermodynamics", "Organic Chemistry", "Equilibrium"]
    }
  },

  "BiPC": {
    title: "Intermediate - BiPC",
    subtitle: "Botany, Zoology, Physics, Chemistry",
    icon: "🌱",
    subjects: {
      "Botany": ["Cell Biology", "Plant Kingdom", "Plant Anatomy", "Photosynthesis", "Plant Reproduction"],
      "Zoology": ["Animal Kingdom", "Human Anatomy", "Digestion", "Respiration", "Genetics"],
      "Physics": ["Motion", "Work and Energy", "Thermodynamics", "Waves", "Electricity"],
      "Chemistry": ["Atomic Structure", "Chemical Bonding", "Organic Chemistry", "Equilibrium", "Chemical Reactions"]
    }
  },

  "CSE": {
    title: "B.Tech - CSE",
    subtitle: "Computer Science Engineering",
    icon: "💻",
    subjects: {
      "Data Structures": ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees"],
      "Database Management Systems": ["Database Concepts", "ER Model", "SQL", "Normalization", "Transactions"],
      "Operating Systems": ["Process Management", "CPU Scheduling", "Memory Management", "File Systems", "Deadlocks"],
      "Computer Networks": ["Network Basics", "OSI Model", "TCP/IP", "Routing", "Network Security"],
      "Object Oriented Programming": ["Classes and Objects", "Inheritance", "Polymorphism", "Abstraction", "Encapsulation"]
    }
  },

  "ECE": {
    title: "B.Tech - ECE",
    subtitle: "Electronics & Communication Engineering",
    icon: "📡",
    subjects: {
      "Digital Electronics": ["Number Systems", "Logic Gates", "Boolean Algebra", "Flip Flops", "Counters"],
      "Analog Electronics": ["Diodes", "Transistors", "Amplifiers", "Oscillators", "Filters"],
      "Signals & Systems": ["Signals", "Systems", "Fourier Series", "Laplace Transform", "Sampling"],
      "Communication Systems": ["Communication Basics", "Modulation", "Demodulation", "Transmitters", "Receivers"],
      "Microprocessors": ["8086 Architecture", "Instruction Set", "Memory", "Interrupts", "I/O"]
    }
  },

  "EEE": {
    title: "B.Tech - EEE",
    subtitle: "Electrical & Electronics Engineering",
    icon: "⚡",
    subjects: {
      "Electrical Circuits": ["Circuit Laws", "Network Theorems", "AC Circuits", "Resonance", "Two Port Networks"],
      "Power Systems": ["Generation", "Transmission", "Distribution", "Protection", "Switchgear"],
      "Electrical Machines": ["Transformers", "DC Machines", "Induction Motors", "Synchronous Machines", "Special Machines"],
      "Control Systems": ["Control Basics", "Transfer Functions", "Block Diagrams", "Stability", "Controllers"],
      "Power Electronics": ["Power Devices", "Rectifiers", "Converters", "Inverters", "Applications"]
    }
  },

  "Mechanical": {
    title: "B.Tech - Mechanical",
    subtitle: "Mechanical Engineering",
    icon: "⚙️",
    subjects: {
      "Engineering Mechanics": ["Force Systems", "Equilibrium", "Friction", "Centroid", "Dynamics"],
      "Thermodynamics": ["Basic Concepts", "First Law", "Second Law", "Entropy", "Power Cycles"],
      "Fluid Mechanics": ["Fluid Properties", "Fluid Statics", "Fluid Dynamics", "Pipe Flow", "Turbines"],
      "Manufacturing Processes": ["Casting", "Welding", "Machining", "Forming", "CNC"],
      "Machine Design": ["Design Basics", "Shafts", "Gears", "Bearings", "Fasteners"]
    }
  },

  "Civil": {
    title: "B.Tech - Civil",
    subtitle: "Civil Engineering",
    icon: "🏗️",
    subjects: {
      "Structural Engineering": ["Structures", "Beams", "Columns", "Loads", "Design"],
      "Surveying": ["Measurements", "Chain Survey", "Compass Survey", "Levelling", "Theodolite"],
      "Geotechnical Engineering": ["Soil Properties", "Soil Classification", "Compaction", "Consolidation", "Shear Strength"],
      "Transportation Engineering": ["Roads", "Traffic", "Highways", "Railways", "Pavements"],
      "Environmental Engineering": ["Water Supply", "Water Treatment", "Wastewater", "Air Pollution", "Solid Waste"]
    }
  }
};


/* PAGE CONTROL */

function hideAll() {
  document.querySelectorAll(".screen").forEach(function(page) {
    page.classList.add("hidden");
  });
}

function login() {
  const name = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !password) {
    alert("Please enter your name and password 😊");
    return;
  }

  hideAll();
  document.getElementById("welcomePage").classList.remove("hidden");
}

function showCourses() {
  hideAll();
  document.getElementById("coursePage").classList.remove("hidden");
}

function showCoursesFromWelcome() {
  showCourses();
}

function openIntermediate() {
  hideAll();
  document.getElementById("interPage").classList.remove("hidden");
}

function openBtech() {
  hideAll();
  document.getElementById("btechPage").classList.remove("hidden");
}


/* 10TH */

function open10th() {
  hideAll();
  document.getElementById("tenPage").classList.remove("hidden");

  const box = document.getElementById("tenSubjects");
  box.innerHTML = "";

  Object.keys(data["10th"].subjects).forEach(function(subject) {
    box.innerHTML +=
      '<div class="subject-card">' +
      '<div class="subject-icon">📚</div>' +
      '<h2>' + subject + '</h2>' +
      '<p>' + data["10th"].subjects[subject].length + ' Chapters</p>' +
      '<button onclick="openSubject(\'10th\',\'' + subject + '\')">' +
      'Explore Subject →' +
      '</button>' +
      '</div>';
  });
}


/* DASHBOARD */

function openDashboard(course) {
  currentCourse = course;

  hideAll();
  document.getElementById("dashboardPage").classList.remove("hidden");

  const info = data[course];

  document.getElementById("dashTitle").innerText = info.title;
  document.getElementById("dashSubtitle").innerText = info.subtitle;
  document.getElementById("dashIcon").innerText = info.icon;

  document.getElementById("courseLabel").innerText =
    Object.keys(info.subjects).length + " Subjects";

  renderDashboard();
}

function renderDashboard() {
  const box = document.getElementById("dashboardSubjects");
  box.innerHTML = "";

  const info = data[currentCourse];

  let total = 0;
  let doneTotal = 0;
  let points = 0;

  Object.keys(info.subjects).forEach(function(subject) {

    const chapters = info.subjects[subject];
    const key = currentCourse + "-" + subject;
    const done = completed[key] || [];

    total += chapters.length;
    doneTotal += done.length;
    points += done.length * 20;

    const percent = Math.round(
      done.length / chapters.length * 100
    );

    box.innerHTML +=
      '<div class="subject-row">' +

      '<div class="subject-name">📚 ' +
      subject +
      '</div>' +

      '<div>' +
      done.length +
      ' / ' +
      chapters.length +
      '</div>' +

      '<div>' +
      '<b>' + percent + '%</b>' +
      '<div class="subject-progress">' +
      '<div style="width:' + percent + '%"></div>' +
      '</div>' +
      '</div>' +

      '<div>' +
      '<button onclick="openSubject(\'' +
      currentCourse +
      '\',\'' +
      subject +
      '\')">OPEN</button>' +
      '</div>' +

      '</div>';
  });

  const percent = total === 0
    ? 0
    : Math.round(doneTotal / total * 100);

  document.getElementById("circlePercent").innerText =
    percent + "%";

  document.getElementById("overallPercent").innerText =
    percent + "%";

  document.getElementById("progressLine").style.width =
    percent + "%";

  document.getElementById("chapterCount").innerText =
    doneTotal + " / " + total + " Chapters Completed";

  document.getElementById("totalPoints").innerText =
    points;

  if (percent === 0) {
    document.getElementById("progressMessage").innerText =
      "Start studying today!";
  } else if (percent < 50) {
    document.getElementById("progressMessage").innerText =
      "Keep going! You are making progress.";
  } else if (percent < 100) {
    document.getElementById("progressMessage").innerText =
      "Awesome! You are doing great.";
  } else {
    document.getElementById("progressMessage").innerText =
      "Amazing! Course completed! 🏆";
  }

  updateCircle(percent);
}


/* CIRCLE */

function updateCircle(percent) {
  const degree = percent * 3.6;

  document.querySelectorAll(".circle").forEach(function(circle) {
    circle.style.background =
      "conic-gradient(#20a84c " +
      degree +
      "deg, #e1e8e4 " +
      degree +
      "deg)";
  });
}


/* SUBJECT */

function openSubject(course, subject) {
  currentCourse = course;
  currentSubject = subject;

  hideAll();
  document.getElementById("detailPage").classList.remove("hidden");

  document.getElementById("detailTitle").innerText =
    subject;

  renderChapters();
}


/* CHAPTERS */

function renderChapters() {
  const list = document.getElementById("chapterList");
  list.innerHTML = "";

  const chapters =
    data[currentCourse].subjects[currentSubject];

  const key =
    currentCourse + "-" + currentSubject;

  const done =
    completed[key] || [];

  chapters.forEach(function(chapter, index) {

    const isDone =
      done.includes(index);

    list.innerHTML +=
      '<div class="chapter-item ' +
      (isDone ? "completed" : "") +
      '">' +

      '<span>📖 Chapter ' +
      (index + 1) +
      ': ' +
      chapter +
      '</span>' +

      '<button onclick="openStudyPage(' +
      index +
      ')">' +
      (isDone ? "VIEW 📖" : "STUDY →") +
      '</button>' +

      '</div>';
  });

  updateSubjectProgress();
}


/* STUDY PAGE */

function openStudyPage(index) {
  currentChapter = index;

  hideAll();
  document.getElementById("studyPage").classList.remove("hidden");

  const chapter =
    data[currentCourse].subjects[currentSubject][index];

  document.getElementById("studyTitle").innerText =
    "Chapter " +
    (index + 1) +
    ": " +
    chapter;

  showStudyMatter(chapter);
}


/* STUDY MATTER */

function showStudyMatter(chapter) {

  const content =
    document.getElementById("studyContent");

  content.innerHTML =
    '<h2>📖 ' + chapter + '</h2>' +

    '<p>' +
    'This chapter introduces the important concepts ' +
    'related to <b>' + chapter + '</b>.' +
    '</p>' +

    '<h2>💡 Important Concepts</h2>' +

    '<ul>' +
    '<li>Understand the basic definitions.</li>' +
    '<li>Learn the important concepts.</li>' +
    '<li>Study important examples.</li>' +
    '<li>Practice related questions.</li>' +
    '<li>Revise the chapter regularly.</li>' +
    '</ul>' +

    '<h2>📝 Study Matter</h2>' +

    '<p>' +
    'Read this chapter carefully and make short notes. ' +
    'Try to understand the concepts instead of only ' +
    'memorizing them. Practice examples and questions ' +
    'related to the topic.' +
    '</p>' +

    '<h2>⭐ Key Points</h2>' +

    '<p>' +
    'The main purpose of this chapter is to understand ' +
    'the basic ideas and apply them while solving questions.' +
    '</p>' +

    '<h2>✏️ Example</h2>' +

    '<p>' +
    'Practice simple examples related to <b>' +
    chapter +
    '</b> and revise the important concepts.' +
    '</p>';

  updateCompleteButton();
}


/* COMPLETE CHAPTER */

function completeCurrentChapter() {

  const key =
    currentCourse + "-" + currentSubject;

  if (!completed[key]) {
    completed[key] = [];
  }

  if (!completed[key].includes(currentChapter)) {
    completed[key].push(currentChapter);
  }

  updateCompleteButton();
}


function updateCompleteButton() {

  const key =
    currentCourse + "-" + currentSubject;

  const done =
    completed[key] || [];

  const button =
    document.getElementById("studyCompleteBtn");

  if (!button) {
    return;
  }

  if (done.includes(currentChapter)) {
    button.innerText = "COMPLETED ✓";
    button.disabled = true;
  } else {
    button.innerText = "COMPLETE +20 ⭐";
    button.disabled = false;
  }
}


/* SUBJECT PROGRESS */

function updateSubjectProgress() {

  const chapters =
    data[currentCourse].subjects[currentSubject];

  const key =
    currentCourse + "-" + currentSubject;

  const done =
    completed[key] || [];

  const percent =
    Math.round(done.length / chapters.length * 100);

  document.getElementById("detailProgress")
    .style.width = percent + "%";

  document.getElementById("detailPercent")
    .innerText = percent + "% Completed";

  document.getElementById("detailPoints")
    .innerText = done.length * 20 + " Points ⭐";
}


/* BACK */

function backToDashboard() {
  openDashboard(currentCourse);
}

function backToChapters() {
  hideAll();

  document.getElementById("detailPage")
    .classList.remove("hidden");

  renderChapters();
}