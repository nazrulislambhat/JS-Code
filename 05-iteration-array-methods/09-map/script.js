const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

//same with forEach
const dNumber = [];
numbers.forEach((number) => {
  dNumber.push(number * 2);
});
console.log(dNumber);

//a bit complicated array
const companies = [
  { name: 'Company1', category: 'Technology', start: 1908, end: 1999 },
  { name: 'Company2', category: 'Foods', start: 1900, end: 2055 },
  { name: 'Company3', category: 'Finance', start: 1786, end: 1999 },
  { name: 'Company4', category: 'Auto', start: 1293, end: 2025 },
  { name: 'Company5', category: 'Software', start: 1074, end: 2002 },
  { name: 'Company6', category: 'Technology', start: 1123, end: 2022 },
  { name: 'Company7', category: 'Auto', start: 1076, end: 2027 },
  { name: 'Company8', category: 'Finance', start: 1912, end: 1991 },
  { name: 'Company9', category: 'Foods', start: 1097, end: 2022 },
];
console.log(companies);

//create of array of company names
const companyNames = companies.map((company) => company.name); //for each company get the company name
console.log(companyNames);

//create of array of company names & category
const companyAndCategoryNames = companies.map(
  (company) => 'Name: ' + company.name + ' ' + 'Category: ' + company.category
); //for each company get the company name & category
console.log(companyAndCategoryNames);
