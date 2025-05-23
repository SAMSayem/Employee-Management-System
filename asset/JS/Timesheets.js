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

var timeLog = {};

function clockIn() {
  var taskCode = document.getElementById("taskCode").value;
  var alertBox = document.getElementById("alert");

  if (timeLog[taskCode] && timeLog[taskCode].clockIn && !timeLog[taskCode].clockOut) {
    alertBox.textContent = "Already clocked in for " + taskCode + ". Please clock out first.";
    alertBox.style.color = "red";
    return;
  }

  var now = new Date();
  timeLog[taskCode] = { clockIn: now, clockOut: null };

  alertBox.textContent = "Clocked in at " + now.toLocaleTimeString() + " for " + taskCode;
  alertBox.style.color = "green";
  updateLog();
}

function clockOut() {
  var taskCode = document.getElementById("taskCode").value;
  var alertBox = document.getElementById("alert");

  if (!timeLog[taskCode] || !timeLog[taskCode].clockIn) {
    alertBox.textContent = "No clock-in found for " + taskCode;
    alertBox.style.color = "red";
    return;
  }

  if (timeLog[taskCode].clockOut) {
    alertBox.textContent = "Already clocked out for " + taskCode;
    alertBox.style.color = "orange";
    return;
  }

  var now = new Date();
  timeLog[taskCode].clockOut = now;

  alertBox.textContent = "Clocked out at " + now.toLocaleTimeString() + " for " + taskCode;
  alertBox.style.color = "green";
  updateLog();
}

function updateLog() {
  var logDiv = document.getElementById("log");
  logDiv.innerHTML = "<h3>Time Log</h3>";

  for (var task in timeLog) {
    var entry = timeLog[task];
    var line = "<p><strong>" + task + "</strong>: ";

    if (entry.clockIn) {
      line += "Clock In - " + entry.clockIn.toLocaleTimeString();
    }

    if (entry.clockOut) {
      line += " | Clock Out - " + entry.clockOut.toLocaleTimeString();
    }

    line += "</p>";
    logDiv.innerHTML += line;
  }
}
  }
}