<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $emailNotify = isset($_POST["email_notify"]) ? 1 : 0;
  $smsNotify = isset($_POST["sms_notify"]) ? 1 : 0;
  $pushNotify = isset($_POST["push_notify"]) ? 1 : 0;

  // Example save to DB (simulate)
  // saveNotificationSettings($userId, $emailNotify, $smsNotify, $pushNotify);

  echo "Notification settings updated successfully!";
}
?>
