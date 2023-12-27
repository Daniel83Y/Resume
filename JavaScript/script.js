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
    backgroundUrl = "images/Gifs/Night.png";
  }

  // Set background for top container
  document.querySelector(".top-container").style.backgroundImage =
    "url(" + backgroundUrl + ")";
}

// Set background on page load
setBackgroundBasedOnTime();

// Update background every minute (adjust as needed)
setInterval(setBackgroundBasedOnTime, 60000);
