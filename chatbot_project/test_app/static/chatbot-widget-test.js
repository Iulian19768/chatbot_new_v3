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

    // Function to update iframe dimensions based on click count
    function updateIframeSize() {
        if (clickCount % 2 === 1) {
            iframe.style.width = '350px';
            iframe.style.height = '500px'; // Odd click: enlarge height
        } else {
            iframe.style.width = '150px';
            iframe.style.height = '150px'; // Even click: reduce width and height
        }
        console.log("Iframe size updated. Width: " + iframe.style.width + ", Height: " + iframe.style.height);
    }

    // Add an event listener for the iframe click
    iframe.addEventListener('click', function() {
        clickCount++;
        // Update iframe size based on the current click count
        updateIframeSize();
        console.log("Iframe clicked " + clickCount + " times.");
    });
};
