
//~*~ Locating individual elements

// What happens if there is no result?
// var hopTeader = document.getElementById("hop-teader");
//~*~ Locating lists of elements

//Element List - retrieve by CLASS or TAG

// var specialOffers = document.getElementsByClassName("special-offer");
//
// console.log(specialOffers);
//
// var listItems =document.getElementsByTagNameNS("li");
//
// console.log(listitems);
//Loop through the hatList and print our nodes

// for (var i=0; i < listitems.length; i++){
//     console.log(listItems[i]);
// }
//~*~ Accessing form input
// var currentPlaceholder = document.forms.hatsSearch[0].placeholder;
//
// console.log(currentPlaceholder);

//~*~ Accessing / Modifying Element properties [so I've got a collection of this stuff - what now?]
//Accessing innerHTML

//Instead of printing a list of nodes, let's print some text - What HTML is INSIDE our <li>?

// var topSellers = document.getElementsByClassName("hat-sold");
//
// for(var i = 0; i < topSellers .length; i++){
//
//     console.log(topSellers[i].innerHTML);
// }

//Modifying innerHTML
//Uh oh - these were last month's top seller, WOOPS -
//let's update our <li> to show "Hat TBD" and let's be STRONG about it!

// for(var i = 0; i < topSellers .length; i++){
//
//     topSellers[i].innerHTML = "<strong>Hat TBD</strong>";
// }


//innerText vs innerHTML
//"Our Top Sellers" seems odd now as well - let's adjust!

// var bestSeller = document.getElementById("best-seller");
//
// bestSeller.innerText ="Will update soon!";

//Perhaps a little EMPHASIS will assist - will innerText help?

// bestSeller.innerHTML = "<em>Will update soon!</em>";

//Attribute methods: hasAttribute, getAttribute, setAttribute, removeAttribute
var bottomLink = document.getElementById("bottom-Link");
//
console.log(bottomLink);


//hasAttribute: return a BOOLEAN if the element has this attribute

console.log(bottomLink.hasAttribute("href"));

console.log(bottomLink.hasAttribute("style"));


//getAttribute: what's that attribute's value? [the right side of the equation]

console.log(bottomLink.getAttribute("href"));

//setAttribute: let's change that attribute's value!



//Accessing or Modifying styles

// demonstrate the BODY as a thing to manipulate - the BODY can be targeted as any other thing:

// Get the body element (notice we need to use index 0 of the array!)

// Change the body font color

// We had to use [] syntax since the property name has a dash

// Replace dashes with camelCase to use standard . syntax