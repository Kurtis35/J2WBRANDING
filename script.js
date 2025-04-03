// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Initialize Swiper for Customers carousel
const customerSwiper = new Swiper('.customers .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    centerSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

// Initialize Swiper for Services carousel
const servicesSwiper = new Swiper('.services-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dropdown Toggle for Mobile
document.querySelectorAll('.dropdown-toggle').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 767) {
            e.preventDefault();
            const parent = dropdown.parentElement;
            parent.classList.toggle('active');
        }
    });
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
document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        if (window.innerWidth <= 767) {
            navLinks.classList.remove('active'); // Close menu on mobile after click
        }
    });
});
