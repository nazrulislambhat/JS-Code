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

//EXPLAIN 
//CREATION PHASE
/*
Line1: x variable is allocted memory & stores "undefined"
Line2: y variable is allocted memory & stores "undefined"
Line3: getSum() function is allocated momory & stores all code

*/
