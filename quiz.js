<<<<<<< HEAD
// ====== Elements ======
const startScreen = document.querySelector(".start-screen");
const startButton = document.getElementById("start-button");
const displayContainer = document.getElementById("display-container");
const container = document.getElementById("container");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.querySelector(".score-container");
const userScore = document.getElementById("user-score");
const restartBtn = document.getElementById("restart");
const timeLeft = document.querySelector(".time-left");
const questionCount = document.querySelector(".number-of-question");

let questionIndex = 0;
let score = 0;
let timer;
let time = 10;

// ====== Questions ======
const quizArray = [
  {
    question: "HTML ka full form kya hai?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "Home Tool Markup Language"
    ],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "CSS ka use kis liye hota hai?",
    options: ["Structure", "Styling", "Database", "Logic"],
    correct: "Styling"
  },
  {
    question: "JavaScript kis type ki language hai?",
    options: ["Markup", "Styling", "Programming", "Query"],
    correct: "Programming"
  },
  {
    question: "HTML me sabse bada heading tag kaunsa hai?",
    options: ["<h6>", "<h4>", "<h1>", "<h3>"],
    correct: "<h1>"
  },
  {
    question: "CSS me color property ka use kis liye hota hai?",
    options: ["Text color", "Background", "Border", "Margin"],
    correct: "Text color"
  },
  {
    question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
    options: ["var", "int", "string", "define"],
    correct: "var"
  },
  {
    question: "HTML file ka extension kya hota hai?",
    options: [".css", ".js", ".html", ".php"],
    correct: ".html"
  },
  {
    question: "CSS me external file ko kaise link karte hain?",
    options: [
      "<style>",
      "<script>",
      "<link>",
      "<css>"
    ],
    correct: "<link>"
  },
  {
    question: "JavaScript me function ka keyword kya hai?",
    options: ["method", "function", "func", "define"],
    correct: "function"
  },
  {
    question: "HTML me list banane ke liye kaunsa tag use hota hai?",
    options: ["<li>", "<ul>", "<list>", "<ol>"],
    correct: "<ul>"
  },
  {
    question: "CSS ka full form kya hai?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheet",
      "Colorful Style Sheet"
    ],
    correct: "Cascading Style Sheets"
  },
  {
    question: "JavaScript ka file extension kya hota hai?",
    options: [".java", ".script", ".js", ".jsx"],
    correct: ".js"
  },
  {
    question: "HTML me image dikhane ke liye kaunsa tag hai?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    correct: "<img>"
  },
  {
    question: "CSS me flexbox ka use kis liye hota hai?",
    options: [
      "Layout banane ke liye",
      "Animation ke liye",
      "Color ke liye",
      "Font ke liye"
    ],
    correct: "Layout banane ke liye"
  },
  {
    question: "JavaScript browser me kaise run hoti hai?",
    options: [
      "Server par",
      "Compiler se",
      "Browser ke engine me",
      "Database me"
    ],
    correct: "Browser ke engine me"
  }
];

// ====== Start Quiz ======
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  questionIndex = 0;
  score = 0;
  showQuestion();
  startTimer();
});

// ====== Show Question ======
function showQuestion() {
  container.innerHTML = "";
  questionCount.innerText = `${questionIndex + 1} of ${quizArray.length} questions`;

  let q = document.createElement("p");
  q.classList.add("question");
  q.innerText = quizArray[questionIndex].question;
  container.appendChild(q);

  quizArray[questionIndex].options.forEach(option => {
    let btn = document.createElement("button");
    btn.classList.add("option-div");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(btn);
    container.appendChild(btn);
  });
}

// ====== Check Answer ======
function checkAnswer(selectedBtn) {
  let correctAnswer = quizArray[questionIndex].correct;
  let options = document.querySelectorAll(".option-div");

  options.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  if (selectedBtn.innerText === correctAnswer) {
    score++;
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }

  clearInterval(timer);
}

// ====== Next Button ======
nextButton.addEventListener("click", () => {
  questionIndex++;
  if (questionIndex < quizArray.length) {
    resetTimer();
    showQuestion();
    startTimer();
  } else {
    endQuiz();
  }
});

