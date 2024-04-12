//Question 31: No Users: Ensure your user list isn’t empty.
//Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.
//Answer: Please try to do it yourself first!
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Greet users
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
//Question 32: Checking Usernames: Ensure uniqueness in usernames.
//Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.
//Answer: Please try to do it yourself first!
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
//Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting.
//Answer: Please try to do it yourself first!
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});