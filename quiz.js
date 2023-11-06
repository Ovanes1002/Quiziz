const startButton = document.querySelector(".startButton");
const nextButton = document.querySelector(".nextButton");
const backButton = document.querySelector(".backButton");
const backButtonSport = document.querySelector(".backButtonSport");
const backButtonMusic = document.querySelector(".backButtonMusic");
const backButtonArt = document.querySelector(".backButtonArt");
const backButtonHistory = document.querySelector(".backButtonHistory");
const menuButton = document.querySelector(".menuButton");
const launchButton = document.querySelector(".launchButton");
const quitQuiz = document.querySelector(".quitQuiz");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const exitNext = document.querySelector(".exitNext");
const main = document.querySelector(".card");
const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-buttons"); // не используется
const buttons = document.querySelectorAll(".button");
const scoreButton = document.querySelector(".score__button");
const scoreSport = document.querySelector(".score__sport");
const scoreMusic = document.querySelector(".score__music");
const scoreArt = document.querySelector(".score__art");
const scoreHistory = document.querySelector(".score__history");
const count = document.querySelector(".questionNumber");
const points = document.querySelector(".points");
const start = document.querySelector(".start");
const playerName = document.getElementById("playerName"); // не используется
const finish = document.querySelector(".finish");
const playerResult = document.querySelector(".playerResult");
const nameInput = document.querySelector(".nameInput"); // не используется
const nameId = document.getElementById("name");
const submitButton = document.querySelector(".submit");
const firstWriteAnswer = document.querySelector(".firstWriteAnswer");
const secondWriteAnswer = document.querySelector(".secondWriteAnswer");
const thirdWriteAnswer = document.querySelector(".thirdWriteAnswer");
const audioSport = document.querySelector(".audioSport");
const audioMusic = document.querySelector(".audioMusic");
const audioArt = document.querySelector(".audioArt");
const audioHistory = document.querySelector(".audioHistory");

const endButton = document.querySelector(".endButton");
const tableSport = document.querySelector(".tableSport");
const tableMusic = document.querySelector(".tableMusic");
const tableArt = document.querySelector(".tableArt");
const tableHistory = document.querySelector(".tableHistory");

// const tableBody = document.querySelector("tbody");
const modalWindowBack = document.querySelector(".modalWindowBack");
const modalWindowFront = document.querySelector(".modalWindowFront"); // не используется
const closeModalWindow = document.querySelector(".close");
const chooseScoreTopic = document.querySelector(".choose_score_topic");
const chooseTopic = document.querySelector(".choose_topic");
const topics = document.querySelectorAll(".topic");
const scoreTopics = document.querySelectorAll(".score_topic");
const sportTopic = document.querySelector(".score_sport_topic"); // не используется
const musicTopic = document.querySelector(".score_music_topic"); // не используется
const artTopic = document.querySelector(".score_art_topic"); // не используется
const historyTopic = document.querySelector(".score_history_topic"); // не используется

let currentQuestionIndex;
let i = 0;
let result = 0; // начальное значение счетчика
let lastClickedButton = null; // переменная для хранения последней кликнутой кнопки
let lastClickedTopic = null;
let clck = null;

let userName = "";

const progress = document.getElementById("progressBar");
const max = 100; // максимальное значение
let current = 0; // текущее значение

function updateProgress(value) {
  current += value;
  if (current >= max) {
    current = max;
  }
  progress.style.width = `${(current / max) * 100}%`;
}

// Если данные есть в localStorage, обновляем таблицу
if (localStorage.getItem("tableSportData")) {
  tableSport.innerHTML = localStorage.getItem("tableSportData");
}

if (localStorage.getItem("tableMusicData")) {
  tableMusic.innerHTML = localStorage.getItem("tableMusicData");
}

if (localStorage.getItem("tableArtData")) {
  tableArt.innerHTML = localStorage.getItem("tableArtData");
}

if (localStorage.getItem("tableHistoryData")) {
  tableHistory.innerHTML = localStorage.getItem("tableHistoryData");
}

// Установка вопроса
function setQuestion() {
  showQuestion(quizList[currentQuestionIndex]);
}

