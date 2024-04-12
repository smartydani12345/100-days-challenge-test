//Question 40: Album: Create objects for music albums.
//Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.
//Answer: Please try to do it yourself first!
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
//Question 41: Magicians: Display magician names from an array.
//Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
//Answer: Please try to do it yourself first!
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//Question 42: Great Magicians: Add "the Great" to magician names.
//Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
//Answer: Please try to do it yourself first!
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
