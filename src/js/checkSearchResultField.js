const searchResultInput = document.querySelector(".searchResultInput");
const userTopicButtons = document.querySelector(".user-topic-buttons");
const userTopicButtonsContent = userTopicButtons.innerHTML;

searchResultInput.addEventListener("input", (evt) => {
  userTopicButtons.innerHTML = "";
  const resultInputValue = searchResultInput.value.trim();
  if (resultInputValue.length !== 0) {
    fetch("check_searchResult_value.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "resultInputValue=" + encodeURIComponent(resultInputValue),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data) {
          userTopicButtons.innerHTML = data;
          console.log("Дата", data);
        } else {
          userTopicButtons.innerHTML = "Нет тем викторин с таким названием";
        }
      })
      .catch((error) => {
        console.log("Ошибка:", error);
      });
  } else {
    userTopicButtons.innerHTML = userTopicButtonsContent;
  }
});
