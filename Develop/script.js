// Assignment code here


// // create series of password criteria prompts
// var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var numericValues = ["0","1","2","3","4","5","6","7","8","9"];
// var specialChar = ["!","@","#","$","%","&","*","?"];
//  window.alert("Welcome to password generator!")
// // prompts the user to select password criteria
// // prompts to enter an upper case letter
// var upperCase = window.prompt("Please enter an upper case letter");
// // prompt user to enter a lower case letter
// var lowerCase = window.prompt("Please enter an lower case letter")
// //prompt user to enter a number between 0 and 9
// var numericValues = window.prompt("Please enter an number between 0 and 9")
// //prompt user to enter a special character
// var specialChar = window.prompt("Please select a special character");

// // prompts to enter an lower case letter


// // prompts to enter a number 


// // prompts to enter a special character 

// function checkLength() {
//   var textbox = document.getElementById("textbox");
//   if(textbox.value.length <= 128 && textbox.value.length >= 8) {
    
//   }
//   else {
//     alert("make sure the input is between 8-128 characters long")
//   }
// };

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
