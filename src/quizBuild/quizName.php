<?php

require_once __DIR__ . '/../helpers.php';

$quizPath = null;
$quizName = $_POST['quizName'] ?? null;

if (empty($quizName)) {
    setValidationError(fieldName: 'quizName', message: 'Задайте имя викторины');
}

if (!empty($_SESSION['validation'])) {
    redirect(path: '/quizBuilder.php');
}

?>