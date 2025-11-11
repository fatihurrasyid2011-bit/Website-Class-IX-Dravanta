// Smooth scrolling for navigation links
document.querySelectorAll('.navbar-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.modern-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Profile card hover effects
document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    });
});

// Intersection Observer for member cards
const memberObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const memberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, memberObserverOptions);

// Observe all member profile cards
document.querySelectorAll('.profile-card.member').forEach(card => {
    memberObserver.observe(card);
});

// Structure item animations
document.querySelectorAll('.structure-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Typing effect for header subtitle
const subtitle = document.querySelector('header h2');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    setTimeout(typeWriter, 1000); // Start after header animation
}

// Floating animation for structure items
document.querySelectorAll('.structure-item').forEach((item, index) => {
    item.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const body = document.body;
    body.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Social sharing functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Kelas I X DRAVANTA - MTsN 1 Malang');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Kelas I X DRAVANTA - MTsN 1 Malang #MTsN1Malang #KelasDravanta');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Kelas I X DRAVANTA - MTsN 1 Malang\n' + window.location.href);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

// Add click effects to profile images
document.querySelectorAll('.profile-image img').forEach(img => {
    img.addEventListener('click', () => {
        img.style.transform = 'scale(1.2) rotate(10deg)';
        setTimeout(() => {
            img.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
});

// Dynamic background color change on scroll
window.addEventListener('scroll', () => {
    const scrollPercent = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
    const hue = (scrollPercent * 3.6) % 360; // 360 degrees for full color wheel
    document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 50%) 0%, hsl(${(hue + 60) % 360}, 70%, 50%) 100%)`;
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add particle effect on click
document.addEventListener('click', (e) => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
});

// Add CSS for particle effect
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        pointer-events: none;
        animation: particleFloat 1s ease-out forwards;
        z-index: 1000;
    }

    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-50px);
        }
    }
`;
document.head.appendChild(style);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const sections = document.querySelectorAll('section');
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
        });
        if (currentSection) {
            const nextSection = currentSection.nextElementSibling;
            if (nextSection && nextSection.tagName === 'SECTION') {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = document.querySelectorAll('section');
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
        });
        if (currentSection) {
            const prevSection = currentSection.previousElementSibling;
            if (prevSection && prevSection.tagName === 'SECTION') {
                prevSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
});
