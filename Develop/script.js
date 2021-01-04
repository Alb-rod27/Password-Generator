// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  passwordLengthPrompt = window.prompt(
   "Enter password length"
  );

  if (
    passwordLengthPrompt === null || 
    passwordLengthPrompt  < 8 ||
    passwordLengthPrompt  > 128
   ) { 
     window.alert("Must select minimum 8 characters, but no more than 128 characters long.")

  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

