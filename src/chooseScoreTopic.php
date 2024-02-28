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
          <button class="score_topic score_sport_topic">
            <img src="images/sport.jpg" alt="sport_img" class="sport_img" />
            <div>Спорт</div>
          </button>
          <button class="score_topic score_music_topic">
            <img src="images/music.jpg" alt="music_img" class="music_img" />
            <div>Музыка</div>
          </button>

          <button class="score_topic score_art_topic">
            <img src="images/art.png" alt="art_img" class="art_img" />
            <div>Искусство</div>
          </button>
          <button class="score_topic score_history_topic">
            <img src="images/history.jpg" alt="history_img" class="history_img" />
            <div>История</div>
          </button>
        </div>
        <a class="backButton" href="/profile.php">← Назад</a>
      </div>
    </div>
  </body>
  <script defer src="js/quizVariables.js"></script>
</html>