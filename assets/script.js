// password criteria functions begin
var pwLength = function () {
  // ask if password should contain both upper and lower case
  var promptLength = window.Number(prompt("How many characters should this password contain? Please choose a number between 8 and 128."));
  // convert answer from prompt to an actual number
  promptLength = parseInt(promptLength);
  // validate prompt answer
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return pwLength();
  }
  else {
    return promptLength;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var passwordText = document.querySelector("#password");

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var numeric = "0123456789";

  var special = "!$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var passwordLength = pwLength();
  
  var isLowerCase = confirm("Does your password need lowercase characters?")

  var isUpperCase = confirm("Does your password need uppercase characters?")

  var isNumeric = confirm("Does your password need numeric characters?")

  var isSpecial = confirm("Does your password need special characters?")

  var charSet = "" 

  if (isLowerCase) {
    charSet += lowerCase;
  }

  if (isUpperCase) {
    charSet += upperCase;
  }

  if (isNumeric) {
    charSet += numeric;
  }

  if (isSpecial) {
    charSet += special;
  }
  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    alert("No character types were selected, please select a minimum of one character type.")
    return writePassword();
  }
  var retVal = "";
  for (var i = 0; i < passwordLength; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.random() * charSet.length);
  }
 
  passwordText.value = retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);