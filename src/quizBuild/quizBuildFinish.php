<?php

require_once __DIR__ . '/../helpers.php';

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $userTableName = 'userTable_' . $_SESSION['quiz_name'] . '___' . $_SESSION['lastQuizId'];
    $pdo = getPDO();
    // if (!$pdo) {
    //     die("Ошибка подключения к базе данных");
    // }
    $sql = "CREATE TABLE `Quiziz_database`.`$userTableName` ( 
        `id` INT NOT NULL AUTO_INCREMENT,
        `quiz_id` INT NULL, 
        `user_id` INT NULL, 
        `user_name` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
        `user_result` INT NULL, PRIMARY KEY (`id`),
        INDEX `QUIZID` (`quiz_id`)
        ) ENGINE = InnoDB;
    ";
    $pdo->query($sql);
    // $result = $pdo->query($sql);
    // Выполните запрос
    // if ($pdo->query($sql) === TRUE) {
    //     echo "Table MyGuests created successfully";
    // } else {
    //     $errorInfo = $pdo->errorInfo();
    //     echo "Error creating table: " . htmlspecialchars($errorInfo[2]) . "<br>";
    //     echo "SQLSTATE code: " . htmlspecialchars($errorInfo[0]) . "<br>";
    //     echo "Driver-specific error code: " . htmlspecialchars($errorInfo[1]) . "<br>";
    // }
    redirect(path: '/profile.php');
}

?>