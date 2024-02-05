<?php 

require_once __DIR__ . '/helpers.php';

checkAuth();

$user = currentUser();

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     // Пользователь отправил форму с выбором темы
//     $lastClickedTopic = $_POST['lastClickedTopic'];

//     // Установим значение в сессии
//     $_SESSION['topic'] = $lastClickedTopic;
// }

?>
<?php include_once "head.php"; ?>
<body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
        <div class="choose_topic">
            <h1>Выберите тему</h1>
            <div class="topic-buttons">
                <button class="topic sport_topic" onclick="lastClickedTopicValue('sport')" style="box-shadow: none">
                    <img src="images/sport.jpg" alt="sport_img" class="sport_img" />
                    <div class="topic_name">Спорт</div>
                </button>
                <button class="topic music_topic" onclick="lastClickedTopicValue('music')" style="box-shadow: none">
                    <img src="images/music.jpg" alt="music_img" class="music_img" />
                    <div class="topic_name">Музыка</div>
                </button>
                <button class="topic art_topic" onclick="lastClickedTopicValue('art')" style="box-shadow: none">
                    <img src="images/art.png" alt="art_img" class="art_img" />
                    <div class="topic_name">Искусство</div>
                </button>
                <form action="/card.php" method="post">
                    <button type="submit" class="topic history_topic" value="history" name="lastClickedTopic" style="box-shadow: none">
                        <img src="images/history.jpg" alt="history_img" class="history_img" />
                        <div class="topic_name">История</div>
                    </button>
                </form>
            </div>
        </div>
        <div class="exitNext">
            <a class="quitQuiz" href="/profile.php">← Выйти</a>
            <!-- <a class="nextButton hide" href="#">Далее →</a> -->
            <a class="endButton hide" href="#">Завершить</a>
            <a class="launchButton hide" href="/card.php">Начать</a>
        </div>
    </div>
  </body>
  <script src="js/quizVariables.js" defer></script>
  <script src="js/chooseTopic.js" defer></script>
</html>