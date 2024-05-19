<?php

require_once __DIR__ . '/../helpers.php';

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    if ($_SESSION['quiz_question_number'] !== 1) {
        deleteQuiz();
    }
    
    deleteQuizName($_SESSION['quiz_name']);
    unset($_SESSION['quiz_name']);
    unset($_SESSION['quiz_question_number']);
    unset($_SESSION['lastQuizId']);
    redirect(path: '/profile.php');
}

?>