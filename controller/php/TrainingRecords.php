<?php
require_once 'auth.php';
checkAuth();

$errors = [];
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register'])) {
    $course = filter_var($_POST['course'] ?? '', FILTER_SANITIZE_STRING);
    
    // Validate course selection
    $validCourses = ['HTML Basics', 'CSS Design', 'JavaScript Functions'];
    if (empty($course)) {
        $errors[] = "Course selection is required.";
    } elseif (!in_array($course, $validCourses)) {
        $errors[] = "Invalid course selected.";
    } else {
        $success = "Successfully registered for: $course";
        // Add logic to save to database if needed
    }
}
?>