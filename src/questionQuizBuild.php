<?php

require_once __DIR__ . '/helpers.php';

checkAuth();

$user = currentUser();

// if (isset($_SESSION['topic'])) {
//     $topic = $_SESSION['topic'];
//     // Теперь у вас есть значение $topic, которое можно использовать в вашей викторине
// } else {
//     // Если значение не установлено, можете принять решение по умолчанию или перенаправить пользователя
//     header('Location: index.php'); // Например, перенаправляем пользователя на страницу выбора темы
//     exit();
// }



?>
<?php include_once "head.php"; ?>
<body>
    <div class="headerSite">Quiziz</div>


    <div class="container">
		<h1>Тема: <span class="currentTopic"><?php echo $_SESSION['currentTopic']?></span></h1>
        <span class="currentTopicId">
            <?php echo $_SESSION['currentTopicId'];?>
        </span>
        <span class="currentTopicIdValue">
            <?php echo topicId($_SESSION['topicId']); ?>
        </span>
        <span class="currentNumberOfQuestion"><?=$_SESSION['numberOfQuestion']; ?></span>
        <?php $questions = getAllThemeQuestions();
            
            if ($_SESSION['numberOfQuestion'] - 1 !== count($questions)):
        ?>
            <header id="header">
                <div class="questionNumber"><?= $_SESSION['numberOfQuestion'] . ' / ' . count($questions); ?></div>
                <div class="points">Сложность: <?=$questions[$_SESSION['numberOfQuestion'] - 1]['question_difficulty']; ?></div>
            </header>
            <main class="card">
                <p class="question"><?= $questions[$_SESSION['numberOfQuestion'] - 1]['question_text'];?></p>
                <div class="answer-buttons">
                    <button class="button" data-button-id="1" onclick="handleClick(this);"><?= $questions[$_SESSION['numberOfQuestion'] - 1]['first_variant'] ?></button>
                    <button class="button" data-button-id="2" onclick="handleClick(this);"><?= $questions[$_SESSION['numberOfQuestion'] - 1]['second_variant'] ?></button>
                    <button class="button" data-button-id="3" onclick="handleClick(this);"><?= $questions[$_SESSION['numberOfQuestion'] - 1]['third_variant'] ?></button>
                    <button class="button" data-button-id="4" onclick="handleClick(this);"><?= $questions[$_SESSION['numberOfQuestion'] - 1]['fourth_variant'] ?></button>
                </div>
            </main>
            <footer id="footer">
                <div class="progressBar" style='width: <?= $_SESSION['numberOfQuestion'] / count($questions) * 100 ?>%'></div>
            </footer>
        <?php endif;?>

		<div class="exitNext">
            <a class="quitQuiz" href="/profile.php">← Выйти</a>
            <form class="userQuizNextButtonForm hide" action="/userQuestionNext.php" method="post">
                <button class="userQuizNextButton">Далее →</button>
            </form>
            <form class="userQuizEndButtonForm hide" action="/userQuizFinish.php" method="post">
				<button class="userQuizEndButton" value="" name="playerResult">Завершить</button>
			</form>
            <!-- <a class="launchButton hide" href="/card.php">Начать</a> -->
        </div>
    </div>
    <span class="correctAnswer"><?=$questions[$_SESSION['numberOfQuestion'] - 1]['correct_answer'];?></span>
    <span class="numberOfAllQuestions"><?= count($questions);?></span>
</body>
  <!-- <script src="js/questions.js?v1" defer></script> -->
  <!-- <script src="js/chooseTopic.js?v1" defer></script> -->
  <!-- <script src="js/SetShowQuestion.js?v1" defer></script> -->
  <script src="js/chooseAnswerUserQuiz.js?v1" defer></script>
  <script src="js/checkAnswerUserQuiz.js" defer></script>
  <!-- <script src="js/nextButton.js?v1" defer></script> -->
  <!-- <script src="js/quitQuiz.js?v1" defer></script> -->
  <!-- <script src="js/endButton.js?v1" defer></script> -->
</html>