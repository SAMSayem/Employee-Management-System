document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('exitForm');
  const response = document.getElementById('exitResponse');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    
    const reason = document.getElementById('reason').value.trim();
    const idCardReturned = document.getElementById('idCard').checked;
    const laptopReturned = document.getElementById('laptop').checked;
    const accessRevoked = document.getElementById('access').checked;
    const alumniOptIn = document.getElementById('alumniOptIn').checked;

    if (reason.length === 0) {
      response.style.color = 'red';
      response.textContent = 'Please provide a reason for leaving.';
      return;
    }


    if (!alumniOptIn) {
      response.style.color = 'red';
      response.textContent = 'You must join our alumni network to submit the exit interview.';
      return;
    }

  
    const missingItems = [];
    const selectedItems = [];

    if (idCardReturned) {
      selectedItems.push('ID Card Returned');
    } else {
      missingItems.push('ID Card Returned');
    }

    if (laptopReturned) {
      selectedItems.push('Laptop Returned');
    } else {
      missingItems.push('Laptop Returned');
    }

    if (accessRevoked) {
      selectedItems.push('Building Access Revoked');
    } else {
      missingItems.push('Building Access Revoked');
    }

 
    let message = '';

    if (missingItems.length > 0) {
      message += `<span style="color: red;">Please complete the following return checklist item(s): ${missingItems.join(', ')}.</span><br>`;
    }

    if (selectedItems.length > 0) {
      message += `<span style="color: green;">Completed checklist item(s): ${selectedItems.join(', ')}.</span><br>`;
    }

 
    if (missingItems.length === 0) {
      message = `<span style="color: green;">Thank you for completing your exit interview. We wish you all the best!</span>`;
    }

    response.innerHTML = message;


    console.log('Exit Interview Submitted:', {
      reason,
      idCardReturned,
      laptopReturned,
      accessRevoked,
      alumniOptIn,
    });

   
    if (missingItems.length === 0) {
      form.reset();
    }
  });
});
