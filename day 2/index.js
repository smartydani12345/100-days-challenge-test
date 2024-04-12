//Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
//Explain & TIP: Simply choose a quote you like and show it with who said it. It's about combining text.
//Answer: Please try to do it yourself first!
console.log('Quaid-e-Azam once said, “Success consists in moving from failure to failure without loss of enthusiasm.”');
//Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//Explain & TIP: First, save the author's name in a variable. Next, create your quote message in another variable. Then, show it. This teaches you to organize and use your data with variables.
//Answer: Please try to do it yourself first!
var famousPerson = "Quaid-e-Azam";
var message = "Success consists in moving from failure to failure without loss of enthusiasm.";
console.log(famousPerson, message);
//Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
//Explain & TIP: Save a name with extra spaces or new lines around it. Show it first with the extra space, then remove the spaces and show it clean. This helps you learn how to clean up text.
//Answer: Please try to do it yourself first!
var names = "\t\n Daniyal \t\n"; // This saves the name with whitespace
console.log(names); // Shows the name with whitespace
console.log(names.trim()); // Shows the name without whitespace
