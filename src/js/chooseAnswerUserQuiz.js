const userQuizNextButtonForm = document.querySelector(".userQuizNextButtonForm"),
  userQuizEndButtonForm = document.querySelector(".userQuizEndButtonForm"),
  correctAnswer = document.querySelector(".correctAnswer"),
  buttons = document.querySelectorAll(".button");
let lastClickedButton = null,
  currentNumberOfQuestion = document.querySelector(".currentNumberOfQuestion"),
  numberOfAllQuestions = document.querySelector(".numberOfAllQuestions");

// firstWriteAnswer    = document.querySelector(".firstWriteAnswer"),
// secondWriteAnswer   = document.querySelector(".secondWriteAnswer"),
// thirdWriteAnswer    = document.querySelector(".thirdWriteAnswer");

// function lastClickedButton () {

// }

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    // удаляем тень у каждой кнопки с классом "buttons"
    buttons.forEach((button) => {
      button.style.boxShadow = "none";
    });
    // сохраняем ссылку на последнюю кликнутую кнопку
    lastClickedButton = evt.currentTarget;

    // console.log(lastClickedButton.element.textContent);
    // Проверка, последний ли следующий вопрос
    console.log(currentNumberOfQuestion.innerHTML);
    console.log(numberOfAllQuestions.innerHTML);

    if (currentNumberOfQuestion.innerHTML !== numberOfAllQuestions.innerHTML) {
      userQuizNextButtonForm.classList.remove("hide");
    } else {
      userQuizNextButtonForm.classList.add("hide");
      userQuizEndButtonForm.classList.remove("hide");
      //   endButton.classList.remove("hide");
    }

    buttons.forEach((otherButton) => {
      if (otherButton !== lastClickedButton) {
        otherButton.style.boxShadow = "none";
      }
    });

    if (lastClickedButton.style.boxShadow == "none" || !lastClickedButton.style.boxShadow) {
      lastClickedButton.style.boxShadow = "0 0 5px 5px #0019b5";
    }
  });
});
