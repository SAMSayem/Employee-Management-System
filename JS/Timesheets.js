let startTime = null;
let totalHours = 0;

function logMessage(message) {
  const log = document.getElementById('log');
  log.textContent += message + "\n";
}

function simulateGPS() {
  return "Lat: 37.7749, Lon: -122.4194"; // Simulated GPS
}

function clockIn() {
  if (startTime) {
    alert("Already clocked in.");
    return;
  }
  startTime = new Date();
  const gps = simulateGPS();
  const task = document.getElementById("taskCode").value;
  logMessage(`Clocked In at ${startTime.toLocaleTimeString()} | ${gps} | Task: ${task}`);
}

function clockOut() {
  if (!startTime) {
    alert("You need to clock in first.");
    return;
  }
  const endTime = new Date();
  const hoursWorked = (endTime - startTime) / (1000 * 60 * 60);
  totalHours += hoursWorked;

  const gps = simulateGPS();
  const task = document.getElementById("taskCode").value;

  logMessage(`Clocked Out at ${endTime.toLocaleTimeString()} | ${gps} | Duration: ${hoursWorked.toFixed(2)} hrs`);
  startTime = null;

  if (totalHours > 8) {
    document.getElementById('alert').textContent = "⚠️ Overtime Alert: Over 8 hours worked!";
  } else {
    document.getElementById('alert').textContent = "";
  }
}
