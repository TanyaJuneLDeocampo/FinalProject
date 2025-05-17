document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim(); 
  const contact = document.getElementById('contact').value.trim(); 
  const reason = document.getElementById('reason').value.trim();

  const sex = document.querySelector('input[name="sex"]:checked')?.value;

  if (!firstName || !lastName || !email || !sex || !reason) {
    alert("Please fill in all required fields.");
    return;
  }

  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('sex', sex);
  localStorage.setItem('reason', reason);

 
  window.location.href = "profile.html";
});
