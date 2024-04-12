//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
//Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!
//Answer: Please try to do it yourself first!
// This program calculates the average of all scores given
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
// Example: finding the average of four scores
console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.
//Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
//Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!
//Answer: Please try to do it yourself first!
// This program makes a function that adds a specific number
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
var addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.
//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
//Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.
//Answer: Please try to do it yourself first!
// This profile sets itself up and can share info about the user
var userProfile = (function () {
    // The user's details are kept inside
    var name = "John";
    var age = 30;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
