const carousel = document.querySelector('.carousel');
let currentSlide = 1;
const totalSlides = 3; 

setInterval(() => {
  currentSlide++;
  if (currentSlide > totalSlides) currentSlide = 1;

  const element = document.getElementById(`item${currentSlide}`);
  if (element) {
    // Calcoliamo la posizione dell'elemento rispetto al contenitore
    const scrollOffset = element.offsetLeft;
    
    // Muoviamo solo il carousel, non la pagina
    carousel.scrollTo({
      left: scrollOffset,
      behavior: 'smooth'
    });
  }
}, 3000);