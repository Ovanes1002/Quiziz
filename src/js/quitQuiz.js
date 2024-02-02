quitQuiz.addEventListener("click", function (evt) {
  if (lastClickedTopic != null) lastClickedTopic.style.boxShadow = "none";

  if (lastClickedButton != null) lastClickedButton.style.boxShadow = "none";

  current = 0;
  updateProgress(0);
  firstWriteAnswer.value = "";
  secondWriteAnswer.value = "";
  thirdWriteAnswer.value = "";
  startPage.classList.remove("hide");
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
