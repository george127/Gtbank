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
  

var slideIndex = 0;
var slides = document.getElementsByClassName('slide');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');

showSlide(slideIndex);

prevButton.addEventListener('click', function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});

nextButton.addEventListener('click', function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

// Autoplay functionality
var autoplayInterval = setInterval(function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}, 9000); // Change the duration (in milliseconds) between slides

// Pause autoplay when hovering over the slider
var sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', function() {
  clearInterval(autoplayInterval);
});

// Resume autoplay when not hovering over the slider
sliderContainer.addEventListener('mouseleave', function() {
  autoplayInterval = setInterval(function() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }, 3000); // Change the duration (in milliseconds) between slides
});

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}
//==================================================



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