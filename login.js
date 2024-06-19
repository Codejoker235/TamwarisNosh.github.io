document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Dummy validation (replace with actual validation logic)
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Username and password are required.';
        return;
    }

    // Dummy authentication (replace with actual backend API call or localStorage check)
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (username === user.username && password === user.password) {
            // Redirect to dashboard or new page
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard.html after successful login
        } else {
            document.getElementById('error-message').textContent = 'Invalid username or password. Please try again.';
        }
    } else {
        document.getElementById('error-message').textContent = 'User not found. Please register first.';
    }
});
