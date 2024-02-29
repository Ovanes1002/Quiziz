<?php

require_once __DIR__ . '/../helpers.php';

// Получаем новое соединение с базой данных
$pdo = getPDO();

// Параметры для запроса
$query = "INSERT INTO sportTable (name, result) VALUES (:name, :result)";
$params = [
    'name' => $name,
    'result' => $result
];

// Подготавливаем и выполняем запрос
$stmt = $pdo->prepare($query);
$stmt->execute($params);

// Обработка ошибок, если необходимо
if ($stmt->errorCode() !== '00000') {
    die("Ошибка при добавлении результата в таблицу.");
}

// Вывод успешного сообщения
echo "Результат успешно добавлен в таблицу sportTable.";

redirect(path: '/index.php');

?>