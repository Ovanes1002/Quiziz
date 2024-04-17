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
		
			<p class="playerResult"><?php echo $user['name']; ?>, твой результат: <?php echo playerResult(); ?></p>
			<?php insertValue($user['name'], $_SESSION['playerResult'], $_SESSION['lastClickedTopic']); ?>
			<span class="currentIndex">
				<?php echo topicIndex($_SESSION['lastClickedTopic']);?>
			</span>
			<div class="finishAnswers">
				
			</div>
			<a class="menuButton" href="/profile.php">Главное меню</a>
		</div>
	</div>
</body>
	
<!-- <script defer src="js/quizVariables.js"></script> -->
<script defer src="js/questions.js"></script>
<script defer src="js/chooseTopic.js"></script>
<!-- <script defer src="js/SetShowQuestion.js"></script> -->
<script defer src="js/finishQuiz.js"></script>

<!-- Отображение ответов пользователя
1. Учитываем значение текущего индекса currentQuestionIndex
2. Начинаем проходить по массиву начиная с currentQuestionIndex позиции
3. Для первых 7 элементов одинаковая конструкция вида 
		<header id="header">
        	<div class="questionNumber"></div>
        	<div class="points">1 балл</div>
      	</header>
		<main class="card">
			<p class="question"></p>
			<span class="currentIndex">
			<?php echo topicIndex($_SESSION['lastClickedTopic']);?>
			</span>
			<div class="answer-buttons">
				<button class="button" data-button-id="1"></button>
				<button class="button" data-button-id="2"></button>
				<button class="button" data-button-id="3"></button>
				<button class="button" data-button-id="4"></button>
			</div>
		</main>
		<footer id="footer">
        	<div id="progressBar"></div>
      	</footer>
4. Для последних 3 элементов конструкция вида
			<div class="answer-buttons">
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
					<source src="quizAudio/BorisYeltsin/Yeltsin.opus" type="audio/ogg; codecs=opus" />
					<source src="quizAudio/BorisYeltsin/Yeltsin.ogg" type="audio/ogg; codecs=vorbis" />
					<source src="quizAudio/BorisYeltsin/Yeltsin.mp3" type="audio/mpeg" />
					Ваш браузер не поддерживает встроенные аудио. Попробуйте
					<a href="quizAudio/BorisYeltsin/Yeltsin.mp3" download>скачать</a> файл.
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
5. то есть нужно то же самое как было только:
	а) нужно пройтись по всем элементам темы разово(блок карточки будет повторяться на странице 10 раз, идут колонной)
	б) нужно фон правильного ответа окрасить: зелёным(если пользователь выбрал правильно); красным(в противном случае)
 -->

</html>