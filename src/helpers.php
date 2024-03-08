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

    $avatarExtension = pathinfo($file['name'], flags: PATHINFO_EXTENSION);
    $fileName = $prefix . time() . ".$avatarExtension";

    if(!move_uploaded_file($file['tmp_name'], "$uploadPath/$fileName")) {
        die('Ошибка загрузки файла на сервер');
    }

    return "uploads/$fileName";
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
    } else {
        $currentIndex = 30;
    }
    return $currentIndex;
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

    if ($stmt->execute()) {
        echo "Данные успешно добавлены в таблицу";
    } else {
        echo "Ошибка при добавлении данных: " . $stmt->errorInfo()[2];
}
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
?>