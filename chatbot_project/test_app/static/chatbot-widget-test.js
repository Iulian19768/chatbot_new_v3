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

    // Set a timeout for 2 seconds
    var resizeTimeout = setTimeout(function() {
        // If no clicks have occurred within 2 seconds, keep the iframe's size as it is
        if (clickCount === 0) {
            console.log("No clicks within 2 seconds, keeping the initial size.");
        }
    }, 2000);

    // Add an event listener for the iframe click
    iframe.addEventListener('click', function() {
        clickCount++;

        // Clear the resizeTimeout if it's still pending
        clearTimeout(resizeTimeout);

        // Alternate the size based on whether the click count is odd or even
        if (clickCount % 2 === 1) {
            iframe.style.width = '350px';
            iframe.style.height = '500px'; // Odd click: enlarge height
        } else {
            iframe.style.width = '150px';
            iframe.style.height = '150px'; // Even click: reduce width and height
        }

        console.log("Iframe clicked " + clickCount + " times.");
    });
};
