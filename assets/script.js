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
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// AJAX Contact form (Formspree integration)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    statusEl.textContent = 'Sending...';

    const data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset();
            statusEl.textContent = "Thanks! Your message was sent.";
        } else {
            response.json().then(data => {
                statusEl.textContent = data.error || "Oops! There was a problem submitting your form";
            });
        }
    }).catch(() => {
        statusEl.textContent = "Oops! There was a problem submitting your form";
    });
});
