<?php

require_once __DIR__ . "/helpers.php";

if($_SERVER['REQUEST_METHOD'] == 'POST') 
{
    $questions = getAllThemeQuestions();
    $currentQuestionIndex = $_SESSION['numberOfQuestion'] - 1;

    if (isset($_SESSION['lastClickedButton'])) {
        $lastClickedButton = $_SESSION['lastClickedButton'];
        $correctAnswer = $questions[$currentQuestionIndex]['correct_answer'];
        $difficulty = $questions[$currentQuestionIndex]['question_difficulty'];

        if ($lastClickedButton == $correctAnswer) {
            // if (!isset($_SESSION['finalResult'])) {
            //     $_SESSION['finalResult'] = 0;
            // }
            $_SESSION['finalResult'] += $difficulty;
        }
        
        // Очистим последний кликнутый ответ
        unset($_SESSION['lastClickedButton']);
    }
    $user = currentUser();
    $currentTopicId = $_SESSION['currentTopicId'];
    try {
        $pdo = getPDO();
    
        // Запрос для получения имен таблиц, содержащих фрагмент '___$currentTopicId' в названии
        $sql = "SHOW TABLES LIKE :pattern";
        $stmt = $pdo->prepare($sql);
        $pattern = "%___" . $currentTopicId . "%";
        $stmt->bindParam(':pattern', $pattern);
    
        $stmt->execute();
    
        // Получение первого результата
        $tableName = $stmt->fetchColumn();
    
        if ($tableName) {
            $_SESSION['currentTableName'] = $tableName;
        } else {
            echo "Таблицы, содержащие фрагмент '___$currentTopicId' в названии, не найдены.";
        }
    } catch(PDOException $e) {
        echo "Ошибка: " . $e->getMessage();
    }
    $currentTableName = $_SESSION['currentTableName'];
        // // Создаём карточку вопроса
        // $pdo = getPDO();

        // // SQL запрос для получения последнего значения столбца 'quiz_id' из таблицы 'quizzes'
        // $sql = "SELECT MAX(id) AS max_id FROM $currentTableName";
    
        // // Подготавливаем запрос
        // $stmt = $pdo->prepare($sql);
    
        // // Выполняем запрос
        // $stmt->execute();
    
        // // Получаем результат запроса
        // $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // // Проверяем наличие результата
        // if ($row) {
        //     $lastId = $row['max_id'];
        // } else {
        //     return 'ошибка в функции lastQuizId()';
        // }

    $pdo = getPDO();
    
    $query = "INSERT INTO `$currentTableName` (quiz_id, user_id, user_name, user_result) VALUES (:quiz_id, :user_id, :user_name, :user_result)";
    $params = [
        'quiz_id' => $_SESSION['currentTopicId'],
        'user_id' => $user['id'],
        'user_name' => $user['name'],
        'user_result' => $_SESSION['finalResult'],
    ];

    $stmt = $pdo->prepare($query);  

    try {
        $stmt->execute($params);
    } catch (\Exception $e) {
        die($e->getMessage());
    }
    unset($_SESSION['currentTopicId']);
    unset($_SESSION['currentTableName']);
    redirect(path: '/userQuizResult.php');
}