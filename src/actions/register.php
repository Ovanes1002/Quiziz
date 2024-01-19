<?php

require_once __DIR__ . '/../helpers.php';

// Выносим данные из $_POST в отдельные переменные
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$password_confirm = $_POST['confirmPassword'];

 

// Validation

if (empty($name)) {
    addValidationError(fieldName: 'name', message: 'Имя не может быть пустым');
}

if(!empty($_SESSION['validation'])) {
    // redirect to register page
    redirect( path: '/register.php'); 
}

?>