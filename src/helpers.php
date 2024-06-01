<?php

session_start();

require_once __DIR__ . '/config.php';

function redirect(string $path) 
{
    header( header: "Location: $path" );
    die();
}

// присваивание полю ошибки
function setValidationError (string $fieldName, string $message) 
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

function setOldValue (string $key, mixed $value) 
{
    $_SESSION['old'][$key] = $value;
}

function getOldValue (string $key) 
{
    $value = $_SESSION['old'][$key] ?? '';
    unset($_SESSION['old'][$key]);
    return $value;
}

function uploadFile (array $file, string $prefix = ''):string 
{

    $uploadPath = __DIR__ . '/uploads';

    if (!is_dir($uploadPath)) {
        mkdir($uploadPath, permissions: 0777, recursive: true);
    }

    if ($file !== null && $file['error'] === UPLOAD_ERR_OK) {

        $avatarExtension = pathinfo($file['name'], flags: PATHINFO_EXTENSION);
        $fileName = $prefix . time() . ".$avatarExtension";

        if(!move_uploaded_file($file['tmp_name'], "$uploadPath/$fileName")) {
            die('Ошибка загрузки файла на сервер');
        }
        return "uploads/$fileName";
    } else {
        // Файл не был загружен, используем иконку по умолчанию
        $defaultIconPath = __DIR__ . '/uploads/icon-user-default.png';
        $newFileName = $prefix . time() . ".png";

        // Переименовываем иконку по умолчанию
        if (!copy($defaultIconPath, "$uploadPath/$newFileName")) {
            die('Ошибка копирования файла на сервер');
        }

        return "uploads/$newFileName";
    }
}

function uploadQuizIconFile (array $file, string $prefix = ''):string 
{

    $uploadPath = __DIR__ . '/quizIconUploads';

    if (!is_dir($uploadPath)) {
        mkdir($uploadPath, permissions: 0777, recursive: true);
    }

    if ($file !== null && $file['error'] === UPLOAD_ERR_OK) {

        $quizIconExtension = pathinfo($file['name'], flags: PATHINFO_EXTENSION);
        $fileName = $prefix . time() . ".$quizIconExtension";

        if(!move_uploaded_file($file['tmp_name'], "$uploadPath/$fileName")) {
            die('Ошибка загрузки файла на сервер');
        }
        return "quizIconUploads/$fileName";
    } else {
        // Файл не был загружен, используем иконку по умолчанию
        $defaultIconPath = __DIR__ . '/quizIconUploads/picture_icon.png';
        $newFileName = $prefix . time() . ".png";

        // Переименовываем иконку по умолчанию
        if (!copy($defaultIconPath, "$uploadPath/$newFileName")) {
            die('Ошибка копирования файла на сервер');
        }

        return "quizIconUploads/$newFileName";
    }
}

function setMessage (string $key, string $message): void 
{
    $_SESSION['message'][$key] = $message; 
}

function hasMessage (string $key): bool
{
    return isset($_SESSION['message'][$key]);
}

function getMessage (string $key): string
{
    $message = $_SESSION['message'][$key] ?? '';
    unset($_SESSION['message'][$key]);
    return $message;
}

function getPDO (): PDO 
{
    try {
        return new \PDO(dsn: 'mysql:host=' . DB_HOST . ';port=' . DB_PORT . ';charset=utf8;dbname=' . DB_NAME, username: DB_USERNAME, password: DB_PASSWORD);
    } catch (\PDOException $e) {
        die("Connection error: {$e->getMessage()}");
    }

}

