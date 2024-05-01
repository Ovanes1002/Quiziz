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
        <form class="questionBlockForm" action="/quizBuild/createQuestion.php" method="post">
            <div class="quizQuestion">
                <label>
                    Вопрос:
                    <input 
                        type="text"
                        name="quizQuestion"
                        class="inputStylized" 
                        maxlength="200" 
                        autocomplete="off"
                        value="<?php echo getOldValue(key: 'quizQuestion') ?>"
                        <?php validationErrorAttr(fieldName: 'quizQuestion') ?>
                    />
                </label>
                <?php if(hasValidationError(fieldName: 'quizQuestion')): ?>
                    <small><?php validationErrorMessage(fieldName: 'quizQuestion') ?></small>
                <?php endif; ?>
            </div>
            <div class="quizDifficulty">
                <label for="questionDifficulty">Сложнось вопроса:</label>
                <select name="questionDifficulty" id="questionDifficulty" size="1">
                    <option value="1">1 балл</option>
                    <option value="2">2 балла</option>
                    <option value="3">3 балла</option>
                    <option value="4">4 балла</option>
                    <option value="5">5 баллов</option>
                </select>
            </div>
            <!-- <div class="quizType">
                <label for="questionType">Тип вопроса:</label>
                <select name="questionType" id="questionType" size="1">
                    <option value="textAnswer">Выбрать 1 текст-ответ из 4</option>
                    <option value="imageAnswer">Выбрать 1 изображение из 4</option>
                    <option value="writeAnswer">Вписать ответ</option>
                    <option value="writeAudioAnswer">Вписать ответ по аудио</option>
                </select>
            </div> -->

            <!-- <button type="button" class="button questionMakeButton">Создать</button> -->

                <?php if(hasMessage(key:'error')): ?>
                    <div class="error">
                        <?php echo getMessage(key:'error') ?>
                    </div>
                <?php endif; ?>
                <div class="questionBlock">
                    <div class="firstAnswer">
                        <label class="radioLabel">
                            <input type="radio" class="radioInput" name="radioGroup">
                            <span class="radioSpan"></span>
                        </label>
                        <textarea 
                            name="firstTextarea"
                            cols="30" 
                            rows="3" 
                            maxlength="500" 
                            autocomplete="off"
                        ><?php echo getOldValue(key: 'firstTextarea') ?></textarea>
                    </div>
                    <div class="secondAnswer">
                        <label class="radioLabel">
                            <input type="radio" class="radioInput" name="radioGroup">
                            <span class="radioSpan"></span>
                        </label>
                        <textarea 
                            name="secondTextarea" 
                            cols="30" 
                            rows="3" 
                            maxlength="500" 
                            autocomplete="off"
                        ><?php echo getOldValue(key: 'secondTextarea') ?></textarea>
                    </div>
                    <div class="thirdAnswer">
                        <label class="radioLabel">
                            <input type="radio" class="radioInput" name="radioGroup">
                            <span class="radioSpan"></span>
                        </label>
                        <textarea 
                            name="thirdTextarea" 
                            cols="30" 
                            rows="3" 
                            maxlength="500" 
                            autocomplete="off"
                        ><?php echo getOldValue(key: 'thirdTextarea') ?></textarea>
                    </div>
                    <div class="fourthAnswer">
                        <label class="radioLabel">
                            <input type="radio" class="radioInput" name="radioGroup">
                            <span class="radioSpan"></span>
                        </label>
                        <textarea 
                            name="fourthTextarea" 
                            cols="30" 
                            rows="3" 
                            maxlength="500" 
                            autocomplete="off"
                        ><?php echo getOldValue(key: 'fourthTextarea') ?></textarea>
                    </div>
                </div>
                <button class="button questionNextButton">Далее</button>
            </form>
        </div>
        <form action="/quizBuild/quizBuildQuit.php" method="post">
            <button role="button">Выйти</button>
        </form>
    </div>
  </body>
  <script defer src="js/quizBuilder.js"></script>
</html>