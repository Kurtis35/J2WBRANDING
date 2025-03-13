// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Initialize Swiper for Customers carousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
    centerSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 1,
        }
    }
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us. We have received your message and will respond to you soon.');
    this.reset();
});

// Show/Hide Back to Top button
window.addEventListener('scroll', function() {
    const gotoTop = document.getElementById('gotoTop');
    if (window.scrollY > 300) {
        gotoTop.style.display = 'block';
    } else {
        gotoTop.style.display = 'none';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('.page-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});
