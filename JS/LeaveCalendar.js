// leave-calendar.js
const leaveForm = document.getElementById('leaveForm');
const leaveList = document.getElementById('leaveList');

let leaves = JSON.parse(localStorage.getItem('leaves')) || [];

function renderLeaves() {
  leaveList.innerHTML = '';
  leaves.forEach((leave, index) => {
    const li = document.createElement('li');
    li.textContent = `${leave.startDate} to ${leave.endDate} - ${leave.leaveType}`;
    leaveList.appendChild(li);
  });
}

leaveForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const leaveType = document.getElementById('leaveType').value;

  leaves.push({ startDate, endDate, leaveType });
  localStorage.setItem('leaves', JSON.stringify(leaves));
  renderLeaves();
  leaveForm.reset();
});

document.addEventListener('DOMContentLoaded', renderLeaves);
