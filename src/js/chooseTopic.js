const endButton = document.querySelector(".endButton"),
  buttons = document.querySelectorAll(".button"),
  topics = document.querySelectorAll(".topic");
let currentQuestionIndex,
  lastClickedTopic = null;
// кнопка "Начать"
// после нажатия начинается викторина
// launchButton.addEventListener("click", function (evt) {
//   // chooseTopic.classList.add("hide");
//   // launchButton.classList.add("hide");
//   // header.classList.remove("hide");
//   // main.classList.remove("hide");
//   // footer.classList.remove("hide");
//   lastClickedTopic.style.boxShadow = "none";
//   buttons.forEach((button) => {
//     button.classList.remove("hide");
//   });
//   console.log(lastClickedTopic);
// });

topics.forEach((topic) => {
  topic.addEventListener("click", (evt) => {
    // удаляем тень у каждой кнопки с классом "buttons"
    topics.forEach((topic) => {
      topic.style.boxShadow = "none";
    });

    topics.forEach((otherTopic) => {
      if (otherTopic !== lastClickedTopic) {
        otherTopic.style.boxShadow = "none";
      }
    });
  });
});
