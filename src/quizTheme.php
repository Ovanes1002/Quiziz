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
            <form class="quizNameForm" action="/quizBuild/quizName.php" method="post">
                <div class="quizName">
                    <label for="quizName">Тема:</label>
                    <input 
                        type="text"
                        id="quizName"
                        name="quizName" 
                        class="inputStylized"  
                        maxlength="200" 
                        autocomplete="off" 
                    <?php validationErrorAttr(fieldName: 'quizName') ?>
                    />
                    <?php if(hasValidationError(fieldName: 'quizName')): ?>
						<small><?php validationErrorMessage(fieldName: 'quizName') ?></small>
					<?php endif; ?>
                   <button type="submit" class="button startMakeQuiz">Начать</button> 
                </div>
                
            </form>
        </div>
        <a href="/profile.php">Назад</a>
    </div>
  </body>
  <!-- <script defer src="js/quizBuilder.js"></script> -->
</html>