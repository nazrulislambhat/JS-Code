let x;
const fruits = ['apple', 'orange', 'pear'];
const veggies = ['tomato', 'potato', 'haakh'];

// fruits.push(veggies);
// x = fruits[3][2];
// const allFruits = [fruits, veggies];
// x = allFruits[1][1]; //nesting
const concat = fruits.concat(veggies); //using concat
console.log(concat);

x = [...fruits, ...veggies];
console.log(x);

//flatten arrays
const nested = [1, 2, [3, 4], 5, [6, 7]];
x = nested.flat(); //no more nested arrays inside array
console.log(x);
