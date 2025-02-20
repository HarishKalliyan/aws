document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
});

document.getElementById("backButton").addEventListener("click", function() {
    window.history.back();
});