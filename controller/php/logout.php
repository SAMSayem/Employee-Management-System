<?php
// controller/php/logout.php
require_once 'auth.php'; // Include your authentication functions

logout(); // Call the logout function from auth.php

// Redirect to login page or homepage after logout
header("Location: /Project/Employee-Management-System/login.html"); // Adjust path
exit();
?>