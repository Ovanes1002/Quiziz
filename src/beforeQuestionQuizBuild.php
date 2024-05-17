<?php

require_once __DIR__ . "/helpers.php";

if($_SERVER['REQUEST_METHOD'] == 'POST') 
{
    $_SESSION['numberOfQuestion'] = 1;
    $_SESSION['currentValue'] = 0;
    $_SESSION['currentTopic'] = setTopic();
    $_SESSION['finalResult'] = 0;
    redirect(path: '/questionQuizBuild.php');
}


?>