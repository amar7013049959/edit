function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  if (input.value.trim() === "") return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = input.value;
  chatBox.appendChild(userMsg);

  // AI reply (demo response)
  const aiMsg = document.createElement("div");
  aiMsg.className = "ai-msg";
  aiMsg.innerText =
    "✅ Editing suggestion: Try improving clarity and grammar. (AI API can be connected here)";
  chatBox.appendChild(aiMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
