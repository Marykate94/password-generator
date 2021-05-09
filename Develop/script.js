// Assignment code here

// variables 
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numericValues = "0123456789";
  var specialChar = "~!@#$%^&*()_+?";
  var charThreshold = computeThreshold();
  var finalPassword = "";
}
//intro hello

function generatePassword() {
  // password threshold 
  var computeThreshold = prompt("How many characters do you want in your password? Please choose a number between 8 and 128?");

  // uppercase prompt
  var computeUpperCase = confirm("Do you want uppercase letters?");

  // lower case prompt 
  var computeLowerCase = confirm("Do you want lower case letters?");


  // numeric values prompt
    numericValues = confirm("Do you want numbers?");
    console.log(numericValues);

  // special characters
  var computeSpecialChar = confirm("Do you want special characters?");

  for (var i = 0; i < computeThreshold; ++i) {
    generatePassword = finalPassword+generatePassword.charAt(Math.floor(Math.random() * size));
 }
 return generatePassword;

};


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



