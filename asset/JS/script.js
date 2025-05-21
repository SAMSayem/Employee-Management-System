let employees = [];

document.getElementById('addEmployeeForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('empName').value;
  const skill = document.getElementById('empSkill').value;
  const id = document.getElementById('empID').value;

  const contact = `${name.toLowerCase().replace(/ /g, '')}@company.com`;

  employees.push({ id, name, skill, contact });

  displayEmployees();
  this.reset();
});

function displayEmployees() {
  const body = document.getElementById('directoryBody');
  if (!body) return;

  body.innerHTML = employees.map(emp => `
    <tr>
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.skill}</td>
      <td>${emp.contact}</td>
    </tr>
  `).join('');
}

function exportCSV() {
  let csv = 'ID,Name,Skill,Contact\n';
  employees.forEach(emp => {
    csv += `${emp.id},${emp.name},${emp.skill},${emp.contact}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'employee_directory.csv';
  a.click();
}
