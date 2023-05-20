// Define dad's name and favorite cake flavor
var dadName = "John";
var favoriteFlavor = "ube";

// Create the birthday message
var message = "Dear Dad,\n\n";
message += "Wishing you the happiest of birthdays!\n";
message += "May your special day be filled with joy, laughter, and lots of " + favoriteFlavor + " cake!\n";
message += "Thank you for always being there for us.\n";
message += "With love,\nYour adoring family \n";
message += "Ignore the creepy people in the back.";

// Display the birthday message
var birthdayMessageElement = document.getElementById("birthdayMessage");
birthdayMessageElement.innerText = message;
