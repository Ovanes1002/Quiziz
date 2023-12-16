menuButton.addEventListener("click", (evt) => {
<<<<<<< HEAD
  startPage.classList.remove("hide");
=======
  startQuiz.classList.remove("hide");
>>>>>>> 2188815121513854e4976749cedda3429ded239c
  header.classList.add("hide");
  main.classList.add("hide");
  footer.classList.add("hide");
  exitNext.classList.add("hide");
  finishQuiz.classList.add("hide");
});

// При клике на кнопку "Результаты":
<<<<<<< HEAD
// убирается начальная панель class="startPage"
=======
// убирается начальная панель class="startQuiz"
>>>>>>> 2188815121513854e4976749cedda3429ded239c
// добавляется таблица с результатами
scoreButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  finishQuiz.classList.add("hide");
<<<<<<< HEAD
  startPage.classList.add("hide");
=======
  startQuiz.classList.add("hide");
>>>>>>> 2188815121513854e4976749cedda3429ded239c
  chooseScoreTopic.classList.remove("hide");
});
