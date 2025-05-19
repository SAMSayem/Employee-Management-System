function showDetail(type) {
    alert(`Showing detailed view for: ${type}`);
    // In real system: load detailed view with AJAX or redirect
  }
  
  function markAllRead() {
    const list = document.getElementById("notification-list");
    Array.from(list.children).forEach((item) => {
      item.style.opacity = "0.6";
    });
    alert("All notifications marked as read.");
  }
  