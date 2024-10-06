const loginForm = document.getElementById('loginForm');
const errorMessageElement = document.getElementById('errorMessage');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation (more complex validation can be added)
  if (!username || !password) {
    errorMessageElement.textContent = 'Please enter both username and password.';
    return;
  }

  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle non-2xx responses (e.g., login failed)
      throw new Error('Login failed. Please check your credentials.');
    }

    if (data.message === 'Incorrect username or password') {
      throw new Error('Incorrect username or password.');
    } else {
      // Login successful
      console.log('Login successful:', data);

      // Store relevant data (e.g., token) in localStorage (optional)
      localStorage.setItem('token', data.accessToken); // Assuming data has an accessToken property

      // Redirect to dashboard (or handle successful login logic)
      window.location.href = './dashboard.html';
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessageElement.textContent = error.message; // Display error message to user
  }
});