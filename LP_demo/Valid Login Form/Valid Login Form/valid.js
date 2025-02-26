function validateForm() {
    // Get form input elements and error message elements
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var emailError = document.getElementById('email_error');
    var passwordError = document.getElementById('pass_error');
    var loginStatus = document.getElementById('login-status');

    // Reset error messages and login status 
	
    emailError.style.display = 'none'; // tu massage kad tu jo tula la pahije to 'none' jagi
    passwordError.style.display = 'none'; // tu massage kad tu jo tula la pahije to 'none' jagi
    loginStatus.style.display = 'none';// tu massage kad tu jo tula la pahije to 'none' jagi

    // Check if email or phone is empty
    if (emailInput.value.trim() === '') {
        emailError.style.display = 'block';
        return false; // Prevent form submission
    }

    // Check if password is empty
    if (passwordInput.value.trim() === '') {
        passwordError.style.display = 'block';
        return false; // Prevent form submission
    }

    // Simulate a login check here (replace with your server-side logic)
    var email = emailInput.value;
    var password = passwordInput.value;

    // Replace this condition with your server-side authentication logic
    if (email === 'user@example.com' && password === 'password123') {
        loginStatus.textContent = 'Login successful!';
        loginStatus.style.color = 'green';
        loginStatus.style.display = 'block';
        return true; // Allow form submission
    } else {
        loginStatus.textContent = 'Invalid email or password. Please try again.';
        loginStatus.style.color = 'red';
        loginStatus.style.display = 'block';
        return false; // Prevent form submission
    }
}
