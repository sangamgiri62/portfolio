 
        AOS.init({ duration: 800, once: true, offset: 50 });
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = themeToggleBtn.querySelector('i');
        const applyTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            themeIcon.classList.toggle('bi-sun-fill', theme === 'dark');
            themeIcon.classList.toggle('bi-moon-stars-fill', theme === 'light');
        };
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);
        const navbar = document.querySelector('.navbar');
        const scrollTopBtn = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
            scrollTopBtn.classList.toggle('show', window.scrollY > 300);
        });
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        document.getElementById('copyright-year').textContent = new Date().getFullYear();
        const navLinks = document.querySelectorAll('.nav-link');
        const menuToggle = document.getElementById('navMenu');
        if (menuToggle) {
            const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
            navLinks.forEach((link) => {
                link.addEventListener('click', () => {
                    if (menuToggle.classList.contains('show')) {
                        bsCollapse.toggle();
                    }
                });
            });
        }
