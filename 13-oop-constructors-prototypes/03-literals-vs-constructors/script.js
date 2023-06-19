var primitiveNumber = 42; // primitive number
var boxedNumber = new Number(primitiveNumber); // boxing the primitive number

console.log(typeof primitiveNumber); // "number"
console.log(typeof boxedNumber); // "object"

console.log(primitiveNumber.toFixed(2)); // valid, but boxing is not required
console.log(boxedNumber.toFixed(2)); // valid, using the toFixed() method from the Number object
