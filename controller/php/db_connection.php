<?php
$servername = "localhost";
$username = "root";       // replace with your DB username
$password = "";           // replace with your DB password
$dbname = "your_database"; // replace with your DB name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check for DB connection error
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
