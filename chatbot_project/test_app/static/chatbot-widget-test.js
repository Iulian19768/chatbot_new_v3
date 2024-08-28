window.initChatbot = function(options) {
    // Create the container div for the chatbot
    var chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = options.bottom || '20px';
    chatbotContainer.style.right = options.right || '20px';
    chatbotContainer.style.width = '150px';  // Initial small width
    chatbotContainer.style.height = '150px'; // Initial small height
    chatbotContainer.style.border = '1px solid #ddd'; // Optional: border to make it visible
    chatbotContainer.style.zIndex = '9999';
    chatbotContainer.style.transition = 'width 0.3s, height 0.3s'; // Smooth transition

    // Create an iframe inside the container
    var iframe = document.createElement('iframe');
    iframe.src = options.url || 'https://chatbotnewv3-production.up.railway.app/';
    iframe.style.width = '100%';  // Full width of the container
    iframe.style.height = '100%'; // Full height of the container
    iframe.style.border = 'none';
    iframe.style.backgroundColor = options.color || '#fff'; // Apply color if provided

    chatbotContainer.appendChild(iframe);
    document.body.appendChild(chatbotContainer);

    // Toggle dimensions on click
    chatbotContainer.addEventListener('click', function() {
        if (chatbotContainer.style.width === '350px') {
            chatbotContainer.style.width = '150px';
            chatbotContainer.style.height = '150px'; // Collapse to small size
        } else {
            chatbotContainer.style.width = '350px';
            chatbotContainer.style.height = '570px'; // Expand to full size
        }
        console.log("Container clicked. Current size: " + chatbotContainer.style.width + " x " + chatbotContainer.style.height);
    });
};
