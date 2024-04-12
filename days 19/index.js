//Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
//Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.
//Answer: Please try to do it yourself first!
// Starts with a list of numbers
var numbers = [1, 2, 3, 4, 5];
// Doubles each number
var doubledNumbers = numbers.map(function (number) { return number * 2; });
// Shows the new list of doubled numbers
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// This line takes each number, doubles it, and puts it in a new list.
//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
//Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
//Answer: Please try to do it yourself first!
// A mixed bag of items
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// Picks out only the words
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.
//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
//Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
//Answer: Please try to do it yourself first!
// A list of grades
var grades = [88, 94, 72, 99, 53, 77];
// Calculates the average grade
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
