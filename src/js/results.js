menuButton.addEventListener("click", (evt) => {
  startQuiz.classList.remove("hide");
  header.classList.add("hide");
  main.classList.add("hide");
  footer.classList.add("hide");
  exitNext.classList.add("hide");
  finishQuiz.classList.add("hide");
});

// При клике на кнопку "Результаты":
// убирается начальная панель class="startQuiz"
// добавляется таблица с результатами
scoreButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  finishQuiz.classList.add("hide");
  startQuiz.classList.add("hide");
  chooseScoreTopic.classList.remove("hide");
});
