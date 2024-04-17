// const
// nextButton = document.querySelector(".nextButton"),
// endButton           = document.querySelector(".endButton"),
// buttons             = document.querySelectorAll(".button"),
// points              = document.querySelector(".points"),
// firstWriteAnswer    = document.querySelector(".firstWriteAnswer"),
// secondWriteAnswer   = document.querySelector(".secondWriteAnswer"),
// thirdWriteAnswer    = document.querySelector(".thirdWriteAnswer");

let dataButtonId, userAnswer;
let result = 0;

const isCorrectUserAnswer = function () {
  // Получаем правильный ответ для текущего вопроса
  const rightAnswer = quizList[currentQuestionIndex].answers.find((answer) => answer.correct === true);
  // Получаем индекс правильного ответа
  const rightAnswerIndex = quizList[currentQuestionIndex].answers.indexOf(rightAnswer);
  console.log("Индекс правильного ответа:", rightAnswerIndex);
  // console.log(rightAnswer);

  // ответ-объект-кнопка массива по которому нажал пользователь
  userAnswer = quizList[currentQuestionIndex].answers[dataButtonId];

  // console.log(lastClickedButton.element.textContent);
  // isAnswerTrue = rightAnswer.text === lastClickedButton.element.textContent;
  // проверка правильности ответа пользователя
  // console.log(isAnswerTrue);
  if (dataButtonId === rightAnswerIndex) {
    rightAnswer.isUserCorrect = true;
    // lastClickedButton.element.style.backgroundColor = "green";
  } else if (dataButtonId !== rightAnswerIndex) {
    userAnswer.isUserCorrect = false;
    // lastClickedButton.element.style.backgroundColor = "red";
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

  if (points.innerText == "3 балла" && firstWriteAnswer.value !== "") {
    if (
      (firstWriteAnswer.value.trim() == "5" && lastClickedTopic == "спорт") ||
      (firstWriteAnswer.value.trim() == "18" && lastClickedTopic == "музыка") ||
      (firstWriteAnswer.value.trim() == "284" && lastClickedTopic == "искусство") ||
      (firstWriteAnswer.value.trim() == "1961" && lastClickedTopic == "история")
    ) {
      firstWriteAnswer.classList.add("true");
      // firstWriteAnswer.style.backgroundColor = "green";
      quizList[currentQuestionIndex].isUserCorrect = true;
      result += 3;
    } else if (firstWriteAnswer.value !== "") {
      // firstWriteAnswer.style.backgroundColor = "red";
      quizList[currentQuestionIndex].isUserCorrect = false;
    }
    console.log(quizList[currentQuestionIndex].userValue);
    console.log(quizList[currentQuestionIndex]);
    quizList[currentQuestionIndex].userValue = firstWriteAnswer.value;
    console.log(quizList[currentQuestionIndex].userValue);
    firstWriteAnswer.value = "";
  } else if (points.innerText == "3 балла" && firstWriteAnswer.value === "") {
    if (
      (secondWriteAnswer.value.trim() == "245" && lastClickedTopic == "спорт") ||
      (secondWriteAnswer.value.toUpperCase().trim() === "СКРИПКА" && lastClickedTopic == "музыка") ||
      (secondWriteAnswer.value.toUpperCase().trim() === "ДАЛИ" && lastClickedTopic == "искусство") ||
      (secondWriteAnswer.value.toUpperCase().trim() === "ЯПОНИЯ" && lastClickedTopic == "история")
    ) {
      secondWriteAnswer.classList.add("true");
      // secondWriteAnswer.style.backgroundColor = "green";
      quizList[currentQuestionIndex].isUserCorrect = true;
      result += 3;
    } else if (secondWriteAnswer.value !== "") {
      // secondWriteAnswer.style.backgroundColor = "red";
      quizList[currentQuestionIndex].isUserCorrect = false;
    }
    console.log(quizList[currentQuestionIndex].userValue);
    console.log(quizList[currentQuestionIndex]);
    quizList[currentQuestionIndex].userValue = secondWriteAnswer.value;
    console.log(quizList[currentQuestionIndex].userValue);
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
