(function() {
    // 1. Inject Chatbot HTML
    var chatbotContainer = document.createElement('div');
    const staticUrls = {
        closeIcon: 'https://chatbotnewv3-production.up.railway.app/static/ico_chatbot_close.png',
        bannerOpen: 'https://chatbotnewv3-production.up.railway.app/static/banner_open.png',
        boxOpened: 'https://chatbotnewv3-production.up.railway.app/static/box_opened.png',
        microphone: 'https://chatbotnewv3-production.up.railway.app/static/microphone.png',
        textIcon: 'https://chatbotnewv3-production.up.railway.app/static/text.png',
        newRequest: 'https://chatbotnewv3-production.up.railway.app/static/newrequeststransparent.webp'
    };
    chatbotContainer.id = 'my-chatbot';
    chatbotContainer.innerHTML = `
        <div id="menu">
        <div class="menu-text" id="spanclick">
            how may I help you 
        </div>
        <!-- Load image with Django's static template tag -->
         <img src="${staticUrls.bannerOpen}" id="menu-icon" alt="Close Icon"
         data-banner-open="${staticUrls.bannerOpen}"
         data-ico-close="${staticUrls.closeIcon}"
         data-box-opened="${staticUrls.boxOpened}" />
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
        html, body {
            
            font-family: 'Lexend Deca', sans-serif;
            margin: 0;
            padding: 0;
            font-family: 'Lexend Deca', sans-serif;
            height: 100%;
            overflow: hidden;
        }

        #menu {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 500;
            height: 50px;
            
            
            overflow: hidden;
            background: transparent;
            
            transition: all .5s ease;
            display: flex;
            align-items: center;
        }

        #menu-icon {
            width: 50px;
            height: 50px;
            cursor: pointer;
            background-color: transparent;
        }

        .menu-text {
            color: black;
            font-size: 1.25em;
            font-weight: bold;
            padding: 0 20px;
            display: none; /* Initially hide the text */
            white-space: nowrap;
            transition: .5s ease;
        }

        .menu-text.show {
            display: block; /* Show the text when the menu is toggled */
            background-color: #0088cc;
            height: 50px;
            margin-right: -21px;
            padding-right: 50px;
            padding-top: 25px;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
        }

        .menu-text:hover {
            cursor: pointer;
        }

        .weirdcarracter {
            font-size: 25px;
        }

        #box {
            position: fixed;
            bottom: 90px; /* Position above the icon */
            right: 30px;
            width: 300px;
            height: 0; /* Start with height 0 */
            
        
            
            display: none; /* Initially hidden */
            z-index: 600; /* Ensure it's above the menu */
            overflow: hidden; /* Hide overflow content */
            transition: height 0.5s ease; /* Animate the height change */
            
            
        
            border-radius: 15px;
            background-color: rgba(250, 250, 250, 0.5); 
            backdrop-filter:blur(5px) ;
            border: 2px solid black;
        }

        #box.show {
            height: 470px; /* Set the height when showing the box */
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @keyframes rotate-icon {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .rotate {
            animation: rotate-icon 0.5s ease-in-out;
        }

        .rotate-back {
            animation: rotate-icon 0.5s ease-in-out reverse;
        }

        .contentchatbot{
            display: flex;
            flex-direction: column;
            
            width: 100%;
            padding: 4px;
            height: 100%;
            margin: 4px;
            margin-top:20px ;

        }
        .navbarchatbot{
            text-align:right;
        }

        .navbarchatbot button{
            background-color: transparent;
            border: none;
            color: black;
            font-size: 14;
            font-weight: 600;
        }
        .welcomemessage{
            text-align: center;
            font-size: 25px;
            font-weight: 600;
        }
        .welcomemessage p{
            margin-bottom: -20px;
        }
        .widjets {
            display: flex;
            flex-direction: column;
        
            margin: 32px;
            margin-top: 50px;
        }

        .chat{
            display: flex;
            flex-direction: row;
            background-color: white;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
            border-radius: 5px;
            height: 170px;
        }


        .chat img{
            width: 25px;
            height: 25px;
        }
        .appointment{
            display: flex;
            flex-direction: row;
            background-color: white;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
            border-radius: 5px;
            margin-top: 30px;
        }

        .appointment img{
            width: 40px;
            height:40px;
            margin-top: 20%;
        }

        .chat_inner_left{
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .chat_inner_right{
            text-align: center;
            margin-top: 2%;
            font-weight: 600;
        }
        #chat_right_inner_id {
            padding-top: 50px;
            
        }

        .chat_immages{
            display: flex;
            flex-direction: column;
            background-color: #0088cc;
            margin: 8px;
            width: 100%;
            align-items: center;
            border-radius: 8px;
            margin-bottom: -8px;
        }
        .chat_immages img{
            margin: 8px;

        }
        .chat_immages p{
            font-size: 10px;
            text-align: center;
            
        }

        .hidden {
            display: none;
        }

        .contentmap {
            height: 100%;
            width: 100%;
            display: none; /* Hide by default */
        }

        .hidden {
            display: none;
        }
        .containterofcontent {
            width: calc(100% - 16px);
            height: 100%;
            margin-right: 8px;
            margin-top: 8px;
            margin-bottom: 8px;
            margin-left: 8px;
            
            display: flex;
            flex-direction: column;
        }


        .progressbar {
            background-color: #f3f3f3;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            height: 20px;
            margin: 8px 20px;
        }

        .progress {
            width: 30%;
            background-color: #0088cc;
            height: 100%;
            border-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            transition: width 0.3s ease;
        }

        .step {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 25px;
            height: 25px;
            line-height: 25px;
            border-radius: 50%;
            color: white;
            text-align: center;
            font-weight: bold;
            font-size: 1rem;
        }

        /* Step positioning */
        .step-1 { left: 23%; }
        .step-2 { left: 48%; }
        .step-3 { left: 73%; }
        .step-4 { left: 95%; }

        /* Responsive step positioning */
        @media (max-width: 600px) {
            .progressbar {
                height: 30px;
            }

            .step {
                width: 20px;
                height: 20px;
                line-height: 20px;
                font-size: 0.8rem;
            }
        }

        @media (max-width: 400px) {
            .progressbar {
                height: 25px;
            }

            .step {
                width: 18px;
                height: 18px;
                line-height: 18px;
                font-size: 0.7rem;
            }
        }

        .welcomemessage {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .welcomemessage p {
            margin-bottom: -10px;
        }

        .smallertext {
            text-align: center;
            font-size: 1rem;
        }

        .typeofwhydidyoucomein {
            text-align: center;
            display: flex;
            flex-direction: column;
            margin: 0 20px;
            
            overflow-y: auto;
        }
        .typeofwhydidyoucomein button:hover{
            color:black;
            border:1px solid black;
            cursor: pointer;
        }

        

        .typeofwhydidyoucomein button {
            color: #bcbcbc;
            border: none;
            padding: 8px;
            border-radius: 5px;
            margin-bottom: 4px;
            max-width: 100%;
            background: #f9f9f9;
            font-size: 1rem;
            border: 1px solid #bcbcbc;
            
        }

        .previewsandforwardbutton {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
        }

        .previewsandforwardbutton button {
            color: #555;
            border: none;
            padding: 8px 16px;
            border-radius: 5px;
            font-weight: 600;
            background: #f9f9f9;
            font-size: 1rem;
            
        }
        .previewsandforwardbutton button:hover{
            cursor: pointer;
        }
        /* Media Queries for smaller screens */
        @media (max-width: 400px) {
            .containterofthecontainer {
                width: 95%;
                padding: 10px;
            }

            .welcomemessage {
                font-size: 1.2rem;
            }

            .smallertext {
                font-size: 0.9rem;
            }

            .typeofwhydidyoucomein button {
                font-size: 0.9rem;
                
            }

            .previewsandforwardbutton button {
                font-size: 0.9rem;
                padding: 6px 12px;
                
            }
        }
        .horizontalblocs{
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
            margin: 16px;
            margin-right: 8px;
            
        }
        .horizontalblocs input{
            color: black;
            border: none;
            padding: 8px ;
            border-radius: 5px;
            font-weight: 200;
            background: #f9f9f9;
            font-size: 1rem;
            width: 100px;
            margin-right: 16px;
            text-align: center;
            margin-bottom: -10px;
           
            
        }
        .horizontalblocs button{
            color: #555;
            border: none;
            padding: 8px ;
            border-radius: 5px;
            font-weight: 200;
            background: #f9f9f9;
            font-size: 1rem;
            width: 110px;
            
            text-align: center;
            
        }

        .horizontalblocs button:hover{
            cursor: pointer;
            
        }
        .selected {
            background-color: burlywood; /* Example highlight color */
            color: red; /* Change text color if needed */
        }

        /* Define the initial hidden state for the boxes */
        
        /* Define a fade-in animation */
        .fade-in {
            animation: fadeIn 0.5s forwards;
        }

        /* Define a fade-out animation */
        .fade-out {
            animation: fadeOut 0.5s forwards;
        }

        /* Keyframes for fading in */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Keyframes for fading out */
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }

        .patientBtn.active {
            background-color: #0088cc; /* Example color for active state */
            color: white; /* Example text color for active state */
        }

        .progressstep2{
            width: 60%;
            background-color: #0088cc;
            height: 100%;
            border-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            transition: width 0.3s ease;
        }

        
        .typeofbtn.clicked {
            background-color: #0088cc; /* Background color when clicked */
            color: #fff; /* Text color when clicked */
            
        }

        

        .weekcalendar {
            display: flex;
            flex-direction: row;
            border: 2px solid #f3f3f3;
            gap: 35%;
            margin: 8px;
            margin-left: 8px;
            background-color: #f3f3f3;
            border-radius: 5px;
            height: 25px;
            padding-top: 4px;
        }

        .weekcalendar p {
            margin-left: 8px;
            margin-top: 0px;
            color: #555;
        }

        .weekcalendar button {
            border-radius: 5px;
            border: none;
            margin-top: 0px;
            border: 1px solid white;
            height: 20px;
            color: #555;
        }

        .weekcalendar button:hover {
            border: 1px solid black;
            color: black;
            cursor: pointer;
        }
        
        .weekcalendar p:hover{
            cursor:pointer;
        }
        .progressstep3{
            width: 80%;
            background-color: #0088cc;
            height: 100%;
            border-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            transition: width 0.3s ease;
        }

        .scrollablecontainer{
            max-height: 440px;
            height: 390px;
            
            overflow-y: auto;
            overflow-x: hidden;
        }

        
        .scrollablecontainer::-webkit-scrollbar {
            width: 5px;
            background-color: transparent;
            overflow-x: hidden;
        }

        .scrollablecontainer::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        .scrollablecontainer::-webkit-scrollbar-thumb {
            background: #bcbcbc;
            border-radius: 3px;
            color: white;
        }

        .horizontaldate{
            margin: 16px;
            margin-top: 32px;
            margin-bottom: 32px;
        }

        .horizontaldate input{
            
            padding: 8px;
            border: 2px solid #f3f3f3;
            background-color: #f3f3f3;
            border-radius: 5px;
            color: #555;
        }
        .progressstep4{
            width: 100%;
            background-color: #0088cc;
            height: 100%;
            border-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            transition: width 0.3s ease;
        }

        .topnvbar{

            display: flex;
            flex-direction: row;
            gap:87%;
            margin:4px;
            margin-top: -20px;
        }
        .topnvbar button{
            border: none;
            background-color: transparent;
            font-weight: 600;
        }
        .invisible{
            color: transparent;
        }

        .step5middlecontainer{
            border: 2px solid #f3f3f3;
            background-color: #f3f3f3;
            border-radius:5px;
            width:auto;
            height: 235px;
            margin: 16px;
            font-size: 14px;
            padding: 8px;
        }
        .step5middlecontainer p{
            margin-bottom: 4px;
        }
    `;
    document.head.appendChild(style);

    // 3. Add Chatbot JavaScript Logic
    document.addEventListener("DOMContentLoaded", function() {
            var menuIcon = document.getElementById("menu-icon");
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
