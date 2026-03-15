document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-list a');
    // Open Sidebar
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }
    // Close Sidebar
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }
    // Close when clicking outside the sidebar (optional)
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
    // Close sidebar when clicking a link inside it
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });

    // --- DARK/LIGHT MODE TOGGLE ---
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const htmlElement = document.documentElement;
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio-theme', newTheme);
            updateIcons(newTheme);
        });
    });
    // Helper function to swap sun/moon icons
    function updateIcons(theme) {
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (icon) {
                if (theme === 'light') {
                    icon.classList.remove('ph-moon', 'ph-fill');
                    icon.classList.add('ph-sun', 'ph-fill');
                } else {
                    // Change to Moon icon for dark mode
                    icon.classList.remove('ph-sun', 'ph-fill');
                    icon.classList.add('ph-moon', 'ph-fill');
                }
            }
        });
    }

    // --- SCROLL ANIMATIONS ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);
    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach(el => observer.observe(el));
});