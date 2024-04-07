const finishAnswers = document.querySelector(".finishAnswers"),
  menuButton = document.querySelector(".menuButton"),
  max = 100;
let savedQuizList = JSON.parse(sessionStorage.getItem("quizList")),
  userAnswer,
  userAnswerIndex,
  rightAnswer,
  answerButtons,
  lastAnswerButtons,
  buttonsOflastAnswerButtons,
  lastPointsElement,
  current = 0,
  progressBars,
  lastProgressBar,
  question,
  points,
  firstWriteAnswer,
  secondWriteAnswer,
  thirdWriteAnswer,
  audioSport,
  audioMusic,
  audioArt,
  audioHistory,
  currentIndex = document.querySelector(".currentIndex");
currentQuestionIndex = currentIndex.innerText;
console.log(currentQuestionIndex);
console.log(savedQuizList);

const findElements = function () {
  // Получаем правильный ответ для текущего вопроса
  rightAnswer = savedQuizList[currentQuestionIndex].answers.find((answer) => answer.correct === true);
  // Получаем ответ пользваетеля для текущего вопроса
  userAnswer = savedQuizList[currentQuestionIndex].answers.find(
    (answer) => answer.isUserCorrect !== undefined
  );
  userAnswerIndex = savedQuizList[currentQuestionIndex].answers.indexOf(userAnswer);
  console.log(userAnswerIndex);
  // Получить все элементы с классом "answer-buttons"
  answerButtons = document.getElementsByClassName("answer-buttons");

  // Получить последний элемент с классом "answer-buttons"
  lastAnswerButtons = answerButtons[answerButtons.length - 1];

  buttonsOflastAnswerButtons = lastAnswerButtons.querySelectorAll(".button");
  console.log(buttonsOflastAnswerButtons);
};

