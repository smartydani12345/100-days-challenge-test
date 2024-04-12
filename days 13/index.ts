//Question 37: Large Shirts: Default values in make_shirt().

//Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.

//Answer: Please try to do it yourself first!

function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size


//Question 38: Cities: Describing cities with a function.

//Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.

//Answer: Please try to do it yourself first!

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");


//Question 39: City Names: Formatting city-country pairs.

//Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.

//Answer: Please try to do it yourself first!

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

