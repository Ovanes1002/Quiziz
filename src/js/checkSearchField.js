const searchInput = document.querySelector(".searchInput");
const userTopicButtons = document.querySelector(".user-topic-buttons");

searchInput.addEventListener("input", (evt) => {
  userTopicButtons.innerHTML = "";
  const inputValue = searchInput.value.trim();
  if (inputValue.length !== 0) {
    fetch("check_search_value.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "inputValue=" + encodeURIComponent(inputValue),
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
  }
});
