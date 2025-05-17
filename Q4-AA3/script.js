document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form from actually submitting

  // Get form values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim(); // Optional
  const contact = document.getElementById('contact').value.trim(); // Optional
  const reason = document.getElementById('reason').value.trim();

  const sex = document.querySelector('input[name="sex"]:checked')?.value;

  // Basic validation (you can expand this)
  if (!firstName || !lastName || !email || !sex || !reason) {
    alert("Please fill in all required fields.");
    return;
  }

  // Save data to localStorage
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('sex', sex);
  localStorage.setItem('reason', reason);

  // Redirect to profile page
  window.location.href = "profile.html";
});