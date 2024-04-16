//Q(121)
// This for loop counts from 1 to 10 but skips 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skips the rest of the loop for i = 5
    }
    console.log(i); // Logs numbers 1-4 and 6-10
}
// It demonstrates how to use 'continue' to skip a specific iteration.
//Q(122)
// Initializes the counter at 10
let counter = 10;
// This while loop counts down from 10 to 1 and stops at 5
while (counter > 0) {
    if (counter === 5) {
        break; // Exits the loop when counter reaches 5
    }
    console.log(counter);
    counter--; // Decrements the counter
}
// Logs the countdown from 10 but stops abruptly when it hits 5.
//Q(123)
// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("syzygy"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
export {};
// Demonstrates iterating through a string and stopping at the first vowel.
