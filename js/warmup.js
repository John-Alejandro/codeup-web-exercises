// Why pay a fortune teller when you can just program your fortune yourself?

//     Write a function named tellFortune that:
//         takes 4 arguments: number of children, partner's name, geographic location, job title.


//         Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


//     Call that function 3 times with 3 different values for the arguments.

// Warm-up through. . 9:20


//function named tellFortune
//4 arguments = 4 parameters (numChildren, partnerName, geoLocation, jobTitle)
//"Hey, you will live in geoLocation working as a jobtitle with numChildren kids and married to partnerName"

function tellFortune(numChildren,spouseName,yourLocation,yourJob) {
        var output  = "You have "+ numChildren + " children, your spouse's name is " + spouseName + " and you currently live in " + yourLocation + " and work as a " + yourJob + ".";
        return output;
}



tellFortune(2,"Janie","Seattle","movie star")
tellFortune(1,"Mary","D.C.","senator")
tellFortune(2,"Liz","Austin","wrestler")



// You know how old your dog is in human years, but what about dog years? Calculate it!

//     Write a function named calculateDogAge that:
//        * takes 1 argument: your puppy's age.
//        * calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//        * outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
//     Call the function three times with different sets of values.


//     Bonus: Add an additional parameter to the function that takes the conversion rate of human to dog years.

//function calculateDogAge
// 2 parameters: my puppy's age and a conversion rate to human years
// output : return a formatted string


function calculateDogAge(input,conversionNum) {
    var doggieYearAge = input * conversionNum;
    return " Your dog is " + doggieYearAge + " years old in dog years. Did you know that dogs age 7 dog years for every human year of age?";
}
calculateDogAge(7,7)