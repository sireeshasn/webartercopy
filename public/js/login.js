// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values of email, username, and password fields
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform client-side validation if needed

    // For demonstration purposes, redirect to home page with username as query parameter
    window.location.href = `index.html?username=${encodeURIComponent(username)}`;
});
