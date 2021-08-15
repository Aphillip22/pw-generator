// password criteria functions begin
var charLength = function() {
    // ask if password should contain both upper and lower case
      var promptLength = window.Number(prompt("How many characters should this password contain? Please choose a number between 8 and 128."));
      // validate prompt answer
      if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
        window.alert("You need to provide a valid answer! Please try again.");
        // use return to call it again and stop the rest of this function from running
        return charLength();
      }
      else {
        charType();
      }
  }
  var charType = function() {
    //ask for character type
    var promptType = window.prompt("Enter a character type: special, numeric, uppercase, lowercase.");
    // convert promptType to all lowercase
    var promptType = promptType.toLowerCase();
    // validate prompt answer
    if (promptType === "" || promptType === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      // use return to call it again and stop the rest of this function from running
      return charType();
    }
    else {
      writePassword();
    }
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  
    //generate password
  function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    //evaluate character type
    var charSet = "";
    if( charType === "lowercase" ) {
      charSet = "abcdefghijklmnopqrstuvwxyz";
    } else if( charType === "uppercase" ) {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if( charType === "numeric" ) {
      charSet = "0123456789";
    } else if( charType === "special" ) {
      charSet = "!\#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    } 
    //return value
    var retVal = "";
    for (var i = 0; i < charLength; i++) {
      //picks a character within charSet at index of random number
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.charLength));
    }
    return retVal;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", charLength);