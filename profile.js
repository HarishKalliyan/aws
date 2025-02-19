document.addEventListener("DOMContentLoaded", function() {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        // Display user details
        document.getElementById("passengerId").textContent = loggedInUser.passengerId;
        document.getElementById("firstName").value = loggedInUser.firstName;
        document.getElementById("lastName").value = loggedInUser.lastName;
        document.getElementById("dob").value = loggedInUser.dob;
        document.getElementById("email").value = loggedInUser.email;
        document.getElementById("address").value = loggedInUser.address;
        document.getElementById("contact").value = loggedInUser.contact;
    }

    // Enable editing
    document.getElementById("editProfile").addEventListener("click", function() {
        document.querySelectorAll("input, textarea").forEach(input => input.removeAttribute("disabled"));
        document.getElementById("saveProfile").style.display = "inline-block";
        document.getElementById("editProfile").style.display = "none";
    });

    // Save changes
    document.getElementById("saveProfile").addEventListener("click", function() {
        let updatedUser = {
            passengerId: loggedInUser.passengerId,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            dob: document.getElementById("dob").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            contact: document.getElementById("contact").value,
            password: loggedInUser.password
        };

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userIndex = users.findIndex(user => user.passengerId === loggedInUser.passengerId);

        if (userIndex !== -1) {
            users[userIndex] = updatedUser;
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
            alert("Profile updated successfully!");
        }

        window.location.reload();
    });
});
