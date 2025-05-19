<?php
session_start();

// Simulated database (replace with real DB connection)
$users = []; // You should replace this with database logic

function respond($message) {
    echo json_encode(['message' => $message]);
    exit;
}

// Routing based on action
$action = $_POST['action'] ?? null;
switch ($action) {
    case 'login':
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';

        if (!$email || !$password) respond("All fields are required.");

        // Dummy login check (replace with DB query and password_verify)
        if ($email === 'admin@example.com' && $password === 'admin123') {
            $_SESSION['user'] = $email;
            respond("Login successful.");
        } else {
            respond("Invalid credentials.");
        }

    case 'signup':
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';

        if (!$name || !$email || !$password) respond("All fields are required.");
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) respond("Invalid email format.");
        if (strlen($password) < 6) respond("Password must be at least 6 characters.");

        // Hash password
        $hashed = password_hash($password, PASSWORD_DEFAULT);

        // Save to DB (placeholder)
        // INSERT INTO users(name, email, password, verified) VALUES(...)
        respond("Signup successful. Please check your email to verify your account.");

    case 'forgot_password':
        $email = $_POST['email'] ?? '';
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) respond("Invalid email.");

        // Generate token and send email (placeholder)
        $token = bin2hex(random_bytes(16));
        $resetLink = "http://yourdomain.com/auth.html?form=reset&token=$token";

        // Save token in DB with expiry (not shown here)
        // Send email logic here (PHPMailer or mail())
        respond("Password reset link has been sent to your email.");

    case 'reset_password':
        $token = $_POST['token'] ?? '';
        $newPassword = $_POST['new_password'] ?? '';
        $confirm = $_POST['confirm_password'] ?? '';

        if ($newPassword !== $confirm) respond("Passwords do not match.");
        if (strlen($newPassword) < 6) respond("Password too short.");

        // Update DB using token (not implemented)
        respond("Password has been reset successfully.");

    case 'verify_email':
        $code = $_GET['code'] ?? '';
        if (!$code) respond("Invalid verification code.");

        // Find user by code and set `verified = 1` in DB (not implemented)
        respond("Email verified successfully.");

    default:
        respond("Invalid action.");
}
