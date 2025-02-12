const container = document.querySelector('.container');
const signUpLink = document.getElementById('signUpLink');
const loginLink = document.getElementById('loginLink');
const signupContainer = document.getElementById('signup-container');

// Initially, the login form is displayed on the right
// When the user clicks "Sign Up", slide the login form to the left
signUpLink.addEventListener('click', function (e) {
    e.preventDefault();
    container.style.transform = 'translateX(-50%)'; // Slide to the left to show sign-up
    signupContainer.style.display = 'flex'; // Show sign-up