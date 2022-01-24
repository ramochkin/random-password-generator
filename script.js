// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["~", "`", "!", "@", "%", "^", "<"]


function userPrompts(){
  //ask the user the length of the password. min 8 character max 128 characters.
  //parseInt- Converts a string into an integer!
  var length = parseInt(prompt("How long should the password be?"));

  if (length < 8 || length > 128){
    alert("The length of the password must be between 8 and 128 characters long! Please try again.");
    return null
  //Number.isNaN(var)- Function that determines wether input is a number or not!
  } if (Number.isNaN(length)){
    alert("Please input your answer in numeric form. EX: 41");
    return null
  } 

  var uC = confirm("Would you like to use uppercase letters? press ok for yes and cancel for no.");
  var lC = confirm("Would you like to use lower letters? press ok for yes and cancel for no.");
  var sC = confirm("Would you like to use special letters? press ok for yes and cancel for no.");
  var n = confirm("Would you like to use numbers? press ok for yes and cancel for no.");

  if (uC === false && lC === false && sC === false && n === false){
    alert("Your desired password should have atleast one option.")
    return null
  }

  var passwordOptions = {
    uC: uC,
    lC: lC,
    sC: sC,
    n: n,
    length: length,
  };

 return passwordOptions
  // console.log(uC, lC, sC, length)
}

//this function recieves an array and randomizes the arry by its length
function random(array){
  var newArray = array[Math.floor(Math.random() * array.length)]
  return newArray;

}




function generatePassword(){
  var passwordObject = userPrompts()
  
  var finalPassword= [];
  var allCharacters = [];

  if (passwordObject.uC === true){
   allCharacters = allCharacters.concat(upperCase)
  } 
  if (passwordObject.lC === true){
    allCharacters = allCharacters.concat(lowerCase)
  } 
  if (passwordObject.n === true){
    allCharacters = allCharacters.concat(numbers)
  }
  if (passwordObject.sC === true){
    allCharacters = allCharacters.concat(specialCharacters)
  }  

  for (var index = 0; index < passwordObject.length; index++) {
    var ramdomCharacter = random(allCharacters)

    finalPassword.push(ramdomCharacter)
    
  }

  console.log(allCharacters)

  return finalPassword.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
