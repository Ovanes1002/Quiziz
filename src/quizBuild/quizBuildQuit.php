<?php

require_once __DIR__ . '/../helpers.php';

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    deleteQuizName($_SESSION['quiz_name']);
    unset($_SESSION['quiz_name']);
    redirect(path: '/profile.php');
}

?>