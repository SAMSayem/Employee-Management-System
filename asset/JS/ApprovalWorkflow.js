
(function () {
  const requestList = document.getElementById('requestList');
  const pendingLeaves = [
    { name: 'Zenith', date: '2025-06-01 to 2025-06-05', type: 'Annual' },
    { name: 'Siam', date: '2025-06-03', type: 'Sick' }
  ];

  function renderPendingRequests() {
    requestList.innerHTML = '';
    pendingLeaves.forEach(req => {
      const li = document.createElement('li');
      li.textContent = `${req.name} - ${req.date} (${req.type})`;
      requestList.appendChild(li);
    });
  }

  renderPendingRequests();
})();
