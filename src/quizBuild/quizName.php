<?php

require_once __DIR__ . '/../helpers.php';

$quizPath = null;
$quizName = $_POST['quizName'] ?? null;
$trimmedName = trim(preg_replace('/\s+/', ' ', $quizName));

if (empty($trimmedName)) {
    setValidationError(fieldName: 'quizName', message: 'Задайте имя викторины');
}

if (!empty($_SESSION['validation'])) {
    redirect(path: '/quizTheme.php');
} 

if (!empty($trimmedName)) {
    insertQuizName($trimmedName);
}

redirect(path: '/quizBuilder.php');

?>