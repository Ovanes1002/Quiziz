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
				<a href="/chooseTopic.php">Обычные</a>
				<a href="/usersQuizzes.php">Пользовательские</a>
				<a href="/profile.php">Назад</a>
			</div>
		</div>
    </div>
  </body>
</html>