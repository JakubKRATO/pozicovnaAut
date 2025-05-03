document.addEventListener('DOMContentLoaded', function() {
    console.log('Navigation script loaded');
    
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-overlay');
    
    function toggleMobileNav() {
        
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        
    }

    hamburger.addEventListener('click', (e) => {
        console.log('Hamburger clicked', e);
        toggleMobileNav();
    });

    overlay.addEventListener('click', (e) => {
        console.log('Overlay clicked', e);
        toggleMobileNav();
    });
}); 