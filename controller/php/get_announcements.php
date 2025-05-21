<?php
$logFile = "announcements_log.txt";
$announcements = [];

if (file_exists($logFile)) {
    $lines = file($logFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (preg_match("/\[(.*?)\]\[(.*?)\]\[(.*?)\] (.*)/", $line, $matches)) {
            $announcements[] = [
                "timestamp" => $matches[1],
                "department" => $matches[2],
                "priority" => $matches[3],
                "message" => $matches[4],
            ];
        }
    }
}

header('Content-Type: application/json');
echo json_encode($announcements);
?>
