// JS client-side password confirmation validation
document.getElementById("password-form").addEventListener("submit", function (e) {
    const newPassword = document.querySelector("input[name='new_password']").value;
    const confirmPassword = document.querySelector("input[name='confirm_password']").value;
  
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      e.preventDefault();
    }
  });
  