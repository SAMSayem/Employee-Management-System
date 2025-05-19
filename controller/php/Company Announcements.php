<?php
<<<<<<< HEAD
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
=======
session_start();

if (!isset($_SESSION['user']) && !isset($_COOKIE['user'])) {
    
    header("Location: login.php");gin
    exit();
}


if (!isset($_SESSION['user']) && isset($_COOKIE['user'])) {
    $_SESSION['user'] = $_COOKIE['user'];
}

$announcementsFile = 'announcements.txt';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dept = htmlspecialchars(string: $_POST['announcementDept']);
    $priority = htmlspecialchars(string: $_POST['announcementPriority']);
    $message = htmlspecialchars(string: $_POST['announcementMsg']);
    $user = $_SESSION['user'];
    $timestamp = date("Y-m-d H:i:s");

    $entry = "$timestamp | $user | $dept | $priority | $message\n";

    file_put_contents($announcementsFile, $entry, FILE_APPEND | LOCK_EX);
    header("Location: Company Announcements.php"); 
}

$priorityAlerts = [];
$newsFeed = [];

if (file_exists($announcementsFile)) {
    $lines = file($announcementsFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach (array_reverse($lines) as $line) {
        list($time, $user, $dept, $priority, $msg) = explode(' | ', $line, 5);
        $formatted = "<li><strong>[$time]</strong> <em>$user</em> ($dept): $msg</li>";
        if (strtolower($priority) == 'high') {
            $priorityAlerts[] = $formatted;
        } else {
            $newsFeed[] = $formatted;
        }
    }
>>>>>>> 9c62fb5e02892d0f9ae373287f050083da049e4e
}
?>
