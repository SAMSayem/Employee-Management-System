
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('announcementForm');
  const priorityList = document.getElementById('priorityAlertsList');
  const newsFeedList = document.getElementById('newsFeedList');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const dept = form.announcementDept.value;
    const priority = form.announcementPriority.value;
    const msg = form.announcementMsg.value.trim();

    if (!msg) return;

    const li = document.createElement('li');
    li.classList.add('announcement-item');

    const deptText = dept === 'All' ? '[All Departments]' : `[${dept}]`;
    li.textContent = `${deptText} ${msg}`;


    if (priority === 'high') {
      li.style.color = 'red';
      li.style.fontWeight = 'bold';
      priorityList.appendChild(li);
    } else {
      newsFeedList.appendChild(li);
    }
    form.reset();
  });
});
