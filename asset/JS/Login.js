function switchForm(formName) {
    document.querySelectorAll('.form').forEach(form => {
      form.classList.add('hidden');
    });
    document.getElementById(formName + 'Form').classList.remove('hidden');
  }
    document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    const password = this.password.value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      e.preventDefault();
    }
  });
  
  document.getElementById('resetForm')?.addEventListener('submit', function (e) {
    const pass = this.new_password.value;
    const confirm = this.confirm_password.value;
    if (pass !== confirm) {
      alert("Passwords do not match.");
      e.preventDefault();
    }
  });
  