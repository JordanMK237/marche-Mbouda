document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const carouselContainer = document.querySelector('.carousel-container');
    const dots = document.querySelectorAll('.dot');

    // Ajuste la largeur totale du carrousel pour inclure toutes les images
    carouselContainer.style.width = `${100 * totalSlides}%`;

    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.getElementById("menu-toggle");
        const navMenu = document.getElementById("nav-menu");

        function toggleMenu() {
            navMenu.classList.toggle("active");
        }

        if (menuToggle && navMenu) {
            menuToggle.addEventListener("click", toggleMenu);

            // Fermer le menu si on clique ailleurs
            document.addEventListener("click", function (event) {
                if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                    navMenu.classList.remove("active");
                }
            });
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const backToTopButton = document.querySelector(".back-to-top");

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        if (backToTopButton) {
            backToTopButton.addEventListener("click", scrollToTop);
        }
    });

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0; // Revenir à la première image
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Aller à la dernière image
        } else {
            currentIndex = index;
        }

        // Déplacement fluide du carrousel
        carouselContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

        // Mise à jour des indicateurs (dots)
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function toggleMenu() {
        let menu = document.querySelector(".nav-menu");
        menu.classList.toggle("active");
    }


    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Défilement automatique toutes les 5 secondes
    let autoSlide = setInterval(nextSlide, 5000);

    // Gestion des boutons "précédent" et "suivant"
    document.querySelector('.carousel-prev').addEventListener('click', function () {
        clearInterval(autoSlide);
        prevSlide();
        autoSlide = setInterval(nextSlide, 5000);
    });

    document.querySelector('.carousel-next').addEventListener('click', function () {
        clearInterval(autoSlide);
        nextSlide();
        autoSlide = setInterval(nextSlide, 5000);
    });

    // Gestion des indicateurs (dots)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            clearInterval(autoSlide);
            showSlide(index);
            autoSlide = setInterval(nextSlide, 5000);
        });
    });

    // Afficher la première slide au chargement
    showSlide(currentIndex);

    // Fonction de retour en haut de page
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Gestion des boutons "Ajouter au panier"
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const quantity = this.previousElementSibling.value;
            alert(`Ajouté au panier : ${quantity} article(s)`);
        });
    });
});