//  Показ вопроса с выбором ответов
function showQuestion(question) {
  count.innerText = `${(currentQuestionIndex % 10) + 1}` + " / 10";
  questionElement.innerText = question.question; // установка вопроса карточки

  if (currentQuestionIndex % 10 < 7) {
    question.answers.forEach((answer) => {
      if (currentQuestionIndex % 10 < 4) {
        // все текстовые вопросы на выбор 1 из 4
        buttons[i].innerText = answer.text;
      } else if (currentQuestionIndex % 10 < 7) {
        points.innerText = `2 балла`;
        buttons[i].innerHTML = `<img src="${answer.text}" alt="фото викторины" />`;
      }

      if (answer.correct) {
        buttons[i].classList.add("true");
        // Замечание: по сути данное добавление класса нужно только для отслеживания правильного ответа,
        // чтоб вести счёт игрока, стили в данном случае применятся не будут
        // Лучше использовать button.dataset.correct = answer.correct
      } else {
        buttons[i].classList.remove("true");
      }

      i++;
    });
  } else if (currentQuestionIndex % 10 < 9) {
    points.innerText = `3 балла`;
    buttons.forEach((button) => {
      button.classList.add("hide");
    });
    main.style.height = "220px";
    answerButtons.style.margin = "0";
    // answerButtons.style.marginBottom = "-20px";

    if (currentQuestionIndex % 10 == 7) {
      firstWriteAnswer.classList.remove("hide");
      secondWriteAnswer.classList.add("hide");
      thirdWriteAnswer.classList.add("hide");
    } else if (currentQuestionIndex % 10 == 8) {
      firstWriteAnswer.classList.add("hide");
      secondWriteAnswer.classList.remove("hide");
      thirdWriteAnswer.classList.add("hide");
    }
    answerButtons.style.alignItems = "center";
  } else if (currentQuestionIndex % 10 == 9) {
    points.innerText = `4 балла`;
    firstWriteAnswer.classList.add("hide");
    secondWriteAnswer.classList.add("hide");
    if (endButton.classList.contains("endButtonSport")) audioSport.classList.remove("hide");
    else if (endButton.classList.contains("endButtonMusic")) audioMusic.classList.remove("hide");
    else if (endButton.classList.contains("endButtonArt")) audioArt.classList.remove("hide");
    else if (endButton.classList.contains("endButtonHistory")) audioHistory.classList.remove("hide");
    thirdWriteAnswer.classList.remove("hide");
    answerButtons.style.flexDirection = "column";
  }

  i = 0;
}

topics.forEach((topic) => {
  topic.addEventListener("click", (evt) => {
    // удаляем тень у каждой кнопки с классом "buttons"
    topics.forEach((topic) => {
      topic.style.boxShadow = "none";
    });
    // сохраняем ссылку на последнюю кликнутую кнопку
    lastClickedTopic = evt.currentTarget;

    launchButton.classList.remove("hide");

    if (lastClickedTopic.classList.contains("sport_topic")) {
      currentQuestionIndex = 0;
      endButton.classList.add("endButtonSport");
      endButton.classList.remove("endButtonMusic");
      endButton.classList.remove("endButtonArt");
      endButton.classList.remove("endButtonHistory");
    } else if (lastClickedTopic.classList.contains("music_topic")) {
      currentQuestionIndex = 10;
      endButton.classList.remove("endButtonSport");
      endButton.classList.add("endButtonMusic");
      endButton.classList.remove("endButtonArt");
      endButton.classList.remove("endButtonHistory");
    } else if (lastClickedTopic.classList.contains("art_topic")) {
      currentQuestionIndex = 20;
      endButton.classList.remove("endButtonSport");
      endButton.classList.remove("endButtonMusic");
      endButton.classList.add("endButtonArt");
      endButton.classList.remove("endButtonHistory");
    } else if (lastClickedTopic.classList.contains("history_topic")) {
      currentQuestionIndex = 30;
      endButton.classList.remove("endButtonSport");
      endButton.classList.remove("endButtonMusic");
      endButton.classList.remove("endButtonArt");
      endButton.classList.add("endButtonHistory");
    }

    topics.forEach((otherTopic) => {
      if (otherTopic !== lastClickedTopic) {
        otherTopic.style.boxShadow = "none";
      }
    });

    if (lastClickedTopic.style.boxShadow == "none" || !lastClickedTopic.style.boxShadow) {
      lastClickedTopic.style.boxShadow = "0 0 5px 5px #5ca4ff";
    }
  });
});

