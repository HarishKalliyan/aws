document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        document.getElementById("welcomeMsg").textContent = `Welcome, ${loggedInUser.firstName} !!!`;
    }

    let today = new Date().toISOString().split("T")[0];
    document.getElementById("departureDate").setAttribute("min", today);
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
        if(origin == destination){
            openNotification("Origin and Destination cannot be same.");
        }
        else if(travelers <= 0){
            openNotification("Number of travelers cannot be less than 1.");
        }else if(origin == "" || destination == "" || departureDate == "" || travelers == "" || travelClass == ""){
            openNotification("Please fill all the fields.");
        }
        else{
        console.log(`Searching flights from ${origin} to ${destination} on ${departureDate} for ${travelers} travelers in ${travelClass} class.`);
        successNotification("Your Flight details will be updated soon!!");
        }
    });
    
    
});

function successNotification(message){
    document.getElementById("success-message").style.display = "block";
    document.getElementById("display-success").innerText = message;
}

function closeSuccessNotification(){
    document.getElementById("success-message").style.display = "none";
    window.location.reload();
}


function openNotification(message){
    document.getElementById("error-message").style.display = "block";
    document.getElementById("display-error").innerText = message;
}


function closeNotification(){
    document.getElementById("error-message").style.display = "none";
    window.location.reload();
}