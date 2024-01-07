// Dec. 25, 2023
// Quiz App

const questionBank = [
  {
    question: "Which animal lays eggs?",
    answers: [
      { text: "Dog", correct: false },
      { text: "Cat", correct: false },
      { text: "Duck", correct: true },
      { text: "Sheep", correct: false },
    ],
  },
  {
    question: "A male cow is called?",
    answers: [
      { text: "Ox", correct: true },
      { text: "Dog", correct: false },
      { text: "Sheep", correct: false },
      { text: "Monkey", correct: false },
    ],
  },
  {
    question: "All animals need food, air, and ____ to survive.",
    answers: [
      { text: "House", correct: false },
      { text: "Water", correct: true },
      { text: "Chocolate", correct: false },
      { text: "Fruits", correct: false },
    ],
  },
  {
    question: "Which one is a fur-bearing animal?",
    answers: [
      { text: "Hen", correct: false },
      { text: "Crocodile", correct: false },
      { text: "Tortoise", correct: false },
      { text: "Cat", correct: true },
    ],
  },
  {
    question: "What is Earth’s only natural satellite?",
    answers: [
      { text: "Sun", correct: false },
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Moon", correct: true },
    ],
  },
  {
    question: "The tree has a branch filled with green _____.",
    answers: [
      { text: "Hair", correct: false },
      { text: "Root", correct: false },
      { text: "Leaves", correct: true },
      { text: "Trunk", correct: false },
    ],
  },
  {
    question: " What part of the body helps you move?",
    answers: [
      { text: "Eyes", correct: false },
      { text: "Lungs", correct: false },
      { text: "Pancreas", correct: false },
      { text: "Muscles", correct: true },
    ],
  },
  {
    question: "The two holes of the nose are called?",
    answers: [
      { text: "Eyelids", correct: false },
      { text: "Nostrils", correct: true },
      { text: "Nails", correct: false },
      { text: "Hair", correct: false },
    ],
  },
  {
    question: "What star shines in the day and provides light?",
    answers: [
      { text: "Moon", correct: false },
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Sun", correct: true },
    ],
  },
  {
    question: "Legs have feet and arms have ___.",
    answers: [
      { text: "Ankles", correct: false },
      { text: "Pelvis", correct: false },
      { text: "Hands", correct: true },
      { text: "Skull", correct: false },
    ],
  },
];

const question = document.getElementById("question");
const answerList = document.getElementById("answer-list");
const nextBtn = document.getElementById("next-btn");

let questionNumber = 0;
let score = 0;

function startQuiz() {
  questionNumber = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questionBank[questionNumber];
  question.innerText = `${questionNumber + 1}. ${currentQuestion.question}`;
  currentQuestion.answers.forEach((answer) => {
    const answerBtn = document.createElement("button");
    answerBtn.innerText = answer.text;
    answerBtn.classList.add("answer-btn");
    answerList.appendChild(answerBtn);

    if (answer.correct) {
      // .dataset: The dataset property is used to access custom data attributes of an HTML element. In this case, it is accessing the value of the correct attribute from the data-* attribute of the answerBtn element.
      answerBtn.dataset.correct = answer.correct;
    }
    answerBtn.addEventListener("click", selectAnswer);
  });
}
function selectAnswer(e) {
  // Get the button that the user selected
  const selectedBtn = e.target;
  // Check whether the user's answer is correct or not using the correct property => if it is true. If not true, false will be assigned in isCorrect
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  // Show the correct answer if the user's answer is incorrect
  Array.from(answerList.children).forEach((answerBtn) => {
    if (answerBtn.dataset.correct === "true") {
      answerBtn.classList.add("correct");
    }
    answerBtn.disabled = true;
  });
  nextBtn.style.display = "block";
}

// Move to another question until the question number reaches to 10
function moveNext() {
  questionNumber++;
  if (questionNumber < questionBank.length) {
    showQuestion();
  } else {
    showScore();
  }
}
// Show the user score when the quiz ends
function showScore() {
  resetState();
  question.innerText = `You scored ${score} out of ${questionBank.length}!`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
}
// Make previous answers disappear
function resetState() {
  nextBtn.style.display = "none";
  while (answerList.firstChild) {
    answerList.removeChild(answerList.firstChild);
  }
}
// The button will either display another question or start the quiz (play again)
nextBtn.addEventListener("click", () => {
  if (questionNumber < questionBank.length) {
    moveNext();
  } else {
    startQuiz();
  }
});

startQuiz();
