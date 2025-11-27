tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary-blue': '#25A4AD', // Your main blue/teal color
                        'primary-dark': '#1a1a1a', // Your footer background
                        'accent-teal': '#21A3B8', // A similar teal used in services/pricing
                        'gray-light': '#aaa',
                        'gray-medium': '#666',
                        'gray-dark': '#333',
                    },
                    fontFamily: {
                        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
                    },
                }
            }
        }



function toggleFaq(element) {
            const item = element.parentElement;
            const answer = element.nextElementSibling;
            
            item.classList.toggle('active');
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.paddingTop = '1.25rem'; 
                answer.style.paddingBottom = '1.25rem'; 
            }

            // Rotate icon
            const icon = element.querySelector('i');
            icon.classList.toggle('rotate-180');
        }

       
        document.addEventListener('DOMContentLoaded', () => {
            const faqItems = document.querySelectorAll('.faq-item .faq-question');
            faqItems.forEach(item => {
                item.addEventListener('click', () => toggleFaq(item));
            });

           
        });