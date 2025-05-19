// script.js – Advanced Search Page
// Assumes "employees" is globally available or loaded dynamically

function advancedSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const results = document.getElementById('searchResults');
  
    if (!window.employees) {
      results.innerHTML = "<li>No employee data loaded.</li>";
      return;
    }
  
    const matches = employees.filter(emp =>
      emp.name.toLowerCase().includes(query) ||
      emp.skill.toLowerCase().includes(query)
    );
  
    results.innerHTML = matches.length
      ? matches.map(emp =>
          `<li><strong>${emp.name}</strong><br>Skill: ${emp.skill}<br>Contact: ${emp.contact}</li>`
        ).join('')
      : `<li>No matching results found.</li>`;
  }
  