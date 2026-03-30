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
    }, 3000); // 3 seconds delay

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

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Logic for mobile toggle could go here
            console.log('Menu Toggled');
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

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
