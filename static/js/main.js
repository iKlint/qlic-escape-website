// Qlic Escape Limited - Main JavaScript

window.onbeforeunload = () => window.scrollTo(0, 0);
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Auto-hide flash messages after 5 seconds
    const flashMessages = document.querySelectorAll('.alert');
    flashMessages.forEach(message => {
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transform = 'translateX(100%)';
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 5000);
    });

    // Form validation enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    field.style.borderColor = '#e2e8f0';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });


    // // Better form submission handling
    // document.addEventListener('DOMContentLoaded', function() {
    //     const forms = document.querySelectorAll('form');
    //     forms.forEach(form => {
    //         form.addEventListener('submit', function(e) {
    //             const submitBtn = form.querySelector('button[type="submit"]');
    //             if (submitBtn) {
    //                 submitBtn.textContent = 'Sending...';
    //                 submitBtn.disabled = true;
    //             }
    //         });
    //     });
    // });
    // Better form submission handling
    const submitForms = document.querySelectorAll('form');  // RENAMED
    submitForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }
        });
    });

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }

    // Mobile CTA tap effect
    const mobileCta = document.querySelector('.mobile-cta-btn');
    if (mobileCta) {
        mobileCta.addEventListener('touchstart', function() {
            this.style.background = 'linear-gradient(135deg, #f4a81f, #f7b547)';
            this.style.color = '#162938';
        });
        mobileCta.addEventListener('touchend', function() {
            const url = this.href;
            setTimeout(() => { window.location.href = url; }, 300);
        });
        mobileCta.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }
    
    // Mobile nav links tap effect
    const navLinks = document.querySelectorAll('.nav-menu a:not(.mobile-cta-btn)');
    navLinks.forEach(link => {
        link.addEventListener('touchstart', function() {
            this.style.color = 'var(--qlic-gold)';
            this.style.paddingLeft = '2rem';
            this.style.transition = 'all 0.15s ease';
        });
        link.addEventListener('touchend', function() {
            const url = this.href;
            setTimeout(() => { window.location.href = url; }, 200);
        });
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });


    // Mobile dropdowns - accordion behaviour
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const thisDropdown = this.closest('.dropdown');
            const isOpen = thisDropdown.classList.contains('open');

            // Close ALL dropdowns first
            document.querySelectorAll('.dropdown').forEach(d => {
                d.classList.remove('open');
            });

            // If it wasn't open, open it
            if (!isOpen) {
                thisDropdown.classList.add('open');
            }
        });
    });

    // What We Do tabs
    const wwdTabs = document.querySelectorAll('.wwd-tab');
    const wwdPanels = document.querySelectorAll('.wwd-panel');

    wwdTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            wwdTabs.forEach(t => t.classList.remove('active'));
            wwdPanels.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('tab-' + this.dataset.tab).classList.add('active');
        });
    });

    // Testimonials
    const testimonials = [
        {
            name: 'James Okafor',
            text: 'Qlic Escape made my UK study visa process completely seamless. From the initial consultation to receiving my visa, every step was handled professionally. I could not have done it without them.',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
        },
        {
            name: 'Sarah Mitchell',
            text: 'I relocated to Canada with my family and Qlic Escape handled everything. The relocation planning service is outstanding — they thought of things we never would have considered.',
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
        },
        {
            name: 'Michael Adeyemi',
            text: 'After two failed visa attempts on my own, Qlic Escape got my US visa approved in one go. Their knowledge of the process is exceptional and the support throughout was brilliant.',
            photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
        },
        {
            name: 'Amina Hassan',
            text: 'The holiday package to Europe was absolutely perfect. Every detail was taken care of — flights, hotels, transfers. Pure luxury from start to finish. Highly recommend Qlic Escape.',
            photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
        }
    ];

    let currentTestimonial = 0;

    function showTestimonial(index) {
        const t = testimonials[index];
        document.getElementById('active-photo').src = t.photo;
        document.getElementById('active-name').textContent = t.name;
        document.getElementById('active-text').innerHTML = '<em>' + t.text + '</em>';
        document.querySelectorAll('.thumb').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
        currentTestimonial = index;
    }

    document.querySelectorAll('.thumb').forEach(thumb => {
        thumb.addEventListener('click', function() {
            showTestimonial(parseInt(this.dataset.index));
        });
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        const next = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(next);
    }, 5000);

    // Destinations carousel
    // Destinations carousel
    const carousel = document.getElementById('destinations-carousel');
    if (carousel) {
        // Duplicate cards for seamless looping
        const originalCards = carousel.innerHTML;
        carousel.innerHTML = originalCards + originalCards;

        const cards = carousel.querySelectorAll('.destination-card');
        let current = 0;
        let isSliding = false;

        function getCardWidth() {
            return cards[0].getBoundingClientRect().width + 16;
        }
        

        function slideNext() {
            if (isSliding) return;
            isSliding = true;
            current++;
            carousel.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            carousel.style.transform = `translateX(-${current * getCardWidth()}px)`;

            // When we reach halfway (the duplicates), silently reset to start
            setTimeout(() => {
                if (current >= cards.length / 2) {
                    carousel.style.transition = 'none';
                    carousel.style.transform = 'translateX(0)';
                    current = 0;
                }
                isSliding = false;
            }, 900);
        }

        setInterval(slideNext, 5000);
    }
            
    console.log('Qlic Escape Limited website loaded successfully!');
});
