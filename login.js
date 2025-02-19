document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let userId = document.getElementById("userId").value;
    let password = document.getElementById("password").value;
    let errorDiv = document.getElementById("error-message");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.passengerId == userId && user.password === password);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "home.html";
    } else {
        errorDiv.textContent = "Both ID/Password not valid.";
        errorDiv.style.color = "red";
    }
});
