let lovescode = 'true'

let hatescode = 'false' 

if (lovescode === hatescode) {
  console.log("Coding has its challenges");
} else (lovescode !== hatescode);{
  console.log("I love to code!");
}

// For problems 2-3 use the following lines of code:
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
if (amysAge > brittanisAge){
  console.log("Amy is older. ");
  }
  else if(brittanisAge > amysAge){
    console.log("Brittani is older");}
  else{
    console.log("Amy and Brittani are the same age")
  }


////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/


//CODE HERE

if (amysBirthYear === brittanisBirthYear){
  console.log("Amy and Brittani were born in the same year.")
}
else{
  console.log("Amy and Brittani were not born in the same year")
}


////////// PROBLEM 4 //////////


/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

//CODE HERE


let temperature = 55
let rain = true

// 80 + and raining - tshirt with umbrella'
// 60 and 80 and raining wear a rain jacket
// 60 or below wear jacket and umbrella 
// not raining (suns out buns out basically )
if (temperature >= 80 && rain === true) {
  console.log("Wear a t shirt and grab an unbrella");
}else if (temperature <80 && temperature > 60 && rain === true){
  console.log("Wear a rain jacket")
}else if (temperature <60 && rain === true){
    console.log("Wear a jacket and take an umbrella")
    }
  else{
     console.log("It's not actually raining");
  }



////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE



////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

//CODE HERE


////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE



////////// PROBLEM 8 //////////

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/
let score = 0;
let passingScore = 7;

while (score < passingScore){
  console.log("Your score is not high enough.") 
  score ++
};
//CODE HERE

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

//CODE HERE

let changeMyMind = 'true';
console.log(changeMyMind);
changeMyMind = !changeMyMind
console.log(changeMyMind);

////////// PROBLEM 10 //////////
// Try to change the value of changeMyMind (irrespective of whether it is true or false) and then console.log it's new status. It should log true. Hint: use the not operator.

//CODE HERE

changeMyMind ='true'
console.log(changeMyMind);




////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE
while (z > 0) {
  for (let i = z; i> 0; i--){
    console.log(i)
  
  } z--

}
