document.addEventListener("DOMContentLoaded", function () {
  setBackgroundBasedOnTime();
  setInterval(setBackgroundBasedOnTime, 60000);

  var contactMeButton = document.getElementById("contactMeButton");
  if (contactMeButton) {
    contactMeButton.addEventListener("click", togglePopup);
  }

  
});

function setBackgroundBasedOnTime() {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var backgroundUrl;

  if (currentHour >= 6 && currentHour < 12) {
    backgroundUrl = "images/Gifs/Morning.png";
  } else if (currentHour >= 12 && currentHour < 17) {
    backgroundUrl = "images/Gifs/noon.png";
  } else if (currentHour >= 17 && currentHour < 20) {
    backgroundUrl = "images/Gifs/afternoon.png";
  } else {
    backgroundUrl = "images/Gifs/night.png";
  }

  document.querySelector(".top-container").style.backgroundImage =
    "url(" + backgroundUrl + ")";
}

function togglePopup() {
  var contactBox = document.getElementById("contactBox");
  if (contactBox.style.display === "none" || contactBox.style.display === "") {
    contactBox.style.display = "block";
  } else {
    contactBox.style.display = "none";
  }
}

var contactButton = document.getElementById("contactButton");

async function submitForm(event) {
  event.preventDefault();

  var formData = new FormData(event.target);
  const user = Object.fromEntries(formData);

  try {
    const response = await fetch('https://server-side-henna.vercel.app/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.log('Error sending email');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  resetForm();
  togglePopup();
  return false;
}


function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("contactNo").value = "";
  document.getElementById("message").value = "";
}
