// (function() {
//     "use strict";
//
//     create a circle object
    var circle = {
        radius: 3,
}
        getArea: function areaOfCircle(circle) {
//             // TODO: complete this method
//             // hint: area = pi * radius^2

            return Math.PI * (circle.radius * circle.radius);
}
//             return; // TODO: return the proper value
            console.log("The area of this circle is " + areaOfCircle(circle) + ".")

//
//         logInfo: function (doRounding) {
//             // TODO: complete this method.


//             // If doRounding is true, round the result to the nearest integer.
//             // Otherwise, output the complete value
//
//             console.log("Area of a circle with radius: " + this.radius + ", is: ");
//         }
//     };
//
//     // log info about the circle
//     console.log("Raw circle information");
//     circle.logInfo(false);
//     console.log("Circle information rounded to the nearest whole number");
//     circle.logInfo(true);
//
//     console.log("=======================================================");
//     // TODO: Change the radius of the circle to 5.
//
//     // log info about the circle
//     console.log("Raw circle information");
//     circle.logInfo(false);
//     console.log("Circle information rounded to the nearest whole number");
//     circle.logInfo(true);
// })()