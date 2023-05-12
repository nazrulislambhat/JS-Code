const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = number.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);

//short version
const oddNumbers = number.filter((number) => number % 2 === 1);
console.log(oddNumbers);

//same with forEach will get the same result but a bit of code
const even = [];
number.forEach((number) => {
  if (number % 2 === 0) {
    even.push(number);
  }
});
console.log(even);

//a bit complicated array
const companies = [
  { name: 'Company1', category: 'Technology', start: 1908, end: 2022 },
  { name: 'Company2', category: 'Foods', start: 1900, end: 2055 },
  { name: 'Company3', category: 'Finance', start: 1786, end: 2023 },
  { name: 'Company4', category: 'Market', start: 1293, end: 2025 },
  { name: 'Company5', category: 'Software', start: 1074, end: 20226 },
  { name: 'Company6', category: 'Technology', start: 1123, end: 2022 },
  { name: 'Company7', category: 'Ecommerce', start: 1076, end: 2027 },
  { name: 'Company8', category: 'Finance', start: 1888, end: 2028 },
  { name: 'Company9', category: 'Foods', start: 1097, end: 2022 },
];
console.log(companies);
//Get only Finance companies