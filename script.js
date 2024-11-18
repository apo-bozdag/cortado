document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
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

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 50) {
            // Scroll down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.location-card, .menu-category, .about-content');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate-fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const formData = new FormData(this);
            let isValid = true;
            
            formData.forEach((value, key) => {
                if (!value.trim()) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                alert('Lütfen tüm alanları doldurunuz.');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Mesajınız başarıyla gönderildi! Size en kısa sürede dönüş yapacağız.');
            this.reset();
        });
    }

    // Menu items animation
    const menuItems = document.querySelectorAll('.menu-category');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.02)';
            item.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
