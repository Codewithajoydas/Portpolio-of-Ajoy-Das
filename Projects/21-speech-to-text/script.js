function startRecognition() {
  // Check browser support
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US"; // you can change to 'hi-IN', 'bn-IN', etc.
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    document.getElementById("output").innerText = "Listening...";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("output").innerText = "You said: " + transcript;
  };

  recognition.onerror = (event) => {
    document.getElementById("output").innerText = "Error: " + event.error;
  };

  recognition.start();
}
