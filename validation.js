document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("numb");
  const emailInput = document.getElementById("emailInput");
  const submitButton = document.getElementById("submit");
  const phoneResultElement = document.getElementById("phoneResult");
  const emailResultElement = document.getElementById("emailResult");

  submitButton.addEventListener("click", () => {
    console.log("Button clicked!");
    const phoneNumber = phoneInput.value;
    const email = emailInput.value;

    // Phone number validation
    if (phoneNumber.length === 11 && /^\d+$/.test(phoneNumber)) {
      phoneResultElement.innerHTML = "Valid phone number";
      phoneResultElement.style.color = "green";
    } else {
      phoneResultElement.innerHTML =
        "Invalid phone number. Please enter exactly 11 digits.";
      phoneResultElement.style.color = "red";
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      emailResultElement.innerHTML = "Valid email";
      emailResultElement.style.color = "green";
    } else {
      emailResultElement.innerHTML =
        "Invalid email. Please enter a valid email address.";
      emailResultElement.style.color = "red";
    }
  });
});

const passwordInput = document.getElementById("Password");
const confirmInput = document.getElementById("confirm");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  if (password.length < 8) {
    document.getElementById("passwordResult").innerHTML
      "Password should be at least 8 characters";
    document.getElementById("passwordResult").style.color = "red";
  } else {
    document.getElementById("passwordResult").innerHTML = "";
  }
});

confirmInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const confirm = confirmInput.value;
  if (password !== confirm) {
    document.getElementById("confirmResult").innerHTML =
      "Passwords do not match";
    document.getElementById("confirmResult").style.color = "red";
  } else {
    document.getElementById("confirmResult").innerHTML = "";
  }
});
