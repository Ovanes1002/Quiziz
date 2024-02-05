function lastClickedTopicValue(value) {
	console.log(value);
	// Отправляем значение на сервер с использованием Fetch
	fetch('card.php', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	  },
	  body: 'lastClickedTopic=' + encodeURIComponent(value),
	});
  }