// Loop Structure: runs until the statement is false 
// let i = 1;

// while(i < 20){
//   console.log("Hello, world");
//   i++;
// }

// i stands for iterator. Every time a loop runs, it's called an iteration.

// var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard"];

// var i = 0;

// while(i < moviesArray.length){
//   console.log(moviesArray[i]);
//   i++;
// }
// info next to i should evaluate to a number. This is 5 because 5 movies
    // i increments by 1 until the statement is false
    // i++ tells the loop to increase i by 1 each time

// Another way to write loops
// for(var i = 0; i < moviesArray.length; i++){
//     console.log(moviesArray[i]);
//   }

//   var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]
//   for(var i = 0; i < cohortOneStudents.length; i++){
//     console.log(cohortOneStudents[i]);
//   }

//   var interestsArray = ["movies", "reading", "nature", "travel", "food"];
//   for(var i = 0; i < interestsArray.length; i++){
//     console.log("One of my interests is:", interestsArray[i]);
//   }

var interestsArray = ["movies", "reading", "nature", "travel", "food"];
    
let myFavoriteInterest = interestsArray[3]

  for(var i = 0; i < interestsArray.length; i++)
  
  if (interestsArray[i] === interestsArray[3]){
  console.log("My absolute favorite interest is:", interestsArray[3]); 
  } else {
    console.log("One of my interests is", interestsArray[i]);
}

// remember to call out an item in an array as a variable (ex: myFavoriteInterest) before tryna put it in something 
