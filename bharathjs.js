// Function to handle form submission
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("feedback-message");

    // Clear previous feedback
    feedback.innerHTML = "";
    feedback.classList.remove("success", "error");

    // Simple validation
    if (!name || !email || !message) {
        feedback.innerHTML = "Please fill out all fields.";
        feedback.classList.add("error");
        feedback.style.display = 'block';
        return;
    }

    // Simulating a successful form submission with animation
    setTimeout(() => {
        form.reset(); // Reset the form
        feedback.innerHTML = `Thank you, ${name}! Your message has been sent.`;
        feedback.classList.add("success");
        feedback.style.display = 'block';
        
        // Scroll to the top after submission
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Optionally, you can add a success animation here
        document.querySelector(".hero").classList.add("animate-success");
    }, 500);

    // Optionally, you can send this data to your server here with AJAX/fetch if needed.
}

// Function to add a typing effect (optional for interactive feedback)
function typingEffect(element, text, index = 0) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => typingEffect(element, text, index + 1), 100);
    }
}

// Call typing effect for feedback message
const feedbackMessage = document.getElementById("feedback-message");
const successMessage = `Thank you! Your message has been sent successfully.`;

document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission
    submitForm();
});
