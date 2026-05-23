document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Mobile Navigation Menu
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle menu icon animation/state
        const icon = mobileMenu.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // Event Listener for handling download action safely
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', (e) => {
        const fileTarget = downloadBtn.getAttribute('href');
        
        if (fileTarget === '#') {
            e.preventDefault();
            alert('Please update the href link inside index.html to your local file path.');
        } else {
            // Logs to the browser console when the download successfully triggers
            console.log('Download initiated for: ' + fileTarget);
        }
    });
});