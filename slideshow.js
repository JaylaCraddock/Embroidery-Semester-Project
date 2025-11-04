
// Section for slideshow to function

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("embroidery_slideshow");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (slides.length > 0) {
            slides[slideIndex - 1].style.display = "block";
        }

        if (dots.length > 0) {
            dots[slideIndex - 1].className += " active";
        }
    }

    // Making the buttons function
    const prevBtn = document.getElementById("prevButton");
    const nextBtn = document.getElementById("nextButton");

    if (prevBtn) prevBtn.addEventListener("click", () => plusSlides(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => plusSlides(1));

    //Making dots function 
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            const slideNum = parseInt(this.getAttribute("data-slide"), 10);
            currentSlide(slideNum);
        });
    });
});