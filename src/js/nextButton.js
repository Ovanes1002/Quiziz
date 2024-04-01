// const
// nextButton = document.querySelector(".nextButton"),
// endButton           = document.querySelector(".endButton"),
// buttons             = document.querySelectorAll(".button"),
// points              = document.querySelector(".points"),
// firstWriteAnswer    = document.querySelector(".firstWriteAnswer"),
// secondWriteAnswer   = document.querySelector(".secondWriteAnswer"),
// thirdWriteAnswer    = document.querySelector(".thirdWriteAnswer");

let dataButtonId, userAnswer, isAnswerTrue;
let result = 0;

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

  if (points.innerText == "1 балл" || points.innerText == "2 балла") {
    // по какой по счёту кнопке нажал пользователь
    dataButtonId = parseInt(lastClickedButton.element.dataset.buttonId) - 1;

    // проверяем, содержит ли последняя кликнутая кнопка класс "true"
    if (lastClickedButton !== null && lastClickedButton.class && points.innerText == "1 балл") {
      result++; // увеличиваем счетчик на 1
      isCorrectUserAnswer();
    } else if (lastClickedButton !== null && lastClickedButton.class && points.innerText == "2 балла") {
      result += 2; // увеличиваем счетчик на 2
      isCorrectUserAnswer();
    }
    if (lastClickedButton !== null && lastClickedButton.class == false) {
      isCorrectUserAnswer();
    }
  }

  if (points.innerText == "3 балла") {
    if (
      (firstWriteAnswer.value == "5" && lastClickedTopic == "спорт") ||
      (firstWriteAnswer.value == "18" && lastClickedTopic == "музыка") ||
      (firstWriteAnswer.value == "284" && lastClickedTopic == "искусство") ||
      (firstWriteAnswer.value == "1961" && lastClickedTopic == "история")
    ) {
      firstWriteAnswer.classList.add("true");
      firstWriteAnswer.style.backgroundColor = "green";
      quizList[currentQuestionIndex].isUserCorrect = true;
      result += 3;
      console.log(quizList[currentQuestionIndex]);
    } else {
      firstWriteAnswer.style.backgroundColor = "red";
      quizList[currentQuestionIndex].isUserCorrect = false;
      console.log(quizList[currentQuestionIndex]);
    }
    firstWriteAnswer.value = "";

    if (
      (secondWriteAnswer.value == "245" && lastClickedTopic == "спорт") ||
      (secondWriteAnswer.value.toUpperCase() === "СКРИПКА" && lastClickedTopic == "музыка") ||
      (secondWriteAnswer.value.toUpperCase() === "ДАЛИ" && lastClickedTopic == "искусство") ||
      (secondWriteAnswer.value.toUpperCase() === "ЯПОНИЯ" && lastClickedTopic == "история")
    ) {
      secondWriteAnswer.classList.add("true");
      secondWriteAnswer.style.backgroundColor = "green";
      quizList[currentQuestionIndex].isUserCorrect = true;
      result += 3;
    } else if (secondWriteAnswer.value !== "") {
      secondWriteAnswer.style.backgroundColor = "red";
      quizList[currentQuestionIndex].isUserCorrect = false;
    }
    secondWriteAnswer.value = "";
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
  console.log(result);
});
