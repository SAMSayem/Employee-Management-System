<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $department = htmlspecialchars($_POST["announcementDept"]);
    $priority = htmlspecialchars($_POST["announcementPriority"]);
    $message = htmlspecialchars($_POST["announcementMsg"]);

    $logFile = "announcements_log.txt";
    $timestamp = date("Y-m-d H:i:s");
    $entry = "[$timestamp][$department][$priority] $message" . PHP_EOL;

    if (file_put_contents($logFile, $entry, FILE_APPEND | LOCK_EX)) {
        echo "Announcement posted successfully.";
    } else {
        echo "Failed to write to the log.";
    }
} else {
    echo "Invalid request method.";
}
?>
