<?php

require_once __DIR__ . '/../helpers.php';

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $userTableName = 'userTable_' . $_SESSION['quiz_name'] . '___' . $_SESSION['lastQuizId'];
    $pdo = getPDO();
    $sql = "CREATE TABLE `Quiziz_db`.`$userTableName` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `quiz_id` INT NULL,
        `user_id` INT NULL,
        `user_name` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
        `user_result` INT NULL,
        PRIMARY KEY (`id`),
        INDEX `QUIZID` (`quiz_id`),
        CONSTRAINT `ibfk_$userTableName` FOREIGN KEY (`quiz_id`) REFERENCES `quizzes`(`quiz_id`) ON DELETE CASCADE ON UPDATE RESTRICT
    ) ENGINE = InnoDB;
    ";
    // $result = $pdo->query($sql);
    // Выполните запрос
    if ($pdo->query($sql) === TRUE) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . $pdo->errorInfo()[2];
    }
    redirect(path: '/profile.php');
}

?>