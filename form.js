document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error-msg").forEach(el => el.innerHTML = "");
    document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("error"));

    // Name
    let name = document.getElementById("name").value.trim();
    if (name === "" || name.length > 20) {
        document.getElementById("nameError").innerHTML = "Name required (max 20 characters)";
        document.getElementById("name").classList.add("error");
        valid = false;
    }

    // Age
    let age = document.getElementById("age").value;
    if (age < 18 || age > 60) {
        document.getElementById("ageError").innerHTML = "Age must be between 18 and 60";
        document.getElementById("age").classList.add("error");
        valid = false;
    }

    // Gender
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").innerHTML = "Please select gender";
        valid = false;
    }

    // Email
    let email = document.getElementById("email").value.trim();
    if (!email.includes("@") || email.length > 30) {
        document.getElementById("emailError").innerHTML = "Invalid email (max 30 chars)";
        document.getElementById("email").classList.add("error");
        valid = false;
    }

    // Password
    let password = document.getElementById("password").value;
    if (password.length < 6 || password.length > 12) {
        document.getElementById("passwordError").innerHTML = "Password must be 6–12 characters";
        document.getElementById("password").classList.add("error");
        valid = false;
    }

    // Phone
    let phone = document.getElementById("phone").value;
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter a valid 10-digit number";
        document.getElementById("phone").classList.add("error");
        valid = false;
    }

    // Address
    let address = document.getElementById("address").value.trim();
    if (address === "" || address.length > 50) {
        document.getElementById("addressError").innerHTML = "Address required (max 50 characters)";
        document.getElementById("address").classList.add("error");
        valid = false;
    }

    // Terms
    if (!document.getElementById("terms").checked) {
        document.getElementById("termsError").innerHTML = "You must accept the terms";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
}
