document.getElementById('announcementForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const dept = document.getElementById('announcementDept').value;
    const priority = document.getElementById('announcementPriority').value;
    const message = document.getElementById('announcementMsg').value.trim();
  
    if (message === "") {
      alert("Please enter a message.");
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = `[${dept}] ${message}`;
  
    if (priority === 'high') {
      li.classList.add('priority');
      document.getElementById('priorityAlertsList').appendChild(li);
    } else {
      document.getElementById('newsFeedList').appendChild(li);
    }
  
    // Clear form
    document.getElementById('announcementForm').reset();
  });
  