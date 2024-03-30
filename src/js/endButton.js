const header = document.getElementById("header"),
  footer = document.getElementById("footer"),
  exitNext = document.querySelector(".exitNext"),
  endButtonForm = document.querySelector(".endButtonForm"),
  tableSport = document.querySelector(".tableSport"),
  tableMusic = document.querySelector(".tableMusic"),
  tableArt = document.querySelector(".tableArt"),
  tableHistory = document.querySelector(".tableHistory");

// в зависимости от того какая кнопка "Завершить" нажата та таблица и будет изменяться
// добавить 4 разных класса кнопке завершить
endButton.addEventListener("click", (evt) => {
  if (
    ((thirdWriteAnswer.value.toUpperCase() === "МЕССИ" || thirdWriteAnswer.value.toUpperCase() === "МЭССИ") &&
      lastClickedTopic == "спорт") ||
    ((thirdWriteAnswer.value.toUpperCase() === "РЕГГИ" || thirdWriteAnswer.value.toUpperCase() === "РЭГГИ") &&
      lastClickedTopic == "музыка") ||
    ((thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЕЛЛАР" ||
      thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЕЛАР" ||
      thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЭЛАР" ||
      thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЭЛЛАР") &&
      lastClickedTopic == "искусство") ||
    ((thirdWriteAnswer.value.toUpperCase() === "ЕЛЬЦИН" ||
      thirdWriteAnswer.value.toUpperCase() === "ЕЛЬЦЫН") &&
      lastClickedTopic == "история")
  ) {
    thirdWriteAnswer.classList.add("true");
    result += 4;
  }

  audioSport.classList.add("hide");
  audioMusic.classList.add("hide");
  audioArt.classList.add("hide");
  audioHistory.classList.add("hide");

  header.classList.add("hide");
  main.classList.add("hide");
  footer.classList.add("hide");
  exitNext.classList.add("hide");
  nextButton.classList.add("hide");
  endButton.value = result;
  console.log("result is " + endButton.value);
  playerResult.innerText = userName + ", Ваш результат:" + " " + result;

  current = 0;
  points.innerText = "1 балл";
  progress.style.width = `${current}%`;
  endButtonForm.classList.add("hide");
  endButton.classList.add("hide");
  // nameId.value = "";
  firstWriteAnswer.value = "";
  secondWriteAnswer.value = "";
  thirdWriteAnswer.value = "";
  firstWriteAnswer.classList.add("hide");
  secondWriteAnswer.classList.add("hide");
  thirdWriteAnswer.classList.add("hide");

  // submitButton.value = "Сохранить";
  // submitButton.style.backgroundColor = "white";
  result = 0;
  buttons.forEach((button) => {
    button.style.boxShadow = "none";
  });
  main.style.height = "";
  answerButtons.style.margin = "40px auto";
  answerButtons.style.alignItems = "normal";
  answerButtons.style.flexDirection = "row";
});
