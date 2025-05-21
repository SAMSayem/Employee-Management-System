<?php
require_once 'auth.php';
checkAuth();

$errors = [];
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['post_announcement'])) {
    $department = filter_var($_POST['department'] ?? '', FILTER_SANITIZE_STRING);
    $priority = filter_var($_POST['priority'] ?? '', FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'] ?? '', FILTER_SANITIZE_STRING);
    
    // Validate inputs
    $validDepartments = ['All', 'HR', 'Engineering', 'Sales', 'Marketing'];
    $validPriorities = ['Normal', 'Priority Alert'];
    if (empty($department) || !in_array($department, $validDepartments)) {
        $errors[] = "Invalid department selected.";
    }
    if (empty($priority) || !in_array($priority, $validPriorities)) {
        $errors[] = "Invalid priority selected.";
    }
    if (empty($message)) {
        $errors[] = "Message is required.";
    } elseif (strlen($message) > 1000) {
        $errors[] = "Message is too long (max 1000 characters).";
    } else {
        $success = "Announcement posted: [$priority] $message for $department";
        // Add logic to save to database if needed
    }
}
?>