const startButton = document.querySelector(".startButton"),
  nextButton = document.querySelector(".nextButton"),
  backButton = document.querySelector(".backButton"),
  backButtonSport = document.querySelector(".backButtonSport"),
  backButtonMusic = document.querySelector(".backButtonMusic"),
  backButtonArt = document.querySelector(".backButtonArt"),
  backButtonHistory = document.querySelector(".backButtonHistory"),
  menuButton = document.querySelector(".menuButton"),
  launchButton = document.querySelector(".launchButton"),
  quitQuiz = document.querySelector(".quitQuiz"),
  header = document.getElementById("header"),
  footer = document.getElementById("footer"),
  exitNext = document.querySelector(".exitNext"),
  main = document.querySelector(".card"),
  questionElement = document.querySelector(".question"),
  answerButtons = document.querySelector(".answer-buttons"), // не используется
  buttons = document.querySelectorAll(".button"),
  scoreButton = document.querySelector(".score__button"),
  scoreSport = document.querySelector(".score__sport"),
  scoreMusic = document.querySelector(".score__music"),
  scoreArt = document.querySelector(".score__art"),
  scoreHistory = document.querySelector(".score__history"),
  count = document.querySelector(".questionNumber"),
  points = document.querySelector(".points"),
  startQuiz = document.querySelector(".startQuiz"),
  playerName = document.getElementById("playerName"), // не используется
  finish = document.querySelector(".finish"),
  playerResult = document.querySelector(".playerResult"),
  nameInput = document.querySelector(".nameInput"), // не используется
  nameId = document.getElementById("name"),
  submitButton = document.querySelector(".submit"),
  firstWriteAnswer = document.querySelector(".firstWriteAnswer"),
  secondWriteAnswer = document.querySelector(".secondWriteAnswer"),
  thirdWriteAnswer = document.querySelector(".thirdWriteAnswer"),
  audioSport = document.querySelector(".audioSport"),
  audioMusic = document.querySelector(".audioMusic"),
  audioArt = document.querySelector(".audioArt"),
  audioHistory = document.querySelector(".audioHistory");

const endButton = document.querySelector(".endButton");
const tableSport = document.querySelector(".tableSport");
const tableMusic = document.querySelector(".tableMusic");
const tableArt = document.querySelector(".tableArt");
const tableHistory = document.querySelector(".tableHistory");

// const tableBody = document.querySelector("tbody");
const modalWindowBack = document.querySelector(".modalWindowBack");
const modalWindowFront = document.querySelector(".modalWindowFront"); // не используется
const closeModalWindow = document.querySelector(".close");
const chooseScoreTopic = document.querySelector(".choose_score_topic");
const chooseTopic = document.querySelector(".choose_topic");
const topics = document.querySelectorAll(".topic");
const scoreTopics = document.querySelectorAll(".score_topic");
const sportTopic = document.querySelector(".score_sport_topic"); // не используется
const musicTopic = document.querySelector(".score_music_topic"); // не используется
const artTopic = document.querySelector(".score_art_topic"); // не используется
const historyTopic = document.querySelector(".score_history_topic"); // не используется

const progress = document.getElementById("progressBar");
const max = 100; // максимальное значение

let currentQuestionIndex;
let i = 0;
let result = 0; // начальное значение счетчика
let lastClickedButton = null; // переменная для хранения последней кликнутой кнопки
let lastClickedTopic = null;
let clck = null;

let userName = "";

let current = 0; // текущее значение

// chooseTopic.addEventListener("click", function (evt) {
//   if (evt.target == sportTopic) {
//     modalWindowBack.classList.add("hide");
//   }
//   if (evt.target == musicTopic) {
//     modalWindowBack.classList.add("hide");
//   }
//   if (evt.target == artTopic) {
//     modalWindowBack.classList.add("hide");
//   }
//   if (evt.target == history_topic) {
//     modalWindowBack.classList.add("hide");
//   }
// });

// firstWriteAnswer.addEventListener("input", function (evt) {
//   if (firstWriteAnswer.value.trim().length !== 0 && currentQuestionIndex % 10 != 9) {
//     nextButton.classList.remove("hide");
//   } else if (firstWriteAnswer.value.trim().length !== 0 && currentQuestionIndex % 10 == 9) {
//     nextButton.classList.add("hide");
//     updateProgress(10);
//     endButton.classList.remove("hide");
//   } else {
//     nextButton.classList.add("hide");
//   }

// if (currentQuestionIndex % 10 != 9) {
//   nextButton.classList.remove("hide");
// } else {
//   nextButton.classList.add("hide");
//   endButton.classList.remove("hide");
// }

// if (currentQuestionIndex % 10 != 9) {
//   nextButton.classList.remove("hide");
// } else {
//   nextButton.classList.add("hide");
// updateProgress(10);
// endButton.classList.remove("hide");
// }

// });
