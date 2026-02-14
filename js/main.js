/* ================================
   MAIN JS FILE (Improved Version)
================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ================================
       1. Current Year
    ================================ */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ================================
       2. Active Navigation Link
    ================================ */
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');

    menuItems.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    /* ================================
       3. Mobile Menu Toggle (Clean Version)
    ================================ */
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    /* ================================
       4. Portfolio Filtering
    ================================ */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {

                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.classList.contains(filterValue)) {
                        card.classList.remove('hide');
                        card.classList.add('show');
                    } else {
                        card.classList.remove('show');
                        card.classList.add('hide');
                    }
                });
            });
        });
    }

    /* ================================
       5. Statistics Counter Animation
    ================================ */
    const counters = document.querySelectorAll('.follower-count');

    if (counters.length > 0) {
        counters.forEach(counter => {

            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = 200;
            const increment = target / speed;

            const animate = () => {
                count += increment;

                if (count < target) {
                    counter.innerText = target >= 1000
                        ? Math.ceil(count / 1000) + 'k'
                        : Math.ceil(count);
                    setTimeout(animate, 20);
                } else {
                    counter.innerText = target >= 1000
                        ? (target / 1000) + 'k'
                        : target;
                }
            };

            animate();
        });
    }

    /* ================================
       6. Skill Bar Animation
    ================================ */
    const skillProgress = document.querySelectorAll('.skill-progress');

    if (skillProgress.length > 0) {
        skillProgress.forEach(bar => {

            const targetWidth = bar.style.width;
            bar.style.width = '0';

            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 500);
        });
    }

    /* ================================
       7. Scroll Reveal Animation
    ================================ */
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

});
