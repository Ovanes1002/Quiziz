const nextButton = document.querySelector(".nextButton"),
exitNext            = document.querySelector(".exitNext"),
startPage           = document.querySelector(".startPage"),
chooseScoreTopic    = document.querySelector(".choose_score_topic");


// При изменении поля ввода, менять текст кнопки submitButton
nameId.addEventListener("input", function (evt) {
  // submitButton.style.backgroundColor = "white";
  inputButton.innerHTML = "СОХРАНИТЬ";
});

// При клике на кнопку "Начать":
// убирается начаьная панель class="startPage"
// добавляется контейнер с карточкой викторины
startButton.addEventListener("click", function (evt) {
	// evt.preventDefault();
	userName = nameId.value;
	if (inputButton.innerHTML == "СОХРАНЕНО!") {
		startPage.classList.add("hide");
		nextButton.classList.add("hide");
		chooseTopic.classList.remove("hide");
		exitNext.classList.remove("hide");
	}
});

