<?php
require_once 'auth.php'; // Include authentication functions
checkAuth(); // Check if the user is authenticated

// Include the database connection file
include '../../model/db.php'; // Ensure this path is correct for your setup

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $taskCode = isset($_POST['taskCode']) ? htmlspecialchars($_POST['taskCode']) : 'N/A';
    $action = isset($_POST['action']) ? htmlspecialchars($_POST['action']) : ''; // 'clockIn' or 'clockOut'
    $timestamp = date('Y-m-d H:i:s'); // Get current date and time

    // Prepare an SQL INSERT statement
    $stmt = $conn->prepare("INSERT INTO timesheet_logs (task_code, action_type, timestamp) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $taskCode, $action, $timestamp);

    if ($stmt->execute()) {
        echo "<h2>Timesheet Entry:</h2>";
        echo "<p><strong>Project/Task Code:</strong> " . $taskCode . "</p>";
        echo "<p><strong>Action:</strong> " . $action . "</p>";
        echo "<p><strong>Timestamp:</strong> " . $timestamp . "</p>";
        echo "<p style='color: green;'>Timesheet " . $action . " recorded successfully!</p>";
    } else {
        echo "<h2 style='color: red;'>Error recording timesheet:</h2>";
        echo "<p>Error: " . $stmt->error . "</p>";
    }

    $stmt->close();
    $conn->close();

} else {
    echo "Invalid request method. Please use the form to submit timesheet data.";
}

?>