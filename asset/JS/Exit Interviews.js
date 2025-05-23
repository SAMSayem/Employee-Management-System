
document.addEventListener('DOMContentLoaded', () => {
    const exitForm = document.getElementById('exitForm');
    const reasonInput = document.getElementById('reason');
    const exitResponse = document.getElementById('exitResponse');
  
    exitForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const reason = reasonInput.value.trim();
      const idCardReturned = document.getElementById('idCard').checked;
      const laptopReturned = document.getElementById('laptop').checked;
      const accessRevoked = document.getElementById('access').checked;
      const alumniOptIn = document.getElementById('alumniOptIn').checked;
  
      if (!reason) {
        exitResponse.style.color = 'red';
        exitResponse.textContent = 'Please provide a reason for leaving.';
        return;
      }
  
      const checklistComplete = idCardReturned && laptopReturned && accessRevoked;
  
      let message = `✅ Exit interview submitted.\nReason: "${reason}"\n`;
      message += `Checklist complete: ${checklistComplete ? 'Yes' : 'Incomplete'}\n`;
      if (alumniOptIn) {
        message += '✔️ You will be added to our alumni network.';
      }
  
      exitResponse.style.color = 'green';
      exitResponse.textContent = message;
  
      // Optionally reset the form
      exitForm.reset();
    });
  });
  
