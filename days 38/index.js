// Q(112)
// Creates a new Map to store countries and their capitals
var country = new Map();
country.set("USA", "Washington, D.C."); // Adds USA to the Map
country.set("France", "Paris"); // Adds France to the Map
country.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(country);
// Logs the Map with the countries and their capitals.
//Q(113)
// Answer of Q12:
// Creates a new Map to store countries and their capitals
var countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
// Logs the Map with the countries and their capitals.
// Answer of Q13:
// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
// Assuming countries Map from Question 112
logCapitalOfCanada(countries);
// Checks if Canada is in our Map and logs the capital if it exists.
//Q(114)
// Creates a Map to store student IDs (keys) and names (values)
var students = new Map();
students.set(1, "Daniyal");
students.set(2, "Azhar");
students.set(3, "Anus");
// Iterates over the Map and logs each student ID and name
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
// This loop goes through each student and logs their ID and name.
