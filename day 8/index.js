//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
//Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. Experimenting with this helps you understand array boundaries.
//Answer: Please try to do it yourself first!
let friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.
//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
//Explain & TIP: Conditional tests check if something is true or false. Writing different tests helps you understand how conditions work in programming.
//Answer: Please try to do it yourself first!
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
//Explain & TIP: Experiment with different types of conditions to see how they work. This builds a deeper understanding of logic in programming.
//Answer: Please try to do it yourself first!
// Define variables
let x = 10;
let y = 5;
// Greater than
if (x > y) {
    console.log("x is greater than y");
}
// Less than
if (x < y) {
    console.log("x is less than y");
}
// Equal to
if (x === y) {
    console.log("x is equal to y");
}
// Not equal to
if (x !== y) {
    console.log("x is not equal to y");
    // Greater than or equal to
    if (x >= y) {
        console.log("x is greater than or equal to y");
    }
    // Less than or equal to
    if (x <= y) {
        console.log("x is less than or equal to y");
    }
    //reanswer
    // Equality with strings
    console.log("Testing equality with strings:");
    console.log("apple" == "apple"); // True
    console.log("apple" == "Apple"); // False
    // Equality with numbers
    console.log("Testing equality with numbers:");
    console.log(10 == 10); // True
    console.log(10 == 20); // False
    // Equality with booleans
    console.log("Testing equality with booleans:");
    console.log(true == true); // True
    console.log(true == false); // False
    // Equality with objects
    console.log("Testing equality with objects:");
    console.log({ name: "John" }, "Apple"); // False
    // Using the lower case function
    console.log("Testing with lower case:");
    console.log("Apple".toLowerCase() == "apple"); // True
    // Numerical tests
    console.log("Numerical tests:");
    console.log(10 > 5); // True
    console.log(2 < 1); // False
    // Tests using "and" and "or" operators
    console.log("Tests with 'and' and 'or':");
    console.log(true && false); // False
    console.log(true && false); // True
    // Test whether an item is in a array
    let fruits = ["apple", "banana", "cherry"];
    console.log("Is 'apple' in fruits?");
    console.log(fruits.includes("apple")); // True
    // Test whether an item is not in a array
    console.log("Is 'mango' not in fruits?");
    console.log(!fruits.includes("mango")); // True
}
export {};
