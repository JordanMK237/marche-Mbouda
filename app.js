document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    const slideContainer = document.querySelector(".carousel-container");
    const dots = document.querySelectorAll(".dot");

    if (!slideContainer || totalSlides === 0) return; // Arrête si aucun slide n'est trouvé

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        slideContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add("active");
        }
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    let autoSlide = setInterval(nextSlide, 5000);

    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", function () {
            clearInterval(autoSlide);
            prevSlide();
            autoSlide = setInterval(nextSlide, 5000);
        });

        nextButton.addEventListener("click", function () {
            clearInterval(autoSlide);
            nextSlide();
            autoSlide = setInterval(nextSlide, 5000);
        });
    }

    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener("click", function () {
                clearInterval(autoSlide);
                showSlide(index);
                autoSlide = setInterval(nextSlide, 5000);
            });
        });
    }

    showSlide(currentIndex);
});
