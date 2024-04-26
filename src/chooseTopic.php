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
                <form class="topic" action="/question.php" method="post">
                    <button type="submit" class="sport_topic" value="спорт" name="lastClickedTopic" style="box-shadow: none">
                        <img src="images/sport.jpg" alt="sport_img" class="sport_img" />
                        <div class="topic_name">Спорт</div>
                    </button>
                </form>

                <form class="topic" action="/question.php" method="post">
                    <button type="submit" class="music_topic" value="музыка" name="lastClickedTopic" style="box-shadow: none">
                        <img src="images/music.jpg" alt="music_img" class="music_img" />
                        <div class="topic_name">Музыка</div>
                    </button>
                </form>

                <form class="topic" action="/question.php" method="post">
                    <button type="submit" class="art_topic" value="искусство" name="lastClickedTopic" style="box-shadow: none">
                        <img src="images/art.png" alt="art_img" class="art_img" />
                        <div class="topic_name">Искусство</div>
                    </button>
                </form>

                <form class="topic" action="/question.php" method="post">
                    <button type="submit" class="history_topic" value="история" name="lastClickedTopic" style="box-shadow: none">
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
            <a class="launchButton hide" href="/question.php">Начать</a>
        </div>
    </div>
  </body>
  <script src="js/chooseTopic.js?v1" defer></script>
</html>