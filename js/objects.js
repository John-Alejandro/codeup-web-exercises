

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

var person = {
    firstName: "John",
    lastName: "Alejandro"
    }

    console.log(person.firstName)
    console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
function sayHello(name) {
        return("Hello From " + name);
}
console.log(sayHello(person.firstName +  " " + person.lastName + "!"))


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

function HEBoffer(shopper) {
        var finalReceipt = shopper.amount - shopper.amount * .12;
        return finalReceipt;
    }

    shoppers.forEach(function(shopper) {
        if (shopper.amount >= 200) {
            var pay = HEBoffer(shopper);
            console.log("Name: " + shopper.name + ", Original amount: " + shopper.amount + ", discount: 12%, Amount after discount: " + pay + ".");
        }   else {
            console.log("Name: " + shopper.name + ", Original amount: " + shopper.amount + ", No discount.");
        }
});
//         switch (totalReceipt) {
//             case 180:
//                 finalReceipt = totalReceipt;
//                 break;
//             case 250:
//                 finalReceipt = totalReceipt - (amount * Discount);
//                 break;
//             case 320:
//                 finalReceipt = totalReceipt - (totalReceipt * Discount);
//                 break;
//         }
//         return finalReceipt;
// }



    // console.log(HEBoffer(.12,100))
// console.log()


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {
            title: "Art of Coding",
            author: {
                firstName: "Jack",
                lastName: "Ryan"
            }
        },   {
            title: "Gone With the Coding",
            author: {
                firstName: "Johnny",
                lastName: "Cat"
            }
        }, {
            title: "Code Wars",
            author: {
                firstName: "Annie",
                lastName: "Wits",
            }
        }, {
            title: "Raiders of the Lost Java",
            author: {
                firstName: "Amelia",
                lastName: "EarHeart",
            }
        },  {
            title: "The Big Code",
            author: {
                firstName: "Enzo",
                lastName: "Ferrari",
            }
        }
]

    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
books.forEach(function(book,index) {
    console.log("Book # " + (index + 1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
});
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

}()
// Create a function named rollSixSided that takes in a number as a parameter. Write code within your function that would generate the number between 1 and 6 [the dice] and then console.log the result to the user. Your loop should run the number of times as specified by the argument provided.
//     Example:
// rollSixSided(10)
// Result:
//     You rolled a 1
// You rolled a 5
// You rolled a 2
// You rolled a 3
// You rolled a 6
// You rolled a 6
// You rolled a 3
// You rolled a 1
// You rolled a 6
// You rolled a 4


// function rollSixSided(number) {
//     return "You rolled a " + number;
//     var dice = {
//         roll:1,
//         roll:2
//         roll:3,
//         roll:4,
//         roll:5,
//         roll:6
//     }
// }
// console.log(rollSixSided())
//

);