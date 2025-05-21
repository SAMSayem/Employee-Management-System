<?php
session_start();
if (!isset($_SESSION['user_id'])) {
  echo "<tr><td colspan='4'>Access denied. Please log in.</td></tr>";
  exit();
}

$file = '../data/employees.csv';
if (file_exists($file)) {
  $rows = file($file, FILE_IGNORE_NEW_LINES);
  foreach ($rows as $row) {
    $cols = str_getcsv($row);
    echo "<tr>";
    echo "<td>" . htmlspecialchars($cols[0]) . "</td>";
    echo "<td>" . htmlspecialchars($cols[1]) . "</td>";
    echo "<td>" . htmlspecialchars($cols[2]) . "</td>";
    echo "<td>" . htmlspecialchars($cols[3]) . "</td>";
    echo "</tr>";
  }
} else {
  echo "<tr><td colspan='4'>No employee records found.</td></tr>";
}
?>
