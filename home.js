document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        document.getElementById("welcomeMsg").textContent = `Welcome, ${loggedInUser.firstName}!!!`;
    }

    // Logout functionality
    document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    });

    // Search flights (Currently logs details, can be expanded)
    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let origin = document.getElementById("origin").value;
        let destination = document.getElementById("destination").value;
        let departureDate = document.getElementById("departureDate").value;
        let travelers = document.getElementById("travelers").value;
        let travelClass = document.getElementById("class").value;

        console.log(`Searching flights from ${origin} to ${destination} on ${departureDate} for ${travelers} travelers in ${travelClass} class.`);
        alert("Flight search functionality will be implemented soon!");
    });
});
