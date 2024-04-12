//Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
//Explain & TIP: Objects are collections of properties, kind of like a box for storing related information. You can create an object to group related data and access its properties using either dot notation or bracket notation.
//Answer: Please try to do it yourself first!
// This sets up an object for a car with specific details
var cars = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Accessing and showing the car's model
console.log(cars.model); // Outputs: Corolla
// We use dot notation (car.model) to get the model of the car from our object.
//Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
//Explain & TIP: You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed.
//Answer: Please try to do it yourself first!
// Starting with our car object
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red"
};
// Adding a new property 'color' and updating 'year'
car.color = "blue"; // Adds a new property 'color'
car.year = 2021; // Updates the 'year' property
// Showing the updated car object
console.log(car); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.
//Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
//Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful for when you need to examine or display all the information an object holds.
//Answer: Please try to do it yourself first!
// This function shows every detail about an object
function logObjectProperties(obj) {
    for (var property in obj) {
        // Loops through each property in the object
        console.log("".concat(property, ": ").concat(obj[property]));
        // Shows the property name and its value
    }
}
// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// It tells us each piece of information stored about the car.
