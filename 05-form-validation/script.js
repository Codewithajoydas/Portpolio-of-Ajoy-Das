let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from submitting

    // Fetch values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    } else if (phone.length < 10) {
        alert("Phone number must be at least 10 digits long.");
        return;
    } else if (!/[^a-zA-Z\s]/.test(phone)) {
        alert("Phone number can only contain numbers.");
        return;
    };
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  // ✅ Name Validation
  if (name === "") {
    alert("Please enter your name.");
    return;
  }
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return;
  }
  if (!/^[a-zA-Z ]+$/.test(name)) {
    alert("Name can only contain letters and spaces.");
    return;
  }

  // ✅ Email Validation
  if (email === "") {
    alert("Please enter your email.");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // ✅ Password Validation
  if (password === "") {
    alert("Please enter your password.");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }
  if (!/[A-Z]/.test(password)) {
    alert("Password must contain at least one uppercase letter.");
    return;
  }
  if (!/[a-z]/.test(password)) {
    alert("Password must contain at least one lowercase letter.");
    return;
  }
  if (!/[0-9]/.test(password)) {
    alert("Password must contain at least one number.");
    return;
  }

  // ✅ Confirm Password Validation
  if (confirmPassword === "") {
    alert("Please confirm your password.");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // ✅ All good!
  alert("Form submitted successfully!");
  form.reset(); // Optional: Reset form fields
});
