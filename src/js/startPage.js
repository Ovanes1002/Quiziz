const nameId            = document.getElementById("name"),
      closeModalWindow  = document.querySelector(".close"),
      inputButton       = document.querySelector(".inputButton"),
      startButton       = document.querySelector(".startButton"),
      launchButton      = document.querySelector(".launchButton"),

      // стартовая страница
      startPage         = document.querySelector(".startPage");

// При изменении поля ввода, менять текст кнопки submitButton
nameId.addEventListener("input", function (evt) {
  // submitButton.style.backgroundColor = "white";
  inputButton.innerHTML = "СОХРАНИТЬ";
});

let checkInput = function (input) {
	if (input.value.trim().length > 0) {
		input.className = 'active';
	} else {
		input.className = '';
	}
};


// При нажатии на кнопку "СОХРАНИТЬ", менять текст и цвет элемента
inputButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  userName = nameId.value;
  if (userName.trim().length > 0) {
    inputButton.innerHTML = "СОХРАНЕНО!";
  }
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

