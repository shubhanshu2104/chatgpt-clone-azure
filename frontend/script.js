async function sendMessage() {

  const input = document.getElementById("message");
  const chatBox = document.getElementById("chat-box");

  const message = input.value;

  if (!message) return;

  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerText = message;

  chatBox.appendChild(userDiv);

  input.value = "";

  const res = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  });

  const data = await res.json();

  const botDiv = document.createElement("div");
  botDiv.className = "message bot";
  botDiv.innerText = data.response;

  chatBox.appendChild(botDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}