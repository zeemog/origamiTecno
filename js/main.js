// --- js/main.js ---
document.addEventListener('DOMContentLoaded', () => {

    // Generate Origami Background Shapes
    const bg = document.getElementById('hero-bg');
    if (bg) {
        for (let i = 0; i < 18; i++) {
            const shape = document.createElement('div');
            shape.className = 'origami-shape';
            const size = Math.random() * 300 + 150;
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.left = Math.random() * 100 + '%';
            shape.style.animationDelay = Math.random() * 12 + 's';
            shape.style.animationDuration = (Math.random() * 25 + 25) + 's';

            // Random polygon variants
            const points = [
                '50% 0%, 100% 50%, 50% 100%, 0% 50%',
                '0% 0%, 100% 20%, 80% 100%, 20% 80%',
                '50% 0%, 100% 100%, 0% 100%',
                '25% 0%, 100% 50%, 25% 100%, 0% 50%'
            ];
            shape.style.clipPath = 'polygon(' + points[Math.floor(Math.random() * points.length)] + ')';

            bg.appendChild(shape);
        }
    }

    // Scroll Reveal Activation Script
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Trigger on load

    // Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Basic animation or user feedback
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Enviando...';
            btn.style.opacity = '0.8';

            setTimeout(() => {
                alert('¡Consulta enviada con éxito! Te contactaremos a la brevedad.');
                this.reset();
                btn.textContent = originalText;
                btn.style.opacity = '1';
            }, 1000);
        });
    }

});