scoreTopics.forEach((scoreTopic) => {
  scoreTopic.addEventListener("click", (evt) => {
    clck = evt.currentTarget;

    chooseScoreTopic.classList.add("hide");

    scoreSport.classList.add("hide");
    scoreMusic.classList.add("hide");
    scoreArt.classList.add("hide");
    scoreHistory.classList.add("hide");

    if (clck.classList.contains("score_sport_topic")) scoreSport.classList.remove("hide");
    else if (clck.classList.contains("score_music_topic")) scoreMusic.classList.remove("hide");
    else if (clck.classList.contains("score_art_topic")) scoreArt.classList.remove("hide");
    else if (clck.classList.contains("score_history_topic")) scoreHistory.classList.remove("hide");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    // удаляем тень у каждой кнопки с классом "buttons"
    buttons.forEach((button) => {
      button.style.boxShadow = "none";
    });
    // сохраняем ссылку на последнюю кликнутую кнопку
    lastClickedButton = evt.currentTarget;
    // Проверка, последний ли следующий вопрос
    if (currentQuestionIndex % 10 != 9) {
      nextButton.classList.remove("hide");
    } else {
      updateProgress(10);
      endButton.classList.remove("hide");
    }

    buttons.forEach((otherButton) => {
      if (otherButton !== lastClickedButton) {
        otherButton.style.boxShadow = "none";
      }
    });

    if (lastClickedButton.style.boxShadow == "none" || !lastClickedButton.style.boxShadow) {
      lastClickedButton.style.boxShadow = "0 0 5px 5px #5ca4ff";
    }
  });
});

