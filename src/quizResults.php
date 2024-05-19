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
                <h2>Результаты викторин</h2>
				<img 
					class="avatar" 
					src="<?php echo $user['avatar']; ?>" 
					alt="<?php echo $user['name']; ?>"
				>
				<a href="/chooseScoreTopic.php">Обычные</a>
				<a href="/usersQuizzesResults.php">Пользовательские</a>
				<a href="/profile.php">Назад</a>
			</div>
		</div>
    </div>
  </body>
</html>