  $(document).ready(function() {
    // Show pop-up container on click
    $('#popup-trigger').click(function(e) {
      e.stopPropagation();
      $('#popup-container').fadeIn();
    });
  
    // Handle login button click
    $('#login-button').click(function(e) {
      e.stopPropagation();
      // Perform login action
      console.log('Login button clicked');
    });
  
    // Hide pop-up container when clicking outside
    $(document).click(function() {
      $('#popup-container').fadeOut();
    });
  });
  
  $(document).ready(function() {
    // Show pop-up container on click
    $('#popup-trigger1').click(function(e) {
      e.stopPropagation();
      $('#popup-container1').fadeIn();
    });
  
    // Handle login button click
    $('#login-button1').click(function(e) {
      e.stopPropagation();
      // Perform login action
      console.log('Login button clicked');
    });
  
    // Hide pop-up container when clicking outside
    $(document).click(function() {
      $('#popup-container1').fadeOut();
    });
  });

  // ========== PopUp ==========
$(document).ready(function() {
  $('.popup-trigger').click(function() {
    $('.popup-background, .popup').fadeIn();
  });

  $('#close-popup').click(function() {
    $('.popup-background, .popup').fadeOut();
  });

  $(document).on('click', function(event) {
    if ($(event.target).hasClass('popup-background')) {
      $('.popup-background, .popup').fadeOut();
    }
  });
});

// ============== Map ==============
  // footer map
function initMap() {
  // Change this to your store's location
  var myLatLng = {lat: 7.946527, lng: -1.023194};
 
   // Create a map centered on the location
   var map = new google.maps.Map(document.getElementById('map'), {
     center: myLatLng,
     zoom: 7
   });
 
   // Create a marker on the location
   var marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     title: 'Location'
   });
 }

// Load the Google Maps API script with your API key
function loadScript() {
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAg5Iqs12530OcDOU-n2XkL_xw8w2DcEuk&callback=initMap';
  script.defer = true;
  script.async = true;
  document.body.appendChild(script);
}
window.onload = loadScript;
  
// ======= Dropdown ==========
// Get references to the button and dropdown content
const button = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Update the button click event listener
button.addEventListener('click', function(event) {
    event.stopPropagation();
    
    dropdownContent.classList.toggle('active'); // Toggle the 'active' class
});

// Add an event listener to handle the selection
dropdownContent.addEventListener('click', function(event) {
    const selectedCountry = event.target.textContent;
    button.textContent = selectedCountry; // Update the button text
    dropdownContent.classList.remove('active'); // Hide the dropdown
});

// Add an event listener to close the dropdown when clicking anywhere on the page
document.addEventListener('click', function(event) {
    dropdownContent.classList.remove('active'); // Hide the dropdown
});
// ===================================================


document.addEventListener("DOMContentLoaded", function () {
  const Navlink = document.querySelectorAll(".Navlink");

  Navlink.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle("expanded");
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
      if (!toggle.contains(event.target)) {
        toggle.nextElementSibling.classList.remove("expanded");
      }
    });
  });

  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle("expanded");
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
      if (!toggle.contains(event.target)) {
        toggle.nextElementSibling.classList.remove("expanded");
      }
    });
  });
});