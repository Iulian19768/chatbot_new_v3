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
        box.classList.add("show"); // Show the box
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
        box.classList.remove("show"); // Hide the box
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


function transitionToStep(currentStep, nextStep, fadeOutDuration = 0.5, fadeInDuration = 0.5) {
    // Apply fade-out animation to the current step
    currentStep.classList.add('fade-out');
    currentStep.style.animationDuration = `${fadeOutDuration}s`;

    // After the fade-out animation ends, hide the current step and show the next step
    currentStep.addEventListener('animationend', function onAnimationEnd() {
        currentStep.style.display = 'none';
        currentStep.classList.remove('fade-out');
        currentStep.removeEventListener('animationend', onAnimationEnd); // Clean up the event listener

        // Show the next step with fade-in animation
        nextStep.style.display = 'block';
        nextStep.classList.add('fade-in');
        nextStep.style.animationDuration = `${fadeInDuration}s`;

        // Optional: Remove fade-in class after animation ends
        nextStep.addEventListener('animationend', function onFadeInEnd() {
            nextStep.classList.remove('fade-in');
            nextStep.removeEventListener('animationend', onFadeInEnd); // Clean up the event listener
        });
    });
}

let firstNameInput;
let lastNameInput;

document.addEventListener('DOMContentLoaded', (event) => {
// Step 1 Variables
const buttons = document.querySelectorAll('.patientBtn');
const firstNameInput = document.getElementById('namestep1');
const lastNameInput = document.getElementById('lastnamestep1');
const nextbtn = document.getElementById('nextbtn');
const prewbtn = document.getElementById('prewbtn');
const step1 = document.getElementById('step1');
const mapid = document.getElementById('mapid');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
const step5 = document.getElementById('step5');
let selectedButton = '';

// Function to handle button clicks
function handleButtonClick(event) {
// Remove 'active' class from all buttons
buttons.forEach(button => {
button.classList.remove('active');
});

// Add 'active' class to the clicked button
event.currentTarget.classList.add('active');

// Update the selectedButton variable
selectedButton = event.currentTarget.id;
}

// Function to validate form and button selection
function validateForm() {
const firstName = firstNameInput.value.trim();
const lastName = lastNameInput.value.trim();
const isButtonSelected = document.querySelector('.patientBtn.active') !== null;

// Check if input fields are filled and a button is selected
if (firstName === '' || lastName === '') {
alert('Please enter both first and last names.');
return false;
}
if (!isButtonSelected) {
alert('Please select an option.');
return false;
}
return { isValid: true, firstName, lastName, selectedButton };
}

// Function to transition between steps


// Add event listener to the 'Next' button
let valrezfirstname;
let valrezlastname;

nextbtn.addEventListener('click', (event) => {
const validationResult = validateForm();
if (validationResult.isValid) {
// Store the validated names in the session storage to be used later


console.log('First Name:', validationResult.firstName);
valrezfirstname=validationResult.firstName;
console.log('Last Name:', validationResult.lastName);
valrezlastname=validationResult.lastName;
console.log('Selected Button ID:', validationResult.selectedButton);

const firstNamestep4 = document.getElementById('firstNamestep4');
const lastNamestep4 = document.getElementById('lastNamestep4');

// Autofill Step 4 inputs with Step 1 values stored in session storage
firstNamestep4.value = validationResult.firstName|| '';
lastNamestep4.value =validationResult.lastName|| '';

// Proceed to the next step if validation passes
transitionToStep(step1, step2);
} else {
event.preventDefault(); // Prevent transition if validation fails
}
});

// Add event listener for the 'Previous' button
prewbtn.addEventListener('click', () => {
transitionToStep(step1, mapid);
});

// Attach click event listeners to all buttons
buttons.forEach(button => {
button.addEventListener('click', handleButtonClick);
});

// Step 4 Autofill using values from Step 1
const backstep4 = document.getElementById('backstep4');
const forwardstep4 = document.getElementById('forwardstep4');


// Step 4 Navigation
backstep4.addEventListener('click', () => {
transitionToStep(step4, step3);
});


function areAllFieldsCompleted() {
const firstNamestep44 = document.getElementById('firstNamestep4').value.trim();
const lastNamestep44 = document.getElementById('lastNamestep4').value.trim();
const birthday = document.getElementById('birthday').value.trim();
const email = document.getElementById('email').value.trim();
const phonenumber = document.getElementById('phonenumber').value.trim();


// Create an array of all the fields
const fields = [
{ field: firstNamestep44, name: 'First Name' },
{ field: lastNamestep44, name: 'Last Name' },
{ field: birthday, name: 'Birthday' },
{ field: email, name: 'Email' },
{ field: phonenumber, name: 'Phone Number' }
];

// Loop through each field to check if it's empty
for (let i = 0; i < fields.length; i++) {
if (fields[i].field === '') {
alert(`Please complete the ${fields[i].name} field.`);
return false; // Stop the function if a field is empty
}
}

return true; // All fields are filled
}

forwardstep4.addEventListener('click', () => {
// Check if all fields are completed
if (areAllFieldsCompleted()) {
const firstNamestep44 = document.getElementById('firstNamestep4').value.trim();
const lastNamestep44 = document.getElementById('lastNamestep4').value.trim();
const birthday = document.getElementById('birthday').value.trim();
const email = document.getElementById('email').value.trim();
const phonenumber = document.getElementById('phonenumber').value.trim();
const messagetooffice = document.getElementById('messagetooffice').value.trim();

console.log(firstNamestep44, lastNamestep44, birthday);
console.log(email, phonenumber, messagetooffice);

const data = {
first_name: firstNamestep44,
last_name: lastNamestep44,
birthday: birthday,
email: email,
phone_number: phonenumber,
message_to_office: messagetooffice,
clicked_buttons: clickedButtonsArray,
selections: selections
};

// Send data to the backend via a POST request
fetch('', {  // Replace with your actual Django endpoint
method: 'POST',
headers: {
'Content-Type': 'application/json',
'X-CSRFToken': getCookie('csrftoken') // CSRF token for security
},
body: JSON.stringify(data)
})
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');

}
return response.json();
})
.then(result => {
console.log('Success:', result);
transitionToStep(step4, step5); // Proceed to the next step
})
.catch(error => {
console.error('Error:', error);
transitionToStep(step4, step5); 
});

function getCookie(name) {
let cookieValue = null;
if (document.cookie && document.cookie !== '') {
const cookies = document.cookie.split(';');
for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
    }
}
}
return cookieValue;
}
}
});

