let scale = 1;
const container = document.getElementById("org-chart-container");

container.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY > 0 ? -0.1 : 0.1;
  scale = Math.min(Math.max(0.5, scale + delta), 2);
  container.style.transform = `scale(${scale})`;
});

function showProfile(name) {
  const popup = document.getElementById("profile-popup");
  const content = document.getElementById("profile-content");
  content.innerHTML = `<h2>${name}'s Profile</h2><p>More detailed info about ${name}...</p>`;
  popup.style.display = "block";
}

function closeProfile() {
  document.getElementById("profile-popup").style.display = "none";
}

function printChart() {
  window.print();
}
