// CLASS 9 -> Coercion


var a = 4 + "7"; // coercion implicit -> compiler helps automated
                // concat the two values -> returns "47"

var b = 4 * "7"; // implicit coercion -> returns 28 -> string casted to num
// returns 28

// Explicit Coercion -> We force and change the val

var a = 30;
var b = a + ""; // "30"
var c = String(a); // cast a to a string "30"
var d = Number(c); // cast to a number 30
