(function() {
    
  
    var customText = document.currentScript.getAttribute('data-custom-text');

    // Create an iframe to load content from your Django project
    var iframe = document.createElement('iframe');
    iframe.src = 'https://chatbotnewv3-production.up.railway.app/widget/?custom_text=' + encodeURIComponent(customText);
    iframe.width = 'auto';
    iframe.height = 'auto'; // Set appropriate height for your content
    iframe.style.border = 'none';
    iframe.style.bottom = '4px';
    iframe.style.right='4px';
    iframe.style.position = 'fixed';


    // Append the iframe to the body (or any other container)
    document.body.appendChild(iframe);

    
})();