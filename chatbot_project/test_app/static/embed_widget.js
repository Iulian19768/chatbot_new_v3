(function() {
    
  
    var customText = document.currentScript.getAttribute('data-custom-text');

    // Create an iframe to load content from your Django project
    var iframe = document.createElement('iframe');
    iframe.src = 'https://chatbotnewv3-production.up.railway.app/widget/?custom_text=' + encodeURIComponent(customText);
    iframe.width = '100%';
    iframe.height = '400px'; // Set appropriate height for your content
    iframe.style.border = 'none';

    // Append the iframe to the body (or any other container)
    document.body.appendChild(iframe);

    
})();