
// При изменении поля ввода, менять текст кнопки submitButton
nameId.addEventListener("input", function (evt) {
  // submitButton.style.backgroundColor = "white";
  inputButton.innerHTML = "СОХРАНИТЬ";
});

// let checkInput = function (input) {
// 	if (input.value.trim().length > 0) {
// 		input.className = 'active';
// 	} else {
// 		input.className = '';
// 	}
// };


// При нажатии на кнопку "СОХРАНИТЬ", добавление полю .active если оно не пустое

// inputButton.addEventListener("click", function (evt) {
// 	evt.preventDefault();
// 	userName = nameId.value;
// 	userEmail = emailId.value;
// 	if (userName.trim().length > 0) {
// 		nameId.classList.add = 'active';
// 	} else {
// 		nameId.classList.remove = 'active';
// 	}
// 	if (userEmail.trim().length > 0) {
// 		emailId.classList.add = 'active';
// 	} else {
// 		emailId.classList.remove = 'active';
// 	}
// });


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

