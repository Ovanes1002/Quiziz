<?php

require_once __DIR__ . '/helpers.php';

checkAuth();

$user = currentUser();

?>
<?php include_once "head.php"; ?>

    <body>
        <div class="headerSite">Quiziz</div>
        <div class="container">
            <div class="finishQuiz">
                <p class="playerResult"><?php echo $user['name']; ?>, твой результат: <?= $_SESSION['finalResult']; ?></p>
                <a class="menuButton" href="/profile.php">Главное меню</a>
            </div>
        </div>
    </body>
        
    <!-- <script defer src="js/questions.js?v1"></script> -->
    <!-- <script defer src="js/chooseTopic.js?v1"></script> -->
    <!-- <script defer src="js/SetShowQuestion.js"></script> -->
    <!-- <script defer src="js/finishQuiz.js?v1"></script> -->
</html>