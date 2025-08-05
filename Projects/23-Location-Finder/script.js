let textToCopy = "";

const getLoc = () => {
  navigator.geolocation.getCurrentPosition((po) => {
    let long = document.getElementById("long");
    let lat = document.getElementById("lat");
    long.innerText = "Longitude: " + po.coords.longitude;
    lat.innerText = "Latitude: " + po.coords.latitude;
    textToCopy = `${po.coords.longitude}, ${po.coords.latitude}`;
  });
};

const copyLoc = () => {
  if (textToCopy) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Location copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy location:", err);
      });
  } else {
    alert("Location not available yet.");
  }
};

getLoc();
