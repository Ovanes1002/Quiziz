<?php

require_once __DIR__ . '/helpers.php';

checkAuth();

$user = currentUser();

?>
<?php include_once "head.php"; ?>

<body>
	<div class="headerSite">Quiziz</div>
	<div class="container">
		<table>
			<caption>
            	Рейтинг игроков по теме "<?=$_SESSION['currentTopic']?>"
          	</caption>
			<thead>
				<tr>
					<th>Имя</th>
					<th>Количество баллов</th>
				</tr>
			</thead>
			<tbody>
				<?php getAllUserTableResults ($_SESSION['currentTopicId']); ?>
			</tbody>
		</table>
		<a href="/usersQuizzesResults.php"">← Назад</a>
	</div>
</body>

</html>
