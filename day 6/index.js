//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
// Initial list of guests
let guests = ["Hameed", "Sohail", "Anus", "Hamza"];
// Function to add more guests
function addMoreGuests(newGuests) {
    // Add new guests at the end of the array
    guests = guests.concat(newGuests);
    console.log("More guests added!");
    console.log("Updated guest list:", guests);
}
// Example usage
const newGuests = ["Kareem", "Sumair", "Dawood", "Hameed", "Sohail", "Anus", "Hamza"];
addMoreGuests(newGuests);
// Initial list of guests
let Guests = ["Kareem", "Sumair", "Dawood"];
// Function to shrink the guest list
function shrinkGuestList(maxGuests) {
    if (maxGuests >= guests.length) {
        console.log("No guests need to be removed. You can invite all guests.");
    }
    else {
        const guestsToRemove = guests.length - maxGuests;
        guests.splice(-guestsToRemove);
        console.log(`Guest list shrunk to ${maxGuests} guests.`);
        console.log("Updated guest list:", guests);
    }
}
// Example usage
const maxGuests = 2;
shrinkGuestList(maxGuests);
//Question 18: Seeing the World: Think of at least five places you’d like to visit.
//Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.
//Answer: Please try to do it yourself first!
let places = [
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Rome, Italy",
    "Banff National Park, Canada"
];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
export {};
