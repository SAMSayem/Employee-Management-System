<?php
require_once 'auth.php';
checkAuth();

$errors = [];
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && (isset($_POST['clock_in']) || isset($_POST['clock_out']))) {
    $project = filter_var($_POST['project'] ?? '', FILTER_SANITIZE_STRING);
    $clockTime = date('Y-m-d H:i:s');
    
    // Validate project
    $validProjects = ['PRJ001 - Development', 'PRJ002 - Design', 'PRJ003 - Testing'];
    if (empty($project)) {
        $errors[] = "Project selection is required.";
    } elseif (!in_array($project, $validProjects)) {
        $errors[] = "Invalid project selected.";
    } else {
        if (isset($_POST['clock_in'])) {
            $success = "Clocked in for $project at $clockTime";
        } elseif (isset($_POST['clock_out'])) {
            $success = "Clocked out for $project at $clockTime";
        }
        // Add logic to save to database if needed
    }
}
?>