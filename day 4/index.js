//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
//Explain & TIP: Comments are notes in your code that the computer ignores. They help people understand what your code does. It's like leaving a note for yourself or someone else who might read your code later.
//Answer: Please try to do it yourself first!
// Daniyal, 2024-04-12
// This program prints a personal message.
let myName = "Daniyal";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);
//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
//Explain & TIP: An array is like a list of items. You can store multiple items, like your friends' names, in one variable and access them one by one.
let names = ["jameel", "kashif", "akram", "irshad"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
//Explain & TIP: This builds on the previous exercise. Now, you’re not just listing names, you’re using them in a sentence to make a personalized message for each friend.
//Answer: Please try to do it yourself first!
let friendName = ["jameel", "kashif", "akram", "irshad"];
friendName.forEach(friendName => {
    console.log(`Plan to go on a picnic on Sunday ${friendName}`);
});
export {};
