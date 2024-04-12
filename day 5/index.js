//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//Explain & TIP: Arrays help you group related items, like types of transportation. This way, you can talk about each one using a loop.
//Answer: Please try to do it yourself first!
var transports = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//Explain & TIP: Just like with transportation, you can use an array to manage a list of guests. Loop through the list to send each one a personal invitation.
//Answer: Please try to do it yourself first!
var guestName = ["jameel", "kashif", "akram", "irshad"];
guestName.forEach(function (guestName) {
    console.log("I would  like to join to dinnerwith me ".concat(guestName, "."));
});
//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
//Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it, then loop through the list again for new invitations.
//Answer: Please try to do it yourself first!
var unableToAttend = "jameel,irshad,kashif,akram";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Hameed,Sohail,Anus,Hamza";
guestName[guestName.indexOf(unableToAttend)] = newGuest;
// New invitations
guestName.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
