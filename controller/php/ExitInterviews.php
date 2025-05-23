<?php
require_once 'auth.php'; // auth.php is in the same directory, so this path is correct.
checkAuth(); // Call checkAuth to ensure user is logged in.

// Add database connection here if you intend to save exit interview data
// Assuming db.php is in 'C:\xampp\htdocs\Project\Employee-Management-System\model\db.php'
include '../../model/db.php'; // Ensure this path is correct for your setup

$errors = [];
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit_exit'])) {
    $reason = filter_var($_POST['reason'] ?? '', FILTER_SANITIZE_STRING); //

    // Corrected to access individual checkbox names from the HTML
    $idCardReturned = isset($_POST['idCard']) ? 'Yes' : 'No';
    $laptopReturned = isset($_POST['laptop']) ? 'Yes' : 'No';
    $accessRevoked = isset($_POST['access']) ? 'Yes' : 'No';
    $alumni = isset($_POST['alumniOptIn']) ? 'Yes' : 'No'; // This was 'alumni' in previous code but 'alumniOptIn' in HTML.

    // Validate inputs
    if (empty($reason)) {
        $errors[] = "Reason for leaving is required.";
    }

    // If there are no errors, proceed to save to database
    if (empty($errors)) {
        // Example for saving to database
        if (isset($conn)) { // Check if $conn is defined (from db.php)
            $stmt = $conn->prepare("INSERT INTO exit_interviews (reason, id_card_returned, laptop_returned, access_revoked, alumni_opt_in) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("sssss", $reason, $idCardReturned, $laptopReturned, $accessRevoked, $alumni);
            if ($stmt->execute()) {
                $success = "Exit interview submitted and saved to database successfully! Reason: " . htmlspecialchars($reason);
            } else {
                $errors[] = "Database error: " . $stmt->error;
            }
            $stmt->close();
            $conn->close();
        } else {
            $success = "Exit interview submitted. (Database connection not available). Reason: " . htmlspecialchars($reason) . ", ID Card: $idCardReturned, Laptop: $laptopReturned, Access: $accessRevoked, Alumni: $alumni";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Employee Management System</title>
  <link rel="stylesheet" href="../asset/CSS/Exit Interviews.css">
</head>
<body>

<section id="exit-interviews">
    <h2>Exit Interviews</h2>
    <?php if (!empty($errors)): ?>
        <div style="color: red;">
            <?php foreach ($errors as $error): ?>
                <p><?php echo htmlspecialchars($error); ?></p>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
    <?php if (!empty($success)): ?>
        <p style="color: green;"><?php echo htmlspecialchars($success); ?></p>
    <?php endif; ?>
    <form id="exitForm" action="ExitInterviews.php" method="POST"> <label for="reason">Why are you leaving?</label>
      <textarea id="reason" name="reason" required><?php echo htmlspecialchars($_POST['reason'] ?? ''); ?></textarea> <label>Return Checklist:</label>
      <ul>
        <li><input type="checkbox" id="idCard" name="idCard" <?php echo (isset($_POST['idCard']) ? 'checked' : ''); ?>> ID Card Returned</li> <li><input type="checkbox" id="laptop" name="laptop" <?php echo (isset($_POST['laptop']) ? 'checked' : ''); ?>> Laptop Returned</li> <li><input type="checkbox" id="access" name="access" <?php echo (isset($_POST['access']) ? 'checked' : ''); ?>> Building Access Revoked</li> </ul>

      <label>
        <input type="checkbox" id="alumniOptIn" name="alumniOptIn" <?php echo (isset($_POST['alumniOptIn']) ? 'checked' : ''); ?>> Alumni network opt-in </label>

      <button type="submit" name="submit_exit">Submit Exit Interview</button> </form>
    <p id="exitResponse" style="margin-top: 10px; color: green;"></p>
  </section>
  <footer>
    <p>&copy; 2025 Employee Management System</p>
    <p><a href="logout.php">Logout</a></p>
  </footer>
  <script src="../asset/JS/Exit Interviews.js"></script>
</body>
</html>