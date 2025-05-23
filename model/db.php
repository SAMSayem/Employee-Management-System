<?php
// C:\xampp\htdocs\Project\Employee-Management-System\model\db.php

$servername = "localhost";
$username = "your_db_username"; // Replace with your database username
$password = "your_db_password"; // Replace with your database password
$dbname = "employee_management"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>