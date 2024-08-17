window.initChatbot = function(options) {
    var iframe = document.createElement('iframe');
    iframe.src = options.url || "https://chatbotnewv3-production.up.railway.app/";
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

// Example usage:
// window.initChatbot({url: "https://chatbotnewv3-production.up.railway.app/", width: "400px", height: "600px"});
