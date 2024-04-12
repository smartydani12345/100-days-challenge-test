//Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
//Explain & TIP: Arrays have a length property that tells you how many items are in the list. Use this to inform your guests how big the party will be.
//Answer: Please try to do it yourself first!
var guest = ["Kareem", "Sumair", "Dawood", "Hameed", "Sohail", "Anus", "Hamza", "jameel", "irshad", "kashif", "akram"];
console.log("I am inviting ".concat(guest.length, " people to dinner."));
//Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//Explain & TIP: Arrays are perfect for keeping a collection of similar items. Choose a theme you like and list several examples.
//Answer: Please try to do it yourself first!
// Define an array of strings representing places to visit
var placesToVisit = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Rome, Italy",
    "Banff National Park, Canada"
];
// Display the places to visit
console.log("Places I'd like to visit:");
for (var i = 0; i < placesToVisit.length; i++) {
    console.log("".concat(i + 1, ". ").concat(placesToVisit[i]));
}
//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//Explain & TIP: Objects in TypeScript can store various related data about a single entity. Think of an object as a container for characteristics of something, like a book or a car.
//Answer: Please try to do it yourself first!
var book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.yearPublished));
