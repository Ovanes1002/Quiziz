<?php

require_once __DIR__ . '/helpers.php';

checkAuth();

$user = currentUser();

?>
<?php include_once "head.php"; ?>

<body>
	<div class="headerSite">Quiziz</div>
	<div class="container">
		<table class="tableHistory">
			<caption>
            	Рейтинг игроков по теме "История"
          	</caption>
			<thead>
				<tr>
					<th>Имя</th>
					<th>Количество баллов</th>
				</tr>
			</thead>
			<tbody class="tableHistoryBody">
				<?php getValue('история'); ?>
			</tbody>
		</table>
		<a href="/chooseScoreTopic.php"">← Назад</a>
	</div>
</body>

</html>