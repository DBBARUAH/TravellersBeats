let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
  document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(showNextSlide, 8000);
