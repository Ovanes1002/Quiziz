menuButton.addEventListener("click", (evt) => {
  startPage.classList.remove("hide");
  header.classList.add("hide");
  main.classList.add("hide");
  footer.classList.add("hide");
  exitNext.classList.add("hide");
  finishQuiz.classList.add("hide");
});

// При клике на кнопку "Результаты":
// убирается начальная панель class="startPage"
// добавляется таблица с результатами
scoreButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  finishQuiz.classList.add("hide");
  startPage.classList.add("hide");
  chooseScoreTopic.classList.remove("hide");
});
