//Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
//Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.
//Answer: Please try to do it yourself first!
// Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
// This simple check helps us greet users appropriately based on the time of day
//Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
//Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.
//Answer: Please try to do it yourself first!
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(85)); // Outputs: B
console.log(assignGrade(55)); // Outputs: F
//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
//Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
//Answer: Please try to do it yourself first!
// This function categorizes a person's age group
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(12)); // Outputs: child
console.log(categorizeAge(18)); // Outputs: teenager
console.log(categorizeAge(25)); // Outputs: adult
export {};
// Based on the age provided, we log the corresponding age group.
