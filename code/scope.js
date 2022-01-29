// CLASS 7 -> Scope


var myName = "Alejandro";

function printName() {
    var myLastName = "Andrade";
    // global vars exist on local
    console.log(`${myName} ${myLastName}`);
}

printName(); // should return "Alejandro Andrade"

// local vars can't be reach by the global scope.
console.log(myLastName); // ERROR var undefined.
