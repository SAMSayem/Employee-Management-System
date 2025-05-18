<?php
header('Content-Type: application/json');

$profiles = [
    "Tanvir" => [
        "position" => "CEO",
        "bio" => "Tanvir is the CEO and leads company strategy."
    ],
    "SAM" => [
        "position" => "CTO",
        "bio" => "SAM is the CTO and heads technology and innovation."
    ]
];

$name = $_GET['name'] ?? null;

if ($name && isset($profiles[$name])) {
    echo json_encode($profiles[$name]);
} else {
    echo json_encode(["error" => "Profile not found."]);
}
?>
