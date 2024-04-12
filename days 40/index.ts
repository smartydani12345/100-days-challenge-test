//Q(118)

// This loop logs numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i); // Logs the current value of i
  }
  // Each iteration increases the value of i by 1, logging it until it reaches 10.



//Q(119)

// Initializes a counter
let count: number = 0;
// This while loop runs until count is 5
while (count < 5) {
  console.log("Hello, World!"); // Logs "Hello, World!"
  count++; // Increments count by 1
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.




//Q(120)



// Defines an array of favorite movies
const favoriteMovies: string[] = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
  ];
  // Uses a for...of loop to iterate through favoriteMovies
  for (const movie of favoriteMovies) {
    console.log(movie); // Logs each movie name
  }
  // Each movie in the array is logged to the console, one at a time.