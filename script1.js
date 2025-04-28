// Typing animation for .multipe-text
const typed = new Typed('.multipe-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .testimonial-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

function fadeInPage() {
    document.body.style.opacity = 0;
    let opacity = 0;
    const intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.02;
            document.body.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 20);
}
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showNextTestimonial() {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}

setInterval(showNextTestimonial, 4000);

// Initial setup
testimonials.forEach((item, i) => {
    item.style.display = i === 0 ? 'block' : 'none';
});
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.home');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;

        setTimeout(() => ripple.remove(), 600);
    });
});

// Loader fade out
function fadeInPage() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        document.body.style.opacity = 1;
    }, 2000); // Show loader for 2 seconds
}

// Dark Mode Toggle
const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// Scroll To Top Button
const scrollTop = document.getElementById('scroll-top');

window.onscroll = () => {
    if (window.scrollY > 300) {
        scrollTop.style.display = 'flex';
    } else {
        scrollTop.style.display = 'none';
    }
};
