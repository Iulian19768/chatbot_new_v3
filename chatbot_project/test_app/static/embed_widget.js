(function() {
    // 1. Inject Chatbot HTML
    var chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'my-chatbot';
    chatbotContainer.innerHTML = `
        <div id="menu">
        <div class="menu-text" id="spanclick">
            how may I help you 
        </div>
        <!-- Load image with Django's static template tag -->
        <img src="{% static 'ico_chatbot_close.png' %}" id="menu-icon" alt="Close Icon"
             data-banner-open="{% static 'banner_open.png' %}"
             data-ico-close="{% static 'ico_chatbot_close.png' %}"
             data-box-opened="{% static 'box_opened.png' %}" />
    </div>
    <div id="box" class="hidden">
        <!-- Content of the box can go here -->
        <div class="contentchatbot">
            <div class="topnvbar" style="margin-top: 0px;">
            
                <button style="margin-left: 95%;">x</button>
            </div>
            <div class="welcomemessage">
                <p>Welcome!</p>
                <p>Your Dental Practice!</p>
            </div>
            <div class="widjets">
                <div class="chat" style="margin-top: -20px;">
                    <div class="chat_inner_left">
                        <div class="chat_immages">
                            <img src="{% static 'microphone.png' %}" id="chatimg" alt="Chat Icon">
                            <p>Speak</p>
                        </div>
                       
                        <div class="chat_immages">
                            <img src="{% static 'text.png' %}" alt="Chat Icon"> 
                            <p>Text</p>
                        </div>
                        
                    </div>
                    <div class="chat_inner_right" id="chat_right_inner_id">
                        <p>Chat with our AI assistant</p>
                    </div>
                </div>

                <div class="appointment" style="margin-bottom: -20px;">
                    <div class="chat_inner_left">
                        <div class="chat_immages" style="width: auto;" id="appointment_immage_button">
                            <img src="{% static 'newrequeststransparent.webp' %}" id="chatimg" alt="Chat Icon" style="padding-left: -32px;">
                        </div>
                    </div>
                    <div class="chat_inner_right" >
                        <p>Request an appointment</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="contentmap" id="mapid">
            
        </div>
        <div class="stepbox" id="step1" style="display: none;">
            <div class="containterofcontent" >
                <div class="topnvbar" style="margin-top: -20px;">
            
                    <button style="margin-left: 95%;margin-top: 30px;">x</button>
                </div>
                
                    <div class="welcomemessage" style="margin-top: -10px;">
                        <p>Thank You for choosing</p>
                        <p>Your Dental Practice!</p>
                    </div>
                    <div class="container">
                        <div class="progressbar">
                            <div class="progress"></div>
                            <div class="step step-1">1</div>
                            <div class="step step-2">2</div>
                            <div class="step step-3">3</div>
                            <div class="step step-4">4</div>
                        </div>
                    </div>
                    <div class="smallertext">
                        <p>Who is this appointment for?</p>
                    </div>
                    <div class="horizontalblocs">
                        <input type="text" id="namestep1" name="namestep1" placeholder="First Name">
                        <input type="text" id="lastnamestep1" name="lastnamestep1" placeholder="Last Name">
                    </div>
                    <div class="smallertext">
                        <p>Have you visited us before?</p>
                    </div>
                    <div class="horizontalblocs">
                        <button id="newPatientBtn" class="patientBtn" style="margin-right: 32px;height: 50px;">New Patient</button>
                        <button id="returningPatientBtn" class="patientBtn">Returning Patient</button>
                    </div>
                    <div class="previewsandforwardbutton">
                        <button id="prewbtn"><   Back</button>
                        <button id="nextbtn">Forward   ></button>
                    </div>
                
            </div>
        </div>
        <div class="stepbox" id="step2" style="display: none;">
            <div class="containterofcontent">
                <div class="topnvbar" style="margin-top: -20px;">
            
                    <button style="margin-left: 95%;">x</button>
                </div>
                <div class="scrollablecontainer">
                    <div class="welcomemessage">
                        <p>Thank You for choosing</p>
                        <p>Your Dental Practice!</p>
                    </div>
                    <div class="container">
                        <div class="progressbar">
                            <div class="progressstep2"></div>
                            <div class="step step-1">1</div>
                            <div class="step step-2">2</div>
                            <div class="step step-3">3</div>
                            <div class="step step-4">4</div>
                        </div>
                    </div>
                    <div class="smallertext">
                        <p>What would you like to come in for?</p>
                    </div>
                    <div class="typeofwhydidyoucomein">
                        <button class="typeofbtn">Emergency Exam</button>
                        <button class="typeofbtn">General Consultation</button>
                        <button class="typeofbtn">Routine Check-up and Cleaning</button>
                        <button class="typeofbtn">Braces or Orthodontic Consultation</button>
                        <button class="typeofbtn">Cosmetic Consultation</button>
                        <button class="typeofbtn">Treatment</button>
                        <button class="typeofbtn">Other</button>
                    </div>
                    <div class="previewsandforwardbutton">
                        <button id="backstep2"><   Back</button>
                        <button id="nextstep2">Forward   ></button>
                    </div>
                </div>
            </div> 
        </div>
        <div id="step3" style="display: none;">
            <div class="containterofcontent">
                <div class="topnvbar" style="margin-top: -20px;">
            
                    <button style="margin-left: 95%;">x</button>
                </div>
                <div class="scrollablecontainer">
                    <div class="welcomemessage">
                        <p>We are excited to meet </p>
                        <p>you.</p>
                    </div>
                    <div class="container">
                        <div class="progressbar">
                            <div class="progressstep3"></div>
                            <div class="step step-1">1</div>
                            <div class="step step-2">2</div>
                            <div class="step step-3">3</div>
                            <div class="step step-4">4</div>
                        </div>
                    </div>
                    <div class="smallertext">
                        <p>When would you prefer to visit us?</p>
                    </div>
                    <div class="Whenwouldyouwanttocomeinbuttons">
                        <div class="weekcalendar">
                            <p style="margin-right: -4px;">Monday</p>
                            <div class="morningafternoonbuttons">
                                <button class="am-button">AM</button>
                                <button class="pm-button">PM</button>
                            </div>
                        </div>
                        <div class="weekcalendar" id="weekcalendartue">
                            <p style="margin-right: -4px;">Tuesday</p>
                            <div class="morningafternoonbuttons">
                                <button class="am-button-tue">AM</button>
                                <button class="pm-button-tue">PM</button>
                            </div>
                        </div>
                        <div class="weekcalendar" id="weekcalendarwed">
                            <p style="margin-right: -32px;">Wednesday</p>
                            <div class="morningafternoonbuttons">
                                <button class="am-button-wed">AM</button>
                                <button class="pm-button-wed">PM</button>
                            </div>
                        </div>
                        <div class="weekcalendar" id="weekcalendarthu">
                            <p style="margin-right: -15px;">Thursday</p>
                            <div class="morningafternoonbuttons">
                                <button class="am-button-thu">AM</button>
                                <button class="pm-button-thu">PM</button>
                            </div>
                        </div>
                        <div class="weekcalendar" id="weekcalendarfr">
                            <p style="margin-right: 8px;">Friday</p>
                            <div class="morningafternoonbuttons">
                                <button class="am-button-fr">AM</button>
                                <button class="pm-button-fr">PM</button>
                            </div>
                        </div>
                    </div>
                    <div class="previewsandforwardbutton">
                        <button id="backstep3"><   Back</button>
                        <button id="forwardstem3">Forward   ></button>
                    </div>
                </div>
            </div>
        </div>
        <div id="step4" style="display: none;">
            <div class="containterofcontent">
                <div class="topnvbar" style="margin-top: -20px;">
            
                    <button style="margin-left: 95%;">x</button>
                </div>
                <div class="scrollablecontainer">
                    <div class="welcomemessage">
                        <p>Let's grab some of your</p>
                        <p> info.</p>
                    </div>
                    <div class="container">
                        <div class="progressbar">
                            <div class="progressstep4"></div>
                            <div class="step step-1">1</div>
                            <div class="step step-2">2</div>
                            <div class="step step-3">3</div>
                            <div class="step step-4">4</div>
                        </div>
                    </div>
                
                    <div class="smallertext">
                        
                    </div>
                    <div class="moreinfoaboutyou" style="margin-left: 2px;">
                        <p style="font-size: 12px;margin-bottom: -15px;margin-left: 16px;">Name</p>
                        <div class="horizontalblocs" style="width: 200px; font-weight: 200;">
                            <input type="text" id="firstNamestep4" name="firstNamestep4" placeholder="First Name" style="width: 90px; font-weight: 200;">
                            <input type="text" id="lastNamestep4" name="lastNamestep4" placeholder="Last Name">
                        </div>
                        <div class="horizontaldate">
                            <p style="font-size: 12px;margin-bottom: 0px;">Date of birth</p>
                            <input type="date" id="birthday" name="birthday" style="width: 218px;" >
                        </div>
                        <div class="horizontaldate" style="margin-right: 0px;flex-direction: column;margin-top: -20px;">
                           <p style="font-size: 12px;margin-bottom: 0px;">Email</p>
                            <input type="email" id="email" name="email" placeholder="   jogndoe@example.com" style="width: 218px;">
                        </div>
                        <div class="horizontaldate" style="margin-right: 0px;flex-direction: column;margin-top: -20px;">
                            <p style="font-size: 12px;margin-bottom: 0px;">Phone number</p>
                             <input type="tel" id="phonenumber" name="phonenumber" placeholder="   (000)-000-0000" style="width: 218px;">
                        </div>
                        <div class="horizontaldate" style="margin-right: 0px; flex-direction: column; margin-top: -20px;">
                            <p style="font-size: 12px; margin-bottom: 0px;">Message for the Office</p>
                            <textarea id="messagetooffice" name="messagetooffice" placeholder="  "
                                      style="width: 235px; height: 100px; padding: 10px; box-sizing: border-box; resize: none;border: 2px solid #f3f3f3;border-radius: 5px;background-color: #f3f3f3;"></textarea>
                        </div>
                        
                        
                    </div>
                
                    <div class="previewsandforwardbutton" >
                        <button id="backstep4"><   Back</button>
                        <button id="forwardstep4">Submit  ></button>
                    </div>
                </div>
        </div>
        </div>
        <div id="step5" style="display: none;">
            <div class="containterofcontent">
                <div class="topnvbar">
                    <button><</button>
                    <button>x</button>
                </div>
                <div class="welcomemessage" id="custom-welcome-message">
                    <p id="custom-thank-you-message">Thank You</p>
                </div>
                
                <div class="container">
                    <div class="progressbar">
                        <div class="progressstep4"></div>
                        <div class="step step-1">1</div>
                        <div class="step step-2">2</div>
                        <div class="step step-3">3</div>
                        <div class="step step-4">4</div>
                    </div>
                </div>
                <div class="step5middlecontainer">
                    <p>Our team will reach out to you with a short phone call to confirm your appointment time.</p>
                    <p>Feel free to explore other areas of our online office.</p>
                    <p>If you have any other questions before your appointment, chat with our Assistant.</p>
                    <p>For emergencies, or other needs, please call the office directly.</p>
                </div>
        
                <div class="step5button">
        
                </div>
            </div> 
        </div>
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
