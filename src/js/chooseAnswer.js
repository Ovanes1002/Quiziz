const nextButton = document.querySelector(".nextButton");
// endButton           = document.querySelector(".endButton"),
// buttons             = document.querySelectorAll(".button"),
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
    lastClickedButton = {
      element: evt.currentTarget,
      class: evt.currentTarget.classList.contains("true")
    };
    console.log(lastClickedButton);
    console.log(lastClickedButton.element.textContent);
    // Проверка, последний ли следующий вопрос
    if (+currentQuestionIndex % 10 != 9) {
      nextButton.classList.remove("hide");
    } else {
      updateProgress(10);
      endButtonForm.classList.remove("hide");
      endButton.classList.remove("hide");
    }

    buttons.forEach((otherButton) => {
      if (otherButton !== lastClickedButton) {
        otherButton.style.boxShadow = "none";
      }
    });

    if (lastClickedButton.element.style.boxShadow == "none" || !lastClickedButton.style.boxShadow) {
      lastClickedButton.element.style.boxShadow = "0 0 5px 5px #5ca4ff";
    }
  });
});

firstWriteAnswer.addEventListener("input", function (evt) {
  if (firstWriteAnswer.value.trim().length !== 0) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.classList.add("hide");
  }
});

secondWriteAnswer.addEventListener("input", function (evt) {
  if (secondWriteAnswer.value.trim().length !== 0) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.classList.add("hide");
  }
});

thirdWriteAnswer.addEventListener("input", function (evt) {
  if (thirdWriteAnswer.value.trim().length !== 0) {
    endButtonForm.classList.remove("hide");
    endButton.classList.remove("hide");
    updateProgress(10);
  } else {
    current = 100;
    updateProgress(-10);
    endButtonForm.classList.add("hide");
    endButton.classList.add("hide");
  }
});
