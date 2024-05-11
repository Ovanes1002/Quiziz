<?php 

require_once __DIR__ . '/helpers.php';

checkAuth();

unset($_SESSION['quiz_name']);
checkQuizName();

$user = currentUser();

?>

<?php include_once "head.php"; ?>
<body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
        <h1>Создать викторину</h1>
        <div class="quizBuilder">
            <form class="quizNameForm" action="/quizBuild/quizName.php" method="post" enctype="multipart/form-data">
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
                </div>

                <div class="quizIcon">
                    <img src="images/picture_icon.png" id="preview" alt="обложка викторины">
                    <input 
                        type="file" 
                        id="quizIcon" 
                        name="quizIcon"
                        <?php echo validationErrorAttr('quizIcon'); ?>
                    />

                    <label id="playerQuizIcon" for="quizIcon">
                        Изменить обложку
                    </label>

                    <?php if(hasValidationError('quizIcon')): ?>
						<small><?php echo validationErrorMessage('quizIcon'); ?></small>
					<?php endif; ?>
                </div>
                <div class="quizBuildFooter">
                    <a href="/profile.php" class="quizBuildButton">Назад</a>
                    <form action="/quizBuild/quizName.php" method="post">
                        <button type="submit" class="quizBuildButton startMakeQuiz hide">Далее</button> 
                    </form>
                </div>
            </form>
        </div>

    </div>  
  </body>
  <script defer src="js/quizTheme.js"></script>
</html>