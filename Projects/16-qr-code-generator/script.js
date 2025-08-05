let btn = document.getElementById("btn");
let qrContainer = document.getElementById("qr-container");

btn.addEventListener("click", () => {
  let text = document.getElementById("text").value;
  if (text) {
    // Ensure text is not empty
    let qr = document.createElement("img");
    qr.alt = "QR Code Loading...";
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      text
    )}`;

    // Clear the previous QR code if exists
    qrContainer.innerHTML = "";

    // Append the new QR code image to the container
    qrContainer.appendChild(qr);
  } else {
    alert("Please enter some text!");
  }
});
