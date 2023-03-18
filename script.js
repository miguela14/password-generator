//Generate random password
//Password can include special characters
//Array of special characters

//window.promt to generate password (Password length)
//Password criteria- length of 8 to 128 characters, choice that includes lowercase, uppercase, numeric, and/or special characters 

//promt "enter length of charaters"
//promt "lowercase or uppercase"
//promt "numbers"
//promt "special characters"
//*make sure one prompt is true*
//alert to password
//store promts as var, at end run if statments 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);