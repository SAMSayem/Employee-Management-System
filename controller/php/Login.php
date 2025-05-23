<?php
// controller/php/process_login.php
require_once '../../controller/php/auth.php'; // Include your authentication functions

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (attemptLogin($username, $password)) { // Use the function from auth.php
        // Login successful, redirect to a protected page (e.g., Company Announcements)
        header("Location: /Project/Employee-Management-System/Company%20Announcements.html"); // Adjust path
        exit();
    } else {
        // Login failed, redirect back to login page with an error
        header("Location: /Project/Employee-Management-System/Login.html?error=invalid"); // Adjust path
        exit();
    }
} else {
    // If accessed directly without POST, redirect to login page
    header("Location:/Project/Employee-Management-System/Login.html"); // Adjust path
    exit();
}
?>