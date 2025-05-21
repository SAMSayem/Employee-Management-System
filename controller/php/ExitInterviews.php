<?php
require_once 'auth.php';
checkAuth();

$errors = [];
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit_exit'])) {
    $reason = filter_var($_POST['reason'] ?? '', FILTER_SANITIZE_STRING);
    $checklist = $_POST['checklist'] ?? [];
    $alumni = isset($_POST['alumni']) ? 'Yes' : 'No';
    
    // Validate inputs
    if (empty($reason)) {
        $errors[] = "Reason for leaving is required.";
    }
    if (empty($checklist)) {
        $errors[] = "At least one checklist item must be selected.";
    } else {
        $success = "Exit interview submitted. Reason: $reason, Checklist: " . implode(', ', $checklist) . ", Alumni: $alumni";
        // Add logic to save to database if needed
    }
}
?>