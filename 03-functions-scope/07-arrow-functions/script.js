//Introduced in es6 2015 update
//Regular function

//

const add = (a, b) => {
  return a + b;
};
const substract = (a, b) => a - b;

console.log(add(3, 4));
console.log(substract(3, 4));

//Returning an object place () arrows before & after {} to return an object
const createObj = () => ({
  name: 'Nazrul'
});
console.log(createObj());
