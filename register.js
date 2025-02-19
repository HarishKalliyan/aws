document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let contact = document.getElementById("contact").value;
    let errorDiv = document.getElementById("error-message");

    let dateCheck = new Date(dob);
    let minDate = new Date("1924-01-01");

    if (dateCheck <= minDate) {
        errorDiv.textContent = "Choose a date greater than 1/1/1924.";
        errorDiv.style.color = "red";
        return;
    }

    if (!contact.match(/^\d{10}$/)) {
        errorDiv.textContent = "Enter a valid contact number.";
        errorDiv.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        errorDiv.textContent = "Enter a valid email.";
        errorDiv.style.color = "red";
        return;
    }

    // Generate Random Passenger ID and Password
    let passengerId = Math.floor(10000 + Math.random() * 90000); 
    let password = firstName.substring(0, 4) + "@123";

    let userData = {
        firstName,
        lastName,
        dob,
        email,
        address,
        contact,
        passengerId,
        password
    };

    // Store user data in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    alert(`Passenger Registration is successful. Your ID: ${passengerId} and Password: ${password}`);
    window.location.href = "login.html";
});

document.getElementById("reset").addEventListener("click", function() {
    if (confirm("Is it okay to reset the fields?")) {
        document.getElementById("register-form").reset();
    }
});
