// Dec. 27, 2023
// Random Password Generator

const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const copyPasswordIcon = document.getElementById("copy-password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Treating strings like an array
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*]~><=[";

const passwordSet = upperCase + lowerCase + number + symbol;
const passwordLength = 12;

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  let password = "";
  while (passwordLength > password.length) {
    password += passwordSet[Math.floor(Math.random() * passwordSet.length)];
  }
  passwordBox.value = password;
}

// Click 'Copy Password' -> copy the password
copyPasswordIcon.addEventListener("click", copyPassword);

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
  // document.execCommand("copy");
}