// При клике на кнопку "Начать":
// убирается начаьная панель class="start"
// добавляется контейнер с карточкой викторины
startButton.addEventListener("click", function (evt) {
  // evt.preventDefault();
  userName = nameId.value;
  if (submitButton.style.backgroundColor == "lightgreen") {
    start.classList.add("hide");
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

// chooseTopic.addEventListener("click", function (evt) {
//   if (evt.target == sportTopic) {
//     modalWindowBack.classList.add("hide");
//   }
//   if (evt.target == musicTopic) {
//     modalWindowBack.classList.add("hide");
//   }
//   if (evt.target == artTopic) {
//     modalWindowBack.classList.add("hide");
//   }
//   if (evt.target == history_topic) {
//     modalWindowBack.classList.add("hide");
//   }
// });

firstWriteAnswer.addEventListener("input", function (evt) {
  if (firstWriteAnswer.value.trim().length !== 0) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.classList.add("hide");
  }
});

secondWriteAnswer.addEventListener("input", function (evt) {
  if (secondWriteAnswer.value.trim().length !== 0) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.classList.add("hide");
  }
});

thirdWriteAnswer.addEventListener("input", function (evt) {
  if (thirdWriteAnswer.value.trim().length !== 0) {
    endButton.classList.remove("hide");
    updateProgress(10);
  } else {
    current = 100;
    updateProgress(-10);
    endButton.classList.add("hide");
  }
});

// firstWriteAnswer.addEventListener("input", function (evt) {
//   if (firstWriteAnswer.value.trim().length !== 0 && currentQuestionIndex % 10 != 9) {
//     nextButton.classList.remove("hide");
//   } else if (firstWriteAnswer.value.trim().length !== 0 && currentQuestionIndex % 10 == 9) {
//     nextButton.classList.add("hide");
//     updateProgress(10);
//     endButton.classList.remove("hide");
//   } else {
//     nextButton.classList.add("hide");
//   }

// if (currentQuestionIndex % 10 != 9) {
//   nextButton.classList.remove("hide");
// } else {
//   nextButton.classList.add("hide");
//   endButton.classList.remove("hide");
// }

// if (currentQuestionIndex % 10 != 9) {
//   nextButton.classList.remove("hide");
// } else {
//   nextButton.classList.add("hide");
// updateProgress(10);
// endButton.classList.remove("hide");
// }

// });

quitQuiz.addEventListener("click", function (evt) {
  if (lastClickedTopic != null) lastClickedTopic.style.boxShadow = "none";

  if (lastClickedButton != null) lastClickedButton.style.boxShadow = "none";

  current = 0;
  updateProgress(0);
  firstWriteAnswer.value = "";
  secondWriteAnswer.value = "";
  thirdWriteAnswer.value = "";
  start.classList.remove("hide");
  nextButton.classList.remove("hide");
  launchButton.classList.add("hide");
  endButton.classList.add("hide");
  chooseTopic.classList.add("hide");
  header.classList.add("hide");
  main.classList.add("hide");
  footer.classList.add("hide");
  exitNext.classList.add("hide");
  // buttons.forEach((button) => {
  //   button.classList.remove("hide");
  // });
  firstWriteAnswer.classList.add("hide");
  secondWriteAnswer.classList.add("hide");
  thirdWriteAnswer.classList.add("hide");
  audioSport.classList.add("hide");
  audioMusic.classList.add("hide");
  audioArt.classList.add("hide");
  audioHistory.classList.add("hide");

  if (endButton.classList.contains("endButtonSport")) endButton.classList.remove("endButtonSport");
  else if (endButton.classList.contains("endButtonMusic")) endButton.classList.remove("endButtonMusic");
  else if (endButton.classList.contains("endButtonArt")) endButton.classList.remove("endButtonArt");
  else if (endButton.classList.contains("endButtonHistory")) endButton.classList.remove("endButtonHistory");

  main.style.height = "";
  answerButtons.style.margin = "40px auto";
  answerButtons.style.alignItems = "normal";
  answerButtons.style.flexDirection = "row";
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

backButton.addEventListener("click", (evt) => {
  chooseScoreTopic.classList.add("hide");
  start.classList.remove("hide");
  // console.log(1);
  // header.classList.add("hide");
  // main.classList.add("hide");
  // footer.classList.add("hide");
  // exitNext.classList.add("hide");
  // finish.classList.add("hide");
  // console.log(2);

  // scoreSport.classList.add("hide"); // работает
  // scoreMusic.classList.add("hide");
  // console.log(3);

  // scoreArt.classList.add("hide");
  // scoreHistory.classList.add("hide");

  // chooseScoreTopic.classList.remove("hide");
});

backButtonSport.addEventListener("click", (evt) => {
  scoreSport.classList.add("hide");
  chooseScoreTopic.classList.remove("hide");
});

backButtonMusic.addEventListener("click", (evt) => {
  scoreMusic.classList.add("hide");
  chooseScoreTopic.classList.remove("hide");
});

backButtonArt.addEventListener("click", (evt) => {
  scoreArt.classList.add("hide");
  chooseScoreTopic.classList.remove("hide");
});

backButtonHistory.addEventListener("click", (evt) => {
  scoreHistory.classList.add("hide");
  chooseScoreTopic.classList.remove("hide");
});

menuButton.addEventListener("click", (evt) => {
  start.classList.remove("hide");
  header.classList.add("hide");
  main.classList.add("hide");
  footer.classList.add("hide");
  exitNext.classList.add("hide");
  finish.classList.add("hide");
});

// в зависимости от того какая кнопка "Завершить" нажата та таблица и будет изменяться
// добавить 4 разных класса кнопке завершить
endButton.addEventListener("click", (evt) => {
  // // проверяем, содержит ли последняя кликнутая кнопка класс "true"
  // if (
  //   lastClickedButton !== null &&
  //   lastClickedButton.classList.contains("true") &&
  //   points.innerText == "1 балл"
  // ) {
  //   result++; // увеличиваем счетчик на 1
  // } else if (
  //   lastClickedButton !== null &&
  //   lastClickedButton.classList.contains("true") &&
  //   points.innerText == "2 балла"
  // ) {
  //   result += 2; // увеличиваем счетчик на 2
  // }
  if (
    (thirdWriteAnswer.value.toUpperCase() === "МЕССИ" || thirdWriteAnswer.value.toUpperCase() === "МЭССИ") &&
    endButton.classList.contains("endButtonSport")
  ) {
    result += 4;
  } else if (
    (thirdWriteAnswer.value.toUpperCase() === "РЕГГИ" || thirdWriteAnswer.value.toUpperCase() === "РЭГГИ") &&
    endButton.classList.contains("endButtonMusic")
  ) {
    result += 4;
  } else if (
    (thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЕЛЛАР" ||
      thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЕЛАР" ||
      thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЭЛАР" ||
      thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЭЛЛАР") &&
    endButton.classList.contains("endButtonArt")
  ) {
    result += 4;
  } else if (
    (thirdWriteAnswer.value.toUpperCase() === "ЕЛЬЦИН" ||
      thirdWriteAnswer.value.toUpperCase() === "ЕЛЬЦЫН") &&
    endButton.classList.contains("endButtonHistory")
  ) {
    result += 4;
  }
  audioSport.classList.add("hide");
  audioMusic.classList.add("hide");
  audioArt.classList.add("hide");
  audioHistory.classList.add("hide");

  header.classList.add("hide");
  main.classList.add("hide");
  footer.classList.add("hide");
  exitNext.classList.add("hide");
  nextButton.classList.add("hide");
  finish.classList.remove("hide");
  playerResult.innerText = userName + ", Ваш результат:" + " " + result;

  const newRow = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = userName;
  const resultCell = document.createElement("td");
  resultCell.textContent = result;
  newRow.appendChild(nameCell);
  newRow.appendChild(resultCell);

  if (endButton.classList.contains("endButtonSport")) {
    tableSport.appendChild(newRow);
    // Сохраняем данные таблицы tableSport в localStorage
    localStorage.setItem("tableSportData", tableSport.innerHTML);
    // Получаем все строки таблицы
    const tableRows = document.querySelectorAll(".tableSport tr");
    // Преобразуем список строк таблицы в массив для удобства сортировки
    const rowsArray = Array.from(tableRows);
    console.log(rowsArray);
    // Сортируем массив строк в порядке убывания по содержимому второй ячейки
    rowsArray.sort((rowA, rowB) => {
      const cellA = Number(rowA.cells[1].textContent);
      const cellB = Number(rowB.cells[1].textContent);
      return cellB - cellA;
    });

    // Очищаем таблицу от всех строк
    tableSport.innerHTML = ``;

    // Добавляем строки обратно в таблицу в отсортированном порядке
    rowsArray.forEach((row) => {
      tableSport.appendChild(row);
    });
  } else if (endButton.classList.contains("endButtonMusic")) {
    tableMusic.appendChild(newRow);
    // Сохраняем данные таблицы tableMusic в localStorage
    localStorage.setItem("tableMusicData", tableMusic.innerHTML);
    // Получаем все строки таблицы
    const tableRows = document.querySelectorAll(".tableMusic tr");
    // Преобразуем список строк таблицы в массив для удобства сортировки
    const rowsArray = Array.from(tableRows);

    // Сортируем массив строк в порядке убывания по содержимому второй ячейки
    rowsArray.sort((rowA, rowB) => {
      const cellA = Number(rowA.cells[1].textContent);
      const cellB = Number(rowB.cells[1].textContent);
      return cellB - cellA;
    });

    // Очищаем таблицу от всех строк
    tableMusic.innerHTML = ``;

    // Добавляем строки обратно в таблицу в отсортированном порядке
    rowsArray.forEach((row) => {
      tableMusic.appendChild(row);
    });
  } else if (endButton.classList.contains("endButtonArt")) {
    tableArt.appendChild(newRow);
    // Сохраняем данные таблицы tableArt в localStorage
    localStorage.setItem("tableArtData", tableArt.innerHTML);
    // Получаем все строки таблицы
    const tableRows = document.querySelectorAll(".tableArt tr");
    // Преобразуем список строк таблицы в массив для удобства сортировки
    const rowsArray = Array.from(tableRows);

    // Сортируем массив строк в порядке убывания по содержимому второй ячейки
    rowsArray.sort((rowA, rowB) => {
      const cellA = Number(rowA.cells[1].textContent);
      const cellB = Number(rowB.cells[1].textContent);
      return cellB - cellA;
    });

    // Очищаем таблицу от всех строк
    tableArt.innerHTML = ``;

    // Добавляем строки обратно в таблицу в отсортированном порядке
    rowsArray.forEach((row) => {
      tableArt.appendChild(row);
    });
  } else if (endButton.classList.contains("endButtonHistory")) {
    tableHistory.appendChild(newRow);
    // Сохраняем данные таблицы tableHistory в localStorage
    localStorage.setItem("tableHistoryData", tableHistory.innerHTML);
    // Получаем все строки таблицы
    const tableRows = document.querySelectorAll(".tableHistory tr");
    // Преобразуем список строк таблицы в массив для удобства сортировки
    const rowsArray = Array.from(tableRows);

    // Сортируем массив строк в порядке убывания по содержимому второй ячейки
    rowsArray.sort((rowA, rowB) => {
      const cellA = Number(rowA.cells[1].textContent);
      const cellB = Number(rowB.cells[1].textContent);
      return cellB - cellA;
    });

    // Очищаем таблицу от всех строк
    tableHistory.innerHTML = ``;

    // Добавляем строки обратно в таблицу в отсортированном порядке
    rowsArray.forEach((row) => {
      tableHistory.appendChild(row);
    });
  }

  // // Сохраняем данные таблицы в localStorage
  // localStorage.setItem("tableSportData", tableSport.innerHTML);

  current = 0;
  points.innerText = "1 балл";
  progress.style.width = `${current}%`;
  endButton.classList.add("hide");
  // nameId.value = "";
  firstWriteAnswer.value = "";
  secondWriteAnswer.value = "";
  thirdWriteAnswer.value = "";
  firstWriteAnswer.classList.add("hide");
  secondWriteAnswer.classList.add("hide");
  thirdWriteAnswer.classList.add("hide");

  if (endButton.classList.contains("endButtonSport")) {
    endButton.classList.remove("endButtonSport");
  } else if (endButton.classList.contains("endButtonMusic")) {
    endButton.classList.remove("endButtonMusic");
  } else if (endButton.classList.contains("endButtonArt")) {
    endButton.classList.remove("endButtonArt");
  } else if (endButton.classList.contains("endButtonHistory")) {
    endButton.classList.remove("endButtonHistory");
  }

  // submitButton.value = "Сохранить";
  // submitButton.style.backgroundColor = "white";
  result = 0;
  buttons.forEach((button) => {
    button.style.boxShadow = "none";
  });
  main.style.height = "";
  answerButtons.style.margin = "40px auto";
  answerButtons.style.alignItems = "normal";
  answerButtons.style.flexDirection = "row";
});

// При изменении поля ввода, менять текст кнопки submitButton
nameId.addEventListener("input", function (evt) {
  submitButton.style.backgroundColor = "white";
  submitButton.value = "Сохранить";
});

// При нажатии на input type="submit", менять текст и цвет элемента
document.addEventListener("submit", function (evt) {
  evt.preventDefault();
  userName = nameId.value;
  if (userName.trim().length >= 1) {
    submitButton.value = "Сохранено";
    submitButton.style.backgroundColor = "lightgreen";
  } else {
    modalWindowBack.classList.remove("hide");
  }
});

// При клике на кнопку "Результаты":
// убирается начальная панель class="start"
// добавляется таблица с результатами
scoreButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  finish.classList.add("hide");
  start.classList.add("hide");
  chooseScoreTopic.classList.remove("hide");
});

const quizList = [
  {
    question: "Какая команда выиграла Чемпионат мира по футболу 2018 года?",
    answers: [
      { text: "Франция", correct: true },
      { text: "Бразилия", correct: false },
      { text: "Аргентина", correct: false },
      { text: "Германия", correct: false },
    ],
  },
  {
    question: "Какая страна является рекордсменом по количеству побед на Летних Олимпийских играх?",
    answers: [
      { text: "Россия", correct: false },
      { text: "США", correct: true },
      { text: "Китай", correct: false },
      { text: "Великобритания", correct: false },
    ],
  },
  {
    question: "Какая команда выиграла Лигу чемпионов УЕФА в футболе в сезоне 2020-2021?",
    answers: [
      { text: "Челси", correct: true },
      { text: "Манчестер Сити", correct: false },
      { text: "Пари Сен-Жермен", correct: false },
      { text: "Бавария Мюнхен", correct: false },
    ],
  },
  {
    question: "Какая страна является рекордсменом по количеству побед на Чемпионатах мира по хоккею?",
    answers: [
      { text: "Канада", correct: false },
      { text: "Чехия/Чехословакия", correct: false },
      { text: "Швеция", correct: false },
      { text: "СССР/Россия", correct: true },
    ],
  },
  {
    question: "Кто является обладателем наибольшего количества побед в Гран-при Формулы-1?",
    answers: [
      { text: "images/sport/Хэмилтон.jpg", correct: true },
      { text: "images/sport/Феттель.jpeg", correct: false },
      { text: "images/sport/Сенна.jpg", correct: false },
      { text: "images/sport/Шумахер.jpg", correct: false },
    ],
  },
  {
    question:
      "Кто является обладателем наибольшего количества побед на турнирах 'Уимблдон' в мужском одиночном разряде?",
    answers: [
      { text: "images/sport/Надаль.jpg", correct: false },
      { text: "images/sport/Джокович.jpg", correct: false },
      { text: "images/sport/Федерер.jpg", correct: true },
      { text: "images/sport/Маррей.jpg", correct: false },
    ],
  },
  {
    question:
      "Какой баскетболист является рекордсменом по наибольшему количеству набранных очков в Национальной баскетбольной ассоциации (НБА)?",
    answers: [
      { text: "images/sport/Джордан.jpg", correct: false },
      { text: "images/sport/Джеймс.jpg", correct: false },
      { text: "images/sport/Абдул-Джаббар.jpg", correct: true },
      { text: "images/sport/Мэлоун.jpg", correct: false },
    ],
  },
  {
    question: "Сколько раз (число) Футбольная сборная Бразилии становилась чемпионом мира по футболу?",
    // answers: [{}, {}, {}, {}],
  },
  {
    question:
      "Какой результат (число в сантиметрах) является мировым рекордом по прыжкам в высоту в лёгкой атлетике среди мужчин?",
    // answers: [{}, {}, {}, {}],
  },
  {
    question: "Напишите фамилию спортсмена, чья запись голоса представлена ниже",
    // answers: [{}, {}, {}, {}],
  },
  {
    question: "Кто исполняет песню 'Shape of You'?",
    answers: [
      { text: "Justin Bieber", correct: false },
      { text: "Bruno Mars", correct: false },
      { text: "Taylor Swift", correct: false },
      { text: "Ed Sheeran", correct: true },
    ],
  },
  {
    question: "Какая группа исполняет песню 'Bohemian Rhapsody'?",
    answers: [
      { text: "The Beatles", correct: false },
      { text: "Queen", correct: true },
      { text: "Led Zeppelin", correct: false },
      { text: "AC/DC", correct: false },
    ],
  },
  {
    question: "Какой музыкальный стиль ассоциируется с исполнителями Elvis Presley и Jerry Lee Lewis?",
    answers: [
      { text: "Джаз", correct: false },
      { text: "Регги", correct: false },
      { text: "Рок-н-ролл", correct: true },
      { text: "Кантри", correct: false },
    ],
  },
  {
    question: "На каком инструменте виртуозно играл певец и композитор Джими Хендрикс?",
    answers: [
      { text: "Гитара", correct: true },
      { text: "Барабаны", correct: false },
      { text: "Бас-гитара", correct: false },
      { text: "Саксофон", correct: false },
    ],
  },
  {
    question: "Кто является автором песни 'Imagine'?",
    answers: [
      { text: "images/music/Боуи.jpg", correct: false },
      { text: "images/music/Дилан.jpg", correct: false },
      { text: "images/music/Леннон.jpg", correct: true },
      { text: "images/music/Меркьюри.jpg", correct: false },
    ],
  },
  {
    question: "Какая из этих рок-групп является автором хита 'Moscow Calling'?",
    answers: [
      { text: "images/music/scorpions.jpg", correct: false },
      { text: "images/music/DeepPurple.jpg", correct: false },
      { text: "images/music/ACDC.jpg", correct: false },
      { text: "images/music/Парк Горького.jpg", correct: true },
    ],
  },
  {
    question: "Кто является самым награждаемым артистом премии «Грэмми»?",
    answers: [
      { text: "images/music/бейонсе.jpg", correct: true },
      { text: "images/music/СтивиУандер.jpg", correct: false },
      { text: "images/music/МайклДжексон.jpg", correct: false },
      { text: "images/music/Мадонна.jpg", correct: false },
    ],
  },
  {
    question: "В каком веке (число) родился композитор Вольфганг Амадей Моцарт?",
  },
  {
    question: "Какой инструмент является основным в оркестре симфонической музыки?",
  },
  {
    question: "Напишите жанр песни, отрывок которой представлен ниже",
  },
  {
    question: "Кто написал картину 'Мона Лиза'?",
    answers: [
      { text: "Винсент Ван Гог", correct: false },
      { text: "Пабло Пикассо", correct: false },
      { text: "Леонардо да Винчи", correct: true },
      { text: "Микеланджело", correct: false },
    ],
  },
  {
    question: "Кто написал пьесу 'Гамлет'?",
    answers: [
      { text: "Шекспир", correct: true },
      { text: "Мольер", correct: false },
      { text: "Чехов", correct: false },
      { text: "Ибсен", correct: false },
    ],
  },
  {
    question: "Какой скульптор создал статую 'Думающий'?",
    answers: [
      { text: "Роден", correct: true },
      { text: "Дега", correct: false },
      { text: "Морис Ришар", correct: false },
      { text: "Карл Брилл", correct: false },
    ],
  },
  {
    question: "Кто написал книгу 'Преступление и наказание'?",
    answers: [
      { text: "Лев Толстой", correct: false },
      { text: "Федор Достоевский", correct: true },
      { text: "Марк Твен", correct: false },
      { text: "Оскар Уайльд", correct: false },
    ],
  },
  {
    question: "Кто написал картины 'Звездная ночь' и 'Поле пшеницы с кипарисами'?",
    answers: [
      { text: "images/art/климт.jpg", correct: false },
      { text: "images/art/мане.jpg", correct: false },
      { text: "images/art/вангог.jpg", correct: true },
      { text: "images/art/моне.jpg", correct: false },
    ],
  },
  {
    question: "Кто является автором картины 'Тайная вечеря'?",
    answers: [
      { text: "images/art/кандинский.jpg", correct: false },
      { text: "images/art/мунк.jpg", correct: false },
      { text: "images/art/давинчи.jpg", correct: true },
      { text: "images/art/рембрандт.jpg", correct: false },
    ],
  },
  {
    question: "Кто является автором картины 'Танец багровых попугаев'?",
    answers: [
      { text: "images/art/дали.jpg", correct: false },
      { text: "images/art/матисс.jpg", correct: false },
      { text: "images/art/пикассо.jpg", correct: true },
      { text: "images/art/кало.jpg", correct: false },
    ],
  },
  {
    question: "Сколько скульптурных фигур находится на Арке Триумфа в Париже?",
  },
  {
    question: "Назовите фамилию художника, который создал серию картин под названием 'Слепые часы'?",
  },
  {
    question: "Отгадайте фильм по его саундтреку, который представлен ниже",
  },
  {
    question: "Кто был первым президентом России после распада СССР?",
    answers: [
      { text: "Михаил Горбачев", correct: false },
      { text: "Борис Ельцин", correct: true },
      { text: "Владимир Путин", correct: false },
      { text: "Дмитрий Медведев", correct: false },
    ],
  },
  {
    question: "В каком году произошло открытие Америки Колумбом?",
    answers: [
      { text: "1612", correct: false },
      { text: "1530", correct: false },
      { text: "1492", correct: true },
      { text: "1703", correct: false },
    ],
  },
  {
    question: "Кто был первым президентом США?",
    answers: [
      { text: "Томас Джефферсон", correct: false },
      { text: "Джордж Вашингтон", correct: true },
      { text: "Авраам Линкольн", correct: false },
      { text: "Джон Адамс", correct: false },
    ],
  },
  {
    question: "Кто был правителем Древнего Египта во времена строительства пирамид?",
    answers: [
      { text: "Клеопатра", correct: false },
      { text: "Рамзес II", correct: false },
      { text: "Хеопс", correct: false },
      { text: "Рамзес I", correct: true },
    ],
  },
  {
    question: "Кто был последним императором России?",
    answers: [
      { text: "images/history/Александр II.jpg", correct: false },
      { text: "images/history/Николай II.jpg", correct: true },
      { text: "images/history/Александр III.jpg", correct: false },
      { text: "images/history/Петр 1.jpg", correct: false },
    ],
  },
  {
    question: "Кто был основателем Советского Союза?",
    answers: [
      { text: "images/history/Сталин.jpg", correct: false },
      { text: "images/history/колчак.jpg", correct: false },
      { text: "images/history/ленин.jpg", correct: true },
      { text: "images/history/микоян.jpg", correct: false },
    ],
  },
  {
    question: "Кто был лидером Кубинской революции?",
    answers: [
      { text: "images/history/батиста.jpg", correct: false },
      { text: "images/history/чавес.jpeg", correct: false },
      { text: "images/history/чегевара.jpg", correct: false },
      { text: "images/history/кастро.jpg", correct: true },
    ],
  },
  {
    question: "В каком году произошёл первый космический полет человека?",
  },
  {
    question: "Какая страна совершила нападение на Перл-Харбор во время Второй мировой войны?",
  },
  {
    question: "Аудиозапись голоса какого политического деятеля представлена ниже?",
  },
];
