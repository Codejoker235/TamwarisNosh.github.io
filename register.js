document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Dummy validation (replace with actual validation logic)
    if (username === '' || email === '' || password === '') {
        document.getElementById('error-message').textContent = 'Username, email, and password are required.';
        return;
    }

    // Simulate storing user data (replace with actual backend API call)
    // For simplicity, store in localStorage here
    const newUser = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('currentUser', JSON.stringify(newUser));

    // Redirect to dashboard or new page
    alert('Registration successful!');
    window.location.href = 'dashboard.html'; // Redirect to dashboard.html after successful registration
});