//STEP2 BOX


// Function to handle button clicks
const clickedButtonsArray = [];
const backstep2 = document.getElementById('backstep2');

// Function to handle button clicks
function handleButtonClickstep2(event) {
const button = event.target;
const buttonText = button.textContent;

// Toggle the 'clicked' class on the clicked button
button.classList.toggle('clicked');

if (button.classList.contains('clicked')) {
// If the button is clicked, add it to the array
clickedButtonsArray.push(buttonText);
} else {
// If the button is unclicked, remove it from the array
const index = clickedButtonsArray.indexOf(buttonText);
if (index > -1) {
clickedButtonsArray.splice(index, 1);
}
}
}

// Attach click event listener to all buttons
document.querySelectorAll('.typeofbtn').forEach(button => {
button.addEventListener('click', handleButtonClickstep2);
});

// Function to handle the "Forward" button click
document.getElementById('nextstep2').addEventListener('click', () => {
// Check if at least one button is clicked
if (clickedButtonsArray.length === 0) {
// Display a warning message or prevent transition
alert('Please select at least one option before proceeding.');
return; // Prevents the transition to step 3
}

console.log('Buttons clicked:', clickedButtonsArray);

// Proceed with the transition to step 3 if a button is clicked
transitionToStep(step2, step3);
});

// Handle the "Back" button click
backstep2.addEventListener('click', () => {
transitionToStep(step2, step1);
});



//STEP3
const backstep3=document.getElementById('backstep3');
const forwardstem3=document.getElementById('forwardstem3');


const weekCalendarDivs = document.querySelectorAll('.Whenwouldyouwanttocomeinbuttons .weekcalendar');
const forwardButton = document.getElementById('forwardstem3');

// Initialize a state object to store selections
const selections = {};

weekCalendarDivs.forEach(weekCalendarDiv => {
const pTag = weekCalendarDiv.querySelector('p');
const amButton = weekCalendarDiv.querySelector('.am-button') || weekCalendarDiv.querySelector('.am-button-tue') || weekCalendarDiv.querySelector('.am-button-wed') || weekCalendarDiv.querySelector('.am-button-thu') || weekCalendarDiv.querySelector('.am-button-fr');
const pmButton = weekCalendarDiv.querySelector('.pm-button') || weekCalendarDiv.querySelector('.pm-button-tue') || weekCalendarDiv.querySelector('.pm-button-wed') || weekCalendarDiv.querySelector('.pm-button-thu') || weekCalendarDiv.querySelector('.pm-button-fr');

const originalBorderColor = getComputedStyle(weekCalendarDiv).border;
let isToggled = false; // Flag to keep track of toggle state

// Track selections
selections[pTag.textContent] = { am: false, pm: false };

pTag.addEventListener('click', function() {
if (isToggled) {
// Reset border and button style
weekCalendarDiv.style.border = originalBorderColor;
amButton.style.backgroundColor = '#f3f3f3';
amButton.style.color = '#555';
if (pmButton) {
    pmButton.style.backgroundColor = '#f3f3f3'; // Reset PM button style
    pmButton.style.color = '#555'; // Reset PM button style
}
// Update selections
selections[pTag.textContent] = { am: false, pm: false };
} else {
// Set border and change button style
weekCalendarDiv.style.border = '2px solid #0088cc';
if (pmButton) {
    pmButton.style.backgroundColor = '#f3f3f3'; // Default PM button color
    pmButton.style.color = '#555'; // Default PM button color
}
// Update selections
selections[pTag.textContent] = { am: amButton.style.backgroundColor === '#0088cc', pm: pmButton ? pmButton.style.backgroundColor === '#0088cc' : false };
}
isToggled = !isToggled; // Toggle the state
});

// Handle AM button click
if (amButton) {
amButton.addEventListener('click', function() {
weekCalendarDiv.style.border = '2px solid #0088cc';
amButton.style.backgroundColor = '#0088cc';
amButton.style.color = 'white';
// Update selections
selections[pTag.textContent].am = true;
});
}

// Handle PM button click
if (pmButton) {
pmButton.addEventListener('click', function() {
weekCalendarDiv.style.border = '2px solid #0088cc';
pmButton.style.backgroundColor = '#0088cc';
pmButton.style.color = 'white';
// Update selections
selections[pTag.textContent].pm = true;
});
}
});


