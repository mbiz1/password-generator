// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
let length = parseInt(
  prompt("How many characters long would you like your password to be?")
)

if(isNaN(length) === true) {
  alert('The password length must be provided as a number')
  return;
}

if(length < 10) {
  alert ('The password length must be atleast 10 characters')
}
if (length > 65) {
  alert ('The password must be less than 65 characters long');
  return;

}
let hasSpecialCharacters = confirm(
  "Click OK to confirm including special characters in your password"
)
let hasNumericCharacters = confirm(
  "Click OK to confirm including numeric characters in your password"

)
let hasLowerCasedCharacters = confirm(
  "Click OK to confirm including lowercase characters in your password"
)
let hasUpperCasedCharacters = confirm(
  "Click OK to confirm including uppercase characters in your password"
)

if(hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false &&
  hasSpecialCharacters === false && 
  hasNumericCharacters === false){
    alert('Must select at least one character type in your password')
    return;
  }

let passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
  haslowerCasedCharacters: hasLowerCasedCharacters
}
console.log(passwordOptions);
return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
let randomIndex = Math.floor(Math.random() * arr.length)
let randomElement = arr[randomIndex];

return randomElement;

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
console.log(options);
let result = []

let possibleCharacter = []


let guaranteedCharacter = []

if(options.hasSpecialCharacters) {
  possibleCharacter = possibleCharacter.concat(specialCharacters)
  guaranteedCharacter.push(getRandom(specialCharacters))
}

if(options["hasLowerCasedCharacters"]) {
  possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
  guaranteedCharacter.push(getRandom(lowerCasedCharacters))
}

if(options.hasUpperCasedCharacters) {
  possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
  guaranteedCharacter.push(getRandom(upperCasedCharacters))
}
if (options.hasNumericCharacters) {
  possibleCharacter = possibleCharacter.concat(numericCharacters);
  guaranteedCharacter.push(getRandom(upperCasedCharacters))
}

console.log(possibleCharacter);


for (let index = 0; index < options.length; index ++) {
  var generated = getRandom(possibleCharacter);
  console.log (generated);

  result.push(generated);

}

for (let index = 0; index < guaranteedCharacter.length; index++) {
  result[index] = guaranteedCharacter[index]
}
console.log(result);
return result.join("")

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);