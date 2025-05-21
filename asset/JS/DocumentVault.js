// Send electronic signature request
function sendSignature(message) {
  const email = document.getElementById("email").value.trim();
  if (!email) {
    alert("Please enter an email address to request a signature.");
    return;
  }

  // Simulate sending a signature request
  console.log(`Signature request sent to ${email}`);
  alert(message);
}

// Save retention policy
function saveRetention(message) {
  const policy = document.getElementById("retention").value.trim();
  if (!policy) {
    alert("Please enter a retention policy before saving.");
    return;
  }

  // Simulate saving the retention policy
  console.log(`Retention policy saved: ${policy}`);
  alert(message);
}

// View changes in a document version
function viewChanges(message) {
  // Simulate viewing version differences
  console.log(message);
  alert(message);
}

// Restore an older version of a document
function restoreVersion(message) {
  // Simulate restoration of document version
  console.log(message);
  alert(message);
}

// Handle file upload event (optional logic)
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileUpload");

  fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
      console.log(`File selected: ${file.name}`);
      alert(`Document "${file.name}" is ready for upload.`);
    }
  });
});
