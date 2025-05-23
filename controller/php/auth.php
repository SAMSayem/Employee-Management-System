<?php
//C:\xampp\htdocs\Project\Employee-Management-System\model\db.php

// Database connection parameters
$servername = "localhost";
$username = "root"; // Replace with your MySQL username (e.g., "root" for XAMPP default)
$password = "";     // Replace with your MySQL password (e.g., "" for XAMPP default)
$dbname = "employee_management"; // Replace with your desired database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // If connection fails, stop script execution and display error
    die("Connection failed: " . $conn->connect_error);
}

// Optional: Set character set to UTF-8 for proper handling of various characters
$conn->set_charset("utf8");

// You can add a simple success message for debugging, but remove in production
// echo "Database connected successfully!";

?>
