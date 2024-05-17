<?php

require_once __DIR__ . "/helpers.php";

if (isset($_POST['buttonText'])) {
    $_SESSION['lastClickedButton'] = $_POST['buttonText']; // Сохранение ID нажатой кнопки в сессии
    echo 'ID кнопки сохранено: ' . $_POST['buttonText']; // Ответ сервера
} else {
    echo 'ID кнопки не получено'; // Сообщение об ошибке
}

?>