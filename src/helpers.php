<?php

session_start();

function redirect(string $path) {
    header( header: "Location: $path" );
    die();
}

function addValidationError (string $fieldName, string $message) {
    $_SESSION['validation'][$fieldName] = $message;
}

function hasValidationError (string $fieldName): bool {
    return isset($_SESSION['validation'][$fieldName]);
}

function validationErrorAttr(string $fieldName) {
    echo isset($_SESSION['validation'][$fieldName]) ? 'aria-invalid="true"' : '';
}

function validationErrorMessage(string $fieldName) {
    echo $_SESSION['validation'][$fieldName] ?? ''; // Если элемент с индексом $fieldName не определен в массиве $_SESSION['validation'], то оператор ?? вернет пустую строку вместо возникновения ошибки
}

?>