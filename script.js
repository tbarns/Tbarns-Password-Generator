// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "="]; 
var numbers =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordLength = window.prompt("how long?")

console.log(passwordLength)


function askUser(){
  var generatePassword = getCharSet(function()


  if(passwordLength > 8 || passwordLength < 128) {
    askUser()};

  else
)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//there needs to be logical statemtns that inlcude or exldue the 4 types of charecters and those need to be added to password text variabele
  // if (passwordLength )

  



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
