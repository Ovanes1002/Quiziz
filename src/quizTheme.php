<?php 

require_once __DIR__ . '/helpers.php';

checkAuth();

$user = currentUser();

?>

<?php include_once "head.php"; ?>
<body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
        <h1>Создать викторину</h1>
        <div class="quizBuilder">
            <div class="quizName">
                <label for="quizName">Тема:</label>
                <input 
                    type="text"
                    id="quizName"
                    name="quizName" 
                    class="writeInput"  
                    maxlength="200" 
                    autocomplete="off" 
                />
                <button class="button startMakeQuiz hide">Начать</button> 
            </div>
        </div>
        <a href="/profile.php">Назад</a>
    </div>
  </body>
  <script defer src="js/quizTheme.js"></script>
  <script defer src="js/usersQuizzes.js"></script>
</html>