const changeProgressBar = function () {
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
            <div class="points"></div>
        </header>
        <main class="card">
            <p class="question">${savedQuizList[currentQuestionIndex].question}</p>
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
    findElements();
    changeProgressBar();

    points = document.querySelectorAll(".points");
    // Получить последний элемент с классом "points"
    lastPointsElement = points[points.length - 1];
    lastPointsElement.innerText = "1 балл";

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
  } else if (i < 7) {
    finishAnswers.innerHTML += `
            <header id="header">
                <div class="questionNumber">${(+currentQuestionIndex % 10) + 1} / 10</div>
                <div class="points"></div>
            </header>
            <main class="card">
                <p class="question">${savedQuizList[currentQuestionIndex].question}</p>
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
    findElements();
    changeProgressBar();
    points = document.querySelectorAll(".points");
    // Получить последний элемент с классом "points"
    lastPointsElement = points[points.length - 1];
    lastPointsElement.innerText = "2 балла";

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
  } else if (i < 8) {
    finishAnswers.innerHTML += `
    <header id="header">
    <div class="questionNumber">${(+currentQuestionIndex % 10) + 1} / 10</div>
    <div class="points"></div>
  </header>
  <main class="card">
      <p class="question">${savedQuizList[currentQuestionIndex].question}</p>
      <span class="currentIndex">
          <?php echo topicIndex($_SESSION['lastClickedTopic']);?>
      </span>
      <div class="input-answer">
        <input
        type="text"
        class="firstWriteAnswer"
        disabled
        maxlength="30"
        value="${savedQuizList[currentQuestionIndex].userValue}"
        />
      </div>
  </main>
  <footer id="footer">
      <div class="progressBar"></div>
  </footer>;
    `;
    firstWriteAnswer = document.querySelector(".firstWriteAnswer");
    firstWriteAnswer.value = savedQuizList[currentQuestionIndex].userValue;
    if (savedQuizList[currentQuestionIndex].isUserCorrect === true) {
      firstWriteAnswer.style.backgroundColor = "green";
    } else if (savedQuizList[currentQuestionIndex].isUserCorrect === false) {
      firstWriteAnswer.style.backgroundColor = "red";
    }
    points = document.querySelectorAll(".points");
    // Получить последний элемент с классом "points"
    lastPointsElement = points[points.length - 1];
    lastPointsElement.innerText = "3 балла";
    changeProgressBar();
    console.log(firstWriteAnswer.value);
  } else if (i < 9) {
    finishAnswers.innerHTML += `
    <header id="header">
    <div class="questionNumber">${(+currentQuestionIndex % 10) + 1} / 10</div>
    <div class="points"></div>
  </header>
  <main class="card">
      <p class="question">${savedQuizList[currentQuestionIndex].question}</p>
      <span class="currentIndex">
          <?php echo topicIndex($_SESSION['lastClickedTopic']);?>
      </span>
      <div class="input-answer">
        <input
        type="text"
        class="secondWriteAnswer"
        disabled
        maxlength="30"
        value="${savedQuizList[currentQuestionIndex].userValue}"
        />
      </div>
  </main>
  <footer id="footer">
      <div class="progressBar"></div>
  </footer>;
    `;
    secondWriteAnswer = document.querySelector(".secondWriteAnswer");
    secondWriteAnswer.value = savedQuizList[currentQuestionIndex].userValue;
    if (savedQuizList[currentQuestionIndex].isUserCorrect === true) {
      secondWriteAnswer.style.backgroundColor = "green";
    } else if (savedQuizList[currentQuestionIndex].isUserCorrect === false) {
      secondWriteAnswer.style.backgroundColor = "red";
    }
    points = document.querySelectorAll(".points");
    // Получить последний элемент с классом "points"
    lastPointsElement = points[points.length - 1];
    lastPointsElement.innerText = "3 балла";
    changeProgressBar();
    console.log(secondWriteAnswer.value);
  } else if (i < 10) {
    finishAnswers.innerHTML += `
    <header id="header">
    <div class="questionNumber">${(+currentQuestionIndex % 10) + 1} / 10</div>
    <div class="points"></div>
  </header>
  <main class="card">
      <p class="question">${savedQuizList[currentQuestionIndex].question}</p>
      <span class="currentIndex">
          <?php echo topicIndex($_SESSION['lastClickedTopic']);?>
      </span>
      <div class="input-answer">
          <audio class="audioSport hide" controls>
          <source src="quizAudio/LeoMessi/messi.opus" type="audio/ogg; codecs=opus" />
          <source src="quizAudio/LeoMessi/messi.ogg" type="audio/ogg; codecs=vorbis" />
          <source src="quizAudio/LeoMessi/messi.mp3" type="audio/mpeg" />
          Ваш браузер не поддерживает встроенные аудио. Попробуйте
          <a href="quizAudio/LeoMessi/messi.mp3" download>скачать</a> файл.
        </audio>
        <audio class="audioMusic hide" controls>
          <source src="quizAudio/BobMarley/marley.opus" type="audio/ogg; codecs=opus" />
          <source src="quizAudio/BobMarley/marley.ogg" type="audio/ogg; codecs=vorbis" />
          <source src="quizAudio/BobMarley/marley.mp3" type="audio/mpeg" />
          Ваш браузер не поддерживает встроенные аудио. Попробуйте
          <a href="quizAudio/BobMarley/marley.mp3" download>скачать</a> файл.
        </audio>
        <audio class="audioArt hide" controls>
          <source src="quizAudio/Interstellar/Zimmer.opus" type="audio/ogg; codecs=opus" />
          <source src="quizAudio/Interstellar/Zimmer.ogg" type="audio/ogg; codecs=vorbis" />
          <source src="quizAudio/Interstellar/Zimmer.mp3" type="audio/mpeg" />
          Ваш браузер не поддерживает встроенные аудио. Попробуйте
          <a href="quizAudio/Interstellar/Zimmer.mp3" download>скачать</a> файл.
        </audio>
        <audio class="audioHistory hide" controls>
          <source src="quizAudio/BorisYeltsin/Yeltsin.opus" type="audio/ogg; codecs=opus" />
          <source src="quizAudio/BorisYeltsin/Yeltsin.ogg" type="audio/ogg; codecs=vorbis" />
          <source src="quizAudio/BorisYeltsin/Yeltsin.mp3" type="audio/mpeg" />
          Ваш браузер не поддерживает встроенные аудио. Попробуйте
          <a href="quizAudio/BorisYeltsin/Yeltsin.mp3" download>скачать</a> файл.
        </audio>
        <input
          type="text"
          class="thirdWriteAnswer"
          disabled
          maxlength="35"
        />
      </div>
  </main>
  <footer id="footer">
      <div class="progressBar"></div>
  </footer>;
    `;
    (audioSport = document.querySelector(".audioSport")),
      (audioMusic = document.querySelector(".audioMusic")),
      (audioArt = document.querySelector(".audioArt")),
      (audioHistory = document.querySelector(".audioHistory"));
    thirdWriteAnswer = document.querySelector(".thirdWriteAnswer");
    if (currentQuestionIndex === 9) {
      audioSport.classList.remove("hide");
    } else if (currentQuestionIndex === 19) {
      audioMusic.classList.remove("hide");
    } else if (currentQuestionIndex === 29) {
      audioArt.classList.remove("hide");
    } else if (currentQuestionIndex === 39) {
      audioHistory.classList.remove("hide");
    }
    thirdWriteAnswer.value = savedQuizList[currentQuestionIndex].userValue;
    if (savedQuizList[currentQuestionIndex].isUserCorrect === true) {
      thirdWriteAnswer.style.backgroundColor = "green";
    } else if (savedQuizList[currentQuestionIndex].isUserCorrect === false) {
      thirdWriteAnswer.style.backgroundColor = "red";
    }
    points = document.querySelectorAll(".points");
    // Получить последний элемент с классом "points"
    lastPointsElement = points[points.length - 1];
    lastPointsElement.innerText = "4 балла";
    changeProgressBar();
    console.log();
    console.log(secondWriteAnswer.value);
    console.log(thirdWriteAnswer.value);
  }
  currentQuestionIndex++;
}
// console.log(currentQuestionIndex);
// for (let i = 0; i <= quizList.length; i++) {
//   setQuestion();
// }

menuButton.addEventListener("click", () => {
  audioSport.classList.add("hide");
  audioMusic.classList.add("hide");
  audioArt.classList.add("hide");
  audioHistory.classList.add("hide");
  main.style.height = "";
  answerButtons.style.margin = "40px auto";
  answerButtons.style.alignItems = "normal";
  answerButtons.style.flexDirection = "row";
});
