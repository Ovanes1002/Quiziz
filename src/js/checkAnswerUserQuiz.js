function handleClick(button) {
  const buttonText = button.textContent || button.innerText; // Получение текста кнопки
  fetch("save_answer.php", {
    method: "POST", // Метод POST
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // Заголовок для отправки данных формы
    },
    body: "buttonText=" + encodeURIComponent(buttonText), // Отправка данных
  })
    .then((response) => response.text()) // Ожидание ответа и преобразование его в текст
    .then((data) => {
      console.log("Ответ:", data); // Логирование ответа сервера (необязательно)
    })
    .catch((error) => {
      console.error("Ошибка:", error); // Логирование ошибок (необязательно)
    });
}
