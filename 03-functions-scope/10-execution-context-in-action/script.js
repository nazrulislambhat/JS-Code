let x = 100;
let y = 50;
function getSum(n1, n2) {
  let sum = n1 + n2;
  return sum;
}
let sum1 = getSum(x, y);
let sum2 = getSum(10, 5);
console.log(sum1);
console.log(sum2);

/*
//EXPLAIN 

//CREATION PHASE
Line1: x variable is allocted memory & stores "undefined"
Line2: y variable is allocted memory & stores "undefined"
Line3: getSum() function is allocated momory & stores all code
Line7: sum1 variable is allocated memory & stores "undefined"
Line8: sum2 variable is allocated memory & stores "undefined"

//EXECUTION PHASE
Line1: Place value 100 into x
Line2: place value 50 in y
Line3: Skip the function because nothing to execute
Line7: Invoke the getSum() and creates a new function execution context

//FUNCTION EXECUTION CONTEXT CREATION PHASE
Line3: n1 & n2 variables are allocated memory & stored "undefined" 
Line4: sum variable is allocated memory & stores "undefined"

//FUNCTION EXECUTION CONTEXT EXECUTION PHASE
Line3: n1 & n2 are assigned 100 & 50 respectively
Line4: Calculation is done & 150 is put into sum variable
Line5: Return to Global EC with 150 into sum
Line7: Return sum value & put it in sum1
Line8: Open another Function EC & do the process all over again with different parameters

*/
