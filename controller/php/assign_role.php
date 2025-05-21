<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = trim($_POST['email']);
  $role = $_POST['assign_role'];

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email address.");
  }

  if (empty($role)) {
    die("Role selection is required.");
  }

  // Simulated database logic
  // assignRoleToUser($email, $role);

  echo "Role '$role' assigned successfully to $email.";
}
?>
