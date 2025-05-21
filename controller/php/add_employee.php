<?php
session_start();
if (!isset($_SESSION['user_id'])) {
  header("Location: login.php");
  exit();
}

$empName = $_POST['empName'];
$empSkill = $_POST['empSkill'];
$empID = $_POST['empID'];
$empContact = $_POST['empContact'];
$empDocs = '';

if (!empty($_FILES['empDocs']['name'])) {
  $uploadDir = '../uploads/';
  $empDocs = basename($_FILES['empDocs']['name']);
  $uploadFile = $uploadDir . $empDocs;

  if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
  }

  move_uploaded_file($_FILES['empDocs']['tmp_name'], $uploadFile);
}

// Store employee data in CSV
$data = "$empID,$empName,$empSkill,$empContact,$empDocs\n";
file_put_contents('../data/employees.csv', $data, FILE_APPEND);

// Redirect back to main directory page
header("Location: ../View/EmployeeDirectory.php");
exit();
?>
