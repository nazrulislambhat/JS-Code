//FALSY VALUES ANYTHING OTHER THAN THESE ARE FALSY VALUES
//false
//0
//"" or '' (Empty String)
//null
//undefined
//NaN

//TRUTHY VALUES
/*
-Everything that is not flasy
-true
-0 in a string
-'' space in a string
-[] empty array
-{} empty object
- function(){} empty function
 */

const a = false;
console.log(Boolean(a));

const b = 0;
console.log(Boolean(b));

const c = '';
console.log(Boolean(c));

const d = null;
console.log(Boolean(d));

const e = undefined;
console.log(Boolean(e));

const f = NaN;
console.log(Boolean(f));

//truthy & falsy caveats
const children = 0; //the person has 0 childre but will still see the promt to enter number of children becasue (children) is evaluated as falsy
if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children you have');
}
//FIX
const children2 = 0;
if (!isNaN(children)) {
  console.log(`You have ${children2} children`);
} else {
  console.log('Please enter number of children you have');
}

//another caveat checking for empty arrays
const posts = []; //this is a truthy value
if (posts) {
  console.log('List Posts'); //this will be shown because ^
} else {
  console.log('No Posts');
}

//FIX
const posts2 = [];
if (posts2.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts');
}

//checking for empty objects

const user = {};

if (Object.keys(user).length > 0) {
  //Object keys will give us an array of keys only the we can call length on it
  console.log('List User');
} else {
  console.log('No User');
}
//Loose equality
console.log(false == 0); //true because both are falsy
console.log(false === 0); //false because strict === operator is used
