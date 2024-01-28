const endButton = document.querySelector(".endButton");

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    // удаляем тень у каждой кнопки с классом "buttons"
    buttons.forEach((button) => {
      button.style.boxShadow = "none";
    });
    // сохраняем ссылку на последнюю кликнутую кнопку
    lastClickedButton = evt.currentTarget;
    // Проверка, последний ли следующий вопрос
    if (currentQuestionIndex % 10 != 9) {
      nextButton.classList.remove("hide");
    } else {
      updateProgress(10);
      endButton.classList.remove("hide");
    }

    buttons.forEach((otherButton) => {
      if (otherButton !== lastClickedButton) {
        otherButton.style.boxShadow = "none";
      }
    });

    if (lastClickedButton.style.boxShadow == "none" || !lastClickedButton.style.boxShadow) {
      lastClickedButton.style.boxShadow = "0 0 5px 5px #5ca4ff";
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
    endButton.classList.remove("hide");
    updateProgress(10);
  } else {
    current = 100;
    updateProgress(-10);
    endButton.classList.add("hide");
  }
});