function findUser(string $email): array|bool
{
    $pdo = getPDO();

    $stmt = $pdo->prepare(query:"SELECT * FROM users WHERE email = :email");
    $stmt->execute(['email' => $email]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function currentUser(): array|bool
{
    $pdo = getPDO();

    if(!isset($_SESSION['user'])) {
        return false;
    }

    $userId = $_SESSION['user']['id'] ?? null;

    $stmt = $pdo->prepare(query:"SELECT * FROM users WHERE id = :id");
    $stmt->execute(['id' => $userId]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function logout (): void
{
    unset($_SESSION['user']['id']);
    unset($_SESSION['quiz_name']);
    redirect(path: '/');
}

// проверка авторизации
// если пользователь не авторизован, то редирект на главную страницу
function checkAuth(): void
{
    if(!isset($_SESSION['user']['id'])) {
        redirect(path: '/');
    }
}

// проверка гостя
// если пользователь авторизован, то редирект на профиль
function checkGuest(): void
{
    if(isset($_SESSION['user']['id'])) {
        redirect(path: '/profile.php');
    }
}

function checkQuizCreate(): void
{
    if(!isset($_SESSION['quiz_name'])) {
        redirect(path: '/quizTheme.php');
    }
}

function checkQuizName(): void
{
    if(isset($_SESSION['quiz_name'])) {
        redirect(path: '/quizBuilder.php');
    }
}

function setTopic()
{
    if(isset($_POST['lastClickedTopic'])) {

        $_SESSION['lastClickedTopic'] = $_POST['lastClickedTopic'];
        // return $_SESSION['lastClickedTopic'];
        unset($_POST['lastClickedTopic']);
        return $_SESSION['lastClickedTopic'];
      
    } else {
        echo "Topic not set in POST";
      }

}

function setTopicId()
{
    if(isset($_POST['topicId'])) {

        $_SESSION['topicId'] = $_POST['topicId'];
        // return $_SESSION['lastClickedTopic'];
        unset($_POST['topicId']);
        return $_SESSION['topicId'];
      
    } else {
        echo "topicId not set in POST";
      }

}

// function setTopic (string $key, mixed $lastClickedTopic): void 
// {
//     $_SESSION['topic'][$key] = $lastClickedTopic; 
// }

function topicIndex($topic)
{
    if($topic == 'спорт') {
        $currentIndex = 0;
    } elseif ($topic == 'музыка') {
        $currentIndex = 10;
    } elseif ($topic == 'искусство') {
        $currentIndex = 20;
    } elseif ($topic == 'история') {
        $currentIndex = 30;
    }
    return $currentIndex;
}

function topicId($topicid)
{
    $currentId = $topicid;
    return $currentId;
}

function playerResult() 
{
    if(isset($_POST['playerResult'])) {

        $_SESSION['playerResult'] = $_POST['playerResult'];
        // return $_SESSION['lastClickedTopic'];
        unset($_POST['playerResult']);
        return $_SESSION['playerResult'];
      
    } else {
        echo "playerResult not set in POST";
      }
}

function insertValue($user, $result, $lastClickedTopic)
{
    // Получаем подключение к базе данных
    $pdo = getPDO();

    // Вставляем данные пользователя и его результат в таблицу tableSport

    // $user = $_SESSION['user']; // Предположим, что имя пользователя передается в POST-запросе
    // $result = $_SESSION['playerResult']; // Предположим, что результат передается в POST-запросе

    // Подготавливаем SQL-запрос с использованием подготовленных выражений
    if($lastClickedTopic == 'спорт') {
            $sql = "INSERT INTO tableSport (user, result) VALUES (:user, :result)";
        } elseif ($lastClickedTopic == 'музыка') {
            $sql = "INSERT INTO tableMusic (user, result) VALUES (:user, :result)";
        } elseif ($lastClickedTopic == 'искусство') {
            $sql = "INSERT INTO tableArt (user, result) VALUES (:user, :result)";
        } else {
            $sql = "INSERT INTO tableHistory (user, result) VALUES (:user, :result)";
        }

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':user', $user, PDO::PARAM_STR);
    $stmt->bindParam(':result', $result, PDO::PARAM_INT);
    $stmt->execute();   
//     if ($stmt->execute()) {
//         echo "Данные успешно добавлены в таблицу";
//     } else {
//         echo "Ошибка при добавлении данных: " . $stmt->errorInfo()[2];
// }
}

function getValue($scoreTopic)
{
        // Получение подключения к базе данных
    $pdo = getPDO();

    // Запрос для извлечения данных из таблицы
    if($scoreTopic == 'спорт') {
        $sql = "SELECT user, result FROM tableSport ORDER BY result DESC";
    } elseif ($scoreTopic == 'музыка') {
        $sql = "SELECT user, result FROM tableMusic ORDER BY result DESC";
    } elseif ($scoreTopic == 'искусство') {
        $sql = "SELECT user, result FROM tableArt ORDER BY result DESC";
    } else {
        $sql = "SELECT user, result FROM tableHistory ORDER BY result DESC";
    }

    $result = $pdo->query($sql);

    if ($result->rowCount() > 0) {
        
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "<tr>";
            echo "<td>".$row["user"]."</td>";
            echo "<td>".$row["result"]."</td>";
            echo "</tr>";
        }

    } 
// else {
//     echo "Таблица пуста.";
// }
}

function insertQuizName($name, $quizIconPath) 
{
    $pdo = getPDO();

    $sql = "INSERT INTO quizzes (quiz_name, quiz_img) VALUES (:quiz_name, :quiz_img)";
    $params = [
        'quiz_name' => $name,
        'quiz_img' => $quizIconPath,
    ];

    $stmt = $pdo->prepare($sql);

    try {
        $stmt->execute($params);
    } catch (\Exception $e) {
        die($e->getMessage());
    }
}

function lastQuizId()
{
    // Создаём карточку вопроса
    $pdo = getPDO();

    // SQL запрос для получения последнего значения столбца 'quiz_id' из таблицы 'quizzes'
    $sql = "SELECT MAX(quiz_id) AS max_quiz_id FROM quizzes";

    // Подготавливаем запрос
    $stmt = $pdo->prepare($sql);

    // Выполняем запрос
    $stmt->execute();

    // Получаем результат запроса
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Проверяем наличие результата
    if ($row) {
        $lastQuizId = $row['max_quiz_id'];
        return strval($lastQuizId);
    } else {
        return 'ошибка в функции lastQuizId()';
    }
}

function deleteQuizName($nameOfQuiz) 
{
    $pdo = getPDO();

    $sql = "DELETE FROM quizzes WHERE quiz_name = :quiz_name";

    $stmt = $pdo->prepare($sql);
    
    $stmt->bindParam(':quiz_name', $nameOfQuiz, PDO::PARAM_STR);
    $stmt->execute();   
}

function deleteQuiz() 
{
    try {
        // Создаём карточку вопроса
        $pdo = getPDO();

        // SQL запрос для получения последнего значения столбца 'quiz_id' из таблицы 'quizzes'
        $sql = "SELECT MAX(quiz_id) AS max_quiz_id FROM quizzes";

        // Подготавливаем запрос
        $stmt = $pdo->prepare($sql);

        // Выполняем запрос
        $stmt->execute();

        // Получаем результат запроса
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Проверяем наличие результата
        if ($row) {
            $last_quiz_id = $row['max_quiz_id'];
            // echo "Последнее значение 'quiz_id' из таблицы 'quizzes': " . $last_quiz_id;
        } else {
            echo "Результат запроса пуст.";
        }
    } catch(PDOException $e) {
        echo "Ошибка при получении последнего значения 'quiz_id': " . $e->getMessage();
    }

    $pdo = getPDO();

    $sql = "DELETE FROM questions WHERE quiz_id = :quiz_id";

    $stmt = $pdo->prepare($sql);
    
    $stmt->bindParam(':quiz_id', $last_quiz_id, PDO::PARAM_STR);
    $stmt->execute();
}

function createQuestion(
                        $trimmedQuizQuestion, 
                        $questionDifficulty, 
                        $trimmedFirstTextarea, 
                        $trimmedSecondTextarea, 
                        $trimmedThirdTextarea, 
                        $trimmedFourthTextarea,
                        $correctAnswer)
{
    try {
        // Создаём карточку вопроса
        $pdo = getPDO();

        // SQL запрос для получения последнего значения столбца 'quiz_id' из таблицы 'quizzes'
        $sql = "SELECT MAX(quiz_id) AS max_quiz_id FROM quizzes";

        // Подготавливаем запрос
        $stmt = $pdo->prepare($sql);

        // Выполняем запрос
        $stmt->execute();

        // Получаем результат запроса
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Проверяем наличие результата
        if ($row) {
            $last_quiz_id = $row['max_quiz_id'];
            // echo "Последнее значение 'quiz_id' из таблицы 'quizzes': " . $last_quiz_id;
        } else {
            echo "Результат запроса пуст.";
        }
    } catch(PDOException $e) {
        echo "Ошибка при получении последнего значения 'quiz_id': " . $e->getMessage();
    }

    $query = "INSERT INTO questions (quiz_id, question_text, question_difficulty, first_variant, second_variant, third_variant, fourth_variant, correct_answer) VALUES (:quiz_id, :question_text, :question_difficulty, :first_variant, :second_variant, :third_variant, :fourth_variant, :correct_answer)";
    $params = [
        'quiz_id' => $last_quiz_id,
        'question_text' => $trimmedQuizQuestion,
        'question_difficulty' => $questionDifficulty,
        'first_variant' => $trimmedFirstTextarea,
        'second_variant' => $trimmedSecondTextarea,
        'third_variant' => $trimmedThirdTextarea,
        'fourth_variant' => $trimmedFourthTextarea,
        'correct_answer' => $correctAnswer
    ];

    $stmt = $pdo->prepare($query);

    try {
        $stmt->execute($params);
    } catch (\Exception $e) {
        die($e->getMessage());
    }
    // return $stmt->fetch(PDO::FETCH_ASSOC);
}

function getAllUsersQuizzes () {
    $pdo = getPDO();

    $sql = "SELECT quiz_id, quiz_name, quiz_img FROM quizzes";

    $result = $pdo->query($sql);

    if ($result->rowCount() > 0) {
        
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo '<form class="topic" action="/beforeQuestionQuizBuild.php" method="post">';
            echo '<textarea class="topicId" value="' . $row['quiz_id'] . '" name="topicId">';
            echo $row['quiz_id'];
            echo '</textarea>';
            echo '<button type="submit" value="' . $row['quiz_name'] . '" name="lastClickedTopic">';
            echo '<img src="' . $row['quiz_img'] . '" />';
            echo '<div class="topic_name">' . $row['quiz_name'] . '</div>';
            echo '</button>';
            echo '</form>';
        }

    } else {
        echo "0 результатов";
    }
}

function getAllUsersQuizzesResults () {
    $pdo = getPDO();

    $sql = "SELECT quiz_id, quiz_name, quiz_img FROM quizzes";

    $result = $pdo->query($sql);

    if ($result->rowCount() > 0) {
        
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo '<form class="topic" action="/beforeUserTableResult.php" method="post">';
            echo '<textarea class="topicId" value="' . $row['quiz_id'] . '" name="topicId">';
            echo $row['quiz_id'];
            echo '</textarea>';
            echo '<button type="submit" value="' . $row['quiz_name'] . '" name="lastClickedTopic">';
            echo '<img src="' . $row['quiz_img'] . '" />';
            echo '<div class="topic_name">' . $row['quiz_name'] . '</div>';
            echo '</button>';
            echo '</form>';
        }

    } else {
        echo "0 результатов";
    }
}

