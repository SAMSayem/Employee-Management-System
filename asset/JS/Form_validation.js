const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const submitBtn = form.querySelector("button");

// Attach input listeners
[nameInput, emailInput, passInput, confirmPass].forEach(input => {
  input.addEventListener("input", validateForm);
});

function validateForm() {
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    setError(nameInput, "Name is required");
    valid = false;
  } else {
    clearError(nameInput);
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    setError(emailInput, "Enter a valid email");
    valid = false;
  } else {
    clearError(emailInput);
  }

  // Password validation
  if (passInput.value.length < 6) {
    setError(passInput, "Password must be at least 6 characters");
    valid = false;
  } else {
    clearError(passInput);
  }

  // Confirm password
  if (confirmPass.value !== passInput.value || confirmPass.value === "") {
    setError(confirmPass, "Passwords do not match");
    valid = false;
  } else {
    clearError(confirmPass);
  }

  submitBtn.disabled = !valid;
}

function setError(input, message) {
  const errorElem = input.parentElement.querySelector(".error");
  errorElem.textContent = message;
  input.classList.add("invalid");
}

function clearError(input) {
  const errorElem = input.parentElement.querySelector(".error");
  errorElem.textContent = "";
  input.classList.remove("invalid");
}

// Prevent submission if invalid
form.addEventListener("submit", function (e) {
  validateForm();
  if (submitBtn.disabled) {
    e.preventDefault();
  }
});
