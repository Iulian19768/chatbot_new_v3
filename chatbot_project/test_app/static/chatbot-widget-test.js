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
    iframe.style.width = options.width || '350px';
    iframe.style.height = options.height || '500px';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';
    iframe.id = "chatbot-iframe";

    document.body.appendChild(iframe);

    // Initialize click count
    var clickCount = 0;

    // Add click event listener to the iframe
    iframe.addEventListener('click', function() {
        clickCount++;

        // Check if the click count is odd or even
        if (clickCount % 2 === 0) {
            // Even click - increase size
            iframe.style.width = '500px';
            iframe.style.height = '700px';
        } else {
            // Odd click - decrease size
            iframe.style.width = '350px';
            iframe.style.height = '500px';
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
