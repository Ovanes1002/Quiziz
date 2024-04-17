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
    ((thirdWriteAnswer.value.toUpperCase().trim() === "МЕССИ" ||
      thirdWriteAnswer.value.toUpperCase().trim() === "МЭССИ") &&
      lastClickedTopic == "спорт") ||
    ((thirdWriteAnswer.value.toUpperCase().trim() === "РЕГГИ" ||
      thirdWriteAnswer.value.toUpperCase().trim() === "РЭГГИ") &&
      lastClickedTopic == "музыка") ||
    ((thirdWriteAnswer.value.toUpperCase().trim() === "ИНТЕРСТЕЛЛАР" ||
      thirdWriteAnswer.value.toUpperCase().trim() === "ИНТЕРСТЕЛАР" ||
      thirdWriteAnswer.value.toUpperCase().trim() === "ИНТЕРСТЭЛАР" ||
      thirdWriteAnswer.value.toUpperCase().trim() === "ИНТЕРСТЭЛЛАР") &&
      lastClickedTopic == "искусство") ||
    ((thirdWriteAnswer.value.toUpperCase().trim() === "ЕЛЬЦИН" ||
      thirdWriteAnswer.value.toUpperCase().trim() === "ЕЛЬЦЫН") &&
      lastClickedTopic == "история")
  ) {
    thirdWriteAnswer.classList.add("true");
    // thirdWriteAnswer.style.backgroundColor = "green";
    quizList[currentQuestionIndex].isUserCorrect = true;
    result += 4;
  } else {
    // thirdWriteAnswer.style.backgroundColor = "red";
    quizList[currentQuestionIndex].isUserCorrect = false;
  }
  quizList[currentQuestionIndex].userValue = thirdWriteAnswer.value;
  thirdWriteAnswer.value = "";

  sessionStorage.setItem("quizList", JSON.stringify(quizList));
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
  firstWriteAnswer.style.backgroundColor = "white";
  secondWriteAnswer.style.backgroundColor = "white";
  thirdWriteAnswer.style.backgroundColor = "white";
  firstWriteAnswer.classList.add("hide");
  secondWriteAnswer.classList.add("hide");
  thirdWriteAnswer.classList.add("hide");

  // submitButton.value = "Сохранить";
  // submitButton.style.backgroundColor = "white";
  result = 0;
  buttons.forEach((button) => {
    button.style.boxShadow = "none";
  });
});
