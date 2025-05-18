<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $entry = [
        'action' => $data['action'], // 'clockIn' or 'clockOut'
        'timestamp' => date('Y-m-d H:i:s'),
        'gps' => $data['gps'],
        'task' => $data['task'],
        'duration' => $data['duration'] ?? null
    ];

    $file = 'timesheets.json';
    $existingData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $existingData[] = $entry;

    file_put_contents($file, json_encode($existingData));

    echo json_encode(['message' => 'Timesheet updated successfully']);
}
?>
