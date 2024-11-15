const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-btn');

// Toggle sidebar and hide the menu icon when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
    menuIcon.style.display = 'none'; // Hide the menu icon when sidebar is open
});

// Close sidebar and show the menu icon when the close button is clicked
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    menuIcon.style.display = 'block'; // Show the menu icon when sidebar is closed
});






ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });




var typed = new Typed('#multiple-text', {
    strings: ['<i>Software Developer</i>.', '<i>Web Deveoloper</i>.', '<i>Assistant lectrurer</i>.'],
    typeSpeed: 20,
    backSpeed: 20,
    backDelay: 1200,
    loop: true


});

  

document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('.about');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('active'); // Add 'active' class to trigger animation
      } else {
        aboutSection.classList.remove('active'); // Remove 'active' class when it leaves the viewport
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is in view

  observer.observe(aboutSection);
});




document.addEventListener('DOMContentLoaded', () => {
  const serviceBoxes = document.querySelectorAll('.services-box');
  const progressBar = document.querySelector('.service-progress');
  let currentIndex = 0;

  function updateServiceBoxes() {
      serviceBoxes.forEach(box => box.classList.remove('center', 'left', 'right'));

      serviceBoxes[currentIndex].classList.add('center');
      serviceBoxes[(currentIndex + 1) % serviceBoxes.length].classList.add('right');
      serviceBoxes[(currentIndex + 2) % serviceBoxes.length].classList.add('left');
  }

  function resetProgressBar() {
      // Trigger a reflow to reset the animation
      progressBar.style.transition = 'none'; // Temporarily disable transition
      progressBar.style.width = '0%'; // Reset width instantly
      progressBar.offsetWidth; // Force reflow (restarting the animation)
      progressBar.style.transition = 'width 5s linear'; // Re-enable transition
  }

  function animateProgressBar() {
      resetProgressBar(); // Ensure the animation restarts properly
      setTimeout(() => {
          progressBar.style.width = '100%'; // Start the progress bar fill
      }, 50); // Small delay to allow CSS to apply changes
  }

  function rotateServices() {
      currentIndex = (currentIndex + 1) % serviceBoxes.length;
      updateServiceBoxes();
      animateProgressBar();
  }

  // Initial setup
  updateServiceBoxes();
  animateProgressBar();

  // Rotate every 5 seconds
  setInterval(rotateServices, 5000);
});





document.addEventListener('DOMContentLoaded', () => {
  const portfolioSection = document.querySelector('.portfolio');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.6) {
              portfolioSection.classList.add('active'); // Add 'active' class when 60% or more is visible
          } else if (entry.intersectionRatio <= 0.1) {
              portfolioSection.classList.remove('active'); // Remove 'active' class when 10% or less is visible
          }
      });
  }, { threshold: [0.1, 0.6] }); // Set thresholds for both conditions

  observer.observe(portfolioSection); // Observe the portfolio section
});



// Function for smooth scrolling
function smoothScrollTo(target, duration) {
  const start = window.scrollY; // Get current scroll position
  const distance = target - start; // Calculate distance to scroll
  let startTime = null; // Variable to hold the start time

  // Animation function
  function animation(currentTime) {
      if (startTime === null) startTime = currentTime; // Set start time
      const timeElapsed = currentTime - startTime; // Calculate elapsed time
      const progress = Math.min(timeElapsed / duration, 1); // Calculate progress (0 to 1)

      // Ease in-out effect
      const easing = progress < 0.5 
          ? 4 * progress * progress * progress 
          : (progress - 1) * (progress - 1) * (progress - 1) + 1;

      window.scrollTo(0, start + distance * easing); // Scroll to the current position
      if (progress < 1) requestAnimationFrame(animation); // Continue animation if not finished
  }

  requestAnimationFrame(animation); // Start the animation
}

// Scroll to top when the footer icon is clicked
document.querySelector('.footer-iconTop a').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  smoothScrollTo(0, 1800); // Scroll to the top over 800 milliseconds
});

// Show/hide footer icon based on scroll position
window.addEventListener('scroll', function() {
  const footerIcon = document.querySelector('.footer-iconTop');

  if (window.scrollY > 100) { // Adjust the scroll threshold as needed
      footerIcon.classList.add('show'); // Show icon
  } else {
      footerIcon.classList.remove('show'); // Hide icon
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.sidebar-menu li');

  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          // Remove 'active' class from all menu items
          menuItems.forEach(menuItem => menuItem.classList.remove('active'));
          
          // Add 'active' class to the clicked item
          item.classList.add('active');
      });
  });
});












