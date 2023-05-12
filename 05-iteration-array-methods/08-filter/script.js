const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = number.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);

//short version
const oddNumbers = number.filter((number) => number % 2 === 1);
console.log(oddNumbers);

//same with forEach will get the same result but a bit of code
let even = [];
number.forEach((number) => {
  if (number % 2 === 0) {
    even.push(number);
  }
});
console.log(even);
