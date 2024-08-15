(function() {
    // Capture the current script tag (this script)
    var scriptTag = document.currentScript;

    // Extract data attributes
    var customText = scriptTag.getAttribute('data-custom-text') || 'Thank You';

    // Create a container for the widget
    var widgetContainer = document.createElement('div');
    widgetContainer.id = 'embed-widget-container';

    // Insert the HTML content into the widget container
    widgetContainer.innerHTML = `
        <div id="menu">
            <div class="menu-text" id="spanclick">how may I help you</div>
            <img src="https://yourdomain.com/static/ico_chatbot_close.png" id="menu-icon" alt="Close Icon"
                data-banner-open="https://yourdomain.com/static/banner_open.png"
                data-ico-close="https://yourdomain.com/static/ico_chatbot_close.png"
                data-box-opened="https://yourdomain.com/static/box_opened.png" />
        </div>
        <div id="box" class="hidden">
            <!-- Other content of the box here -->
            <div class="welcomemessage" id="custom-welcome-message">
                <p id="custom-thank-you-message">${customText}</p>
            </div>
            <!-- Remaining steps content -->
        </div>
    `;

    // Append the widget to the document body
    document.body.appendChild(widgetContainer);

    // Load additional CSS and JavaScript if needed
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://yourdomain.com/static/embed_widget.css';
    document.head.appendChild(link);

    var script = document.createElement('script');
    script.src = 'https://yourdomain.com/static/embed_widget_functions.js'; // Your custom JS functions
    document.body.appendChild(script);
})();
