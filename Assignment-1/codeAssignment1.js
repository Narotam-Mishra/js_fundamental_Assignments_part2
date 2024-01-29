
/*

Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
The inner function should access both the parameter of outerFunction and a variable declared within
outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
variables even after outerFunction has finished executing.

*/

function outerFunction(param) {
  // Declare a variable within outerFunction
  let outerVar = "from outerFunction";

  // Define the inner function
  function innerFunction() {
    // Access both the parameter of outerFunction and the variable declared within it
    console.log(`Parameter: ${param}`);
    console.log(`Outer Variable: ${outerVar}`);
  }

  // Return the inner function
  return innerFunction;
}

// Call outerFunction with a parameter
const outerFuncResult = outerFunction("Hello");

// Call the returned inner function
outerFuncResult();
  