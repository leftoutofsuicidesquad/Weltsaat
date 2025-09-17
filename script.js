// Noch leer – später für Interaktivität (z.B. Animationen, Menüs, Formulare)
console.log("Weltsaat e.V. Nichts wächst besser als Nächstenliebe.");


// Slideshow für Weltsaat e.V.

// Array mit Bildern – hier anpassen!
const slideshowImages = [
  "https://www.weltsaat.de/bilder/1.jpg",
  "https://www.weltsaat.de/bilder/2.jpg",
  "https://www.weltsaat.de/bilder/3.jpg",
  "https://www.weltsaat.de/bilder/4.jpg",
  "https://www.weltsaat.de/bilder/5.jpg",
  "https://www.weltsaat.de/bilder/6.jpg",
  "https://www.weltsaat.de/bilder/7.jpg",
  "https://www.weltsaat.de/bilder/8.jpg",
  "https://www.weltsaat.de/bilder/9.jpg",
  "https://www.weltsaat.de/bilder/10.jpg",
  "https://www.weltsaat.de/bilder/11.jpg",
  "https://www.weltsaat.de/bilder/12.jpg",
  "https://www.weltsaat.de/bilder/13.jpg",
  "https://www.weltsaat.de/bilder/14.jpg",
  "https://www.weltsaat.de/bilder/15.jpg",
  "https://www.weltsaat.de/bilder/16.jpg",
  "https://www.weltsaat.de/bilder/17.jpg",
  "https://www.weltsaat.de/bilder/18.jpg",
  "https://www.weltsaat.de/bilder/19.jpg",
  "https://www.weltsaat.de/bilder/20.jpg",
  "https://www.weltsaat.de/bilder/21.jpg",
  "https://www.weltsaat.de/bilder/22.jpg"
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
