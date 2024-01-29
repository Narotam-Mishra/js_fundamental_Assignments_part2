
/*

Write a JavaScript program that demonstrates the use of character classes in regular expressions.
Create a function that searches for specific character classes in a given string and returns the matches. Test
the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

*/

function findCharacterClasses(inputStr) {
  // Define regular expressions for character classes
  const digitPattern = /\d/g; // Matches digits
  const uppercasePattern = /[A-Z]/g; // Matches uppercase letters
  const lowercasePattern = /[a-z]/g; // Matches lowercase letters
  const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g; // Matches special characters

  // Find matches using the regular expressions
  const digits = inputStr.match(digitPattern);
  const uppercaseLetters = inputStr.match(uppercasePattern);
  const lowercaseLetters = inputStr.match(lowercasePattern);
  const specialCharacters = inputStr.match(specialCharacterPattern);

  // Return the results
  return {
    digits,
    uppercaseLetters,
    lowercaseLetters,
    specialCharacters,
  };
}

// Test the function
const inputString = "JavaScript@123_for_Web_Dev@98";
const result = findCharacterClasses(inputString);

// Display the results
console.log("Input String:", inputString);
console.log("Digits:", result.digits);
console.log("Uppercase Letters:", result.uppercaseLetters);
console.log("Lowercase Letters:", result.lowercaseLetters);
console.log("Special Characters:", result.specialCharacters);
  