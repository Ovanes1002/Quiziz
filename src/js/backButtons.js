const 
	backButton          = document.querySelector(".backButton"),
	backButtonSport     = document.querySelector(".backButtonSport"),
	backButtonMusic     = document.querySelector(".backButtonMusic"),
	backButtonArt       = document.querySelector(".backButtonArt"),
	backButtonHistory   = document.querySelector(".backButtonHistory"),
	scoreSport          = document.querySelector(".score__sport"),
	scoreMusic          = document.querySelector(".score__music"),
	scoreArt            = document.querySelector(".score__art"),
	scoreHistory        = document.querySelector(".score__history"),
	startPage           = document.querySelector(".startPage"),
	chooseScoreTopic    = document.querySelector(".choose_score_topic");

backButton.addEventListener("click", (evt) => {
	chooseScoreTopic.classList.add("hide");
	startPage.classList.remove("hide");
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
