console.log("Planets-String connection test");

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split(" | ");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planetsBreak = ("Venus<br>Mercury<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune");
    // console.log(planetsBreak);

//     var planetsList = (
//
//     <ul>
//         <li>Mercury</li>
//         <li>Venus</li>
//         <li>Earth</li>
//         <li>Mars</li>
//         <li>Jupiter</li>
//         <li>Saturn</li>
//         <li>Uranus</li>
//         <li>Neptune</li>
//     </ul>
// ");
//     console.log(planetsList);
//

// Solution from review to compare my solution.
var planetsWithBrs = planetsArray.join("<br>");
var planetsHTML = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
        console.log(planetsHTML);
})();