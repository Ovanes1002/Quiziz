<?php

require_once __DIR__ . "/helpers.php";

if($_SERVER['REQUEST_METHOD'] == 'POST') 
{
    $questions = getAllThemeQuestions();
    $currentQuestionIndex = $_SESSION['numberOfQuestion'] - 1;

    if (isset($_SESSION['lastClickedButton'])) {
        $lastClickedButton = $_SESSION['lastClickedButton'];
        $correctAnswer = $questions[$currentQuestionIndex]['correct_answer'];
        $difficulty = $questions[$currentQuestionIndex]['question_difficulty'];

        if ($lastClickedButton == $correctAnswer) {
            if (!isset($_SESSION['finalResult'])) {
                $_SESSION['finalResult'] = 0;
            }
            $_SESSION['finalResult'] += $difficulty;
        }

        // Увеличиваем номер вопроса для следующего
        $_SESSION['numberOfQuestion'] += 1;
        
        // Очистим последний кликнутый ответ
        unset($_SESSION['lastClickedButton']);
    }
    redirect(path: '/questionQuizBuild.php');
}


?>