function getAllThemeQuestions () {
    $pdo = getPDO();
    $sql = "SELECT * FROM questions WHERE quiz_id = '{$_SESSION['topicId']}'";
    $result = $pdo->query($sql);
    $allThemeQuestions = [];
    if($result) {
        $allThemeQuestions = $result->fetchAll(PDO::FETCH_ASSOC);
    } else {
        print_r($pdo->errorInfo());
    }
    return $allThemeQuestions;
}

function getAllUserTableResults ($topicId)
{
        // Получение подключения к базе данных
    $pdo = getPDO();
    // Запрос для получения имен таблиц, содержащих фрагмент '___$currentTopicId' в названии
    $sql = "SHOW TABLES LIKE :pattern";
    $stmt = $pdo->prepare($sql);
    $pattern = "%___" . $topicId . "%";
    $stmt->bindParam(':pattern', $pattern);

    $stmt->execute();

    // Получение первого результата
    $tableName = $stmt->fetchColumn();

    if ($tableName) {
        // Экранирование имени таблицы
        $tableName = "`" . str_replace("`", "``", $tableName) . "`";
        $sql = "SELECT user_name, user_result FROM $tableName ORDER BY user_result DESC";
        $_SESSION['currentTableName'] = $tableName;
    } else {    
        echo "Таблицы, содержащие фрагмент '___$topicId' в названии, не найдены.";
    }

    $result = $pdo->query($sql);

    if ($result->rowCount() > 0) {
        
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "<tr>";
            echo "<td>".$row["user_name"]."</td>";
            echo "<td>".$row["user_result"]."</td>";
            echo "</tr>";
        }

    } 

}

?>