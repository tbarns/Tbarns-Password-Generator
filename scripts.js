// Assignment Code
var generateBtn = document.querySelector("#generate");

//created a function to populate the generatePassword value 
function generatePassword() {
  var passwordPromt = window.prompt("How many characters would you like to use?")
  var passwordLength = parseInt(passwordPromt)

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("INVALID INPUT! Password must contain between 8 - 128 characters.")
    return
  }
  if (!passwordLength){
    window.alert("ERROR! You must designate a password length to continue!!")
    return
  }
  
  var upperConfirm = window.confirm("Would you like to use UPPERCASE?");
  console.log(upperConfirm)
  var lowerConfirm = window.confirm("Would you like to use lowercase?");
  console.log(lowerConfirm)
  var numberConfirm = window.confirm("Would you like to use numbers?");
  console.log(numberConfirm)
  var specialConfirm = window.confirm("Would you like to use special characters?");
  console.log(specialConfirm)
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialChar = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "="];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var userChoices = []

  // All 4 selected
  if (upperConfirm && lowerConfirm && specialConfirm && numberConfirm) {
    userChoices = userChoices.concat(upperCase, lowerCase, specialChar, numbers)
  }

  //Only 3 selected
  else if (upperConfirm && lowerConfirm && specialConfirm) {
    userChoices = userChoices.concat(upperCase, lowerCase, specialChar)
  }
  else if (upperConfirm && lowerConfirm && numberConfirm) {
    userChoices = userChoices.concat(upperCase, lowerCase, numbers)
  }
  else if (upperConfirm && specialConfirm && numberConfirm) {
    userChoices = userChoices.concat(upperCase, specialChar, numbers)
  }
  else if (lowerConfirm && specialConfirm && numberConfirm) {
    userChoices = userChoices.concat(lowerCase, specialChar, numbers)
  }

  //only 2 selected
  else if (specialConfirm && numberConfirm) {
    userChoices = userChoices.concat(specialChar, numbers)
  }
  else if (upperConfirm && lowerConfirm) {
    userChoices = userChoices.concat(upperCase, lowerCase,)
  }
  else if (lowerConfirm && specialConfirm) {
    userChoices = userChoices.concat(lowerCase, specialChar,)
  }
  else if (lowerConfirm && numberConfirm) {
    userChoices = userChoices.concat(lowerCase, numbers)
  }
  else if (upperConfirm && numberConfirm) {
    userChoices = userChoices.concat(upperCase, numbers)
  }
  else if (upperConfirm && specialConfirm) {
    userChoices = userChoices.concat(upperCase, specialChar,)
  }

  //only 1 selected
  else if (upperConfirm) {
    userChoices = userChoices.concat(upperCase)
  } else if (lowerConfirm) {
    userChoices = userChoices.concat(lowerCase)
  } else if (specialConfirm) {
    userChoices = userChoices.concat(specialChar)
  } else if (numberConfirm) {
    userChoices = userChoices.concat(numbers)
  }

  //if none selected
  else {
    window.alert("Invalid input! You must select one or more option.")
    return
  }
  var newPassword = []
  
   //for loop to genereate random combination of user choices
  for (var i = 0; i < passwordLength; i++) {
    var randomChoices = Math.floor(Math.random() * userChoices.length )
    newPassword +=userChoices[randomChoices]  
  }
  return newPassword;
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

