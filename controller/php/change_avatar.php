<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["avatar"])) {
  $allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  $fileType = $_FILES["avatar"]["type"];
  $fileSize = $_FILES["avatar"]["size"];

  if (!in_array($fileType, $allowedTypes)) {
    die("Only JPG, PNG, and GIF files are allowed.");
  }

  if ($fileSize > 2 * 1024 * 1024) { // 2MB limit
    die("File is too large. Maximum size is 2MB.");
  }

  $uploadPath = "uploads/" . basename($_FILES["avatar"]["name"]);
  move_uploaded_file($_FILES["avatar"]["tmp_name"], $uploadPath);

  echo "Avatar updated successfully!";
}
?>
