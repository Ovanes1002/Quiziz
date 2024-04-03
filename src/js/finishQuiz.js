const finishAnswers = document.querySelector(".finishAnswers"),
  max = 100;
let savedQuizList = JSON.parse(sessionStorage.getItem("quizList")),
  AnswerButtons,
  lastAnswerButtons,
  buttonsOflastAnswerButtons,
  current = 0,
  progressBars,
  lastProgressBar,
  currentIndex = document.querySelector(".currentIndex");
currentQuestionIndex = currentIndex.innerText;
console.log(currentQuestionIndex);
console.log(savedQuizList);

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

    // Получаем правильный ответ для текущего вопроса
    const rightAnswer = savedQuizList[currentQuestionIndex].answers.find((answer) => answer.correct === true);
    // если пользователь тоже ответил правильно
    if (rightAnswer.isUserCorrect === true) {
      // у кнопки с правильным ответом меняем цвет на зелёный
      //   classList.contains("true");
    }
    // Получить все элементы с классом "answer-buttons"
    AnswerButtons = document.getElementsByClassName("answer-buttons");

    // Получить последний элемент с классом "answer-buttons"
    lastAnswerButtons = AnswerButtons[AnswerButtons.length - 1];

    buttonsOflastAnswerButtons = lastAnswerButtons.querySelectorAll(".button");
    console.log(buttonsOflastAnswerButtons);

    buttonsOflastAnswerButtons.forEach((button) => {
      if (button.innerText == rightAnswer.text) {
        if (rightAnswer.isUserCorrect === true) {
          // у кнопки с правильным ответом меняем цвет на зелёный
          button.style.backgroundColor = "green";
        } else if (rightAnswer.isUserCorrect === false) {
          button.style.backgroundColor = "red";
        }
      }
    });
    // Найти кнопку с классом "true" в последнем блоке
    const buttonTrue = lastAnswerButtons.querySelector("button.true");

    // Проверить, была ли найдена кнопка
    if (buttonTrue) {
      // Пример: добавить класс для подсветки
      buttonTrue.classList.add("highlighted");
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
  }
  currentQuestionIndex++;
}
// console.log(currentQuestionIndex);
// for (let i = 0; i <= quizList.length; i++) {
//   setQuestion();
// }
