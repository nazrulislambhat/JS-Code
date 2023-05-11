//old way
const item = ['book', 'table', 'chair', 'dog', 'cat', 'computer'];
for (let i = 0; i < item.length; i++) {
  console.log(item[i]);
}

//for of
for (const it of item) {
  console.log(it);
}
//objects
const users = [
  {
    name: 'Brad',
  },
  {
    name: 'Nazrul',
  },
  {
    name: 'Islam',
  },
];
for (const user of users) {
  console.log(user.name);
}

//loop through strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

//loop over maps
const map = new Map();
map.set('name', 'Jhonm');
map.set('age', 30);
for (const [key, value] of map) {
  console.log(key, value);
}
