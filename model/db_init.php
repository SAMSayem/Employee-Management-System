<?php
// C:\xampp\htdocs\Project\Employee-Management-System\model\db_init.php

// Include the database connection file
require_once 'db.php';

// Check if the connection was successful
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

echo "<h2>Database Initialization Script</h2>";

// SQL statements to create tables
$sql_statements = [
    "CREATE TABLE IF NOT EXISTS announcements (
        id INT AUTO_INCREMENT PRIMARY KEY,
        department VARCHAR(255) NOT NULL,
        priority VARCHAR(50) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );",

    "CREATE TABLE IF NOT EXISTS exit_interviews (
        id INT AUTO_INCREMENT PRIMARY KEY,
        reason TEXT NOT NULL,
        id_card_returned VARCHAR(3) NOT NULL,
        laptop_returned VARCHAR(3) NOT NULL,
        access_revoked VARCHAR(3) NOT NULL,
        alumni_opt_in VARCHAR(3) NOT NULL,
        submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );",

    "CREATE TABLE IF NOT EXISTS timesheet_logs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        task_code VARCHAR(255) NOT NULL,
        action_type VARCHAR(50) NOT NULL, -- 'clockIn' or 'clockOut'
        timestamp DATETIME NOT NULL
    );",

    "CREATE TABLE IF NOT EXISTS training_records (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_name VARCHAR(255) NOT NULL,
        registration_date DATETIME NOT NULL
    );"
];

// Execute each SQL statement
foreach ($sql_statements as $sql) {
    if ($conn->query($sql) === TRUE) {
        echo "<p style='color: green;'>Table created or already exists: " . htmlspecialchars(substr($sql, 0, 50)) . "...</p>";
    } else {
        echo "<p style='color: red;'>Error creating table: " . $conn->error . " (SQL: " . htmlspecialchars(substr($sql, 0, 50)) . ")</p>";
    }
}

// Close the database connection
$conn->close();

echo "<p>Database initialization process completed.</p>";
echo "<p>You can now proceed to use the application. Remember to remove or secure this script in a production environment.</p>";
?>
