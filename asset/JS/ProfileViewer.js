// script.js – Profile Viewer Page
// Assumes "employees" is globally available if shared between pages (you can load from localStorage or server in real use)

function viewProfile() {
    const id = document.getElementById('viewID').value.trim();
    const display = document.getElementById('profileDisplay');
  
    if (!id || !window.employees) {
      display.innerHTML = "<p>No data available.</p>";
      return;
    }
  
    const emp = employees.find(e => e.id === id);
  
    display.innerHTML = emp
      ? `<h3>${emp.name}</h3>
         <p><strong>Skill:</strong> ${emp.skill}</p>
         <p><strong>Contact:</strong> ${emp.contact}</p>`
      : `<p>Employee with ID "${id}" not found.</p>`;
  }
  