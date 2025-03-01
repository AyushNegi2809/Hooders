function gotomain() {
    window.location.href = "index.html";
}

// script.js

// Function to show the selected category
function showCategory(category) {
    // Hide all category sections
    const categories = document.querySelectorAll('.category');
    categories.forEach((cat) => {
        cat.classList.add('hidden');
    });

    // Show the selected category
    const selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.classList.remove('hidden');
    }

    // Remove the 'active' class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    const activeButton = document.querySelector(`.tab-button[onclick="showCategory('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initialize the first category as active on page load
document.addEventListener('DOMContentLoaded', () => {
    showCategory('new'); // Set 'New Arrivals' as the default active category
});