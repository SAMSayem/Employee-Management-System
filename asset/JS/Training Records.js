<<<<<<< HEAD
let registered = [];

function registerCourse() {
  const select = document.getElementById('courseSelect');
  const course = select.value;
  if (!registered.includes(course)) {
    registered.push(course);
    updateRegisteredCourses();
    alert(`${course} registered successfully.`);
  } else {
    alert(`You have already registered for ${course}.`);
  }
}

function updateRegisteredCourses() {
  const list = registered.map(c => `✓ ${c}`).join('<br>');
  document.getElementById('registeredCourses').innerHTML = `
    <h3>Registered Courses</h3>
    <div>${list}</div>
  `;
}

function checkExpiry() {
  const now = new Date();
  const expiry = new Date();
  expiry.setDate(now.getDate() + 30); // Certification expires in 30 days

  const alertBox = document.getElementById('expiryAlert');
  if (registered.length > 0) {
    alertBox.textContent = `⚠️ Certifications for registered courses will expire on ${expiry.toDateString()}`;
  } else {
    alertBox.textContent = "No registered courses found.";
=======

var registered = {};

function registerCourse() {
  var courseSelect = document.getElementById("courseSelect");
  var course = courseSelect.value;
  var registeredDiv = document.getElementById("registeredCourses");

  if (registered[course]) {
    alert("You have already registered for " + course + ".");
    return;
  }
  var expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 6);
  registered[course] = expiryDate;

  var courseEntry = document.createElement("p");
  courseEntry.textContent = course + " (Expires: " + expiryDate.toDateString() + ")";
  registeredDiv.appendChild(courseEntry);
}

function checkExpiry() {
  var alertDiv = document.getElementById("expiryAlert");
  alertDiv.innerHTML = ""; 

  if (Object.keys(registered).length === 0) {
    alertDiv.textContent = "No registered certifications.";
    return;
  }

  var today = new Date();
  for (var course in registered) {
    var expiry = registered[course];
    var message = course + " expires on " + expiry.toDateString();

    if (expiry < today) {
      message += " - ❌ EXPIRED";
    } else {
      message += " - ✅ Valid";
    }

    var p = document.createElement("p");
    p.textContent = message;
    alertDiv.appendChild(p);
>>>>>>> 9c62fb5e02892d0f9ae373287f050083da049e4e
  }
}

function showGapReport() {
<<<<<<< HEAD
  const requiredSkills = ['HTML', 'CSS', 'JavaScript'];
  const currentSkills = registered.map(course => course.split(' ')[0]);
  const gaps = requiredSkills.filter(skill => !currentSkills.includes(skill));

  const reportBox = document.getElementById('gapReport');
  if (gaps.length > 0) {
    reportBox.textContent = `Skill Gaps: ${gaps.join(', ')}`;
  } else {
    reportBox.textContent = "✅ No skill gaps detected.";
=======
  var reportDiv = document.getElementById("gapReport");
  reportDiv.innerHTML = ""; 

  var allCourses = ["HTML Basics", "CSS Design", "JavaScript Functions"];
  var missingCourses = allCourses.filter(function(course) {
    return !registered[course];
  });

  if (missingCourses.length === 0) {
    reportDiv.textContent = "🎉 No skills gap! You are trained in all listed courses.";
  } else {
    var ul = document.createElement("ul");
    missingCourses.forEach(function(course) {
      var li = document.createElement("li");
      li.textContent = course;
      ul.appendChild(li);
    });
    reportDiv.appendChild(document.createTextNode("Missing Skills:"));
    reportDiv.appendChild(ul);
>>>>>>> 9c62fb5e02892d0f9ae373287f050083da049e4e
  }
}
