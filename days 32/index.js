//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
//Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
//Answer: Please try to do it yourself first!
// Defines an array with some words
var words = ["Hello", "World", "TypeScript", "JavaScript"];
// Uses .map() to create a new array with the length of each word
var lengths = words.map(function (word) { return word.length; });
console.log(lengths); // Outputs: [5, 5, 10, 10]
// Each number in the new array represents the length of the corresponding word in the original array.
//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
//Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
//Answer: Please try to do it yourself first!
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(number) {
    return number.filter(function (number) { return number > 10; });
}
// Example: Filtering an array of numbers
var number = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(number)); // Outputs: [15, 20, 25]
// The new array contains only the numbers that are greater than 10.
//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
//Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//Answer: Please try to do it yourself first!
// This function calculates the sum of all numbers in an array
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
// Example: Calculating the sum of an array of numbers
var numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Outputs: 15
// It adds up all the numbers in the array, resulting in a single sum value.
