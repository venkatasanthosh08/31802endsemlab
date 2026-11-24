
// Get user details from Local Storage
let savedUser = localStorage.getItem("user");

// Save default user if no user exists
if (savedUser === null) {
    let user = {
        email: "student@gmail.com",
        password: "12345"
    };

    localStorage.setItem("user", JSON.stringify(user));
}

// Access HTML elements using DOM
let form = document.getElementById("loginForm");
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");

// Add submit event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get saved user details
    let user = JSON.parse(localStorage.getItem("user"));

    // Check email and password
    if (email.value === user.email &&
        password.value === user.password) {

        message.innerHTML = "Login Successful";
        message.style.color = "green";

    } else {

        message.innerHTML = "Invalid email or password";
        message.style.color = "red";
    }

});
