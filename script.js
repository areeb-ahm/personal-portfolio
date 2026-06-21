const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

const navLinkElements = document.querySelectorAll('.nav-link');

navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

const sections = document.querySelectorAll('section');
const navLinksWithHash = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener('scroll', () => {
    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY + 200 >= sectionTop && window.scrollY + 200 < sectionTop + sectionHeight) {
            currentSection = section.id;
        }
    });

    navLinksWithHash.forEach(link => {
        link.classList.remove('active');
    });

    if (currentSection) {
        const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const formSubmit = document.getElementById('form-submit');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all fields.';
        formStatus.className = 'form-status error';
        return;
    }

    formSubmit.disabled = true;
    formSubmit.textContent = 'Sending...';

    try {
        const response = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            formStatus.textContent = "Thanks for reaching out! I'll get back to you soon.";
            formStatus.className = 'form-status success';
            contactForm.reset();
        } else {
            formStatus.textContent = 'Something went wrong. Please email me directly at areebahmed.one@gmail.com';
            formStatus.className = 'form-status error';
        }
    } catch (error) {
        formStatus.textContent = 'Something went wrong. Please email me directly at areebahmed.one@gmail.com';
        formStatus.className = 'form-status error';
    } finally {
        formSubmit.disabled = false;
        formSubmit.textContent = 'Send Message';
    }
});

document.getElementById('footer-year').textContent = new Date().getFullYear();

function observeElements(selector, options = {}) {
    const elements = document.querySelectorAll(selector);
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    };
    const mergedOptions = { ...defaultOptions, ...options };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, mergedOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
}

observeElements('.project-card');
observeElements('.skill-category');
observeElements('.timeline-item');
observeElements('.achievement-card');
observeElements('.education-item');
observeElements('.contact-item');
observeElements('.about-text p');
observeElements('.section-header');
