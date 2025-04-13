let tem = document.getElementById("tem");

function getWeather(latitude, longitude) {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=auto`
  )
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.current?.temperature_2m;
      if (temperature !== undefined) {
        tem.innerHTML = `Temperature: ${temperature}°C`;
      } else {
        tem.innerHTML = "❌ Weather data not available.";
      }
    })
    .catch((error) => {
      console.error("Weather fetch error:", error);
      tem.innerHTML = "⚠️ Failed to load weather data.";
    });
}

// Request location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeather(latitude, longitude);
    },
    (error) => {
      console.warn("Geolocation error:", error.message);
      tem.innerHTML = "⚠️ Geolocation failed. Using default location (Delhi)";
      // Default to Delhi
      getWeather(28.6139, 77.209);
    }
  );
} else {
  tem.innerHTML = "❌ Geolocation is not supported by this browser.";
}
