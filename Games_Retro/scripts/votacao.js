let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;

showSlides(slideIndex1, 'carousel1');
showSlides(slideIndex2, 'carousel2');
showSlides(slideIndex3, 'carousel3');

function currentSlide(n, carousel) {
    if (carousel === 'carousel1') {
        showSlides(slideIndex1 = n, 'carousel1');
    } else if (carousel === 'carousel2') {
        showSlides(slideIndex2 = n, 'carousel2');
    } else if (carousel === 'carousel3') {
        showSlides(slideIndex3 = n, 'carousel3');
    }
}

function showSlides(n, carousel) {
    let i;
    let slides = document.querySelectorAll('.' + carousel + ' .mySlides');
    let thumbnails = document.querySelectorAll('.' + carousel + ' .thumbnail img');
    if (n > slides.length) { n = 1 }
    if (n < 1) { n = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active");
    }
    slides[n - 1].style.display = "block";
    thumbnails[n - 1].classList.add("active");
}

