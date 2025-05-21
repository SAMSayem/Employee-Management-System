// asset/JS/LeaveCalendar.js
(function () {
  const leaveForm = document.getElementById('leaveForm');
  const leaveList = document.getElementById('leaveList');

  let leaveEntries = [];

  leaveForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const start = document.getElementById('startDate').value;
    const end = document.getElementById('endDate').value;
    const type = document.getElementById('leaveType').value;

    if (start && end && type) {
      const entry = `${start} to ${end} - ${type}`;
      leaveEntries.push(entry);
      renderLeaves();
      leaveForm.reset();
    }
  });

  function renderLeaves() {
    leaveList.innerHTML = '';
    leaveEntries.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      leaveList.appendChild(li);
    });
  }
})();
