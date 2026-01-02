document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  clearErrors();

  const emailEl = document.getElementById('email');
  const passwordEl = document.getElementById('password');
  const loginBtn = this.querySelector('button[type="submit"]') || document.getElementById('loginBtn');

  const email = emailEl.value.trim();
  const password = passwordEl.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let hasError = false;

  if (!email) {
    showError(emailEl, 'Please enter your email.');
    hasError = true;
  } else if (!emailRegex.test(email)) {
    showError(emailEl, 'Please enter a valid email address.');
    hasError = true;
  }

  if (!password) {
    showError(passwordEl, 'Please enter your password.');
    hasError = true;
  }

  if (hasError) return;

 
  if (loginBtn) loginBtn.disabled = true;
  setTimeout(() => {

    localStorage.setItem('loggedInEmail', email);
    alert(`Logged in with ${email}`);
    document.getElementById('loginForm').reset();
    if (loginBtn) loginBtn.disabled = false;
  }, 800);
});

document.getElementById('signupBtn').addEventListener('click', function() {
  window.location.href = 'signup.html';
});

function showError(inputEl, message) {
  let err = inputEl.nextElementSibling;
  if (!err || !err.classList.contains('inline-error')) {
    err = document.createElement('span');
    err.className = 'inline-error';
    err.style.color = 'red';
    err.style.fontSize = '0.9em';
    err.style.marginLeft = '8px';
    inputEl.parentNode.insertBefore(err, inputEl.nextSibling);
  }
  err.textContent = message;
}
{}
function clearErrors() {
  document.querySelectorAll('.inline-error').forEach(el => el.remove());
}
