// const
// nextButton = document.querySelector(".nextButton"),
// endButton           = document.querySelector(".endButton"),
// buttons             = document.querySelectorAll(".button"),
// points              = document.querySelector(".points"),
// firstWriteAnswer    = document.querySelector(".firstWriteAnswer"),
// secondWriteAnswer   = document.querySelector(".secondWriteAnswer"),
// thirdWriteAnswer    = document.querySelector(".thirdWriteAnswer");

let dataButtonId, userAnswer, isAnswerTrue;

// const wrongUserAnswer = function () {
//   const userAnswer = quizList[currentQuestionIndex].answers.find((answer) => answer.correct === true);
//   // Проверяем, был ли объект найден
//   if (!userAnswer) {
//     userAnswer.isUserCorrect = false;
//     lastClickedButton.element.style.backgroundColor = "red";
//   } else {
//     console.log("Ответ пользователя был найден в списке ответов.");
//   }
// };

const isCorrectUserAnswer = function () {
  // Получаем правильный ответ для текущего вопроса
  const rightAnswer = quizList[currentQuestionIndex].answers.find((answer) => answer.correct === true);
  // Получаем индекс правильного ответа
  const rightAnswerIndex = quizList[currentQuestionIndex].answers.indexOf(rightAnswer);
  console.log("Индекс правильного ответа:", rightAnswerIndex);
  // console.log(rightAnswer);

  // ответ-объект-кнопка массива по которому нажал пользователь
  // userAnswer = quizList[currentQuestionIndex].answers[dataButtonId];

  // console.log(lastClickedButton.element.textContent);
  // isAnswerTrue = rightAnswer.text === lastClickedButton.element.textContent;
  // проверка правильности ответа пользователя
  // console.log(isAnswerTrue);
  if (dataButtonId === rightAnswerIndex) {
    rightAnswer.isUserCorrect = true;
    lastClickedButton.element.style.backgroundColor = "green";
  } else {
    rightAnswer.isUserCorrect = false;
    lastClickedButton.element.style.backgroundColor = "red";
  }
  console.log(dataButtonId);
  console.log(rightAnswerIndex);
  console.log(quizList[currentQuestionIndex].answers);
};

nextButton.addEventListener("click", (evt) => {
  // удаляем тень у каждой кнопки с классом "buttons"
  buttons.forEach((button) => {
    button.style.boxShadow = "none";
  });
  // по какой по счёту кнопке нажал пользователь
  dataButtonId = parseInt(lastClickedButton.element.dataset.buttonId) - 1;
  // console.log(typeof lastClickedButton.element.dataset.buttonId);
  // console.log(dataButtonId);
  // console.log(points.innerText);
  // console.log(result);
  // console.log(lastClickedButton);
  // console.log(lastClickedButton.element.textContent);
  // проверяем, содержит ли последняя кликнутая кнопка класс "true"
  if (lastClickedButton !== null && lastClickedButton.class && points.innerText == "1 балл") {
    result++; // увеличиваем счетчик на 1
    isCorrectUserAnswer();
  } else if (lastClickedButton !== null && lastClickedButton.class && points.innerText == "2 балла") {
    result += 2; // увеличиваем счетчик на 2
    isCorrectUserAnswer();
  } else if (
    lastClickedButton !== null &&
    lastClickedButton.class == false &&
    (points.innerText == "1 балл" || points.innerText == "2 балла")
  ) {
    isCorrectUserAnswer();
  }
  // console.log(quizList[currentQuestionIndex].answers);
  // console.log(result);
  if (
    (firstWriteAnswer.value == "5" && lastClickedTopic == "спорт") ||
    (firstWriteAnswer.value == "18" && lastClickedTopic == "музыка") ||
    (firstWriteAnswer.value == "284" && lastClickedTopic == "искусство") ||
    (firstWriteAnswer.value == "1961" && lastClickedTopic == "история")
  ) {
    firstWriteAnswer.classList.add("true");
    result += 3;
  }

  if (
    (secondWriteAnswer.value == "245" && lastClickedTopic == "спорт") ||
    (secondWriteAnswer.value.toUpperCase() === "СКРИПКА" && lastClickedTopic == "музыка") ||
    (secondWriteAnswer.value.toUpperCase() === "ДАЛИ" && lastClickedTopic == "искусство") ||
    (secondWriteAnswer.value.toUpperCase() === "ЯПОНИЯ" && lastClickedTopic == "история")
  ) {
    secondWriteAnswer.classList.add("true");
    result += 3;
  }

  // firstWriteAnswer.value = "";
  // secondWriteAnswer.value = "";
  // thirdWriteAnswer.value = "";

  if (quizList.length > +currentQuestionIndex + 1) {
    currentQuestionIndex++;
    setQuestion();
  }
  updateProgress(10); // увеличение прогресса на 10%
  nextButton.classList.add("hide");
});
