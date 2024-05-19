<?php 

require_once __DIR__ . '/helpers.php';

checkAuth();

$user = currentUser();

?>

<?php include_once "head.php"; ?>
<body>
    <div class="headerSite">Quiziz</div>
    <div class="container">
		<div class="startPage">
			<div class="startMenu">
				<h2>Привет, <?php echo $user['name']; ?>!</h2>
				<img 
					class="avatar" 
					src="<?php echo $user['avatar']; ?>" 
					alt="<?php echo $user['name']; ?>"
					>
				<a href="/startQuiz.php">Старт</a>
				<a href="/quizTheme.php">Конструктор</a>
				<a href="/quizResults.php">Результаты</a>
				<form action="/actions/logout.php" method="post">
					<button role="button">Выйти</button>
				</form>
			</div>
		</div>
    </div>
  </body>
</html>