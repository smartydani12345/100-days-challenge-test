//Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
//Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
//Answer: Please try to do it yourself first!
// Sets up details about a smartphone
var smartphone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours"
    }
};
// Shows what we've set up about the smartphone
console.log(smartphone);
//Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
//Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
//Answer: Please try to do it yourself first!
// A list showing a programmer's skills in detail
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// Getting specific skills from the list
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
// Showing a skill from each category
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
//Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
//Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information.
//Answer: Please try to do it yourself first!
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
var userPreference = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
