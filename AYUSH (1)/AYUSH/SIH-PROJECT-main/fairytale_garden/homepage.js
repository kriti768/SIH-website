// Show/Hide Remedy Details on Button Click
document.querySelectorAll('.remedy-button').forEach(button => {
    button.addEventListener('click', function() {
        const remedyBox = this.closest('.remedy-box');
        const description = remedyBox.querySelector('.remedy-description');
        
        if (description.style.display === 'block') {
            description.style.display = 'none';
            this.textContent = 'Show';
        } else {
            description.style.display = 'block';
            this.textContent = 'Hide';
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Navbar on Smaller Screens
document.querySelector('.navbar-brand').addEventListener('click', function() {
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (navbarMenu.style.display === 'block') {
        navbarMenu.style.display = 'none';
    } else {
        navbarMenu.style.display = 'block';
    }
});

// Search Functionality
document.querySelector('.navbar-search').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = this.querySelector('input[name="search"]').value.toLowerCase();
    const remedyBoxes = document.querySelectorAll('.remedy-box');
    
    remedyBoxes.forEach(box => {
        const title = box.querySelector('.remedy-title').textContent.toLowerCase();
        if (title.includes(query)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
});

// Explore Button Actions
document.querySelectorAll('.explore-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Explore functionality coming soon!');
    });
});

// Testimonial Section Carousel (optional, simple version)
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonials blockquote');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
}, 5000); // Change testimonial every 5 seconds

// Initial display settings
document.addEventListener('DOMContentLoaded', () => {
    // Initially hide remedy descriptions
    document.querySelectorAll('.remedy-description').forEach(description => {
        description.style.display = 'none';
    });

    // Initially show the first testimonial
    showTestimonial(testimonialIndex);
});
// Scroll Reveal Function
function revealOnScroll() {
    const elements = document.querySelectorAll('.hidden');
    
    elements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust to determine when to start revealing

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Initial reveal when page loads
revealOnScroll();
// Check if the browser supports the Web Speech API
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Set the language and other options
    recognition.lang = 'en-US'; // You can change this to another language if needed
    recognition.continuous = false; // Stops listening after one command
    recognition.interimResults = false; // Only final results

    // Start listening when a button is clicked (you can trigger this elsewhere if needed)
    document.getElementById('voice-control-button').addEventListener('click', () => {
        recognition.start();
    });

    // Handle the result of the recognition
    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log('Command:', command);

        if (command.includes('home')) {
            window.location.href = '#';
        } else if (command.includes('explore plants')) {
            window.location.href = '#explore-plants'; // Adjust the href to the appropriate section
        } else if (command.includes('virtual tours')) {
            window.location.href = '#virtual-tours'; // Adjust the href to the appropriate section
        } else if (command.includes('my garden')) {
            window.location.href = '#my-garden'; // Adjust the href to the appropriate section
        } else if (command.includes('about ayurveda')) {
            window.location.href = '#about-ayurveda'; // Adjust the href to the appropriate section
        } else {
            alert('Command not recognized. Please try again.');
        }
    };

    // Handle errors
    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        alert('There was an error with the speech recognition. Please try again.');
    };

} else {
    alert('Sorry, your browser does not support voice controls.');
}

