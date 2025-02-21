document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let userId = document.getElementById("userId").value;
    let password = document.getElementById("password").value;
    let errorDiv = document.getElementById("error-message");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.passengerId == userId && user.password === password);

    
    if (!user) {
        let userExists = users.some(user => user.passengerId == userId);
        if (!userExists) {
            openNotification("User ID not valid.");
        } else {
            openNotification("Password not valid.");
        }
    } else {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        successNotification("You have Logged in successfully.");
        
    }
});

function successNotification(message){
    document.getElementById("success-message").style.display = "block";
    document.getElementById("display-success").innerText = message;
}

function closeSuccessNotification(){
    document.getElementById("success-message").style.display = "none";
    window.location.href = "home.html";
}

function openNotification(message){
    document.getElementById("error-message").style.display = "block";
    document.getElementById("display-error").innerText = message;
}


function closeNotification(){
    document.getElementById("error-message").style.display = "none";
    window.location.href = "login.html";
}