const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

//same with forEach
const dNumber = [];
numbers.forEach((number) => {
  dNumber.push(number * 2);
});
console.log(dNumber);
