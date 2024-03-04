// You can add JavaScript functionality here if needed
console.log("JavaScript loaded");
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginFormContent");
    const signupForm = document.getElementById("signupFormContent");
    const signupLink = document.getElementById("signupLink");
    const loginLink = document.getElementById("loginLink");

    signupLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("signupForm").style.display = "block";
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("signupForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    });

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const signupUsername = document.getElementById("signupUsername").value;
        const signupPassword = document.getElementById("signupPassword").value;
        // Save signup data to localStorage
        localStorage.setItem(signupUsername, signupPassword);
        // Redirect to login form
        document.getElementById("signupForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const loginUsername = document.getElementById("loginUsername").value;
        const loginPassword = document.getElementById("loginPassword").value;
        // Check if username exists in localStorage and password matches
        if (localStorage.getItem(loginUsername) === loginPassword) {
            // Redirect to another HTML page (e.g., products.html)
            window.location.href = "products.html";
        } else {
            alert("Invalid username or password");
        }
    });
});


// for swipping through the products
const productPreview = document.querySelector('.product-preview');
let isDown = false;
let startX;
let scrollLeft;

productPreview.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - productPreview.offsetLeft;
    scrollLeft = productPreview.scrollLeft;
});

productPreview.addEventListener('mouseleave', () => {
    isDown = false;
});

productPreview.addEventListener('mouseup', () => {
    isDown = false;
});

productPreview.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - productPreview.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed here
    productPreview.scrollLeft = scrollLeft - walk;
});


