console.log("first");

// Variable Outline
var charThreshold = 0;
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialChar = ["±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠"];
var numericValue = ["1234567890"];
var finalPassword = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Character Length Section Begin

function writePassword() {
  var passwordText = document.querySelector("#password");
  var charThreshold = prompt("How many characters would you like your password to contain?")
  passwordText.value = password;
  if (charThreshold <= 7 || charThreshold >= 129) {
    alert("Password length must be between 8-128 characters Try again");
    passLength = parseInt(charThreshold);
    return charThreshold();

  }
  lowerCaseSelect = confirm("Would you like to use lowercase letters?");
  if (lowerCaseSelect) {
    finalPassword += lowerCase
  }
  upperCaseSelect = confirm("Would you like to use uppercase letters?");
  if (upperCaseSelect) {
    finalPassword += upperCase
  }
  specialcharselect = confirm("Would you like to use special characters?");
  if (specialCharSelect) {
    finalPassword += specialChar
  }
  numericSelect = confirm("Would you like to use numbers?");
  if (numericSelect) {
    finalPassword += numeric
  }
  if(numericSelect = false){
    alert('You must select "confirm" from at least one of the following prompts');
    writePassword();
  }
  for (var i = 0; i < charThreshold; i++) {
    finalPassword += passwordText.value.charAt(Math.floor(Math.random() * passwordText.value.length));
  }

}



// Character length Section End

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);