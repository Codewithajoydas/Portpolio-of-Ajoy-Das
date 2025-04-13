let pass = document.getElementById("pass");

let special = "!@#$%^&*()_+[]{}|;:,.<>?";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";

// Password Generation Function
let password = (length = 12) => {
  // Combine all character sets
  let allChars = special + upper + lower + num;

  // Create a variable to store the generated password
  let generatedPassword = "";

  // Generate the password by picking random characters
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];
  }

  // Set the generated password to the input field
    pass.innerHTML = generatedPassword;
    // Optional: Copy to clipboard
    
};

// Call password function to generate password (e.g., 12 characters)
let copyPassword = () => {
  // Select the text field
  // Copy the text inside the text field
navigator.clipboard.writeText(pass.innerHTML);
  // Optional: Show a message or alert to inform the user the password is copied
  alert("Password copied to clipboard!");
};

// Call password function to generate password (e.g., 12 characters)