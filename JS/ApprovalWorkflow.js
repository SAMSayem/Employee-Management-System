// approval-workflow.js
const requestList = document.getElementById('requestList');

let leaves = JSON.parse(localStorage.getItem('leaves')) || [];

function renderRequests() {
  requestList.innerHTML = '';
  leaves.forEach((leave, index) => {
    if (leave.status) return; // Skip if already approved/rejected
    const li = document.createElement('li');
    li.className = 'request-item';
    li.innerHTML = `
      <p><strong>Dates:</strong> ${leave.startDate} to ${leave.endDate}</p>
      <p><strong>Type:</strong> ${leave.leaveType}</p>
      <button class="approve-btn" onclick="approveRequest(${index})">Approve</button>
      <button class="reject-btn" onclick="rejectRequest(${index})">Reject</button>
    `;
    requestList.appendChild(li);
  });
}

function approveRequest(index) {
  leaves[index].status = 'Approved';
  localStorage.setItem('leaves', JSON.stringify(leaves));
  renderRequests();
}

function rejectRequest(index) {
  leaves[index].status = 'Rejected';
  localStorage.setItem('leaves', JSON.stringify(leaves));
  renderRequests();
}

document.addEventListener('DOMContentLoaded', renderRequests);
