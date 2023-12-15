let slideIndex = 0;
let slides = document.getElementsByClassName("slideDiv");
let dots = document.getElementsByClassName("slideStick");
let timer = null;
const TIME = 10000;

// Wait for all resources to be loaded, including images
window.onload = function () {
    showSlides();
};

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    dots[slideIndex].classList.add("active");
    slideIndex++;
    timer = setTimeout(showSlides, TIME);
}

function currentSlide(n) {
    clearTimeout(timer);
    slideIndex = n - 1;
    showSlides();
}

