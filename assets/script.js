// password criteria functions begin
var pwLength = function() {
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
            pwType();
        }
}
  var pwType = function() {
    //ask for character type
    var promptType = window.prompt("Enter a character type: special, numeric, uppercase, lowercase, all.");
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

  function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = retVal;
    //evaluate character type
    var charSet = "";
    if(pwType === "lowercase" ) {
      charSet = "abcdefghijklmnopqrstuvwxyz";
    } else if(pwType === "uppercase" ) {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if(pwType === "numeric" ) {
      charSet = "0123456789";
    } else if(pwType === "special" ) {
      charSet = "!$%&'()*+,-./:;<=>?@[]^_`{|}~";
    } else if(pwType === "all") {
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$%&'()*+,-./:;<=>?@[]^_`{|}~"
    }
    console.log(charSet);
    
    //return value
    var retVal = "";
    for (var i = 0; i < pwLength; i++) {
      //picks a character within charSet at index of random number
      retVal += charSet.charAt(Math.random() * charSet.length);
    }
    console.log(retVal);
    return retVal
  }
 
  // Add event listener to generate button
  generateBtn.addEventListener("click", pwLength);