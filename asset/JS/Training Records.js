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
  }
}

function showGapReport() {
  const requiredSkills = ['HTML', 'CSS', 'JavaScript'];
  const currentSkills = registered.map(course => course.split(' ')[0]);
  const gaps = requiredSkills.filter(skill => !currentSkills.includes(skill));

  const reportBox = document.getElementById('gapReport');
  if (gaps.length > 0) {
    reportBox.textContent = `Skill Gaps: ${gaps.join(', ')}`;
  } else {
    reportBox.textContent = "✅ No skill gaps detected.";
  }
}
