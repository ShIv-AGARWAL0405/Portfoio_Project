// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Simple validation
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!validateEmail(email.value)) {
        alert('Please enter a valid email');
        return;
    }

    // Show a success message (you can also add AJAX here to send the form data to a server)
    alert('Thank you for your message!');
    document.getElementById('contact-form').reset();
});

// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
