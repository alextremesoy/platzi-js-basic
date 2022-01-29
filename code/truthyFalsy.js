// Fasly or Truthy


var falseNumber = 0;
Boolean(falseNumber); // False Value -> 0

var falseNull = 0;
Boolean(falseNull); // null -> returns false

var falseNan = NaN;
Boolean(falseNan); // NaN -> returns false

var falseUndefined = undefined;
Boolean(falseUndefined); // undefined -> returns false
