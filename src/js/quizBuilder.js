const quizName = document.querySelector(".quizName"),
  startMakeQuiz = document.querySelector(".startMakeQuiz"),
  writeInput = document.querySelector(".writeInput"),
  quizCard = document.querySelector(".quizCard"),
  questionMakeButton = document.querySelector(".questionMakeButton"),
  questionAddButton = document.querySelector(".questionAddButton"),
  selectElement = document.getElementById("questionDifficulty"),
  questionType = document.getElementById("questionType"),
  questionBlock = document.querySelector(".questionBlock"),
  radioInput = document.querySelectorAll(".radioInput");

let writeInputValue,
  selectedOption,
  optionValue = 1,
  clickedRadio;

// // Добавляем обработчик события change, который будет вызываться при изменении выбранной опции
// selectElement.addEventListener("change", function (event) {
//   // Получаем выбранную опцию
//   selectedOption = selectElement.options[selectElement.selectedIndex];

//   // Получаем значение выбранной опции и сохраняем его в переменной optionValue
//   optionValue = selectedOption.value;

//   if (clickedRadio) {
//     clickedRadio.setAttribute("value", optionValue);
//   }
//   // Выводим значение в консоль (это можно изменить на ваше действие с полученным значением)
//   console.log("Выбранное значение:", optionValue);
// });

// // Перебираем все блоки и для каждого добавляем слушатель события клика
// radioInput.forEach(function (answer) {
//   answer.addEventListener("click", function (event) {
//     clickedRadio = event.target;
//     // Перебираем все блоки и удаляем атрибут value у всех элементов, кроме того, на который был совершен клик
//     radioInput.forEach(function (item) {
//       if (item !== clickedRadio) {
//         item.setAttribute("value", "");
//       }
//     });

//     // Проверяем, имеет ли элемент атрибут value
//     if (clickedRadio.hasAttribute("value")) {
//       // Изменяем значение атрибута value на 'новое значение'
//       clickedRadio.setAttribute("value", optionValue);
//     } else {
//       console.log("У данного элемента нет атрибута value");
//     }
//     console.log(clickedRadio);
//   });
// });

// questionMakeButton.addEventListener("click", () => {
//   const selectedOption = questionType.options[questionType.selectedIndex].value;

//   let htmlToAdd = "";

//   if (selectedOption === "textAnswer") {
//     htmlToAdd = `
//                       <div class="firstAnswer">
//                           <label class="radioLabel">
//                               <input type="radio" class="radioInput" name="radioGroup">
//                               <span class="radioSpan"></span>
//                           </label>
//                           <textarea name="firstTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
//                       </div>
//                       <div class="secondAnswer">
//                           <label class="radioLabel">
//                               <input type="radio" class="radioInput" name="radioGroup">
//                               <span class="radioSpan"></span>
//                           </label>
//                           <textarea name="secondTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
//                       </div>
//                       <div class="thirdAnswer">
//                           <label class="radioLabel">
//                               <input type="radio" class="radioInput" name="radioGroup">
//                               <span class="radioSpan"></span>
//                           </label>
//                           <textarea name="thirdTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
//                       </div>
//                       <div class="fourthAnswer">
//                           <label class="radioLabel">
//                               <input type="radio" class="radioInput" name="radioGroup">
//                               <span class="radioSpan"></span>
//                           </label>
//                           <textarea name="fourthTextarea" cols="30" rows="3" maxlength="500" required autocomplete="off"></textarea>
//                       </div>
//                   `;
//   } else if (selectedOption === "imageAnswer") {
//     htmlToAdd = '<div class="imageAnswerBlock">Выбрать 1 изображение из 4</div>';
//   } else if (selectedOption === "writeAnswer") {
//     htmlToAdd = '<div class="writeAnswerBlock">Вписать ответ</div>';
//   } else if (selectedOption === "writeAudioAnswer") {
//     htmlToAdd = '<div class="writeAudioAnswerBlock">Вписать ответ по аудио</div>';
//   }

//   questionBlock.innerHTML = htmlToAdd;
// });

// writeInput.addEventListener("input", () => {
//   if (writeInput.value.trim().length !== 0) {
//     startMakeQuiz.classList.remove("hide");
//   } else {
//     startMakeQuiz.classList.add("hide");
//   }
// });

// startMakeQuiz.addEventListener("click", (evt) => {
//   writeInputValue = writeInput.value;
//   quizName.classList.add("hide");
//   addNewQuiz(writeInputValue);
//   console.log(quizzes);
//   quizCard.classList.remove("hide");
// });

// function addNewQuiz(nameOfQuiz) {
//   // 1. Генерация уникального идентификатора для новой викторины
//   const newQuizId = crypto.randomUUID();

//   // 2.Создание объекта новой викторины с её именем и пустым массивом для вопросов
//   const newQuiz = {
//     quizName: nameOfQuiz,
//     quizList: [],
//   };

//   // 3. Добавление объекта новой викторины в объект quizzes
//   quizzes[newQuizId] = newQuiz;
//   console.log(quizzes);
// }
