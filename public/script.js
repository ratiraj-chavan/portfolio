document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    // Add cursor effects on hover
    const hoverElements = document.querySelectorAll('a, button, .project-card, .contact-item, .social-links a');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(124, 58, 237, 0.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'var(--accent-color)';
        });
    });
    
    // Mobile navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('active');
        // Burger animation
        burger.classList.toggle('active');
    });
    
    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });
    
    // Scroll animations
    const animatedElements = document.querySelectorAll('.animated-text');
    
    const animateOnScroll = () => {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Animate skill bars
const skillBars = document.querySelectorAll('.bar-fill');

// Animate skill bars on scroll
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        const elementPosition = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            // Animate fill when in view
            bar.style.width = width;
        } else {
            // Reset width when out of view
            bar.style.width = '0';
        }
    });
};

// Run on scroll and on page load
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
  
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = 'none';
        }
    });
});

// Create floating circles background
function createFloatingCircles() {
    const circlesContainer = document.createElement('div');
    circlesContainer.className = 'bg-floating-circles';
    document.body.prepend(circlesContainer);

    // Number of circles
    const circleCount = 20;

    for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        circle.className = 'floating-circle';
        
        // Random size between 5px and 30px
        const size = Math.random() * 25 + 5;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        
        // Random position
        circle.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration between 10s and 20s
        circle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        // Random delay
        circle.style.animationDelay = `${Math.random() * 5}s`;
        
        circlesContainer.appendChild(circle);
    }
}

createFloatingCircles();