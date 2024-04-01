const launchButton = document.querySelector(".launchButton"),
  quitQuiz = document.querySelector(".quitQuiz"),
  // h1TopicName = document.querySelector("h1"),
  chooseScoreTopic = document.querySelector(".choose_score_topic");
// endButton = document.querySelector(".endButton"),
// header = document.getElementById("header"),
// footer = document.getElementById("footer"),
// exitNext = document.querySelector(".exitNext"),
// main = document.querySelector(".card"),
// answerButtons = document.querySelector(".answer-buttons"),
// firstWriteAnswer = document.querySelector(".firstWriteAnswer"),
// secondWriteAnswer = document.querySelector(".secondWriteAnswer"),
// thirdWriteAnswer = document.querySelector(".thirdWriteAnswer"),
// audioSport = document.querySelector(".audioSport"),
// audioMusic = document.querySelector(".audioMusic"),
// audioArt = document.querySelector(".audioArt"),
// audioHistory = document.querySelector(".audioHistory"),
// startPage = document.querySelector(".startPage"),

quitQuiz.addEventListener("click", function (evt) {
  // if (lastClickedTopic != null) lastClickedTopic.style.boxShadow = "none";

  // if (lastClickedButton != null) lastClickedButton.style.boxShadow = "none";

  current = 0;
  updateProgress(0);
  firstWriteAnswer.value = "";
  secondWriteAnswer.value = "";
  thirdWriteAnswer.value = "";
  firstWriteAnswer.style.backgroundColor = "white";
  secondWriteAnswer.style.backgroundColor = "white";
  thirdWriteAnswer.style.backgroundColor = "white";
  // startPage.classList.remove("hide");
  nextButton.classList.remove("hide");
  // launchButton.classList.add("hide");
  endButtonForm.classList.add("hide");
  endButton.classList.add("hide");
  // chooseTopic.classList.add("hide");
  // h1TopicName.classList.add("hide");
  // header.classList.add("hide");
  // main.classList.add("hide");
  // footer.classList.add("hide");
  exitNext.classList.add("hide");
  // firstWriteAnswer.classList.add("hide");
  // secondWriteAnswer.classList.add("hide");
  // thirdWriteAnswer.classList.add("hide");
  // audioSport.classList.add("hide");
  // audioMusic.classList.add("hide");
  // audioArt.classList.add("hide");
  // audioHistory.classList.add("hide");

  main.style.height = "";
  answerButtons.style.margin = "40px auto";
  answerButtons.style.alignItems = "normal";
  answerButtons.style.flexDirection = "row";
});
