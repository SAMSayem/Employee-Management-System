<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $role = $_POST['role'];
  $permissions = isset($_POST['permissions']) ? $_POST['permissions'] : [];

  if (empty($role) || empty($permissions)) {
    die("Please select a role and at least one permission.");
  }

  // Simulated database logic
  // savePermissionsForRole($role, $permissions);

  echo "Permissions saved successfully for role: " . htmlspecialchars($role);
}
?>
