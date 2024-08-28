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
    iframe.style.width = '350px';  // Initial width
    iframe.style.height = '150px'; // Initial height
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    iframe.id = "chatbot-iframe";
    
    document.body.appendChild(iframe);

    var clickCount = 0;

    // Function to update iframe dimensions
    function updateIframeSize() {
        if (clickCount % 2 === 1) {
            iframe.style.width = '350px';
            iframe.style.height = '500px'; // Odd click: enlarge height
        } else {
            iframe.style.width = '150px';
            iframe.style.height = '150px'; // Even click: reduce width and height
        }
    }

    // Set a timeout for 2 seconds
    var resizeTimeout = setTimeout(function() {
        // If no clicks have occurred within 2 seconds, keep the iframe's size as it is
        if (clickCount === 0) {
            updateIframeSize(); // Ensure the initial size is applied after 2 seconds
        }
    }, 2000);

    // Add an event listener for the iframe click
    iframe.addEventListener('click', function() {
        clickCount++;

        // Clear the resizeTimeout if it's still pending
        clearTimeout(resizeTimeout);

        // Update iframe size based on the current click count
        updateIframeSize();

        console.log("Iframe clicked " + clickCount + " times.");
    });
};
