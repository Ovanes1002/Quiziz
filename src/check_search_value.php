<?php

require_once __DIR__ . "/helpers.php";

if (isset($_POST['inputValue'])) {
    $_SESSION['searchInputValue'] = $_POST['inputValue'];
    
    $pdo = getPDO();

    $sql = "SELECT quiz_id, quiz_name, quiz_img FROM quizzes";

    $result = $pdo->query($sql);

    if ($result->rowCount() > 0) {
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            if (strpos($row['quiz_name'], $_SESSION['searchInputValue']) !== false) {
                $searchInputValue = '1';
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
        }
    } else {
        echo "0 результатов";
    }
} else {
    echo 'Input не получен'; // Сообщение об ошибке
}

?>