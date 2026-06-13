// Load testimonials
function loadTestimonials() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('testimonials-container');
            data.testimonials.forEach(testimonial => {
                const card = document.createElement('div');
                card.className = 'testimonial-card';
                card.innerHTML = `
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <p class="testimonial-author">${testimonial.author}</p>
                    <p class="testimonial-role">${testimonial.role}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading testimonials:', error));
}

// Load FAQ
function loadFAQ() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('faq-container');
            data.faq.forEach((item, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.innerHTML = `
                    <div class="faq-question" onclick="toggleFAQ(${index})">
                        ${item.question}
                    </div>
                    <div class="faq-answer">
                        <p>${item.answer}</p>
                    </div>
                `;
                container.appendChild(faqItem);
            });
        })
        .catch(error => console.error('Error loading FAQ:', error));
}

// Toggle FAQ
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems[index].classList.toggle('active');
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTestimonials();
    loadFAQ();
});
