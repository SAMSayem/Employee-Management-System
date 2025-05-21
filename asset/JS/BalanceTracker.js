// asset/JS/BalanceTracker.js
(function () {
  const balanceTable = document.getElementById('balanceTable');
  const balances = [
    { type: 'Annual', used: 5, remaining: 15 },
    { type: 'Sick', used: 2, remaining: 8 },
    { type: 'Unpaid', used: 0, remaining: 'Unlimited' }
  ];

  function renderBalances() {
    balanceTable.innerHTML = '';
    balances.forEach(b => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${b.type}</td><td>${b.used}</td><td>${b.remaining}</td>`;
      balanceTable.appendChild(row);
    });
  }

  renderBalances();
})();
