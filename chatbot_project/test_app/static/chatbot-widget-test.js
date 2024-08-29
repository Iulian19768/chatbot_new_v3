window.initChatbot = function(options) {
    var iframe = document.createElement('iframe');
    
    // Add the color setting as a query parameter to the URL
    var url = new URL(options.url || "https://chatbotnewv3-production.up.railway.app/");
    if (options.color) {
        url.searchParams.set('color', options.color);
    }
    if (options.buttonId) {
        url.searchParams.set('buttonId', options.buttonId);
    }

    // Define the dimensions for even and odd clicks
    let evenWidth = '100px';
    let evenHeight = '100px';
    let oddWidth = options.width || '350px';
    let oddHeight = options.height || '570px';

    // Set initial dimensions for closed state (even click count)
    iframe.style.width = evenWidth;
    iframe.style.height = evenHeight;

    iframe.src = url.toString();
    iframe.style.position = 'fixed';
    iframe.style.bottom = options.bottom || '20px';
    iframe.style.right = options.right || '20px';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    iframe.id = "chatbot-iframe";
    //iframe.style.transition = 'width 0.3s, height 0.3s'; // Smooth transition effect

    document.body.appendChild(iframe);

    let clickCount = 0;
    if (clickCount === 0){
        iframe.style.width = '350px';
        iframe.style.height = evenHeight;
    }
    // Function to toggle the iframe size based on the number of clicks

    function toggleChatboxSize() {
        clickCount++;
        if (clickCount % 2 === 0) {
            iframe.style.width = evenWidth;
            iframe.style.height = evenHeight;
        } else {
            iframe.style.width = oddWidth;
            iframe.style.height = oddHeight;
        }
    }

    // Listen for the message from the iframe
    window.addEventListener('message', function(event) {
        if (event.data && event.data.action === 'toggleChatbox') {
            toggleChatboxSize();
        }
    });
};
/*
window.initChatbot = function(options) {
    var iframe = document.createElement('iframe');
    
    // Add the color setting as a query parameter to the URL
    var url = new URL(options.url || "https://chatbotnewv3-production.up.railway.app/");
    if (options.color) {
        url.searchParams.set('color', options.color);
    }

    iframe.src = url.toString();
    iframe.style.border='0';
    iframe.style.position = 'fixed';
    iframe.style.bottom = options.bottom || '20px';
    iframe.style.right = options.right || '20px';
    iframe.style.width = options.width || '350px';
    iframe.style.height = options.height || '500px';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    iframe.id = "chatbot-iframe";
    
    document.body.appendChild(iframe);
    
};
*/

/*
window.initChatbot = function(options) {
    var chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = options.bottom || '20px';
    chatbotContainer.style.right = options.right || '20px';
    chatbotContainer.style.width = options.width || '350px';
    chatbotContainer.style.height = options.height || '570px';
    chatbotContainer.style.backgroundColor = '#fff';
    chatbotContainer.style.border = '1px solid #ccc';
    chatbotContainer.style.zIndex = '9999';
    chatbotContainer.style.overflow = 'auto';
    chatbotContainer.style.display = 'none'; // Initially hidden

    // Fetch and inject the chatbot content
    fetch(options.url)
        .then(response => response.text())
        .then(html => {
            chatbotContainer.innerHTML = html;

            // Apply color if specified
            if (options.color) {
                chatbotContainer.querySelectorAll('.chatbot-element').forEach(el => {
                    el.style.backgroundColor = options.color;
                });
            }

            // Show the chatbot container
            chatbotContainer.style.display = 'block';
        })
        .catch(error => console.error('Error loading chatbot:', error));
};

// Example initialization
window.initChatbot({
    url: "https://chatbotnewv3-production.up.railway.app/",
    width: "350px",
    height: "570px",
    color: "#516c96"
});
*/
/*
window.initChatbot = function(options) {
    var iframe = document.createElement('iframe');

    // Add the color setting as a query parameter to the URL
    var url = new URL(options.url || "https://chatbotnewv3-production.up.railway.app/");
    if (options.color) {
        url.searchParams.set('color', options.color);
    }

    iframe.src = url.toString();
    iframe.style.position = 'fixed';
    iframe.style.bottom = options.bottom || '20px';
    iframe.style.right = options.right || '20px';
    iframe.style.width = '150px';  // Initial small width
    iframe.style.height = '150px'; // Initial small height
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    iframe.style.transition = 'width 0.3s, height 0.3s'; // Smooth transition
    iframe.style.pointerEvents = 'none'; // Initially make it click-through

    iframe.id = "chatbot-iframe";
    document.body.appendChild(iframe);

    // Toggle dimensions and interactivity on click
    iframe.addEventListener('click', function() {
        if (iframe.style.width === '350px') {
            iframe.style.width = '350px';
            iframe.style.height = '150px'; // Collapse to small size
            iframe.style.pointerEvents = 'none'; // Make it click-through when small
        } else {
            iframe.style.width = '350px';
            iframe.style.height = '570px'; // Expand to full size
            iframe.style.pointerEvents = 'auto'; // Enable interactions when full size
        }
        console.log("Iframe clicked. Current size: " + iframe.style.width + " x " + iframe.style.height);
    });
};
*/
