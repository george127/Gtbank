// ====== Custom Mouse Pointer ======
document.addEventListener("mousemove", function (event) {
  var cursor = document.querySelector(".cursor-circle");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

var clickableElements = document.querySelectorAll("a, button, .clickable-element"); // Add other clickable elements here

clickableElements.forEach(function (element) {
  element.addEventListener("mouseover", function () {
      var cursor = document.querySelector(".cursor-circle");
      cursor.style.width = "80px"; // Adjust the size as per your preference
      cursor.style.height = "80px"; // Adjust the size as per your preference
  });

  element.addEventListener("mouseout", function () {
      var cursor = document.querySelector(".cursor-circle");
      cursor.style.width = "20px";
      cursor.style.height = "20px";
  });
});



//  ====== Pop-up functionality ============
$(document).ready(function () {
    // When the text is clicked, show the pop-up
    $(".popup-text").click(function () {
        $(".popup-overlay").fadeIn();
    });

    // When the close button is clicked, hide the pop-up
    $(".close-btn").click(function () {
        $(".popup-overlay").fadeOut();
    });
});

// ===== Function to run the GSAP animation One======
function animateElement1(entry) {
    if (entry.isIntersecting) {
      gsap.to(entry.target, { scale: 1, opacity: 1, duration: 1 });
      entry.target.classList.add('show1');
    } else {
      gsap.to(entry.target, { scale: 0, opacity: 0, duration: 1 });
      entry.target.classList.remove('show1');
    }
  }
  // Set up the Intersection Observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement1(entry);
    });
  }, options);
  // Observe the target element
  const elementToAnimate = document.querySelector('.element1');
  observer.observe(elementToAnimate);
  //===================================================
  
  // ===== Function to run the GSAP animation Two ======
  function animateElement2(entry) {
    if (entry.isIntersecting) {
      gsap.from(entry.target, { y: 100, opacity: 0, duration: 1, stagger: 0.2 });
    }
  }
  
  // Set up the Intersection Observer
  const options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this value to control when the element becomes visible
  };
  
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      animateElement2(entry);
    });
  }, options);
  
  // Observe the target element
  const elementToAnimate2 = document.querySelector('.element2');
  observer.observe(elementToAnimate2);
  //=======================================
  
  
  // ========= scroll animation ========
            const observe = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                  entry.target.classList.add('show');
                } else {
                  entry.target.classList.remove('show');
                }
              });
            });
          
            const hiddenElements = document.querySelectorAll('.anime');
            hiddenElements.forEach((el) => observe.observe(el));
  
  //=======================================
  
  
  
  

