const colorThief = new ColorThief();

let images = () => {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      data.data.memes.forEach((element) => {
        const downloadBtn = document.createElement("a");
        const container = document.createElement("div");
        container.className = "item";

        const img = document.createElement("img");
        img.src = element.url;
        img.alt = element.name;
        img.className = "img";
        img.crossOrigin = "anonymous"; // Required for Color Thief

        const name = document.createElement("span");
        name.innerText = element.name;

        img.addEventListener("load", () => {
          try {
            const palette = colorThief.getPalette(img, 5); // Get top 5 dominant colors
            // Example: use second most dominant color
            const secondColor = palette[1];
            const Color = palette[0];
            container.style.background = ` rgb(${secondColor.join(",")})`;
            // downloadBtn.style.border = `1px solid rgb(${Color.join(",")})`;
          } catch (err) {
            console.warn("Color extraction failed:", err);
          }

          // Download button logic
          fetch(element.url)
            .then((res) => res.blob())
            .then((blob) => {
              const blobUrl = URL.createObjectURL(blob);
              downloadBtn.href = blobUrl;
              downloadBtn.download = "meme.jpg";
              downloadBtn.innerText = "⬇️ Download Meme";
              downloadBtn.title = "Download the  meme"
              container.appendChild(downloadBtn);
            });
        });

        container.appendChild(img);
        container.appendChild(name);
        document.getElementById("container").appendChild(container);
      });
    })
    .catch((error) => {
      console.error("Error fetching memes: ", error);
    });
};

images();
