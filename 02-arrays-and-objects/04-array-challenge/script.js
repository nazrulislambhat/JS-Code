const arr = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);
// //Result [6,5,4,3,2,1,0]
// console.log(arr);

//challange 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
const arr4 = [...arr1.slice(0, 4), ...arr2];
console.log(arr4);
//OR
const arr5 = arr1.slice(0, 4).concat(arr2);
console.log(arr5);
//OR
const arr6 = [...arr1, ...arr2];
arr6.splice(4, 1);
console.log(arr6);
