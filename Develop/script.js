// Assignment code here

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
// password threshold 
  var computeThreshold = window.prompt("How many characters do you want in your password? Please choose a number between 8 and 128?");   

// uppercase prompt
  var computeUpperCase = window.prompt ("Do you want uppercase letters?");

  // lower case prompt 
  var computeLowerCase = window.prompt ("Do you want lower case letters?");

  // numeric values prompt
  var computerNumericValues = window.prompt ("Do you want numbers?");

  // special characters
  var computeSpecialChar = window.prompt ("Do you want special characters?");
 
}

// how many characters


// uppercase prompt
function computeUpperCase() {
  var promptSelection = prompt (
    "Do you want uppercase letters in your password?");

    var passwordLength = Number.parseInt(promptResponse, 10);
}

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



