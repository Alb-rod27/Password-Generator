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

  } else{
    let upperCaseCheck = window.confirm("Do you want to select Upper Case letters in your password?")
    let lowerCaseCheck = window.confirm("Do you want to select Lower Case letters in your password?")
    let numericCaseCheck = window.confirm("Do you want to select a Number in your password?")
    let specialCharactersCheck = window.confirm("Do you want to add a special character in your password?")


    var password = generatePassword(passwordLengthPrompt, upperCaseCheck, lowerCaseCheck, numericCaseCheck, specialCharactersCheck);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword(passwordLength, upperCheck, lowerCheck, numericCheck, specialCheck) {
  var upperCasePassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCasePassword = "abcdefghijklmnopqrstuvwxyz";
  var numericCasePassword = "0123456789";
  var specialCharactersPassword = "#$!@!$^&";
  let password = "";


  for (let i = 0; i < passwordLength; i++)
  {
  let randomNumber = Math.floor(Math.random() * 4 + 1) 
  if (randomNumber === 1 && upperCheck)
  {
    password += upperCasePassword[Math.floor(Math.random() * upperCasePassword.length)]
  } 
  if (randomNumber === 2 && lowerCheck){ 
  password += lowerCasePassword[Math.floor(Math.random() * lowerCasePassword.length)]
  }
  if (randomNumber === 3 && numericCheck){
    password += numericCasePassword[Math.floor(Math.random() * numericCasePassword.length)]
  }
  if (randomNumber === 4 && specialCheck)
  {
    password += specialCharactersPassword[Math.floor(Math.random() * specialCharactersPassword.length)]
  }
  console.log(password)
}
  window.alert("Password is " + password);
  return password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

