const finishAnswers = document.querySelector(".finishAnswers"),
  max = 100;
let savedQuizList = JSON.parse(sessionStorage.getItem("quizList")),
  userAnswer,
  userAnswerIndex,
  rightAnswer,
  AnswerButtons,
  lastAnswerButtons,
  buttonsOflastAnswerButtons,
  lastPointsElement,
  current = 0,
  progressBars,
  lastProgressBar,
  points = document.querySelectorAll(".points"),
  currentIndex = document.querySelector(".currentIndex");
currentQuestionIndex = currentIndex.innerText;
console.log(currentQuestionIndex);
console.log(savedQuizList);

const checkUserAnswer = function (questionIndex) {
  // Получаем правильный ответ для текущего вопроса
  rightAnswer = savedQuizList[currentQuestionIndex].answers.find((answer) => answer.correct === true);
  // Получаем ответ пользваетеля для текущего вопроса
  userAnswer = savedQuizList[currentQuestionIndex].answers.find(
    (answer) => answer.isUserCorrect !== undefined
  );
  userAnswerIndex = savedQuizList[currentQuestionIndex].answers.indexOf(userAnswer);
  console.log(userAnswerIndex);
  // Получить все элементы с классом "answer-buttons"
  AnswerButtons = document.getElementsByClassName("answer-buttons");

  // Получить последний элемент с классом "answer-buttons"
  lastAnswerButtons = AnswerButtons[AnswerButtons.length - 1];

  // Получить последний элемент с классом "points"
  lastPointsElement = points[points.length - 1]; // не используется

  buttonsOflastAnswerButtons = lastAnswerButtons.querySelectorAll(".button");
  console.log(buttonsOflastAnswerButtons);

  if (questionIndex < 4) {
    buttonsOflastAnswerButtons.forEach((button, index) => {
      if (button.innerText === rightAnswer.text) {
        // если пользователь тоже ответил правильно
        if (rightAnswer.isUserCorrect === true) {
          // у кнопки с правильным ответом меняем цвет на зелёный
          button.style.backgroundColor = "green";
        }
      } else if (index === userAnswerIndex && userAnswer.isUserCorrect === false) {
        button.style.backgroundColor = "red";
      }
    });
  } else if (questionIndex < 7) {
    buttonsOflastAnswerButtons.forEach((button, index) => {
      if (savedQuizList[currentQuestionIndex].answers[index].text === rightAnswer.text) {
        // если пользователь тоже ответил правильно
        if (rightAnswer.isUserCorrect === true) {
          // у кнопки с правильным ответом меняем цвет на зелёный
          button.style.backgroundColor = "green";
        }
      } else if (index === userAnswerIndex && userAnswer.isUserCorrect === false) {
        button.style.backgroundColor = "red";
      }
    });
  }
  // Получить все элементы с классом "progressBar"
  progressBars = document.getElementsByClassName("progressBar");

  // Получить последний элемент с классом "progressBar"
  lastProgressBar = progressBars[progressBars.length - 1];

  current += 10;
  if (current >= max) {
    current = max;
  }
  lastProgressBar.style.width = `${(current / max) * 100}%`;
};

for (let i = 0; i < 10; i++) {
  if (i < 4) {
    finishAnswers.innerHTML += `
        <header id="header">
            <div class="questionNumber">${(+currentQuestionIndex % 10) + 1} / 10</div>
            <div class="points">1 балл</div>
        </header>
        <main class="card">
            <p class="question"></p>
            <span class="currentIndex">
                <?php echo topicIndex($_SESSION['lastClickedTopic']);?>
            </span>
            <div class="answer-buttons">
                <button class="button" data-button-id="1">${
                  savedQuizList[currentQuestionIndex].answers[0].text
                }</button>
                <button class="button" data-button-id="2">${
                  savedQuizList[currentQuestionIndex].answers[1].text
                }</button>
                <button class="button" data-button-id="3">${
                  savedQuizList[currentQuestionIndex].answers[2].text
                }</button>
                <button class="button" data-button-id="4">${
                  savedQuizList[currentQuestionIndex].answers[3].text
                }</button>
            </div>
        </main>
        <footer id="footer">
            <div class="progressBar"></div>
        </footer>
    `;
    checkUserAnswer(i);
  } else if (i < 7) {
    finishAnswers.innerHTML += `
            <header id="header">
                <div class="questionNumber">${(+currentQuestionIndex % 10) + 1} / 10</div>
                <div class="points">2 балла</div>
            </header>
            <main class="card">
                <p class="question"></p>
                <span class="currentIndex">
                    <?php echo topicIndex($_SESSION['lastClickedTopic']);?>
                </span>
                <div class="answer-buttons">
                    <button class="button" data-button-id="1">
                        <img src="${
                          savedQuizList[currentQuestionIndex].answers[0].text
                        }" alt="фото викторины" />
                    </button>
                    <button class="button" data-button-id="2">
                        <img src="${
                          savedQuizList[currentQuestionIndex].answers[1].text
                        }" alt="фото викторины" />
                    </button>
                    <button class="button" data-button-id="3">
                        <img src="${
                          savedQuizList[currentQuestionIndex].answers[2].text
                        }" alt="фото викторины" /></button>
                    <button class="button" data-button-id="4">
                        <img src="${
                          savedQuizList[currentQuestionIndex].answers[3].text
                        }" alt="фото викторины" />
                    </button>
                </div>
            </main>
            <footer id="footer">
                <div class="progressBar"></div>
            </footer>`;
    checkUserAnswer(i);
  }
  currentQuestionIndex++;
}
// console.log(currentQuestionIndex);
// for (let i = 0; i <= quizList.length; i++) {
//   setQuestion();
// }
