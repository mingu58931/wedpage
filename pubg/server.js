document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("message-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById("message-input");
    const messageText = inputField.value.trim();

    if (messageText !== "") {
        displayMessage(messageText, 'user-message');
        inputField.value = ""; // 메시지 입력창 비우기
        setTimeout(() => {
            displayMessage("봇: 메시지를 받았습니다.", 'bot-message');
        }, 1000);
    }
}

function displayMessage(message, type) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", type);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight; // 자동으로 가장 아래로 스크롤
}
