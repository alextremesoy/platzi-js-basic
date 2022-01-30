// Class 12 -> If, else, else if

// var age = 23; // else if entered
// var age = 18; // if entered
var age = 17; //else entered

if (age === 18) {
    console.log("First time voting! You can vote.");
} else if(age > 18){
    console.log("You can vote.");
} else {
    console.log("You can't vote.")
}

// you can add unlimited else if but is not a very good practice.


// Ternary operator
// condition ? first option : second option
const msg = age > 18 ? "You can vote" : "Ups you can't vote";
console.log(msg);