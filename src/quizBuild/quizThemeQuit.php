<?php

require_once __DIR__ . '/../helpers.php';

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    redirect(path: '/profile.php');
}

?>