<?php
require_once 'auth.php'; // Include authentication functions
checkAuth(); // Check if the user is authenticated

// Include the database connection file
include '../../model/db.php'; // Ensure this path is correct for your setup

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $course = isset($_POST['courseSelect']) ? htmlspecialchars($_POST['courseSelect']) : 'N/A';
    $registrationDate = date('Y-m-d H:i:s'); // Get current date and time

    // Prepare an SQL INSERT statement
    $stmt = $conn->prepare("INSERT INTO training_records (course_name, registration_date) VALUES (?, ?)");
    $stmt->bind_param("ss", $course, $registrationDate);

    if ($stmt->execute()) {
        echo "<h2>Course Registration Details:</h2>";
        echo "<p><strong>Course Registered:</strong> " . $course . "</p>";
        echo "<p><strong>Registration Date:</strong> " . $registrationDate . "</p>";
        echo "<p style='color: green;'>Course registration recorded successfully!</p>";
    } else {
        echo "<h2 style='color: red;'>Error recording registration:</h2>";
        echo "<p>Error: " . $stmt->error . "</p>";
    }

    $stmt->close();
    $conn->close();

} else {
    echo "Invalid request method. Please use the form to submit training data.";
}

?>