backstep3.addEventListener('click', () => {
transitionToStep(step3, step2);
});

forwardstem3.addEventListener('click', () => {
transitionToStep(step3, step4);
console.log('Selections:', selections);
});
});

document.addEventListener('DOMContentLoaded', function() {

    function transitionToStep(currentStep, nextStep, fadeOutDuration = 0.5, fadeInDuration = 0.5) {
        // Apply fade-out animation to the current step
        currentStep.classList.add('fade-out');
        currentStep.style.animationDuration = `${fadeOutDuration}s`;

        // After the fade-out animation ends, hide the current step and show the next step
        currentStep.addEventListener('animationend', function onAnimationEnd() {
            currentStep.style.display = 'none';
            currentStep.classList.remove('fade-out');
            currentStep.removeEventListener('animationend', onAnimationEnd); // Clean up the event listener

            // Show the next step with fade-in animation
            nextStep.style.display = 'block';
            nextStep.classList.add('fade-in');
            nextStep.style.animationDuration = `${fadeInDuration}s`;

            // Optional: Remove fade-in class after animation ends
            nextStep.addEventListener('animationend', function onFadeInEnd() {
                nextStep.classList.remove('fade-in');
                nextStep.removeEventListener('animationend', onFadeInEnd); // Clean up the event listener
            });
        });
    }
// Initialize Leaflet map
    var markersData = JSON.parse('{{ markers_data|escapejs }}'); // Ensure JSON is safely parsed

    // Get the first element's coordinates
    var firstKey = Object.keys(markersData)[0]; // Get the first key
    var firstCoordinates = markersData[firstKey]; // Get the corresponding coordinates

    // Initialize Leaflet map with the first element's coordinates

    //nord=firstCoordinates.lat ;
    //est=firstCoordinates.lng;
    var nord = 31.0;
    var est = -100.0;
    var map = L.map('mapid').setView([nord, est], 2); // Set the view to the first location

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom icon
    var customIcon = L.icon({
        iconUrl: "{% static 'ico_thumbnail.webp' %}", // Path to your custom icon image
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
    });

    // Add markers to the map
    Object.keys(markersData).forEach(function(key) {
        var data = markersData[key];
        var popupContent = `
            <div class="popup-content" style="display:flex;flex-direction:column;">
                <span>${key}</span>
                <button onclick="handleButtonClick('${key}')" style="background-color:#0088cc;color:black;border-radius:5px;">Select</button>
            </div>
        `;
        
        L.marker([data.lat, data.lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(popupContent);
    });

    // Handle button click event
    window.handleButtonClick = function(address) {
        console.log(address);
        transitionToStep(mapid,step1);
        
    };

console.log('Script is running!');

// Event listener for the image click
var chatImg = document.getElementById('appointment_immage_button');
console.log(chatImg);
if (chatImg) {
    chatImg.addEventListener('click', function() {
        console.log('Image clicked!');

        var boxDiv = document.getElementById('box');
        var mapDiv = document.getElementById('mapid');
        var contentChatbotDiv = document.querySelector('.contentchatbot');

        if (boxDiv) {
            boxDiv.classList.add('hidden');  // Add 'hidden' class to hide the box div
            console.log('Box div hidden!');
        } else {
            console.error('Element with ID box not found.');
        }

        if (contentChatbotDiv) {
            contentChatbotDiv.classList.add('hidden'); // Add 'hidden' class to hide the contentchatbot div
            console.log('Contentchatbot div hidden!');
        } else {
            console.error('Element with class contentchatbot not found.');
        }

        if (mapDiv) {
            mapDiv.style.display = 'block';  // Show the map div
            console.log('Map div displayed!');
        } else {
            console.error('Element with ID mapid not found.');
        }
    });
} else {
    console.error('Element with ID appointment_immage_button not found.');
}
});
