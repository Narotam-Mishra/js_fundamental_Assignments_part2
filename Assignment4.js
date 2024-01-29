
/*

Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
from a given string.

*/

function extractMatchedText(inputString, pattern) {
  // Use RegExp to create a regular expression from the pattern
  const regex = new RegExp(pattern);

  // Use the exec method to find the first match
  const match = regex.exec(inputString);

  // Check if there is a match
  if (match) {
    // Extract specific parts using groups
    const day = match[1] || "";
    const month = match[2] || "";
    const year = match[3] || "";

    // Return the extracted parts
    return {
      day,
      month,
      year,
    };
  } else {
    // Return null if there is no match
    return null;
  }
}

// Test the function with a date pattern
const inputString = "Date: 29-01-2024";  // Date should be in dd/mm/yyyy format
const datePattern = /(\d{2})-(\d{2})-(\d{4})/; // Pattern with groups for day, month, and year

const result = extractMatchedText(inputString, datePattern);

// Display the results
console.log("Input String:", inputString);
if (result) {
  console.log("Matched Date Parts:", result);
} else {
  console.log("No match found.");
}
  