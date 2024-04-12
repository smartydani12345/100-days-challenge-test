//Q(118)
// This loop logs numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log(i); // Logs the current value of i
}
// Each iteration increases the value of i by 1, logging it until it reaches 10.
//Q(119)
// Initializes a counter
var count = 0;
// This while loop runs until count is 5
while (count < 5) {
    console.log("Hello, World!"); // Logs "Hello, World!"
    count++; // Increments count by 1
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.
//Q(120)
// Defines an array of favorite movies
var favoriteMovies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
];
// Uses a for...of loop to iterate through favoriteMovies
for (var _i = 0, favoriteMovies_1 = favoriteMovies; _i < favoriteMovies_1.length; _i++) {
    var movie = favoriteMovies_1[_i];
    console.log(movie); // Logs each movie name
}
// Each movie in the array is logged to the console, one at a time.
