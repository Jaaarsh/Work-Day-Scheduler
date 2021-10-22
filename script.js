// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!”#$%’&()*+,-./:;<=>?@[]\^_`{|}~";
let empty = "";

function generatePassword() {
  let length = prompt("Enter Length");
  let lowerParam = confirm("Lowercase Characters?");
  let upperParam = confirm("Uppercase Characters?");
  let numbParam = confirm("Numbers?");
  let specParam = confirm("Special Characters?");

  if (length <8) {
    return "Length needs to be greater than 8";
  } else if (length > 128) {
    return "Length needs to be less than 128";
  } else

  if (lowerParam) {
    empty = empty.concat(lowerCase);
  }

  if (upperParam) {
    empty = empty.concat(upperCase);
  }

  if (numbParam) {
    empty = empty.concat(numbers);
  }

  if (specParam) {
    empty = empty.concat(special);
  }

  let generatedPass = " "
  for (let i = 0; i < length; i++) {
    let random =[Math.floor(Math.random() * empty.length)];
    generatedPass = generatedPass + empty[random];
  }
  return generatedPass;
};
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
