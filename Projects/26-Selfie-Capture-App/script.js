let vdo = document.getElementById("video");
let btn = document.getElementById("btn");
let saveBtn = document.getElementById("saveBtn");
let canvas = document.getElementById("canvas");

window.onload = () => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((st) => {
        vdo.srcObject = st;
      })
      .catch((err) => {
        alert("Error accessing camera: " + err.message);
      });
  } else {
    alert("getUserMedia not supported");
  }
};

saveBtn.addEventListener("click", () => {
  canvas.width = vdo.videoWidth;
  canvas.height = vdo.videoHeight;
  canvas.getContext("2d").drawImage(vdo, 0, 0);

  let link = document.createElement("a");
  link.download = "snapshot.png";
  link.href = canvas.toDataURL();
  link.click();
});
