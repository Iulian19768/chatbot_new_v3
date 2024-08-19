window.initChatbot = function(options) {
    var iframe = document.createElement('iframe');
    
    // Add button color as a query parameter to the URL
    var url = new URL(options.url || "https://chatbotnewv3-production.up.railway.app/");
    
    if (options.buttonColor) {
        // Apply color to the "Back" button
        var backButton = document.getElementById('prewbtn');
        if (backButton) {
            backButton.style.backgroundColor = buttonColor;
        }

        // Apply color to the "Forward" button
        var forwardButton = document.getElementById('nextbtn');
        if (forwardButton) {
            forwardButton.style.backgroundColor = buttonColor;
        }
        var chat_immages = document.getElementsByClassName('chat_immages');
        for (var i = 0; i < chat_immages.length; i++) {
            chat_immages[i].style.backgroundColor = buttonColor;
        }
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
};
