// Ensure the DOM is fully loaded before attaching event handlers
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");

  // Add event listeners or any additional initialization here
  // Set background on page load
  setBackgroundBasedOnTime();

  // Update background every minute (adjust as needed)
  setInterval(setBackgroundBasedOnTime, 60000);

  // Attach togglePopup function to "Contact Me" button click event
  var contactMeButton = document.getElementById("contactMeButton");
  if (contactMeButton) {
    contactMeButton.addEventListener("click", togglePopup);
  }

  // Attach submitForm function to form submission
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submitForm();
    });
  }
});

function setBackgroundBasedOnTime() {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var backgroundUrl;

  if (currentHour >= 6 && currentHour < 12) {
    // Morning
    backgroundUrl = "images/Gifs/Morning.png";
  } else if (currentHour >= 12 && currentHour < 17) {
    // Noon
    backgroundUrl = "images/Gifs/noon.png";
  } else if (currentHour >= 17 && currentHour < 20) {
    // Afternoon
    backgroundUrl = "images/Gifs/afternoon.png";
  } else {
    // Night
    backgroundUrl = "images/Gifs/night.png";
  }

  // Set background for top container
  document.querySelector(".top-container").style.backgroundImage =
    "url(" + backgroundUrl + ")";
}

function togglePopup() {
  console.log("Toggle popup function called.");
  var contactBox = document.getElementById("contactBox");

  // Toggle the display property
  if (contactBox.style.display === "none" || contactBox.style.display === "") {
    contactBox.style.display = "block";
  } else {
    contactBox.style.display = "none";
  }
}

console.log(buttonRect);

function submitForm() {
  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contactNo = document.getElementById("contactNo").value;
  var message = document.getElementById("message").value;

  // AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // Send the data
  xhr.send(
    "name=" +
      name +
      "&email=" +
      email +
      "&contactNo=" +
      contactNo +
      "&message=" +
      message
  );

  // Reset form and close popup (you may need to implement this function)
  resetForm();
  togglePopup();
}

function resetForm() {
  // Reset form fields if needed
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("contactNo").value = "";
  document.getElementById("message").value = "";
}
