(function() {
    // 1. Inject Chatbot HTML
    var chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'my-chatbot';
    chatbotContainer.innerHTML = `
        <div id="chat-window">
            <div id="chat-log"></div>
            <input id="chat-input" type="text" placeholder="Type a message...">
            <button id="send-button">Send</button>
        </div>
    `;
    document.body.appendChild(chatbotContainer);

    // 2. Inject Chatbot Styles
    var style = document.createElement('style');
    style.textContent = `
        #my-chatbot {
            width: 300px;
            height: 500px;
            border: 1px solid #ccc;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #fff;
            z-index: 9999; /* Ensure it's on top of other elements */
        }
        #my-chatbot #chat-window {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        #my-chatbot #chat-log {
            flex: 1;
            padding: 10px;
            overflow-y: auto;
            border-bottom: 1px solid #ccc;
        }
        #my-chatbot #chat-input {
            width: calc(100% - 50px);
            padding: 10px;
            border: none;
            border-top: 1px solid #ccc;
            outline: none;
        }
        #my-chatbot #send-button {
            width: 50px;
            border: none;
            background-color: #007bff;
            color: white;
            cursor: pointer;
        }
        #my-chatbot #send-button:hover {
            background-color: #0056b3;
        }
    `;
    document.head.appendChild(style);

    // 3. Add Chatbot JavaScript Logic
    document.addEventListener("DOMContentLoaded", function() {
            var menuIcon = document.getElementById("send-button");
            if (menuIcon) {
                menuIcon.onclick = function() {
                    console.log("the image is clicked");
                };
            }   
    });

    function addMessageToChatLog(sender, message) {
        var chatLog = document.getElementById('chat-log');
        var newMessage = document.createElement('div');
        newMessage.textContent = `${sender}: ${message}`;
        chatLog.appendChild(newMessage);
        chatLog.scrollTop = chatLog.scrollHeight;  // Scroll to the bottom
    }

    function getCSRFToken() {
        var name = 'csrftoken';
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }
})();
