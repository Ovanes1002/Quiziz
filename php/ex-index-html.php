<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>Quiz app</title>
    <link rel="stylesheet" href="css/quiz.min.css" />
    <link rel="shortcut icon" href="images/quizicon.png" type="image/png" />
  </head>
  <body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
      <div class="startPage">
        <h1>Проверьте свои знания с Quiziz</h1>
        <p>Испытайте свою сноровку и повеселитесь в нашей викторине!</p>
        <a class="playButton">Играть!</a>
      </div>
      <div class="startQuiz hide">
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
      <header id="header" class="hide">
        <div class="questionNumber">1 / 6</div>
        <div class="points">1 балл</div>
      </header>
      <main class="card hide">
        <p class="question"></p>
        <div class="answer-buttons">
          <button class="button" id="btn1"></button>
          <button class="button" id="btn2"></button>
          <button class="button" id="btn3"></button>
          <button class="button" id="btn4"></button>
          <input
            type="text"
            class="firstWriteAnswer hide"
            autofocus
            autocomplete="off"
            placeholder="Ответ..."
            required
            maxlength="5"
          />
          <input
            type="text"
            class="secondWriteAnswer hide"
            autofocus
            autocomplete="off"
            placeholder="Ответ..."
            required
            maxlength="30"
          />
          <audio class="audioSport hide" controls>
            <source src="quizAudio/LeoMessi/messi.opus" type="audio/ogg; codecs=opus" />
            <source src="quizAudio/LeoMessi/messi.ogg" type="audio/ogg; codecs=vorbis" />
            <source src="quizAudio/LeoMessi/messi.mp3" type="audio/mpeg" />
            Ваш браузер не поддерживает встроенные аудио. Попробуйте
            <a href="quizAudio/LeoMessi/messi.mp3" download>скачать</a> файл.
          </audio>
          <audio class="audioMusic hide" controls>
            <source src="quizAudio/BobMarley/marley.opus" type="audio/ogg; codecs=opus" />
            <source src="quizAudio/BobMarley/marley.ogg" type="audio/ogg; codecs=vorbis" />
            <source src="quizAudio/BobMarley/marley.mp3" type="audio/mpeg" />
            Ваш браузер не поддерживает встроенные аудио. Попробуйте
            <a href="quizAudio/BobMarley/marley.mp3" download>скачать</a> файл.
          </audio>
          <audio class="audioArt hide" controls>
            <source src="quizAudio/Interstellar/Zimmer.opus" type="audio/ogg; codecs=opus" />
            <source src="quizAudio/Interstellar/Zimmer.ogg" type="audio/ogg; codecs=vorbis" />
            <source src="quizAudio/Interstellar/Zimmer.mp3" type="audio/mpeg" />
            Ваш браузер не поддерживает встроенные аудио. Попробуйте
            <a href="quizAudio/Interstellar/Zimmer.mp3" download>скачать</a> файл.
          </audio>
          <audio class="audioHistory hide" controls>
            <source src="quizAudio/БорисЕльцин/ельцин.opus" type="audio/ogg; codecs=opus" />
            <source src="quizAudio/БорисЕльцин/ельцин.ogg" type="audio/ogg; codecs=vorbis" />
            <source src="quizAudio/БорисЕльцин/ельцин.mp3" type="audio/mpeg" />
            Ваш браузер не поддерживает встроенные аудио. Попробуйте
            <a href="quizAudio/БорисЕльцин/ельцин.mp3" download>скачать</a> файл.
          </audio>
          <input
            type="text"
            class="thirdWriteAnswer hide"
            autofocus
            autocomplete="off"
            placeholder="Ответ..."
            required
            maxlength="35"
          />
        </div>
      </main>
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
      <div class="choose_score_topic hide">
        <h1>Выберите тему</h1>
        <div class="topic-buttons">
          <button class="score_topic score_sport_topic">
            <img src="images/sport.jpg" alt="sport_img" class="sport_img" />
            <div>Спорт</div>
          </button>
          <button class="score_topic score_music_topic">
            <img src="images/music.jpg" alt="music_img" class="music_img" />
            <div>Музыка</div>
          </button>

          <button class="score_topic score_art_topic">
            <img src="images/art.png" alt="art_img" class="art_img" />
            <div>Искусство</div>
          </button>
          <button class="score_topic score_history_topic">
            <img src="images/history.jpg" alt="history_img" class="history_img" />
            <div>История</div>
          </button>
        </div>
        <a class="backButton">← Назад</a>
      </div>
      <div class="finishQuiz hide">
        <p class="playerResult"></p>
        <a class="menuButton">Главное меню</a>
      </div>
      <div class="score__sport hide">
        <table>
          <caption>
            Рейтинг игроков по теме "Спорт"
          </caption>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Количество баллов</th>
            </tr>
          </thead>
          <tbody class="tableSport"></tbody>
        </table>
        <div>
          <a class="backButtonSport">← Назад</a>
        </div>
      </div>
      <div class="score__music hide">
        <table>
          <caption>
            Рейтинг игроков по теме "Музыка"
          </caption>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Количество баллов</th>
            </tr>
          </thead>
          <tbody class="tableMusic"></tbody>
        </table>
        <div>
          <a class="backButtonMusic">← Назад</a>
        </div>
      </div>
      <div class="score__art hide">
        <table>
          <caption>
            Рейтинг игроков по теме "Искусство"
          </caption>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Количество баллов</th>
            </tr>
          </thead>
          <tbody class="tableArt"></tbody>
        </table>
        <div>
          <a class="backButtonArt">← Назад</a>
        </div>
      </div>
      <div class="score__history hide">
        <table>
          <caption>
            Рейтинг игроков по теме "История"
          </caption>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Количество баллов</th>
            </tr>
          </thead>
          <tbody class="tableHistory"></tbody>
        </table>
        <div>
          <a class="backButtonHistory">← Назад</a>
        </div>
      </div>
      <footer id="footer" class="hide">
        <div id="progressBar"></div>
      </footer>
      <div class="exitNext hide">
        <a class="quitQuiz" href="#">← Выйти</a>
        <a class="nextButton hide" href="#">Далее →</a>
        <a class="endButton hide" href="#">Завершить</a>
        <a class="launchButton hide" href="#">Начать</a>
      </div>
    </div>
  </body>
  <script defer src="js/quiz.min.js"></script>
</html>

<!-- + 1.Добавить модальное окно, при количестве символов меньше 2 в вводе имени
  + 2.Добавить добавление нового результата в таблицу и последующее сохранение этого результата с помощью localStorage
  + 3.Добавить прогрессбар
  + 4.Добавить в таблице сортировку результатов сверху вниз от большего к меньшему
  + 5.Добавить разную ценность вопросов -->