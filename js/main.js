// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Mobile Menu Toggle (Basic implementation)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            // A simple toggle implementation - in a real scenario you'd want to add an 'active' class
            // and animate it, but this serves as the foundational JS.
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'var(--bg-dark)';
                navLinks.style.padding = '1rem';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

    // FAQ Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            
            // Toggle active class on current item
            const isActive = accordionItem.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // If it wasn't active, open it
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });

    // Optional: Add intersection observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to cards and sections if we add animation classes in CSS later
    document.querySelectorAll('.feature-card, .step-card, .receive-card').forEach(el => {
        // observer.observe(el); // Uncomment when ready to use scroll animations
    });
    // Slide-out Contact Form Logic
    const trialButtons = document.querySelectorAll('.trial-btn');
    const contactSlider = document.getElementById('contactSlider');
    const sliderOverlay = document.getElementById('contactSliderOverlay');
    const closeSliderBtn = document.getElementById('closeSliderBtn');

    if (contactSlider && sliderOverlay) {
        // Open slider
        trialButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                contactSlider.classList.add('active');
                sliderOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        // Close slider function
        const closeSlider = () => {
            contactSlider.classList.remove('active');
            sliderOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        };

        // Close when clicking X or overlay
        if (closeSliderBtn) closeSliderBtn.addEventListener('click', closeSlider);
        sliderOverlay.addEventListener('click', closeSlider);
    }
});
