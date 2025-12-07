// Global utilities and shared functionality

// Counter animation for hero stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Initialize counters when element comes into view
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Ripple effect for buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Initialize ripple buttons
function initRippleButtons() {
    const rippleButtons = document.querySelectorAll('.ripple-btn');
    rippleButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

// Confetti effect
function createConfetti() {
    const colors = ['#00A896', '#028090', '#05668D', '#02C39A', '#F0F3BD'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Initialize booking modal
function initBookingModal() {
    const bookingTriggers = document.querySelectorAll('[data-booking-trigger]');
    const bookingModal = document.getElementById('booking-modal');
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    
    bookingTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            bookingModal?.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            bookingModal?.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal on outside click
    bookingModal?.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

// Quote calculator
function calculateQuote(symptoms) {
    const basePrice = 79;
    let additionalCost = 0;
    
    symptoms.forEach(symptom => {
        switch(symptom) {
            case 'leak':
                additionalCost += 50;
                break;
            case 'clog':
                additionalCost += 30;
                break;
            case 'low-pressure':
                additionalCost += 40;
                break;
            case 'no-water':
                additionalCost += 60;
                break;
        }
    });
    
    return basePrice + additionalCost;
}
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCounters();
    initRippleButtons();
    initBookingModal();
    
    // Add emergency badge pulse
    const emergencyBadges = document.querySelectorAll('.emergency-badge');
    emergencyBadges.forEach(badge => {
        badge.classList.add('pulse-emergency');
    });
    
    // Service selection functionality
    const serviceCards = document.querySelectorAll('[data-service]');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            const quote = calculateQuote([service]);
            
            // Update quote display
            const quoteDisplay = document.getElementById('quote-display');
    if (quoteDisplay) {
        quoteDisplay.textContent = `R${quote}`;
    }
        });
    });
    
    // Update phone numbers for South Africa
    const phoneNumbers = document.querySelectorAll('a[href^="tel:"]');
    phoneNumbers.forEach(phone => {
        if (phone.getAttribute('href') === 'tel:+27215678901') {
            phone.setAttribute('href', 'tel:+27215678901');
    }
    });
});
// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
});
