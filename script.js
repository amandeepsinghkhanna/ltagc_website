// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Accordion functionality
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const icon = header.querySelector('.accordion-icon');
    header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Optional: close all other accordions
        // accordionItems.forEach(i => {
        //    i.classList.remove('active');
        //    i.querySelector('.accordion-icon').classList.remove('rotate-180');
        // });

        if (!isActive) {
            item.classList.add('active');
            icon.classList.add('rotate-180');
        } else {
            item.classList.remove('active');
            icon.classList.remove('rotate-180');
        }
    });
});

// Smooth scroll for anchor links in the nav
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if(targetElement) {
           targetElement.scrollIntoView({
                behavior: 'smooth'
            }); 
        }
    });
});

