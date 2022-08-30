// cleaner version of script + s if i want to use this 


// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "="]; 
var numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
    var passwordLength = window.prompt("How many characters would you like to use?")
      console.log(passwordLength)
    if(passwordLength > 8 || passwordLength < 128) {
       window.prompt("INVALID INPUT! Password must contain between 8 - 128 charecters.")
    } 
    else{
    }

    {
 window.confirm("Would you like to use UPPERCASE?");


 window.confirm("Would you like to use lowercase?");

 window.confirm("Would you like to use numbers?");

 window.confirm("Would you like to use special characters?");
    }
  
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

