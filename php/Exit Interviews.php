<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $exit_interview = [
        'reason' => $data['reason'],
        'idCardReturned' => $data['idCardReturned'],
        'laptopReturned' => $data['laptopReturned'],
        'accessRevoked' => $data['accessRevoked'],
        'alumniOptIn' => $data['alumniOptIn'],
        'submittedAt' => date('Y-m-d H:i:s')
    ];

    $file = 'exit_interviews.json';
    $existingData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $existingData[] = $exit_interview;

    file_put_contents($file, json_encode($existingData));

    echo json_encode(['message' => 'Exit interview saved successfully']);
}
?>
