<?php include_once "head.php"; ?>
<body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
        <div class="choose_topic hide">
            <h1>Выберите тему</h1>
            <div class="topic-buttons">
            <button class="topic sport_topic" style="box-shadow: none">
                <img src="images/sport.jpg" alt="sport_img" class="sport_img" />
                <div class="topic_name">Спорт</div>
            </button>
            <button class="topic music_topic" style="box-shadow: none">
                <img src="images/music.jpg" alt="music_img" class="music_img" />
                <div class="topic_name">Музыка</div>
            </button>
            <button class="topic art_topic" style="box-shadow: none">
                <img src="images/art.png" alt="art_img" class="art_img" />
                <div class="topic_name">Искусство</div>
            </button>
            <button class="topic history_topic" style="box-shadow: none">
                <img src="images/history.jpg" alt="history_img" class="history_img" />
                <div class="topic_name">История</div>
            </button>
            </div>
        </div>
        <div class="exitNext hide">
            <a class="quitQuiz" href="#">← Выйти</a>
            <!-- <a class="nextButton hide" href="#">Далее →</a>
            <a class="endButton hide" href="#">Завершить</a> -->
            <a class="launchButton hide" href="./card.php">Начать</a>
        </div>
    </div>
  </body>
  <script defer src="js/chooseTopic.js"></script>
</html>