(function() {
    const widgetContainer = document.createElement('div');
    document.body.appendChild(widgetContainer);

    const customText = document.currentScript.getAttribute('data-custom-text') || "Thank You";

    console.log("Script started");

    fetch(`https://chatbotnewv3-production.up.railway.app/widget/?custom_text=${encodeURIComponent(customText)}`)
        .then(response => {
            console.log("Fetch response:", response);
            return response.text();
        })
        .then(html => {
            console.log("Fetched HTML:", html);
            widgetContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading widget content:', error);
        });

    console.log("Script completed");

    
})();