// ====== Timer ======
function startTimer() {
  time = 10;
  timeLeft.innerText = `${time}s`;

  timer = setInterval(() => {
    time--;
    timeLeft.innerText = `${time}s`;

    if (time === 0) {
      clearInterval(timer);
      nextButton.click();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  time = 10;
}

// ====== End Quiz ======
function endQuiz() {
  displayContainer.classList.add("hide");
  scoreContainer.classList.remove("hide");
  userScore.innerText = `Your Score: ${score} / ${quizArray.length}`;
}

// ====== Restart ======
restartBtn.addEventListener("click", () => {
  scoreContainer.classList.add("hide");
  startScreen.classList.remove("hide");
});
=======
// ====== Elements ======
const startScreen = document.querySelector(".start-screen");
const startButton = document.getElementById("start-button");
const displayContainer = document.getElementById("display-container");
const container = document.getElementById("container");
const nextButton = document.getElementById("next-button");
const scoreContainer = document.querySelector(".score-container");
const userScore = document.getElementById("user-score");
const restartBtn = document.getElementById("restart");
const timeLeft = document.querySelector(".time-left");
const questionCount = document.querySelector(".number-of-question");

let questionIndex = 0;
let score = 0;
let timer;
let time = 10;

// ====== Questions ======
const quizArray = [
  {
    question: "HTML ka full form kya hai?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "Home Tool Markup Language"
    ],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "CSS ka use kis liye hota hai?",
    options: ["Structure", "Styling", "Database", "Logic"],
    correct: "Styling"
  },
  {
    question: "JavaScript kis type ki language hai?",
    options: ["Markup", "Styling", "Programming", "Query"],
    correct: "Programming"
  },
  {
    question: "HTML me sabse bada heading tag kaunsa hai?",
    options: ["<h6>", "<h4>", "<h1>", "<h3>"],
    correct: "<h1>"
  },
  {
    question: "CSS me color property ka use kis liye hota hai?",
    options: ["Text color", "Background", "Border", "Margin"],
    correct: "Text color"
  },
  {
    question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
    options: ["var", "int", "string", "define"],
    correct: "var"
  },
  {
    question: "HTML file ka extension kya hota hai?",
    options: [".css", ".js", ".html", ".php"],
    correct: ".html"
  },
  {
    question: "CSS me external file ko kaise link karte hain?",
    options: [
      "<style>",
      "<script>",
      "<link>",
      "<css>"
    ],
    correct: "<link>"
  },
  {
    question: "JavaScript me function ka keyword kya hai?",
    options: ["method", "function", "func", "define"],
    correct: "function"
  },
  {
    question: "HTML me list banane ke liye kaunsa tag use hota hai?",
    options: ["<li>", "<ul>", "<list>", "<ol>"],
    correct: "<ul>"
  },
  {
    question: "CSS ka full form kya hai?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheet",
      "Colorful Style Sheet"
    ],
    correct: "Cascading Style Sheets"
  },
  {
    question: "JavaScript ka file extension kya hota hai?",
    options: [".java", ".script", ".js", ".jsx"],
    correct: ".js"
  },
  {
    question: "HTML me image dikhane ke liye kaunsa tag hai?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    correct: "<img>"
  },
  {
    question: "CSS me flexbox ka use kis liye hota hai?",
    options: [
      "Layout banane ke liye",
      "Animation ke liye",
      "Color ke liye",
      "Font ke liye"
    ],
    correct: "Layout banane ke liye"
  },
  {
    question: "JavaScript browser me kaise run hoti hai?",
    options: [
      "Server par",
      "Compiler se",
      "Browser ke engine me",
      "Database me"
    ],
    correct: "Browser ke engine me"
  }
];

// ====== Start Quiz ======
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  questionIndex = 0;
  score = 0;
  showQuestion();
  startTimer();
});

// ====== Show Question ======
function showQuestion() {
  container.innerHTML = "";
  questionCount.innerText = `${questionIndex + 1} of ${quizArray.length} questions`;

  let q = document.createElement("p");
  q.classList.add("question");
  q.innerText = quizArray[questionIndex].question;
  container.appendChild(q);

  quizArray[questionIndex].options.forEach(option => {
    let btn = document.createElement("button");
    btn.classList.add("option-div");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(btn);
    container.appendChild(btn);
  });
}

// ====== Check Answer ======
function checkAnswer(selectedBtn) {
  let correctAnswer = quizArray[questionIndex].correct;
  let options = document.querySelectorAll(".option-div");

  options.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  if (selectedBtn.innerText === correctAnswer) {
    score++;
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }

  clearInterval(timer);
}

// ====== Next Button ======
nextButton.addEventListener("click", () => {
  questionIndex++;
  if (questionIndex < quizArray.length) {
    resetTimer();
    showQuestion();
    startTimer();
  } else {
    endQuiz();
  }
});

// ====== Timer ======
function startTimer() {
  time = 10;
  timeLeft.innerText = `${time}s`;

  timer = setInterval(() => {
    time--;
    timeLeft.innerText = `${time}s`;

    if (time === 0) {
      clearInterval(timer);
      nextButton.click();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  time = 10;
}

// ====== End Quiz ======
function endQuiz() {
  displayContainer.classList.add("hide");
  scoreContainer.classList.remove("hide");
  userScore.innerText = `Your Score: ${score} / ${quizArray.length}`;
}

// ====== Restart ======
restartBtn.addEventListener("click", () => {
  scoreContainer.classList.add("hide");
  startScreen.classList.remove("hide");
});
>>>>>>> f371553c727b229df2dc773fafd70c1102aed835
