//Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
//Explain & TIP: Use an if statement to check the alien's color. This introduces you to simple conditionals.
//Answer: Please try to do it yourself first!
//Version that passes:
let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
//Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
//Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
//Explain & TIP: Expanding on the previous exercise, if-else chains allow you to handle multiple conditions.
//Answer: Please try to do it yourself first!
//Version that runs the if block:
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
//Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
//Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
//Explain & TIP: This exercise introduces you to handling multiple specific conditions in an if-else chain.
//Answer: Please try to do it yourself first!
//Green alien version:
alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
//Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
//Red alien version:
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
export {};
