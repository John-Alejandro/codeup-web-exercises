console.log("Hello from external JavaScript")
alert("Welcome to my website")


var userInput = prompt("What is your favorite color?");
    alert("Great " + userInput + ", is my favorite color too!");

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var a = prompt("How many days are you renting The Little Mermaid?");

var num1 = Number(a);
var b = prompt("How many days are you renting Brother Bear?");

var num2 = Number(b);
var c = prompt("How many days are you renting Hercules?");

var num3 = Number(c);
var result = Number(a)+Number(b)+Number(c);
alert("Your total is $" + result * 3 );

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var a = prompt("How many hours did you work for Google this week?");

var num1 = Number(a);
var b = prompt("How many hours did you work for Amazon this week?");

var num2 = Number(b);
var c = prompt("How many hours did you work for Facebook this week?");
var num3 = Number(c);
var result = Number(a * 400)+Number(b * 380)+Number(c * 350);
alert("Your pay check will be $" + result + " for the hours worked this week");
console.log("Cost of Rentals.");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var userInput = prompt("Is the class full?");
console.log(userInput);
var userReply = prompt(" Does enrolling in this class conflict with her schedule?");
console.log(userReply);

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.


var custReply = prompt("If you buy 2 or more items, I can apply the offer? Are you interested in this offer?");
console.log(custReply);
var Custreply = prompt("Would you like to become a Premium member? Their are no minimum purchase requirements.");
console.log(Custreply);


