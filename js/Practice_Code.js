"use strict";
console.log("Practice Code Open and Running");

// console.log("Hello from Practice Code JS!");
// var myStr =45;
// only numbers work in var, no symbols or letters. Show up as undefined.

// console.log(myStr)
// console.log will return whatever you type in in quotes as well as any input or stated var or defined item

// var howmanyPets =2;
// console.log(howmanyPets)

// alert("Wow, this is nice when you know what your doing!");
// alert("Do you feel like your understand alerts and how they work?");

var userconfirm = confirm("Do you want to remain logged on?");
// useconfirm = confirm -Requires input from user in form of clicking cancel or ok.
// Both alert and userconfirm remove from screen once an action is taken in box.

alert ("The user selected: " + userconfirm)
// // By adding concatenation(+) to alert and enetring input in this case userconfirm you get a true statement. Boolean -True / False

// var userLunch = prompt("What did you have for lunch today?")
// // prompt is always proceeded by a var "name" and can be followed up with alert "comments" and + var "name" input
// alert("The user had " + userLunch + " for lunch!")
function sayHello(name) {
    return "Hello, " + name;
// // all functions must be in format shown with () and {} need a return statement
}
    console.log(sayHello("codeup"));

var helloMessage = sayHello("John");
    console.log(helloMessage);

var myName = "John Alejandro";
    console.log(sayHello(myName))

// in order to run or call function - you can use console.log with ( "function name ( and whatever you want it to say"))
//  function myPets(name) {
//      return "Their names are, " + name;
// }
// // console.log(myPets("Bandit and Coco Chanel"));
//
// function favMovie(name) {
//     return "My favorite movie is, " + name;
// }
// console.log(favMovie("The Big Blue"));
// // console.log must be outside {} of function brackets in order to work.
//
// function keepTrying(name) {
//     return "Do not give up," + name;
// }
//     console.log(keepTrying(" it will get better."));
// // console.log must be outside {} of function brackets in order to work.
//
// function color(name) {
//     return "My favorite color is, " + name;
// }
// console.log(color( "red."));
// // console.log must be outside {} of function brackets in order to work.
//
// function underStand(name) {
//     return "Are you starting to understand, " + name;
// }
// console.log(underStand("functions?"));
// // console.log must be outside {} of function brackets in order to work.
//
// function oneMore(name) {
//     return "Keep it up don't give up on understanding, " + name;
// }
// console.log(oneMore("functions."));
// // console.log must be outside {} of function brackets in order to work.
//
// function noMistakes(name) {
//     return "You almost got it with out any " + name;
// }
// console.log(noMistakes("mistakes."));
// // console.log must be outside {} of function brackets in order to work.

var random = Math.floor((Math.random() * 3) + 1);

    function isTwo(number) {
        console.log("Our number is: " + number);
        return number === 2;
}
    // console.log(isTwo(random));
// console.log inside function {} calls function and in this case the return is a boolean value second console.log calls function with input

// function calculateTip(tipPercentage,total){
//         return tipPercentage * total;
// }
// console.log(calculateTip(.2,20));
// console.log(calculateTip(.5,50));
// console.log(calculateTip(.35,20));
//
// var userBill = prompt("How much was your Bill?");
// var userTip = prompt("How much would you like to tip in a whole number?") / 100;
// // userTip = userTip / 100;
// alert("Thank you so much for your patronage - You will be tipping : $" + calculateTip(userTip,userBill));

function applyDiscount(originalPrice,discountpercent){
    return originalPrice -(originalPrice * discountpercent);
}
// function isArray(input) {
//     return Array == 0;
}
