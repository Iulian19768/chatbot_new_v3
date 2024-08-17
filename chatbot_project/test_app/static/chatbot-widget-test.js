window.initChatbot = function(options) {
    var iframe = document.createElement('iframe');
    
    // Add button color as a query parameter to the URL
    var url = new URL(options.url || "https://chatbotnewv3-production.up.railway.app/");
    if (options.buttonColor) {
        url.searchParams.set('buttonColor', options.buttonColor);
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
// Function to get URL parameters
function getUrlParameter(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results ? decodeURIComponent(results[1]) : null;
}

// Apply custom styles based on URL parameters
window.onload = function() {
    var buttonColor = getUrlParameter('buttonColor');
    if (buttonColor) {
        var button = document.getElementById('prewbtn');
        if (button) {
            button.style.backgroundColor = buttonColor;
        }
    }
};
