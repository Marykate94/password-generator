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
  charThreshold = number.parseInt(charThreshold);
  password += charThreshold
  // return charThreshold();
  console.log(charThreshold);
  // console log shows this is not working
 }


 lowerCaseSelect = confirm("Would you like to use lowercase letters?");
 if (lowerCaseSelect) {
  password += lowerCase
}
// console log showed this is working

 upperCaseSelect = confirm("Would you like to use uppercase letters?");
 if (upperCaseSelect) {
  password += upperCase
 }
 //console log showed this is working

 specialCharSelect = confirm("Would you like to use special characters?");
 if (specialCharSelect) {
  password += specialChar
 }
 // console log showed this is working

 numericSelect = confirm("Would you like to use numbers?");
 if (numericSelect) {
  password += numeric
 }
 //console log showed this is working

 if(!numericSelect && !specialCharSelect && !upperCaseSelect && !lowerCaseSelect); {
  alert('You must select "confirm" from at least one of the following prompts');
 } // this is not generating correctly

 

};
getUserChoices();

  function generatePassword() {
    for (var i = 0; i < charThreshold; i++) {
     password += (Math.floor(Math.random() * length)); // this needs to be fixed - not currently working
   }
   var results = "";
   var passChar = "";
   var guarChar = "";

  }
  generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

  }
  
  generateBtn.addEventListener("click", writePassword);