const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky",window.scrollY > 100);
});
// Check if the page is loaded and ready
window.addEventListener('load', function() {
    // Function to handle the adaptation
    function mobileAdaptation() {
      // Check the screen width
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
      // Add or remove classes based on screen width
      if (screenWidth < 768) {
        // Mobile adaptation
        // Add classes or apply styles to elements specific to mobile devices
        // For example, you can add a class to a navigation menu to make it mobile-friendly
        document.getElementById('navigation').classList.add('mobile-menu');
      } else {
        // Desktop adaptation
        // Remove classes or revert styles applied to elements specific to mobile devices
        document.getElementById('navigation').classList.remove('mobile-menu');
      }
    }
  
    // Call the function on page load
    mobileAdaptation();
  
    // Call the function whenever the screen is resized
    window.addEventListener('resize', mobileAdaptation);
  });
  