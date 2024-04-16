//Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
//Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.
//Answer: Please try to do it yourself first!
// This function mixes a text and a number into one text
function combineStringAndNumber(text, number) {
    // Joins the text and number into a single text
    return text + number;
}
// Trying it out with "Age: " and 30
console.log(combineStringAndNumber("Age: ", 30)); // Shows "Age: 30"
// Here, we put together the text and number.
//Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
//Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another. It's handy for figuring out if numbers are even, odd, and more.
//Answer: Please try to do it yourself first!
// This function finds the leftover of dividing two numbers
function remainder(num1, num2) {
    // Gives back the leftover of num1 divided by num2
    return num1 % num2;
}
// Trying it with 5 divided by 2
console.log(remainder(5, 2)); // Shows 1
// This tells us the leftover, which is 1 here.
//Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
//Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.
//tsc indexedDB.databasesnode indexedDB.js
// It's great for confirming several things are true all at once.
//Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.
//Answer: Please try to do it yourself first!
// This function sees if both inputs are true
function checkBothTrue(val1, val2) {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}
// Trying it with true and false
console.log(checkBothTrue(true, false)); // Shows false
export {};
// It checks two things, but since one is false, the answer is false.
