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


playButton.addEventListener("click", function (evt) {
  startPage.classList.add("hide");
  startQuiz.classList.remove("hide");
});

// При клике на кнопку "Начать":
// убирается начаьная панель class="startQuiz"
// добавляется контейнер с карточкой викторины
startButton.addEventListener("click", function (evt) {
  // evt.preventDefault();
  userName = nameId.value;
  if (inputButton.innerHTML == "СОХРАНЕНО!") {
    startQuiz.classList.add("hide");
    nextButton.classList.add("hide");
    chooseTopic.classList.remove("hide");
    exitNext.classList.remove("hide");
  } else {
    modalWindowBack.classList.remove("hide");
  }
});

// кнопка "Начать"
// после нажатия начинается викторина
launchButton.addEventListener("click", function (evt) {
  chooseTopic.classList.add("hide");
  launchButton.classList.add("hide");
  header.classList.remove("hide");
  main.classList.remove("hide");
  footer.classList.remove("hide");
  lastClickedTopic.style.boxShadow = "none";
  console.log(lastClickedTopic);
  buttons.forEach((button) => {
    button.classList.remove("hide");
  });
  setQuestion();
});
