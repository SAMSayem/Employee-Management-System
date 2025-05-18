<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $department = $_POST['announcementDept'];
    $priority = $_POST['announcementPriority'];
    $message = $_POST['announcementMsg'];
    $timestamp = date('Y-m-d H:i:s');

    $announcement = [
        "department" => $department,
        "priority" => $priority,
        "message" => $message,
        "timestamp" => $timestamp
    ];

    $file = 'announcements.json';
    $data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $data[] = $announcement;

    file_put_contents($file, json_encode($data));

    echo "Announcement successfully posted!";
}
?>
