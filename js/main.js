document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const scrollThreshold = 50;
    const welcomePopup = document.getElementById('welcome-popup');
    const closePopup = document.getElementById('close-popup');

    // Sticky Header effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Welcome Popup Logic
    setTimeout(() => {
        if (welcomePopup) {
            welcomePopup.classList.add('active');
        }
    }, 5000); // 5 seconds delay

    if (closePopup) {
        closePopup.addEventListener('click', () => {
            welcomePopup.classList.remove('active');
        });
    }

    // Close popup on outside click
    window.addEventListener('click', (e) => {
        if (e.target === welcomePopup) {
            welcomePopup.classList.remove('active');
        }
    });

    // Mobile Menu Toggle (Simplified for now)
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Reservation Form Submission
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                guests: document.getElementById('guests').value
            };
            
            console.log('Reserva Gazuza capturada:', formData);
            alert('¡Gracias por tu reserva, ' + formData.name + '! Nos pondremos en contacto contigo al número ' + formData.phone + ' para confirmar.');
            reservationForm.reset();
        });
    }

    // Mobile Bottom Nav Active State
    const bottomNavItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        bottomNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    bottomNavItems.forEach(item => {
        item.addEventListener('click', () => {
            bottomNavItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
