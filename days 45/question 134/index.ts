// Defines a JSON string
const jsonStrings = '{"name":"Daniyal","age":30,"city":"Karachi"}';

// Parses the JSON string back into a JavaScript object
const persons = JSON.parse(jsonStrings);

console.log(persons); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.