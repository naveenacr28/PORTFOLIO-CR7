// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));

// Back-to-top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) toTop.classList.add('show');
    else toTop.classList.remove('show');
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form stub (replace with your endpoint if needed)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending...';
    try {
        // Replace with a real endpoint (Apps Script/Formspree/Flask)
        await new Promise(r => setTimeout(r, 800));
        form.reset();
        statusEl.textContent = 'Thanks! Your message is sent.';
    } catch (err) {
        statusEl.textContent = 'Oops, failed to send. Try again.';
    }
});
