const launchButton = document.querySelector(".launchButton"),
      endButton    = document.querySelector(".endButton"),
      topics       = document.querySelectorAll(".topic");

// кнопка "Начать"
// после нажатия начинается викторина
launchButton.addEventListener("click", function (evt) {
  // chooseTopic.classList.add("hide");
  // launchButton.classList.add("hide");
  // header.classList.remove("hide");
  // main.classList.remove("hide");
  // footer.classList.remove("hide");
  lastClickedTopic.style.boxShadow = "none";
  buttons.forEach((button) => {
    button.classList.remove("hide");
  });

});

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
