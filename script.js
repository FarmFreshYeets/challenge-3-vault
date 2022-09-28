// Assignment code here

function generatePassword() {
  let passLengthMin = prompt("What is the minimum length of your password?")
  let passLengthMax = prompt("What is the maximum length of your password?")
  let needsLower = prompt("Does your password require at least one lowercase letter? Enter 'Y' or 'N'.")
  let needsUpper = prompt("Does your password require at least one uppercase letter? Enter 'Y' or 'N'.")
  let needsNumber = prompt("Include numbers? Enter 'Y' or 'N'.")
  let needsSpecial = prompt("Include special letters? Enter 'Y' or 'N'.")
  let validateChoices = prompt("Are the following choices correct?\n\nPassword Length: Between " + passLengthMin + " and " + passLengthMax + "\nInclude Lowercase: " + needsLower
  + "\nInclude Uppercase: " + needsUpper + "\nInclude Numbers: " + needsNumber + "\nInclude Special Letters: " + needsSpecial + "\n\n Enter 'Y' or 'N'.")
  if (validateChoices == 'N') {
    return
  } else{
    // Add generation code
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
