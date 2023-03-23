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
let generateBtn = document.querySelector("#generate");
 
let specialChar = ["!", ".", "/", "$", "%", "^", "&", "*", "<", ">", "-", "+", ","];
let numbers = [1,2,3,4,5,6,7,8,9,0];
let alphabetLowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabetUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


function generatePassword() {
  
  let userOptions = window.prompt("Enter a number for length of password from 8 to 128.");

  let passwordChoice = parseInt(userOptions);

  let wantsNumbers = false;
  let wantsLowercase = false;
  let wantsUppercase = false;
  let wantsSpecialCharacters = false;


  if (window.confirm("Do you want numbers in your password?")) {
    wantsNumbers = true
  }
  if (window.confirm("Do you want lowercase letters in your password?")) {
    wantsLowercase = true
  }
  if (window.confirm("Do you want uppercase letters in your password?")) {
    wantsUppercase = true
  }
  if (window.confirm("Do you want special characters in your password?")) {
    wantsSpecialCharacters = true
  }
  if (wantsNumbers) {
    characters = characters.concat(numbers) 
  }
  let characters = [];
  if (wantsLowercase) {
    characters = characters.concat(alphabetLowerCase)
  }

  if (wantsUppercase) {
    characters = characters.concat(alphabetUpperCase)
  }

  if (wantsSpecialCharacters) {
    characters = characters.concat(specialChar)
  }
  
  }

// [Math.floor(Math.random() * choices.length)];

//take 8 to 128 and for loop through those numbers
/*take math.random on charactes for the amount of time that the user put in
  "if user wants ten numbers, generate 10 random index for the array"
*/

  return (characters);
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);