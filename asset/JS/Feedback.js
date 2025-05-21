const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const entry = {
    reviewee: document.getElementById('reviewee').value,
    reviewer: document.getElementById('reviewer').value,
    feedback: document.getElementById('feedback').value,
    relationship: document.getElementById('relationship').value,
    date: new Date().toLocaleDateString()
  };

  let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
  feedbacks.push(entry);
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

  alert('Feedback submitted!');
  feedbackForm.reset();
});
