// Assignment code here
console.log()
// variables
function generatePassword() {
  // var generateBtn = document.querySelector("generate"); 
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numericValues = "0123456789";
  var specialChar = "~!@#$%^&*()_+?";
  var charThreshold = computeThreshold();
}
//intro hello

function generatePassword() {
  window.alert("Welcome to password generator!");
}

// create yes or no prompts
// how many characters
function computeCharThreshold() {
  charThreshold.prompt("How many characters would you like your password to be? Please choose a number between 8 and 128");
  
}

// uppercase prompt
function computeUpperCase() {
  var promptSelection = prompt (
    "Do you want uppercase letters in your password?")
}

// lower case prompt


// numeric values prompt


// specialChar


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



