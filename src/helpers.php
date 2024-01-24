<?php

session_start();

require_once __DIR__ . '/config.php';

function redirect(string $path) 
{
    header( header: "Location: $path" );
    die();
}

// присваивание полю ошибки
function addValidationError (string $fieldName, string $message) 
{
    $_SESSION['validation'][$fieldName] = $message;
}


// возвращает true, если поле $fieldName пустое, иначе false
function hasValidationError (string $fieldName): bool 
{
    return isset($_SESSION['validation'][$fieldName]);
}

// добавляет инпуту атрибут aria-invalid="true" если поле $fieldName пустое
function validationErrorAttr(string $fieldName) 
{
    echo isset($_SESSION['validation'][$fieldName]) ? 'aria-invalid="true"' : '';
}

// возвращает текст ошибки для поля $fieldName или пустую строку, если ошибки нет
function validationErrorMessage(string $fieldName) 
{
    $message = $_SESSION['validation'][$fieldName] ?? ''; // Если элемент с индексом $fieldName не определен в массиве $_SESSION['validation'], то оператор ?? вернет пустую строку вместо возникновения ошибки
    unset($_SESSION['validation'][$fieldName]); // удаляем из массива $_SESSION['validation'] элемент с индексом $fieldName
    echo $message; 
}

function addOldValue (string $key, mixed $value) 
{
    $_SESSION['old'][$key] = $value;
}

function old (string $key) 
{
    $value = $_SESSION['old'][$key] ?? '';
    unset($_SESSION['old'][$key]);
    return $value;
}

function uploadFile (array $file, string $prefix = ''):string 
{

    $uploadPath = __DIR__ . '/../uploads';

    if (!is_dir($uploadPath)) {
        mkdir($uploadPath, permissions: 0777, recursive: true);
    }

    $avatarExtension = pathinfo($file['name'], flags: PATHINFO_EXTENSION);
    $fileName = $prefix . time() . ".$avatarExtension";

    if(!move_uploaded_file($file['tmp_name'], "$uploadPath/$fileName")) {
        die('Ошибка загрузки файла на сервер');
    }

    return "uploads/$fileName";
}

function getPDO (): PDO 
{
    try {
        return new \PDO(dsn: 'mysql:host=' . DB_HOST . ';port=' . DB_PORT . ';charset=utf8;dbname=' . DB_NAME, username: DB_USERNAME, password: DB_PASSWORD);
    } catch (\PDOException $e) {
        die("Connection error: {$e->getMessage()}");
    }

}

?>