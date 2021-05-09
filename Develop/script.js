console.log("first");

// Variables
var charThreshold = 0;
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialChar = ["±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠"];
var numeric = ["1234567890"];
var password = "";


function getUserChoices() {

 charThreshold = prompt("How many characters would you like your password to contain?");

 if (charThreshold <= 7 || charThreshold >= 129) {
  alert("Password length must be between 8-128 characters Try again");
  charThreshold = parseInt(charThreshold);
  return charThreshold();
 }
 lowerCaseSelect = confirm("Would you like to use lowercase letters?");
 if (lowerCaseSelect) {
  password += lowerCase
}
 upperCaseSelect = confirm("Would you like to use uppercase letters?");
 if (upperCaseSelect) {
  password += upperCase
 }
 specialCharSelect = confirm("Would you like to use special characters?");
 if (specialCharSelect) {
  password += specialChar
 }
 numericSelect = confirm("Would you like to use numbers?");
 if (numericSelect) {
  password += numeric
 }
 if (!numericSelect && !specialCharSelect && !upperCaseSelect && !lowerCaseSelect); {
  alert('You must select "confirm" from at least one of the following prompts');
 }
 console.log(getUserChoices);

};
getUserChoices();

  function generatePassword() {
    for (var i = 0; i < charThreshold; i++) {
     password += passwordText.charAt(Math.floor(Math.random() * passwordText.length));
   }
   var results = "";
   var passChar = "";
   var guarChar = "";

  }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

  }
  
  generateBtn.addEventListener("click", writePassword);