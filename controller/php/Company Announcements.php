<?php
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
}
?>
