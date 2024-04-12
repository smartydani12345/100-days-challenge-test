//Q(127)

// Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
  };
  
  // Converted to arrow function
  const arrowFunction = (a, b) => a + b;
  
  console.log(traditionalFunction(5, 3)); // Outputs: 8
  console.log(arrowFunction(5, 3)); // Outputs: 8
  // Demonstrates the conversion of a traditional function expression to an arrow function.





//Q(128)


// Arrow function that calculates the product of all its parameters
const multiplyParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);
  
  console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
  // This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.




//Q(129)

// Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
      console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
  };
  
  traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
  traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
  // This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.

