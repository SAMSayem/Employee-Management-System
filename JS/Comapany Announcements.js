document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("announcementForm");

  const fetchAndDisplayAnnouncements = () => {
    fetch("get_announcements.php")
      .then((res) => res.json())
      .then((announcements) => {
        const priorityList = document.getElementById("priorityAlertsList");
        const newsList = document.getElementById("newsFeedList");

        priorityList.innerHTML = "";
        newsList.innerHTML = "";

        announcements.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = `[${item.timestamp}] (${item.department}) ${item.message}`;

          if (item.priority.toLowerCase() === "high") {
            priorityList.appendChild(li);
          } else {
            newsList.appendChild(li);
          }
        });
      });
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    fetch("Company Announcements.php", {
      method: "POST",
      body: data
    })
      .then((res) => res.text())
      .then((responseText) => {
        alert(responseText);
        form.reset();
        fetchAndDisplayAnnouncements();
      })
      .catch((error) => {
        alert("Error posting announcement.");
        console.error(error);
      });
  });

  fetchAndDisplayAnnouncements();
});
