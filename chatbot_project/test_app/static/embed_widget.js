(function() {
    const widgetContainer = document.createElement('div');
    document.body.appendChild(widgetContainer);

    const customText = document.currentScript.getAttribute('data-custom-text') || "Thank You";

    fetch(`http://chatbotnewv3-production.up.railway.app/widget/?custom_text=${encodeURIComponent(customText)}`)
        .then(response => response.text())
        .then(html => {
            widgetContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading widget content:', error);
        });

    var embeddedScript = document.createElement("script");
    embeddedScript.defer = true;
    
        // The content of the script to be embedded
        embeddedScript.innerHTML = `
            document.addEventListener("DOMContentLoaded", function() {
                var menuIcon = document.getElementById("menu-icon");
                if (menuIcon) {
                    menuIcon.onclick = function() {
                        console.log("the image is clicked");
                    };
                }
            });
        `;
    
        // Append the script to the document
        document.body.appendChild(embeddedScript);
})();