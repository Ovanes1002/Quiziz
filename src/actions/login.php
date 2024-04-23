<?php 

require_once __DIR__ . '/../helpers.php';

$email = $_POST['email'] ?? null;
$password = $_POST['password'] ?? null;

if(empty(trim($email)) || !filter_var(trim($email), filter:FILTER_VALIDATE_EMAIL)) {
    setOldValue('email', $email);
    setValidationError(fieldName:'email', message:"Неверный формат электронной почты");
    setMessage(key:'error', message:"Ошибка в почте");
    redirect(path:'/');
}


$user = findUser(trim($email));

if (!$user){
    setMessage(key:'error', message:"Пользователь $email не найден");
    redirect(path:'/');
}

if(!password_verify($password, $user['password'])) {
    setOldValue('email', $email);
    setValidationError(fieldName:'password', message:"Неверный пароль");
    setMessage(key:'error', message:"Ошибка в пароле");
    redirect(path:'/');
}

$_SESSION['user']['id'] = $user['id'];

redirect(path:'/profile.php');
?>