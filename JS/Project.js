// --------------------
// Announcements
// --------------------
const priorityAlertsList = document.getElementById("priorityAlertsList");
const newsFeedList = document.getElementById("newsFeedList");
const announcements = [];

document.getElementById("announcementForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dept = document.getElementById("announcementDept").value;
  const priority = document.getElementById("announcementPriority").value;
  const msg = document.getElementById("announcementMsg").value.trim();

  if (msg) {
    const announcement = { dept, priority, msg };
    announcements.push(announcement);
    renderAnnouncements();
    this.reset();
  }
});

function renderAnnouncements() {
  priorityAlertsList.innerHTML = "";
  newsFeedList.innerHTML = "";

  announcements.forEach(a => {
    const li = document.createElement("li");
    li.textContent = `[${a.dept}] ${a.msg}`;

    if (a.priority === "high") {
      priorityAlertsList.appendChild(li);
    } else {
      newsFeedList.appendChild(li);
    }
  });
}

// --------------------
// Training Records
// --------------------
const trainings = [];

document.getElementById("courseForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const courseName = document.getElementById("courseName").value.trim();

  if (courseName) {
    const expiry = new Date();
    expiry.setMonth(expiry.getMonth() + 12);
    trainings.push({ courseName, expiry });
    renderTrainingData();
    this.reset();
  }
});

function renderTrainingData() {
  const transcriptList = document.getElementById("transcriptList");
  const expiryList = document.getElementById("expiryList");
  const skillsGapList = document.getElementById("skillsGapList");

  transcriptList.innerHTML = "";
  expiryList.innerHTML = "";
  skillsGapList.innerHTML = "";

  trainings.forEach(t => {
    const li1 = document.createElement("li");
    li1.textContent = `Completed: ${t.courseName}`;
    transcriptList.appendChild(li1);

    const li2 = document.createElement("li");
    li2.textContent = `Expires: ${t.expiry.toDateString()}`;
    expiryList.appendChild(li2);
  });

  if (trainings.length < 3) {
    const gap = document.createElement("li");
    gap.textContent = "⚠ Skills gap detected: Fewer than 3 certifications.";
    skillsGapList.appendChild(gap);
  }
}

// --------------------
// Org Chart Print
// --------------------
function printOrgChart() {
  window.print();
}

// --------------------
// Timesheet Clock In
// --------------------
document.getElementById("clockForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const task = document.getElementById("taskName").value.trim();
  const log = document.getElementById("timesheetLog");

  if (task) {
    const time = new Date().toLocaleString();
    const li = document.createElement("li");
    li.textContent = `${time}: Clocked in for "${task}"`;
    log.appendChild(li);
    this.reset();
  }
});

// --------------------
// Exit Interviews
// --------------------
document.getElementById("exitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const reason = document.getElementById("reason").value.trim();
  const id = document.getElementById("idCard").checked;
  const laptop = document.getElementById("laptop").checked;
  const access = document.getElementById("access").checked;
  const alumni = document.getElementById("alumniOptIn").checked;

  if (!reason) {
    alert("Please provide a reason for leaving.");
    return;
  }

  const summary = `✅ Exit interview submitted. ID Card: ${id}, Laptop: ${laptop}, Access Revoked: ${access}, Alumni Opt-in: ${alumni}`;
  document.getElementById("exitResponse").textContent = summary;
  this.reset();
});
