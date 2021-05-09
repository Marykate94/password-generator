console.log("first");

// Variables
var charThreshold = 0;
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXZY"];
var specialChar = ["±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠"];
var numeric = ["0123456789"];
var password = "";


// var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var specialChar = ["±","!","@","#","$","%","^","&","*","(",")","_","+","-","=","§","£","™","¡","¢","∞","§","¶","•","ª","º","–","≠"];
// var numeric = ["1","2","3","4","5","6","7","8","9","0"];

function getUserChoices() {

 charThreshold = prompt("How many characters would you like your password to contain?");

 if (charThreshold <= 7 || charThreshold >= 129) {
  alert("Password length must be between 8-128 characters Try again");
  charThreshold = parseInt(charThreshold);
  password = charThreshold
  // return charThreshold();
  console.log(charThreshold);
  // console log shows this is not working
 }


 lowerCaseSelect = confirm("Would you like to use lowercase letters?");
 if (lowerCaseSelect) {
  password = password.concat(lowerCase)
}
// console log showed this is working

 upperCaseSelect = confirm("Would you like to use uppercase letters?");
 if (upperCaseSelect) {
  password = password.concat (upperCase)
 }
 //console log showed this is working

 specialCharSelect = confirm("Would you like to use special characters?");
 if (specialCharSelect) {
  password = password.concat(specialChar)
  console.log(password);
 }
 // console log showed this is working

 numericSelect = confirm("Would you like to use numbers?");
 if (numericSelect) {
  password = password.concat(numeric)
  console.log(password);
 }
 //console log showed this is working
  if (!numericSelect && !specialCharSelect && !upperCaseSelect && !lowerCaseSelect); {
    
    }
  };

getUserChoices();

  function generatePassword() {
    let myPassword= "";

    for (var i = 0; i < charThreshold; i++) {
      myPassword += password[Math.floor(Math.random() * password.length)];
    }
    console.log(myPassword);

    return myPassword;
   };


   //  var results = "";
  //  var passChar = "";
  //  var guarChar = "";

  
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