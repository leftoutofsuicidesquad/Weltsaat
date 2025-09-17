// Noch leer – später für Interaktivität (z.B. Animationen, Menüs, Formulare)
console.log("Weltsaat e.V. Nichts wächst besser als Nächstenliebe.");


// Slideshow für Weltsaat e.V.

// Array mit Bildern – hier anpassen!
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
let img1 = document.getElementById("slideshow-image1");
let img2 = document.getElementById("slideshow-image2");
let showingImg1 = true;

// Erstes Bild setzen
img1.src = slideshowImages[currentIndex];

function changeImage() {
  currentIndex = (currentIndex + 1) % slideshowImages.length;

  if (showingImg1) {
    img2.src = slideshowImages[currentIndex];
    img2.classList.add("active");
    img1.classList.remove("active");
  } else {
    img1.src = slideshowImages[currentIndex];
    img1.classList.add("active");
    img2.classList.remove("active");
  }

  showingImg1 = !showingImg1;
}

// alle 4 Sekunden Bild wechseln
setInterval(changeImage, 4000);

console.log("Weltsaat e.V. – Slideshow läuft");
