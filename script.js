function generatePassword() {
  // Takes the number value of a user's input, and if it doesn't meet the requirements, returns an error alert.
  var passLengthMin = Number(prompt("What is the minimum length of your password? Must be at least 8."))
  if (passLengthMin == null) {
    return "Your Secure Password"
  } else if (passLengthMin < 8) {
    alert("Your minimum length must be at least 8 characters long.")
    return 'Your Secure Password'
  }
  var passLengthMax = Number(prompt("What is the maximum length of your password? Must be no more than 128 and greater than your minimum length."))
  if (passLengthMax == null) {
    return "Your Secure Password"
  } else if (passLengthMax > 128 || passLengthMax <= passLengthMin) {
    alert("Your maximum length must be no more than 128 characters long and greater than your minimum length.")
    return 'Your Secure Password'
  }
  // The following variables that start with 'needs' store the user's input or ends the process if conditions aren't met
  var needsLower = prompt("Does your password require at least one lowercase letter? Enter 'Y' or 'N'.")
  if (needsLower == null) {
    return "Your Secure Password"
  } else if (needsLower != 'Y' && needsLower != 'N') {
    alert("Please enter 'Y' or 'N'")
    return "Your Secure Password"
  }
  var needsUpper = prompt("Does your password require at least one uppercase letter? Enter 'Y' or 'N'.")
  if (needsUpper == null) {
    return "Your Secure Password"
  } else if (needsUpper != 'Y' && needsLower != 'N') {
    alert("Please enter 'Y' or 'N'")
    return "Your Secure Password"
  }
  var needsNumber = prompt("Include numbers? Enter 'Y' or 'N'.")
  if (needsNumber == null) {
    return "Your Secure Password"
  } else if (needsNumber != 'Y' && needsNumber != 'N') {
    alert("Please enter 'Y' or 'N'")
    return "Your Secure Password"
  }
  var needsSpecial = prompt("Include special letters? Enter 'Y' or 'N'.")
  if (needsSpecial == null) {
    return "Your Secure Password"
  } else if (needsSpecial != 'Y' && needsSpecial != 'N') {
    alert("Please enter 'Y' or 'N'")
    return "Your Secure Password"
  }
  // Shows the user all of their password criteria
  var validateChoices = prompt("Are the following choices correct?\n\nPassword Length: Between " + passLengthMin + " and " + passLengthMax + "\nInclude Lowercase: " + needsLower
    + "\nInclude Uppercase: " + needsUpper + "\nInclude Numbers: " + needsNumber + "\nInclude Special Letters: " + needsSpecial + "\n\n Enter 'Y' or 'N'.")
  if (passLengthMin == null) {
    return "Your Secure Password"
  } else if (validateChoices == 'N') {
    return 'Your Secure Password'
  } else {
    // The string from which I will pull random characters
    var availableCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // A randomized password length within the range provided by the user
    var passwordLength = Math.floor(Math.random() * passLengthMax) + passLengthMin;
    // Boolean variables to be used to check whether or not a character type has been used
    var lowerUsed = true;
    var upperUsed = true;
    var numberUsed = true;
    var specialUsed = true;
    // These if statements set the previously set variables to false if the user stated that they needed to be included in the password
    if (needsLower === 'Y') {
      lowerUsed = false;
      var allLower = 'abcdefghijklmnopqrstuvwxyz';
    }
    if (needsUpper === 'Y') {
      upperUsed = false;
      var allUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    // Adds numbers to the availableCharacters string so they'll be included in password generation
    if (needsNumber === 'Y') {
      numberUsed = false;
      var allNumbers = "1234567890";
      availableCharacters += allNumbers;
    }
    // Adds special characters to the availableCharacters string so they'll be included in password generation
    if (needsSpecial === 'Y') {
      specialUsed = false;
      var allSpecials = '~`!@#$%^&*-_=+<>?.,()[]{}|;:\'"\ ';
      availableCharacters += allSpecials;
    }
    // Placeholder variables to be updated in the for loop
    var newCharacter = '';
    var finishedPassword = '';
    // Adds a random character to the password until it reaches the previously determined password length
    for (var i = 0; i < passwordLength; i++) {
      newCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
      finishedPassword += newCharacter
      // Sets the 'Used' variables to true if the corresponding character type was needed
      if (allLower.split('').includes(newCharacter)) {
        lowerUsed = true
      } else if (allUpper.split('').includes(newCharacter)) {
        upperUsed = true
      } else if (allNumbers.split('').includes(newCharacter)) {
        numberUsed = true
      } else if (allSpecials.split('').includes(newCharacter)) {
        specialUsed = true
      }
    }
    // One last effort to ensure that all required characters are included by either adding one of that character type to the end if the password length is below the maximum password length or taking one off the start and adding one of that character type to the end.
    if (!lowerUsed) {
      if (passwordLength < passLengthMax) {
        finishedPassword += allLower.split('')[Math.floor(Math.random() * allLower.length)]
      } else{ 
        finishedPassword = finishedPassword.slice(1) + allLower.split('')[Math.floor(Math.random() * allLower.length)]
      }
    }
    if (!upperUsed) {
      if (passwordLength < passLengthMax) {
        finishedPassword += allUpper.split('')[Math.floor(Math.random() * allUpper.length)]
      } else{ 
        finishedPassword = finishedPassword.slice(1) + allUpper.split('')[Math.floor(Math.random() * allUpper.length)]
      }
    }
    if (!numberUsed) {
      if (passwordLength < passLengthMax) {
        finishedPassword += allNumbers.split('')[Math.floor(Math.random() * allNumbers.length)]
      } else{ 
        finishedPassword = finishedPassword.slice(1) + allNumbers.split('')[Math.floor(Math.random() * allNumbers.length)]
      }
    }
    if (!specialUsed) {
      if (passwordLength < passLengthMax) {
        finishedPassword += allSpecials.split('')[Math.floor(Math.random() * allSpecials.length)]
      } else{ 
        finishedPassword = finishedPassword.slice(1) + allSpecials.split('')[Math.floor(Math.random() * allSpecials.length)]
      }
    }
  } 
  // Returns the password back to be printed onto the page
  return finishedPassword;
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
