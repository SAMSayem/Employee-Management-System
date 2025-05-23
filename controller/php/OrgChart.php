<?php
require_once 'auth.php'; // Include authentication functions
// OrgChart.php - no checkAuth() if it's meant to be publicly viewable or handled by JS fetch
// If this page should be protected, uncomment checkAuth():
// checkAuth();

// You could add database connection here if fetching profile details from DB
// include '../../model/db.php';

// Check if name and designation are provided in the URL
if (isset($_GET['name']) && isset($_GET['designation'])) {
    $name = htmlspecialchars($_GET['name']); // Sanitize input
    $designation = htmlspecialchars($_GET['designation']); // Sanitize input

    echo "<h2>" . $name . "</h2>";
    echo "<p><strong>Designation:</strong> " . $designation . "</p>";
    // You could add more details here, e.g., fetch from a database
    // based on the name/designation and use $conn.
} else {
    echo "<p>No profile information provided.</p>";
}
?>