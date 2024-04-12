//Question 34: Pizzas: Share your favorite pizzas and express your love for them.
//Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your preference for each type. This demonstrates looping through an array and appending custom messages to each item.
//Answer: Please try to do it yourself first!
var pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
//Question 35: Animals: Highlight animals with a common trait.
//Explain & TIP: Looping through an array of animals allows you to comment on each one individually. This teaches you how to personalize messages within a loop based on array items.
//Answer: Please try to do it yourself first!
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
//Question 36: T-Shirt: Create a function for customizing t-shirts.
//Explain & TIP: Writing a function that accepts parameters allows you to reuse code efficiently. This introduces you to function parameters and printing dynamic content based on those parameters.
//Answer: Please try to do it yourself first!
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("medium", "Code is Life");
