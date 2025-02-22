document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let contact = document.getElementById("contact").value;
    // let errorDiv = document.getElementById("error-message");

    let dateCheck = new Date(dob);
    let minDate = new Date("1924-01-01");

    if (dateCheck <= minDate) {
      errorNotification("Choose a date greater than 1/1/1924.");
      return;
    }

    if (!contact.match(/^\d{10}$/)) {
      errorNotification("Enter a valid contact number.");
      return;
    }

    if (!email.includes("@")) {
      errorNotification("Enter a valid email.");
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
      password,
    };

    // Store user data in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    openNotification(
      `Passenger Registration is successful. Your ID: ${passengerId} and Password: ${password}`
    );
  });

function errorNotification(message) {
  document.getElementById("error-message").style.display = "block";
  document.getElementById("overlay").style.display = "block"; // Show overlay
  document.getElementById("error-notification").innerText = message;
}

function finishNotification() {
  document.getElementById("error-message").style.display = "none";
  document.getElementById("overlay").style.display = "none"; // Hide overlay
}

function openNotification(message) {
  document.getElementById("alert-message").style.display = "block";
  document.getElementById("overlay").style.display = "block"; // Show overlay
  document.getElementById("update-notification").innerText = message;
}

function closeNotification() {
  document.getElementById("alert-message").style.display = "none";
  document.getElementById("overlay").style.display = "none"; // Hide overlay
  window.location.href = "login.html";
}

function cancelReset() {
  document.getElementById("reset-message").style.display = "none";
  document.getElementById("overlay").style.display = "none"; // Hide overlay
}

function applyReset() {
  location.reload();
}

document.getElementById("reset").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("reset-message").style.display = "block";
  document.getElementById("overlay").style.display = "block"; // Show overlay
});
