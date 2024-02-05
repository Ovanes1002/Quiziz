const nextButton = document.querySelector(".nextButton"),
endButton           = document.querySelector(".endButton"),
buttons             = document.querySelectorAll(".button"),
points              = document.querySelector(".points"),
firstWriteAnswer    = document.querySelector(".firstWriteAnswer"),
secondWriteAnswer   = document.querySelector(".secondWriteAnswer"),
thirdWriteAnswer    = document.querySelector(".thirdWriteAnswer");

nextButton.addEventListener("click", (evt) => {
  // удаляем тень у каждой кнопки с классом "buttons"
  buttons.forEach((button) => {
    button.style.boxShadow = "none";
  });

  // проверяем, содержит ли последняя кликнутая кнопка класс "true"
  if (
    lastClickedButton !== null &&
    lastClickedButton.classList.contains("true") &&
    points.innerText == "1 балл"
  ) {
    result++; // увеличиваем счетчик на 1
  } else if (
    lastClickedButton !== null &&
    lastClickedButton.classList.contains("true") &&
    points.innerText == "2 балла"
  ) {
    result += 2; // увеличиваем счетчик на 2
  }
  console.log(firstWriteAnswer.value);

  if (firstWriteAnswer.value == "5" && endButton.classList.contains("endButtonSport")) result += 3;
  else if (firstWriteAnswer.value == "18" && endButton.classList.contains("endButtonMusic")) result += 3;
  else if (firstWriteAnswer.value == "284" && endButton.classList.contains("endButtonArt")) result += 3; //
  else if (firstWriteAnswer.value == "1961" && endButton.classList.contains("endButtonHistory")) result += 3; // изменить

  if (secondWriteAnswer.value == "245" && endButton.classList.contains("endButtonSport")) result += 3;
  else if (
    secondWriteAnswer.value.toUpperCase() === "СКРИПКА" &&
    endButton.classList.contains("endButtonMusic")
  )
    result += 3;
  else if (secondWriteAnswer.value.toUpperCase() === "ДАЛИ" && endButton.classList.contains("endButtonArt"))
    result += 3; // изменить
  else if (
    secondWriteAnswer.value.toUpperCase() === "ЯПОНИЯ" &&
    endButton.classList.contains("endButtonHistory")
  )
    result += 3; // изменить

  firstWriteAnswer.value = "";
  secondWriteAnswer.value = "";
  thirdWriteAnswer.value = "";

  if (currentQuestionIndex % 10 != 9) {
    nextButton.classList.remove("hide");
  } else {
    updateProgress(10);
    endButton.classList.remove("hide");
  }

  // if (quizList.length === currentQuestionIndex + 2) {
  //   nextButton.classList.add("hide");
  // }

  if (quizList.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    setQuestion();
  }
  updateProgress(10); // увеличение прогресса на 10%
  nextButton.classList.add("hide");
  console.log(result);
});
