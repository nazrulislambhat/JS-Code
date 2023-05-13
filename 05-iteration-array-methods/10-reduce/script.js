const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);
console.log(sum);
//HOW ^^
/*
Started at 0 line 4 ran the function for all elements eg if it was on 5 the previous value will have 3 & current will have 4
*/

//SHORT VERSION
const sum2 = numbers.reduce((prev, curr) => prev + curr, 10);
console.log(sum2); // we get 65 as output becaue the inition inition value is now 10

//Kinda realworld example
const cart = [
  { id: 1, name: 'Product1', price: 180 },
  { id: 2, name: 'Product2', price: 190 },
  { id: 3, name: 'Product3', price: 160 },
];
const cartTotal = cart.reduce((prevPrice, product) => prevPrice + product.price, 0);

console.log(cartTotal);
