<?php 

require_once __DIR__ . '/helpers.php';

checkAuth();

$user = currentUser();

?>
<?php include_once "head.php"; ?>
<body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
	<div class="choose_score_topic">
        <h1>Выберите тему</h1>
        <div class="topic-buttons">
          <form action="/tableSport.php" method="post">
            <button class="score_topic score_sport_topic" value="спорт" name="scoreTopic">
              <img src="images/sport.jpg" alt="sport_img" class="sport_img" />
              <div class="topic_name">Спорт</div>
            </button>
          </form>
          <form action="/tableMusic.php" method="post">
            <button class="score_topic score_music_topic" value="музыка" name="scoreTopic">
              <img src="images/music.jpg" alt="music_img" class="music_img" />
              <div class="topic_name">Музыка</div>
            </button>
          </form>
          <form action="/tableArt.php" method="post">                  
            <button class="score_topic score_art_topic" value="искусство" name="scoreTopic">
              <img src="images/art.png" alt="art_img" class="art_img" />
              <div class="topic_name">Искусство</div>
            </button>
          </form>
          <form action="/tableHistory.php" method="post">
            <button class="score_topic score_history_topic" value="история" name="scoreTopic">
              <img src="images/history.jpg" alt="history_img" class="history_img" />
              <div class="topic_name">История</div>
            </button>
          </form>
        </div>
        <a class="backButton" href="/profile.php">← Назад</a>
      </div>
    </div>
  </body>
  <script defer src="js/quizVariables.js"></script>
</html>