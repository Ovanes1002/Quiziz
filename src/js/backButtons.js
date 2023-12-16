backButton.addEventListener("click", (evt) => {
  chooseScoreTopic.classList.add("hide");
  startPage.classList.remove("hide");
  // console.log(1);
  // header.classList.add("hide");
  // main.classList.add("hide");
  // footer.classList.add("hide");
  // exitNext.classList.add("hide");
  // finishQuiz.classList.add("hide");
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
