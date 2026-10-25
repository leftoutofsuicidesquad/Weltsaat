// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.overlay');

  // Only initialize if elements exist (for mobile nav)
  if (navToggle && navMenu) {
    const toggleNav = function() {
      const isOpen = navMenu.classList.contains('show');
      navMenu.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', !isOpen);
      if (overlay) {
        overlay.classList.toggle('show');
      }
    };

    navToggle.addEventListener('click', toggleNav);

    // Close menu when clicking overlay
    if (overlay) {
      overlay.addEventListener('click', function() {
        navMenu.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
        overlay.classList.remove('show');
      });
    }

    // Handle dropdowns on mobile
    const dropdowns = document.querySelectorAll('.nav-dropdown > .nav-link');
    dropdowns.forEach(function(link) {
      link.addEventListener('click', function(e) {
        // Only for mobile
        if (window.innerWidth <= 992) {
          e.preventDefault();
          const dropdown = this.parentElement;
          const dropdownContent = dropdown.querySelector('.dropdown-content');
          if (dropdownContent) {
            dropdownContent.classList.toggle('show');
          }
        }
      });
    });

    // Close menu on resize if going to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 992) {
        navMenu.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
        if (overlay) {
          overlay.classList.remove('show');
        }
        // Reset dropdowns
        const openDropdowns = document.querySelectorAll('.dropdown-content.show');
        openDropdowns.forEach(function(dd) {
          dd.classList.remove('show');
        });
      }
    });
  }
});
