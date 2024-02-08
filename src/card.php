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
		<h1>Тема: <span class="currentTopic"><?php echo setTopic();?></span></h1>
		<span class="currentIndex">
			<?php echo topicIndex($_SESSION['lastClickedTopic']);?>
		</span>
		<header id="header">
        	<div class="questionNumber"></div>
        	<div class="points">1 балл</div>
      	</header>
		<main class="card">
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
		<footer id="footer">
        	<div id="progressBar"></div>
      	</footer>
		<div class="exitNext">
            <a class="quitQuiz" href="/profile.php">← Выйти</a>
            <a class="nextButton hide" href="#">Далее →</a>
            <a class="endButton hide" href="#">Завершить</a>
            <!-- <a class="launchButton hide" href="/card.php">Начать</a> -->
        </div>
    </div>
  </body>
  <script src="js/quizVariables.js" defer></script>
  <script src="js/questions.js" defer></script>
  <script src="js/chooseTopic.js" defer></script>
  <script src="js/SetShowQuestion.js" defer></script>
  <script src="js/chooseAnswer.js" defer></script>
  <script src="js/nextButton.js" defer></script>
  <script src="js/endButton.js" defer></script>
</html>