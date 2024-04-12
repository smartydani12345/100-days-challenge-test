// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
// Explain & TIP: First, make a variable to save a name. Then, use this name to say hello. Variables keep data you can use later. 
// Answer:
var names = "Daniyal"; // This saves the name
console.log("Hello ".concat(names, ", would you like to learn some TypeScript today?")); // This shows the message
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//Explain & TIP: Save a name in a variable. Show it in all small letters, ALL BIG LETTERS, and First Letter Big for each word. This helps learn how to change text style.
//Answer:
var names = "Daniyal"; // This saves the name
console.log(names.toLowerCase()); // Shows the name in all small letters
console.log(names.toUpperCase()); // Shows the name in ALL BIG LETTERS
console.log(names.charAt(0).toUpperCase() + names.slice(1).toLowerCase()); // Shows the name with the First Letter Big
