<?php

require_once __DIR__ . '/../helpers.php';

$firstTextarea = $_POST['firstTextarea'] ?? null;
$secondTextarea = $_POST['secondTextarea'] ?? null;
$thirdTextarea = $_POST['thirdTextarea'] ?? null;
$fourthTextarea = $_POST['fourthTextarea'] ?? null;

$trimmedFirstTextarea = trim(preg_replace('/\s+/', ' ', $firstTextarea));
$trimmedSecondTextarea = trim(preg_replace('/\s+/', ' ', $secondTextarea));
$trimmedThirdTextarea = trim(preg_replace('/\s+/', ' ', $thirdTextarea));
$trimmedFourthTextarea = trim(preg_replace('/\s+/', ' ', $fourthTextarea));

if (empty($trimmedFirstTextarea) ||
    empty($trimmedSecondTextarea) ||
    empty($trimmedThirdTextarea) ||
    empty($trimmedFourthTextarea)) {
    setMessage(key:'error', message:"Заполните все варианты ответов");
    redirect(path:'/quizBuilder.php');
}

redirect(path: '/quizTheme.php');

?>