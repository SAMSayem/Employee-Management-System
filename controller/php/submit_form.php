<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = trim($_POST["name"]);
  $email = trim($_POST["email"]);
  $password = $_POST["password"];

  if (empty($name) || empty($email) || empty($password)) {
    die("All fields are required.");
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format.");
  }

  if (strlen($password) < 6) {
    die("Password must be at least 6 characters.");
  }

  // Simulate database saving logic
  echo "Registration successful for " . htmlspecialchars($name);
}
?>
