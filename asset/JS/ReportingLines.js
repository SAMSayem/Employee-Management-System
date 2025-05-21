const departments = [
    { name: 'Engineering', color: 'color-blue', reportsTo: ['CTO'] },
    { name: 'Sales', color: 'color-green', reportsTo: ['COO', 'CEO'] },
    { name: 'HR', color: 'color-red', reportsTo: ['COO'] },
    { name: 'Design', color: 'color-orange', reportsTo: ['CTO', 'CMO'] }
  ];
  
  function loadReportingLines() {
    const container = document.getElementById('reportingContainer');
    container.innerHTML = '';
  
    departments.forEach(dept => {
      const div = document.createElement('div');
      div.className = `department ${dept.color}`;
      div.innerHTML = `
        <div class="title">${dept.name}</div>
        <div class="reporting"><strong>Reports to:</strong> ${dept.reportsTo.join(', ')}</div>
      `;
      container.appendChild(div);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadReportingLines);
  