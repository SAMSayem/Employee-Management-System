
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
  }
}

function showGapReport() {
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
  }
}
