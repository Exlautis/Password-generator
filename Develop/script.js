// Assignment code here





// functions for generator
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
  }
  function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }
  function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }
  function getRandomSymbol(){
    var symbols = '!@#$%^&*()[]';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword(upper, lower, number, symbol, length) {
    window.confirm("Would you like to add Uppercase letters?")
    window.confirm("Would you like to add Lowercase letters?");
    window.confirm("Would you like to add numbers?");
    window.confirm("Would you like to add Special Characters?")
    var password = generatePassword();
    var passwordText = document.querySelector("");
  
    passwordText.value = password;
  
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);