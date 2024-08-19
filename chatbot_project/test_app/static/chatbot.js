let boxDisplayed = false;
let menuDisplayed = false;
let menuAutoToggleTimeout;
let userInteracted = false;

// Function to toggle the menu
function toggleMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const menuText = document.querySelector(".menu-text");

    menuDisplayed = !menuDisplayed; // Toggle the menu state

    if (menuDisplayed) {
        // Change the image source and show the menu text when the menu is toggled on
        menuIcon.src = menuIcon.getAttribute("data-banner-open");
        menuText.classList.add("show");
    } else {
        // Restore the original image and hide the menu text when the menu is toggled off
        menuIcon.src = menuIcon.getAttribute("data-ico-close");
        menuText.classList.remove("show");
    }
}

// Function to show or hide the box
function toggleBox() {
    const box = document.getElementById("box");
    const menuIcon = document.getElementById("menu-icon");
    boxDisplayed = !boxDisplayed; // Toggle the box state

    if (boxDisplayed) {
        box.classList.add("showbox"); // Show the box
        menuIcon.classList.remove('rotate-back'); // Remove reverse rotation if any
        menuIcon.classList.add('rotate'); // Add rotation class

        setTimeout(() => {
            menuIcon.src = menuIcon.getAttribute("data-box-opened"); // Change image halfway through the animation (0.25s)
        }, 250);

        // Remove the class after the animation is complete to reset it
        setTimeout(() => {
            menuIcon.classList.remove('rotate');
        }, 500); // Match the duration of the CSS animation
    } else {
        box.classList.remove("showbox"); // Hide the box
        menuIcon.classList.remove('rotate'); // Remove normal rotation if any
        menuIcon.classList.add('rotate-back'); // Add reverse rotation class

        setTimeout(() => {
            menuIcon.src = menuIcon.getAttribute("data-ico-close"); // Change image halfway through the animation (0.25s)
        }, 250);

        // Remove the class after the animation is complete to reset it
        setTimeout(() => {
            menuIcon.classList.remove('rotate-back');
        }, 500); // Match the duration of the CSS animation
    }
}

// Event listener for the menu icon
document.getElementById("menu-icon").addEventListener("click", function() {
    userInteracted = true; // Mark that the user has interacted
    clearTimeout(menuAutoToggleTimeout); // Cancel the auto-toggle if the user clicks

    if (menuDisplayed) {
        toggleMenu(); // Close the menu if it's open
        toggleBox();  // Open the box
    } else {
        toggleBox();  // Open the box (and leave menu closed)
    }
});

// Event listener for the span click
document.getElementById("spanclick").addEventListener("click", function() {
    alert("You clicked the span!");
});

// Function to automatically toggle the menu after 15 seconds
function startAutoToggleMenu() {
    menuAutoToggleTimeout = setTimeout(() => {
        if (!menuDisplayed && !userInteracted) {
            toggleMenu(); // Toggle the menu automatically after 15 seconds
        }
    }, 15000); // 15000 milliseconds = 15 seconds
}

// Start the auto-toggle timer when the page loads
startAutoToggleMenu();


