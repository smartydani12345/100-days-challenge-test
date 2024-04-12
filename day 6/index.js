//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Initial list of guests
var guests = ["Hameed", "Sohail", "Anus", "Hamza"];
// Function to add more guests
function addMoreGuests(newGuests) {
    // Add new guests at the end of the array
    guests = guests.concat(newGuests);
    console.log("More guests added!");
    console.log("Updated guest list:", guests);
}
// Example usage
var newGuests = ["Kareem", "Sumair", "Dawood", "Hameed", "Sohail", "Anus", "Hamza"];
addMoreGuests(newGuests);
// Initial list of guests
var Guests = ["Kareem", "Sumair", "Dawood"];
// Function to shrink the guest list
function shrinkGuestList(maxGuests) {
    if (maxGuests >= guests.length) {
        console.log("No guests need to be removed. You can invite all guests.");
    }
    else {
        var guestsToRemove = guests.length - maxGuests;
        guests.splice(-guestsToRemove);
        console.log("Guest list shrunk to ".concat(maxGuests, " guests."));
        console.log("Updated guest list:", guests);
    }
}
// Example usage
var maxGuests = 2;
shrinkGuestList(maxGuests);
//Question 18: Seeing the World: Think of at least five places you’d like to visit.
//Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.
//Answer: Please try to do it yourself first!
var places = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Rome, Italy",
    "Banff National Park, Canada"
];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//Explain & TIP: Just like with transportation, you can use an array to manage a list of guests. Loop through the list to send each one a personal invitation.
//Answer: Please try to do it yourself first
var guest = ["Kareem", "Sumair", "Dawood", "Hameed", "Sohail", "Anus", "Hamza", "jameel", "irshad", "kashif", "akram"];
console.log("I am inviting ".concat(guests.length, " people to dinner."));
