function sendSignature() {
    const email = document.getElementById("email").value;
  
    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Signature request sent to " + email + "!");
  }
  
  function saveRetention() {
    const fileInput = document.getElementById("fileUpload");
    const retention = document.getElementById("retention").value;
  
    if (!fileInput.files.length) {
      alert("Please upload a document first.");
      return;
    }
  
    if (!retention.trim()) {
      alert("Please enter a retention policy.");
      return;
    }
  
    alert("Retention policy saved: " + retention);
  }
  
  function validateEmail(email) {
    // Basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  