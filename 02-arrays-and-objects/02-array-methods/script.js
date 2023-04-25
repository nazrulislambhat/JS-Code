let x;
const arr = [1, 6, 9, 8, 7, 1, 2, 3, 5];
console.log(arr);
// console.log(arr);
// arr.push(17);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.reverse();
// console.log(arr);
x = arr.includes(2); //check if array has this item
console.log(x);

x = arr.indexOf(1); //index of a particular array item
console.log(x);

x = arr.slice(0,4); //gives values from 0-4 without changing the array
console.log(x);
console.log(arr);

x = arr.splice(0,4); //gives values from 0-4 by changing the array
console.log(x);
console.log(arr);