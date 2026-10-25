// =============================
//  Weltsaat e.V. – Hauptskript
//  Enthält: Theme-Wechsel, Slideshow
// =============================

document.addEventListener('DOMContentLoaded', function() {
  // === Theme-Wechsel-Logik ===
  const themeToggle = document.getElementById('theme-toggle');
  const lightIcon = document.querySelector('.light-icon');
  const darkIcon = document.querySelector('.dark-icon');

  // Beim Laden prüfen, ob ein Theme im localStorage gespeichert ist
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Theme wechseln
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);

      // Aktualisiere aria-label
      themeToggle.setAttribute('aria-label',
        newTheme === 'dark' ? 'Lichttheme aktivieren' : 'Dunkles Theme aktivieren');
    });
  }

  // Icon je nach Theme aktualisieren
  function updateThemeIcon(theme) {
    if (lightIcon && darkIcon) {
      if (theme === 'dark') {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
      } else {
        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
      }
    }
  }

  // Auf Änderungen des System-Farbthemas reagieren
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      updateThemeIcon(newTheme);
    }
  });

  // === Scroll-to-Top Button ===
  const scrollTopBtn = document.querySelector('.scroll-to-top');

  if (scrollTopBtn) {
    function toggleScrollTop() {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', toggleScrollTop);

    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Check initial position
    toggleScrollTop();
  }

  // === Slideshow ===
  initSlideshow();
});

/**
 * Slideshow initialisieren
 * Wird nur ausgeführt, wenn die benötigten DOM-Elemente vorhanden sind
 */
function initSlideshow() {
  const slideshowContainer = document.querySelector('.slideshow-container');

  // Slideshow nur initialisieren, wenn der Container auf der Seite existiert
  if (!slideshowContainer) {
    return;
  }

  // Array mit Bild-URLs – lokale Pfade
  const slideshowImages = [
    "bilder/1.jpg",
    "bilder/2.jpg",
    "bilder/3.jpg",
    "bilder/4.jpg",
    "bilder/5.jpg",
    "bilder/6.jpg",
    "bilder/7.jpg",
    "bilder/8.jpg",
    "bilder/9.jpg",
    "bilder/10.jpg",
    "bilder/11.jpg",
    "bilder/12.jpg",
    "bilder/13.jpg",
    "bilder/14.jpg",
    "bilder/15.jpg",
    "bilder/16.jpg",
    "bilder/17.jpg",
    "bilder/18.jpg",
    "bilder/19.jpg",
    "bilder/20.jpg",
    "bilder/21.jpg",
    "bilder/22.jpg"
  ];

  let currentIndex = 0;
  let img1 = document.getElementById('slideshow-image1');
  let img2 = document.getElementById('slideshow-image2');

  // Prüfen, ob die Bild-Elemente existieren
  if (!img1 || !img2) {
    console.warn('Slideshow: Bild-Container nicht gefunden');
    return;
  }

  let showingImg1 = true;

  // Erstes Bild setzen
  if (slideshowImages.length > 0) {
    img1.src = slideshowImages[currentIndex];
  }

  function changeImage() {
    currentIndex = (currentIndex + 1) % slideshowImages.length;

    if (showingImg1) {
      img2.src = slideshowImages[currentIndex];
      img2.classList.add('active');
      img1.classList.remove('active');
    } else {
      img1.src = slideshowImages[currentIndex];
      img1.classList.add('active');
      img2.classList.remove('active');
    }

    showingImg1 = !showingImg1;
  }

  // Alle 4 Sekunden Bild wechseln
  const intervalId = setInterval(changeImage, 4000);

  console.log('Weltsaat e.V. – Slideshow läuft');
}

console.log('Weltsaat e.V. – Skript geladen');
