const 

finishQuiz          = document.querySelector(".finishQuiz"),
playerResult        = document.querySelector(".playerResult"),
header              = document.getElementById("header"),
footer              = document.getElementById("footer"),
exitNext            = document.querySelector(".exitNext"),
tableSport          = document.querySelector(".tableSport"),
tableMusic          = document.querySelector(".tableMusic"),
tableArt            = document.querySelector(".tableArt"),
tableHistory        = document.querySelector(".tableHistory");


// в зависимости от того какая кнопка "Завершить" нажата та таблица и будет изменяться
// добавить 4 разных класса кнопке завершить
endButton.addEventListener("click", (evt) => {

  if (
    (thirdWriteAnswer.value.toUpperCase() === "МЕССИ" || thirdWriteAnswer.value.toUpperCase() === "МЭССИ") &&
    lastClickedTopic == 'спорт'
  ) {
    result += 4;
  } else if (
    (thirdWriteAnswer.value.toUpperCase() === "РЕГГИ" || thirdWriteAnswer.value.toUpperCase() === "РЭГГИ") &&
    lastClickedTopic == 'музыка'
  ) {
    result += 4;
  } else if (
    (thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЕЛЛАР" ||
      thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЕЛАР" ||
      thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЭЛАР" ||
      thirdWriteAnswer.value.toUpperCase() === "ИНТЕРСТЭЛЛАР") &&
      lastClickedTopic == 'искусство'
  ) {
    result += 4;
  } else if (
    (thirdWriteAnswer.value.toUpperCase() === "ЕЛЬЦИН" ||
      thirdWriteAnswer.value.toUpperCase() === "ЕЛЬЦЫН") &&
      lastClickedTopic == 'история'
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
  finishQuiz.classList.remove("hide");
  playerResult.innerText = userName + ", Ваш результат:" + " " + result;

  const newRow = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = userName;
  const resultCell = document.createElement("td");
  resultCell.textContent = result;
  newRow.appendChild(nameCell);
  newRow.appendChild(resultCell);

  if (lastClickedTopic == 'спорт') {
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
  } else if (lastClickedTopic == 'музыка') {
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
  } else if (lastClickedTopic == 'искусство') {
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
  } else if (lastClickedTopic == 'история') {
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
