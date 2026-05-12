
// ===== GIRAN — LUXURY STREETWEAR JS =====

document.addEventListener('DOMContentLoaded', function() {

    // ===== NAVBAR SCROLL =====
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // ===== MOBILE MENU =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ===== SCROLL ANIMATIONS =====
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animateElements.forEach(el => observer.observe(el));

    // ===== FAQ ACCORDION =====
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(other => other.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        }
    });

    // ===== SHOWCASE CAROUSEL =====
    const slides = document.querySelectorAll('.showcase-slide');
    const dots = document.querySelectorAll('.showcase-dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto-advance showcase
    if (slides.length > 0) {
        setInterval(() => {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }, 6000);
    }

    // ===== PRODUCT CARD HOVER =====
    const productCards = document.querySelectorAll('.product-card, .product-card-shop');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // ===== FORM SUBMISSION =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'SENT ✓';
            btn.style.background = 'var(--giran-forest)';
            btn.style.color = 'var(--giran-offwhite)';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.color = '';
                form.reset();
            }, 2500);
        });
    });

    // ===== SIZE BUTTONS =====
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ===== PARALLAX HERO =====
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.25}px)`;
                heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
            }
        });
    }

    // ===== CREST FLOAT ANIMATION =====
    const crest = document.querySelector('.hero-crest');
    if (crest) {
        let angle = 0;
        function floatCrest() {
            angle += 0.02;
            const y = Math.sin(angle) * 8;
            crest.style.transform = `translateY(${y}px)`;
            requestAnimationFrame(floatCrest);
        }
        floatCrest();
    }

    // ===== MOUSE GLOW EFFECT =====
    document.addEventListener('mousemove', function(e) {
        const orb = document.querySelector('.hero-orb');
        if (orb) {
            const x = (e.clientX / window.innerWidth) * 20;
            const y = (e.clientY / window.innerHeight) * 20;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    console.log('⚔ GIRAN Luxury Streetwear loaded. Stubborn Heritage.');
});
