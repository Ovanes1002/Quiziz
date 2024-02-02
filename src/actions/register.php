<?php

require_once __DIR__ . '/../helpers.php';

// Выносим данные из $_POST в отдельные переменные

$avatarPath = null;
$name = $_POST['name'] ?? null;
$email = $_POST['email'] ?? null;
$password = $_POST['password'] ?? null;
$password_confirm = $_POST['confirmPassword'] ?? null;
$avatar = $_FILES['avatar'] ?? null;


// Validation

if (empty($name)) {
    setValidationError(fieldName: 'name', message: 'Имя не может быть пустым');
}

if (!filter_var($email, filter: FILTER_VALIDATE_EMAIL)) {
    setValidationError(fieldName: 'email', message: 'Некорректный email');
}

if (empty($password)) {
    setValidationError(fieldName: 'password', message: 'Пароль не может быть пустым');
}

if ($password !== $password_confirm) {
    setValidationError(fieldName: 'password', message: 'Пароли не совпадают');
}



if (!empty($avatar)) {
    $types = ['image/png', 'image/jpeg'];

    if (!in_array($avatar['type'], $types)) {
        setValidationError(fieldName: 'avatar', message: 'Изображение профиля имеет неверный тип');
    }

    if (($avatar['size'] / 1000000) >= 1) {
        setValidationError(fieldName: 'avatar', message: 'Изображение профиля должно быть не больше 1 МБ');
    }
}


if (!empty($_SESSION['validation'])) {
    setOldValue('name', $name);
    setOldValue('email', $email);
    // redirect to register page
    redirect(path: '/register.php');
}

if (!empty($avatar)) {
    $avatarPath = uploadFile(file: $avatar, prefix: 'avatar_');
}

// Создаем пользователя
$pdo = getPDO();


$query = "INSERT INTO users (name, email, avatar, password) VALUES (:name, :email, :avatar, :password)";
$params = [
    'name' => $name,
    'email' => $email,
    'avatar' => $avatarPath,
    'password' => password_hash($password, algo: PASSWORD_DEFAULT)
];

$stmt = $pdo->prepare($query);

try {
    $stmt->execute($params);
} catch (\Exception $e) {
    die($e->getMessage());
}

redirect(path: '/index.php');

?>