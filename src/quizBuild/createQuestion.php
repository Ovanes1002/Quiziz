<?php

require_once __DIR__ . '/../helpers.php';

$quizQuestion = $_POST['quizQuestion'] ?? null;

$questionDifficulty = $_POST['questionDifficulty'] ?? null;
$firstTextarea = $_POST['firstTextarea'] ?? null;
$secondTextarea = $_POST['secondTextarea'] ?? null;
$thirdTextarea = $_POST['thirdTextarea'] ?? null;
$fourthTextarea = $_POST['fourthTextarea'] ?? null;

$radioGroup = $_POST['radioGroup'] ?? null;
// $secondRadioGroup = $_POST['secondRadioGroup'] ?? null;
// $thirdRadioGroup = $_POST['thirdRadioGroup'] ?? null;
// $fourthRadioGroup = $_POST['fourthRadioGroup'] ?? null;

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
    setOldValue('quizQuestion', $trimmedQuizQuestion);
    setOldValue('firstTextarea', $trimmedFirstTextarea);
    setOldValue('secondTextarea', $trimmedSecondTextarea);
    setOldValue('thirdTextarea', $trimmedThirdTextarea);
    setOldValue('fourthTextarea', $trimmedFourthTextarea);
    redirect(path: '/quizBuilder.php');
}

// Проверяем наличие непустого параметра value в массиве $_POST
$hasNonEmptyValue = true;
// Проверяем выбранную радиокнопку
if ($radioGroup === "firstRadio") {
    $correctAnswer = $trimmedFirstTextarea;
} elseif ($radioGroup === "secondRadio") {
    $correctAnswer = $trimmedSecondTextarea;
} elseif ($radioGroup === "thirdRadio") {
    $correctAnswer = $trimmedThirdTextarea;
} elseif ($radioGroup === "fourthRadio") {
    $correctAnswer = $trimmedFourthTextarea;
} else {
    $hasNonEmptyValue = false;
}

// foreach($radioGroup as $radioValue) {
//     if(strlen($radioValue) > 0) {
//         $correctAnswer = $trimmedFirstTextarea;
//     } else if (strlen($secondRadioGroup) > 0) {
//         $correctAnswer = $trimmedSecondTextarea;
//     } else if (strlen($thirdRadioGroup) > 0) {
//         $correctAnswer = $trimmedThirdTextarea;
//     } else if (strlen($fourthRadioGroup) > 0) {
//         $correctAnswer = $trimmedFourthTextarea;
//     } else {
//         $hasNonEmptyValue = false;
//     }
// }


if (!$hasNonEmptyValue) {
    setMessage(key:'error', message:"Выберите правильный вариант ответа");
    setOldValue('quizQuestion', $trimmedQuizQuestion);
    setOldValue('firstTextarea', $trimmedFirstTextarea);
    setOldValue('secondTextarea', $trimmedSecondTextarea);
    setOldValue('thirdTextarea', $trimmedThirdTextarea);
    setOldValue('fourthTextarea', $trimmedFourthTextarea);
    redirect(path: '/quizBuilder.php');
}
    
if(!empty($_SESSION['validation'])) {
        setOldValue('quizQuestion', $trimmedQuizQuestion);
        setOldValue('firstTextarea', $trimmedFirstTextarea);
        setOldValue('secondTextarea', $trimmedSecondTextarea);
        setOldValue('thirdTextarea', $trimmedThirdTextarea);
        setOldValue('fourthTextarea', $trimmedFourthTextarea);
        redirect(path:'/quizBuilder.php');
    }

createQuestion($trimmedQuizQuestion, 
                $questionDifficulty, 
                $trimmedFirstTextarea, 
                $trimmedSecondTextarea, 
                $trimmedThirdTextarea, 
                $trimmedFourthTextarea,
                $correctAnswer);

$_SESSION['quiz_question_number'] += 1;
redirect(path: '/quizBuilder.php');

?>