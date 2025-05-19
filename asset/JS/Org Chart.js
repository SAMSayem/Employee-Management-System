<<<<<<< HEAD
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

=======
// Define full profiles for each employee
var profiles = {
  "Tanvir": {
    title: "Chief Executive Officer (CEO)",
    bio: "Tanvir is the visionary leader of the organization, responsible for strategic decisions, overall management, and company growth.",
    email: "tanvir@company.com",
    phone: "+01239-65454",
    image: "../Image/Tanvir.jpg"
  },
  "SAM": {
    title: "Chief Technology Officer (CTO)",
    bio: "SAM leads the technology division, driving innovation and overseeing all product and infrastructure development.",
    email: "sam@company.com",
    phone: "+01325-554421",
    image: "../Image/SAM.png"
  }
};

// Show profile modal with detailed info
function showProfile(name, roleKey) {
  var profile = profiles[name];
  if (!profile) return;

  var content = document.getElementById("profile-content");
  content.innerHTML = `
    <img src="${profile.image}" alt="${name}" style="max-width: 120px; border-radius: 10px; margin-bottom: 10px;" />
    <h2>${name}</h2>
    <h4>${profile.title}</h4>
    <p>${profile.bio}</p>
    <p><strong>Email:</strong> <a href="mailto:${profile.email}">${profile.email}</a></p>
    <p><strong>Phone:</strong> ${profile.phone}</p>
  `;

  document.getElementById("profile-popup").style.display = "flex";
}

// Close the modal
>>>>>>> 9c62fb5e02892d0f9ae373287f050083da049e4e
function closeProfile() {
  document.getElementById("profile-popup").style.display = "none";
}

<<<<<<< HEAD
=======
// Print the chart
>>>>>>> 9c62fb5e02892d0f9ae373287f050083da049e4e
function printChart() {
  window.print();
}
