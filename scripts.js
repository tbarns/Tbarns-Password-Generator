// cleaner version of script + s if i want to use this 


// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "="]; 
var numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



function generatePassword() {

 var passwordPromt = window.prompt("How many characters would you like to use?")

  var passwordLength = parseInt(passwordPromt)

  if(passwordLength < 8 || passwordLength > 128) {
   window.alert("INVALID INPUT! Password must contain between 8 - 128 charecters.")
    return
 } 
    
    
 var upperConfirm = window.confirm("Would you like to use UPPERCASE?");
 if(upperConfirm === true) 
 console.log(upperConfirm)



 var lowerConfirm = window.confirm("Would you like to use lowercase?");

 console.log(lowerConfirm)

 var numberConfirm = window.confirm("Would you like to use numbers?");

 console.log(numberConfirm)

 var specialConfirm = window.confirm("Would you like to use special characters?");

 console.log(specialConfirm)
    
  
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


