const dscc = require('@google/dscc');
const d3 = require('d3');

const drawChatbox = () => {
    const container = document.getElementById('viz');

    // Clear previous content
    container.innerHTML = '';

    // Chatbox UI
    const chatContainer = document.createElement("div");
    chatContainer.innerHTML = `
        <style>
            #chat-container {
                width: 100%;
                height: 400px;
                border: 1px solid #ccc;
                padding: 10px;
                display: flex;
                flex-direction: column;
                font-family: Arial, sans-serif;
                background-color: white;
            }
            #chat-box {
                flex: 1;
                overflow-y: auto;
                border-bottom: 1px solid #ddd;
                padding: 5px;
            }
            #input-area {
                display: flex;
                padding: 5px;
            }
            #user-input {
                flex: 1;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 5px;
                outline: none;
            }
            #send-btn {
                margin-left: 5px;
                padding: 8px 12px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            #send-btn:hover {
                background-color: #0056b3;
            }
        </style>
        
        <div id="chat-container">
            <div id="chat-box"></div>
            <div id="input-area">
                <input type="text" id="user-input" placeholder="Type a message..." />
                <button id="send-btn">Send</button>
            </div>
        </div>
    `;

    container.appendChild(chatContainer);
};

// Render the visualization
dscc.subscribeToData(drawChatbox, {transform: dscc.objectTransform});
