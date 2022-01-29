// CLASS 8 -> Hoisting

// VAR hoisting

// declare
var myName;
// init
myName = "Alejandro";

// var is hoisted and it was created before this log function BUT...
// this var was not initialized.
// Motor of JS compiles and creates all the var first and the functions, soo..
// this lines were elevated.
console.log(hoistingExists);

var hoistingExists = true;

// FUNCTION hoisting

// The lines of code was elevated and the JS motor..
// this engine compiles first all the functions.

hey();

function hey() {
    console.log("Hey u!");
}

