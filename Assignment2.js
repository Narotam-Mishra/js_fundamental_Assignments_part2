
/*

Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
the function with various patterns and strings.

*/

function testRegEx(pattern, inputString) {
  // Create a RegExp object with the provided pattern
  const regex = new RegExp(pattern);

  // Test if there is a match in the inputString
  return regex.test(inputString);
}

// Test above function for various inputs

const pattern1 = /hello/;
const string1 = 'hello, JavaScript!';
console.log(`Pattern: ${pattern1}, String: ${string1}, Match: ${testRegEx(pattern1, string1)}`);

const pattern2 = /\d{2}-\d{2}-\d{4}/; // Matches date in the format MM-DD-YYYY
const string2 = 'Today is 01-29-2024.';
console.log(`Pattern: ${pattern2}, String: ${string2}, Match: ${testRegEx(pattern2, string2)}`);

const pattern3 = /[A-Za-z]+ \d+/; // Matches a word followed by a space and then a number
const string3 = 'JavaScript 3';
console.log(`Pattern: ${pattern3}, String: ${string3}, Match: ${testRegEx(pattern3, string3)}`);

const pattern4 = /^[789]\d{9}$/; // Matches a word followed by a space and then a number
const string4 = '9876543';
console.log(`Pattern: ${pattern4}, String: ${string4}, Match: ${testRegEx(pattern4, string4)}`);