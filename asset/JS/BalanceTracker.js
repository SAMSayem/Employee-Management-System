// balance-tracker.js
const balanceTable = document.getElementById('balanceTable');

let leaves = JSON.parse(localStorage.getItem('leaves')) || [];

const leaveTypes = {
  'Annual': 20,
  'Sick': 10,
  'Unpaid': 0
};

function calculateBalances() {
  const usedLeaves = {
    'Annual': 0,
    'Sick': 0,
    'Unpaid': 0
  };

  leaves.forEach(leave => {
    if (leave.status === 'Approved') {
      const start = new Date(leave.startDate);
      const end = new Date(leave.endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      if (usedLeaves.hasOwnProperty(leave.leaveType)) {
        usedLeaves[leave.leaveType] += days;
      }
    }
  });

  balanceTable.innerHTML = '';
  for (let type in leaveTypes) {
    const used = usedLeaves[type];
    const total = leaveTypes[type];
    const remaining = total - used;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${type}</td>
      <td>${used}</td>
      <td>${remaining >= 0 ? remaining : 0}</td>
    `;
    balanceTable.appendChild(row);
  }
}

document.addEventListener('DOMContentLoaded', calculateBalances);
