<?php

require_once __DIR__ . '/../helpers.php';

$quizPath = null;
$quizName = $_POST['quizName'] ?? null;
$trimmedName = trim(preg_replace('/\s+/', ' ', $quizName));

$_SESSION['quiz_name'] = $trimmedName;

if (empty($trimmedName)) {
    setValidationError(fieldName: 'quizName', message: 'Задайте имя викторины');
}

if (!empty($_SESSION['validation'])) {
    redirect(path: '/quizTheme.php');
} 

if (!empty($trimmedName)) {
    insertQuizName($_SESSION['quiz_name']);
}

$_SESSION['quiz_question_number'] = 1;
redirect(path: '/quizBuilder.php');

?>