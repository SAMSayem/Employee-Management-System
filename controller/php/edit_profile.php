<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = trim($_POST["name"]);
  $email = trim($_POST["email"]);
  $department = trim($_POST["department"]);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format.");
  }

  // Example DB save logic...
  // updateProfile($userId, $name, $email, $department);

  echo "Profile updated successfully!";
}
?>
