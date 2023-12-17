const nameId            = document.getElementById("name"),
      closeModalWindow  = document.querySelector(".close"),
      inputButton       = document.querySelector(".inputButton"),
      startButton       = document.querySelector(".startButton"),
      launchButton      = document.querySelector(".launchButton"),

     // модальное окно
      modalWindowBack   = document.querySelector(".modalWindowBack"),
      modalWindowFront  = document.querySelector(".modalWindowFront"), // не используется

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
  } else {
    modalWindowBack.classList.remove("hide");
  }
});

// При нажатии на <span> (x), закрыть модальное окно
closeModalWindow.addEventListener("click", function () {
  modalWindowBack.classList.add("hide");
});

// При нажатии за пределами модального окна, закрыть его
window.addEventListener("click", function (evt) {
  if (evt.target == modalWindowBack) {
    modalWindowBack.classList.add("hide");
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
  } else {
    modalWindowBack.classList.remove("hide");
  }
});

