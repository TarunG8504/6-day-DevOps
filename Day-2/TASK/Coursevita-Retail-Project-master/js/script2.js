document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get Form Values
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();

    // Error Messages
    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let phoneError = document.getElementById("phoneError");
    let emailError = document.getElementById("emailError");

    // Reset Errors
    firstNameError.innerText = "";
    lastNameError.innerText = "";
    phoneError.innerText = "";
    emailError.innerText = "";

    let isValid = true;

    // First Name Validation
    if (firstName === "") {
        firstNameError.innerText = "First name is required";
        isValid = false;
    }

    // Last Name Validation
    if (lastName === "") {
        lastNameError.innerText = "Last name is required";
        isValid = false;
    }

    // Phone Validation (Only Numbers and Length)
    let phoneRegex = /^[0-9]{10}$/;
    if (!phone.match(phoneRegex)) {
        phoneError.innerText = "Enter a valid 10-digit phone number";
        isValid = false;
    }

    // Email Validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        emailError.innerText = "Enter a valid email address";
        isValid = false;
    }

    // If valid, show success alert
    if (isValid) {
        alert("Your details have been submitted successfully!");
        document.getElementById("contactForm").reset(); // Reset form
    }
});
