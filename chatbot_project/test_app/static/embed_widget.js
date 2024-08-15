(function() {
    const widgetContainer = document.createElement('div');
    document.body.appendChild(widgetContainer);

    const customText = document.currentScript.getAttribute('data-custom-text') || "Thank You";

    fetch(`https://chatbotnewv3-production.up.railway.app/widget/?custom_text=${encodeURIComponent(customText)}`)
        .then(response => response.text())
        .then(html => {
            widgetContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading widget content:', error);
        });
})();