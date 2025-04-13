let images = () => {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json()) // Return the parsed JSON here
    .then((data) => {
      data.data.memes.forEach((element) => {
        // Correct access to memes
        let img = document.createElement("img");
        img.src = element.url;
        img.alt = element.name;
        img.className = "img";
        img.style.width = "400px";
        img.style.height = "500px";
        img.style.margin = "10px";
        img.style.borderRadius = "10px";
        document.getElementById("container").appendChild(img);
      });
    })
    .catch((error) => {
      console.log("Error fetching memes: ", error);
    });
};

images();
