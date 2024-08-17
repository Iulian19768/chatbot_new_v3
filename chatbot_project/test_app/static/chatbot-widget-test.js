window.initChatbot = function(options) {
    // Create the container if it doesn't already exist
    var chatbotContainer = document.getElementById('chatbot-container');
    if (!chatbotContainer) {
        chatbotContainer = document.createElement('div');
        chatbotContainer.id = 'chatbot-container';
        chatbotContainer.style.position = 'fixed';
        chatbotContainer.style.bottom = options.bottom || '20px';
        chatbotContainer.style.right = options.right || '20px';
        chatbotContainer.style.width = options.width || '350px';
        chatbotContainer.style.height = options.height || '570px';
        chatbotContainer.style.zIndex = '9999';
        chatbotContainer.style.overflow = 'hidden';
        document.body.appendChild(chatbotContainer);
    }

    // Load the chatbot HTML and inject it into the container
    fetch(options.url)
        .then(response => response.text())
        .then(html => {
            chatbotContainer.innerHTML = html;
            applyCustomStyles(options); // Apply custom styles after loading the chatbot
        })
        .catch(err => console.error('Failed to load chatbot:', err));
};

// Function to apply custom styles
function applyCustomStyles(options) {
    if (options.buttonColor) {
        var button = document.getElementById('prewbtn');
        if (button) {
            button.style.backgroundColor = options.buttonColor;
        }
    }
}

// Example usage:
// window.initChatbot({url: "https://chatbotnewv3-production.up.railway.app/", width: "400px", height: "600px"});
