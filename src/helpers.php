<?php

session_start();

function redirect(string $path) {
    header( header: "Location: $path" );
    die();
}

// присваивание полю ошибки
function addValidationError (string $fieldName, string $message) {
    $_SESSION['validation'][$fieldName] = $message;
}


// возвращает true, если поле $fieldName пустое, иначе false
function hasValidationError (string $fieldName): bool {
    return isset($_SESSION['validation'][$fieldName]);
}

// добавляет инпуту атрибут aria-invalid="true" если поле $fieldName пустое
function validationErrorAttr(string $fieldName) {
    echo isset($_SESSION['validation'][$fieldName]) ? 'aria-invalid="true"' : '';
}

// возвращает текст ошибки для поля $fieldName или пустую строку, если ошибки нет
function validationErrorMessage(string $fieldName) {
    $message = $_SESSION['validation'][$fieldName] ?? ''; // Если элемент с индексом $fieldName не определен в массиве $_SESSION['validation'], то оператор ?? вернет пустую строку вместо возникновения ошибки
    unset($_SESSION['validation'][$fieldName]); // удаляем из массива $_SESSION['validation'] элемент с индексом $fieldName
    echo $message; 
}

function addOldValue (string $key, mixed $value) {
    $_SESSION['old'][$key] = $value;
}

function old (string $key) {
    $value = $_SESSION['old'][$key] ?? '';
    unset($_SESSION['old'][$key]);
    return $value;
}


?>