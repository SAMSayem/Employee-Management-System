const goalForm = document.getElementById('goalForm');
const goalList = document.getElementById('goalList');

goalForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const goal = {
    employee: document.getElementById('employee').value,
    description: document.getElementById('goal').value,
    status: document.getElementById('status').value,
    date: new Date().toLocaleDateString()
  };

  let goals = JSON.parse(localStorage.getItem('goals')) || [];
  goals.push(goal);
  localStorage.setItem('goals', JSON.stringify(goals));

  displayGoals();
  goalForm.reset();
});

function displayGoals() {
  goalList.innerHTML = '';
  const goals = JSON.parse(localStorage.getItem('goals')) || [];

  goals.forEach(goal => {
    const div = document.createElement('div');
    div.classList.add('goal-entry');
    div.innerHTML = `
      <strong>${goal.employee}</strong> — <em>${goal.status}</em><br>
      ${goal.description}<br>
      <small>${goal.date}</small>
    `;
    goalList.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', displayGoals);
