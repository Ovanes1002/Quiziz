<?php

require_once __DIR__ . '/../helpers.php';

$quizQuestion = $_POST['quizQuestion'] ?? null;
$firstTextarea = $_POST['firstTextarea'] ?? null;
$secondTextarea = $_POST['secondTextarea'] ?? null;
$thirdTextarea = $_POST['thirdTextarea'] ?? null;
$fourthTextarea = $_POST['fourthTextarea'] ?? null;

$trimmedQuizQuestion = trim(preg_replace('/\s+/', ' ', $quizQuestion));
$trimmedFirstTextarea = trim(preg_replace('/\s+/', ' ', $firstTextarea));
$trimmedSecondTextarea = trim(preg_replace('/\s+/', ' ', $secondTextarea));
$trimmedThirdTextarea = trim(preg_replace('/\s+/', ' ', $thirdTextarea));
$trimmedFourthTextarea = trim(preg_replace('/\s+/', ' ', $fourthTextarea));

if (empty($trimmedQuizQuestion)) {
    setValidationError(fieldName: 'quizQuestion', message: 'Напишите вопрос викторины');
}

if (empty($trimmedFirstTextarea) ||
    empty($trimmedSecondTextarea) ||
    empty($trimmedThirdTextarea) ||
    empty($trimmedFourthTextarea)) {
    setMessage(key:'error', message:"Заполните все варианты ответов");
}

if(!empty($_SESSION['validation']) ||
    !empty($_SESSION['message'])) {
        setOldValue('quizQuestion', $trimmedQuizQuestion);
        setOldValue('firstTextarea', $trimmedFirstTextarea);
        setOldValue('secondTextarea', $trimmedSecondTextarea);
        setOldValue('thirdTextarea', $trimmedThirdTextarea);
        setOldValue('fourthTextarea', $trimmedFourthTextarea);
        redirect(path:'/quizBuilder.php');
    }

redirect(path: '/quizTheme.php');

?>