document.getElementById("permission-form").addEventListener("submit", function (e) {
    const role = document.querySelector("select[name='role']").value;
    const permissions = document.querySelectorAll("input[name='permissions[]']:checked");
  
    if (!role) {
      alert("Please select a role.");
      e.preventDefault();
      return;
    }
  
    if (permissions.length === 0) {
      alert("Please select at least one permission.");
      e.preventDefault();
    }
  });
  
  document.getElementById("assign-role-form").addEventListener("submit", function (e) {
    const email = document.querySelector("input[name='email']").value;
    const role = document.querySelector("select[name='assign_role']").value;
  
    if (!email || !role) {
      alert("Please fill in all required fields.");
      e.preventDefault();
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format.");
      e.preventDefault();
    }
  });
  