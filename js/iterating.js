console.log("Connectiong test");
(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ["Xavier","James","Matthew","Ralph"]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */


for (var i = 0; i < names.length; i++); {
    console.log("This is my brother, " + names.length i + ".");
}
    //Still have issue with completing this question. It will not loop through array.
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
  names.forEach(function(element,index,names) {
      console.log(element);
      console.log(index);
      console.log(names);
  })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

var pets = ["dog","cat","bird","snake","hamster"]
    console.log(pets[0]);

 var friends = ["Jose", "Raymond", "Jesse", "Ann", "Linda"]
    console.log(friends[1]);

 var cars = ["Oldchevy", "Newchevy", "impala", "oldMazda", "newMazda"]
     console.log(cars[cars.length -1]);

var first = [1,2,3,4,5]
    console.log(first[0]);
var second = [1,2,3,4,5]
    console.log(second[1]);
var last = [1,2,3,4,5]
    console.log(last[last.length-1]);

})();






