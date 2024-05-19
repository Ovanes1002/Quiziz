<?php

require_once __DIR__ . "/helpers.php";

if($_SERVER['REQUEST_METHOD'] == 'POST') 
{
    $_SESSION['currentTopicId'] = setTopicId();
    $_SESSION['currentTopic'] = setTopic();
    redirect(path: '/userTableResult.php');
}


?>