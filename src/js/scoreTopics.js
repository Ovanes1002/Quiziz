scoreTopics.forEach((scoreTopic) => {
  scoreTopic.addEventListener("click", (evt) => {
    clck = evt.currentTarget;

    chooseScoreTopic.classList.add("hide");

    scoreSport.classList.add("hide");
    scoreMusic.classList.add("hide");
    scoreArt.classList.add("hide");
    scoreHistory.classList.add("hide");

    if (clck.classList.contains("score_sport_topic")) scoreSport.classList.remove("hide");
    else if (clck.classList.contains("score_music_topic")) scoreMusic.classList.remove("hide");
    else if (clck.classList.contains("score_art_topic")) scoreArt.classList.remove("hide");
    else if (clck.classList.contains("score_history_topic")) scoreHistory.classList.remove("hide");
  });
});
