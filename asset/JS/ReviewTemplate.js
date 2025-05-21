const reviewForm = document.getElementById('reviewForm');

reviewForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const review = {
    employeeName: document.getElementById('employeeName').value,
    strengths: document.getElementById('strengths').value,
    improvements: document.getElementById('improvements').value,
    managerName: document.getElementById('managerName').value,
    performanceRating: document.getElementById('performanceRating').value,
    managerComments: document.getElementById('managerComments').value,
    date: new Date().toLocaleDateString()
  };

  let reviews = JSON.parse(localStorage.getItem('performanceReviews')) || [];
  reviews.push(review);
  localStorage.setItem('performanceReviews', JSON.stringify(reviews));

  alert('Performance review saved!');
  reviewForm.reset();
});
