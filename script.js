// dynamically update length variable and length displayed on page
var passwordLength = Number(document.querySelector("#lengthSelector").value)

function updateLengthValue(val) {
  document.getElementById('rangeLabel').innerHTML = `Number of Characters: ${val}`;
  passwordLength = Number(val);
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Add query selector to read checkboxes
var checkboxes = document.querySelectorAll('input[type=checkbox]');

// object with all possible characters
var characters = {
  lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  symbol: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '|', '?', '+', '=']
}

// generate random password based on user input
function generatePassword() {
  var checkboxMinimum = false;
  var selectedCharacterTypes = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedCharacterTypes.push(checkboxes[i].value);
      checkboxMinimum = true;
    }
  }
  var generatedPassword = '';
  if (checkboxMinimum) {
    for (var i = 0; i < passwordLength; i++) {
      randomKey = selectedCharacterTypes[Math.floor(Math.random() * selectedCharacterTypes.length)];
      randomCharacter = characters[`${randomKey}`][Math.floor(Math.random() * characters[`${randomKey}`].length)];
      generatedPassword = generatedPassword + randomCharacter;
    }
    return generatedPassword;
  } else {
    alert('Please select at least one character type!');
    return '';
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}