
document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your response, I will get back to you soon!';
        thankYouMessage.style.color = 'green';

       
        contactForm.reset();

       
        const contactSection = document.querySelector('#contact');
        contactSection.appendChild(thankYouMessage);
    });
});
