let slideIndex = 1;
let slideInterval;
let slideshowContainer = document.querySelector('.slideshow-container');

showSlides(slideIndex);
startSlideShow();

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetInterval();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetInterval();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (!slides || slides.length === 0) return;
  
  if (n > slides.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = slides.length;}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("fade");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  // Trick: force DOM reflow to restart fade animation correctly
  void slides[slideIndex-1].offsetWidth;
  slides[slideIndex-1].classList.add("fade");
  
  if (dots.length > 0) {
    dots[slideIndex-1].className += " active";
  }
}

function startSlideShow() {
  slideInterval = setInterval(() => { plusSlides(1); }, 5500);
}

function resetInterval() {
  clearInterval(slideInterval);
  startSlideShow();
}

// Pausa el auto-slider si el usuario tiene el mouse encima
if (slideshowContainer) {
  slideshowContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  slideshowContainer.addEventListener('mouseleave', () => {
    startSlideShow();
  });
}