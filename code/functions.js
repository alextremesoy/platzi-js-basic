// CLASS 5 -> Functions 

/*
    >- Functions receive parameters.
    >- Two types of function.
    >- Recycles some steps and both can return values.
    >- On JS functions can or can't return values.
*/


// Declarative
/*
    -> HOSTING: We can call the declarative function 
    before declaring the function because of the hosting.
*/

function miRandomFunction() {
    console.log(" This is a random function ");
    var returnValue = false;
    return returnValue;
}

// Expression
/*
    This can be anonymous functions and this does not
    have the hoisting property. Meaning the function 
    should be called after created.
*/

const miExpressionFunction = (a, b) => {
    console.log("This var stores a function");
    return a + b;
}


function sayHelloToStudent(nameStudent) {
    console.log(`Hello ${nameStudent}! Continue learning.`);
}

function letsSum(a, b) {
    var result = a + b;
    return result;
}

// Testing the custom function
sayHelloToStudent("Alejandro");
let testingResult = letsSum(2, 4); // should return 6
console.log(testingResult);
