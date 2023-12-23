<?php include_once "header.php"; ?>
  <body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
      <div class="startPage">
        <h1>Проверьте свои знания с Quiziz</h1>
        <p>Испытайте свою сноровку и повеселитесь в нашей викторине!</p>
        <div class="nameInput">
          <form action="" method="">
            <div class="input-group">
              <input type="text" id="name" autocomplete="off" required minlength="1" maxlength="70" onblur="checkInput(this)"/>
              <label id="playerName" for="name"> Ваше имя: </label>
              <input type="password" id="password" autocomplete="off" required minlength="8" maxlength="20" onblur="checkInput(this)"/>
              <label id="playerPassword" for="password"> Ваш пароль: </label>
            </div>
            <button class="inputButton">СОХРАНИТЬ</button>
            <!-- <input type="submit" value="Сохранить" class="submit" /> -->
          </form>
        </div>
        <div class="modalWindowBack hide">
          <div class="modalWindowFront">
            <span class="close">&times;</span>
            <p>Сначала заполните строку с именем и сохраните!</p>
          </div>
        </div>
        <div class="startMenu">
          <a class="startButton">Старт</a>
          <a class="score__button">Результаты</a>
          <!-- <a href="../../index.html">Назад</a> -->
        </div>
      </div>
    </div>
  </body>
  <script defer src="js/startPage.js"></script>
</html>

<!-- + 1.Добавить модальное окно, при количестве символов меньше 2 в вводе имени
  + 2.Добавить добавление нового результата в таблицу и последующее сохранение этого результата с помощью localStorage
  + 3.Добавить прогрессбар
  + 4.Добавить в таблице сортировку результатов сверху вниз от большего к меньшему
  + 5.Добавить разную ценность вопросов -->
