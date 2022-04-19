// Assignment code here

// Password input 
function writePassword() {
  var password = generatePassword();
  var passwordText =  document.querySelector("#password");
  passwordText.value = password;
};

// get refrence for the generator element
var generateBtn = document.querySelector("#generate");

// add event listener
generateBtn.addEventListener("click", writePassword);

// Variables 
var specialCharacters = "!@#$%^&*();:<>+=-";
var numberCharacters = "0123456789";
var lowercaseCharacters ="abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// function to prompt user password options
function generatePassword() {
  var password = "";
  var passwordCharset = "";

  // conditional statment to check if password is between 8-128 characters
  var passwordLength = window.prompt(" How many chararters would you like your password to be?");
  
  if (Number(passwordLength < 8) | Number(passwordLength > 128) | isNaN(passwordLength)) {
    window.alert("Your passowrd is not a valid lenght! (8-128)");
    return;
  }

  // prompt character type for passwords (numbers, lower Case, upper case, and special characters)
  var characterSetChoice1 = window.confirm("Would you like to include numbers?");
  if (characterSetChoice1) {passwordCharset += numberCharacters; }

  var characterSetChoice2 = window.confirm("Would you like to include lowercase letters?");
  if (characterSetChoice2) {passwordCharset += lowercaseCharacters; }

  var characterSetChoice3 = window.confirm("Would you like to include upper case letters?");
  if (characterSetChoice3) {passwordCharset += uppercaseCharacters; }

  var characterSetChoice4 = window.confirm("Would you like to include special characters?");
  if (characterSetChoice4) {passwordCharset += specialCharacters; }

  // Conditional statment incase user does not select any type of character
  if (passwordCharset === "") {
    window.alert("You must choose atleaset one option.");
  }

  if(passwordLength >=8 && passwordLength <=128) {
    for(var i = 0; i < passwordLength; i++) {
      password += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    };
    return password;
  };
};