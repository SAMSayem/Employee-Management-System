<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $file = 'training_records.json';
    $existingData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

    if ($data['action'] == 'register') {
        $course = $data['course'];
        if (!in_array($course, $existingData)) {
            $existingData[] = $course;
            file_put_contents($file, json_encode($existingData));
            echo json_encode(['message' => "$course registered successfully"]);
        } else {
            echo json_encode(['message' => "Already registered for $course"]);
        }
    } elseif ($data['action'] == 'expiry') {
        $expiryDate = date('Y-m-d', strtotime('+30 days'));
        echo json_encode(['expiry' => $expiryDate]);
    } elseif ($data['action'] == 'skillGap') {
        $requiredSkills = ['HTML', 'CSS', 'JavaScript'];
        $registeredSkills = array_map(fn($course) => explode(' ', $course)[0], $existingData);
        $gaps = array_diff($requiredSkills, $registeredSkills);
        echo json_encode(['gaps' => array_values($gaps)]);
    }
}
?>
