<?php
// CompanyAnnouncements.php

require_once 'auth.php'; // Include authentication functions
checkAuth(); // Check if the user is authenticated

// Include the database connection file
// The path '../../model/db.php' means:
// go up one directory (from 'php' to 'controller')
// go up another directory (from 'controller' to 'Employee-Management-System')
// then go into 'model' and find 'db.php'
include '../../model/db.php'; // Ensure this path is correct for your setup

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $department = $_POST['announcementDept'];
    $priority = $_POST['announcementPriority'];
    $message = $_POST['announcementMsg'];

    // Prepare an SQL INSERT statement using prepared statements for security
    $stmt = $conn->prepare("INSERT INTO announcements (department, priority, message) VALUES (?, ?, ?)");

    // Bind parameters to the statement
    // "sss" indicates that all three parameters are strings
    $stmt->bind_param("sss", $department, $priority, $message);

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "<h2>Announcement Details:</h2>";
        echo "<p><strong>Department:</strong> " . htmlspecialchars($department) . "</p>";
        echo "<p><strong>Priority:</strong> " . htmlspecialchars($priority) . "</p>";
        echo "<p><strong>Message:</strong> " . htmlspecialchars($message) . "</p>";
        echo "<p style='color: green;'>Announcement posted and saved to database successfully!</p>";

        // You might want to redirect the user back to the announcements page
        // header("Location: /Project/Employee-Management-System/Company%20Announcements.html?status=success");
        // exit();
    } else {
        echo "<h2 style='color: red;'>Error posting announcement:</h2>";
        echo "<p>Error: " . $stmt->error . "</p>";
    }

    // Close the statement
    $stmt->close();

    // Close the database connection
    $conn->close();

} else {
    echo "Invalid request method.";
}

?>