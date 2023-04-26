const firstName = 'Nazrul';
const profession = 'SDE';
const age = 30;

const person = {
  firstName,
  profession,
  age,
};
console.log(person.firstName);
console.log(person.profession);
console.log(person.age);
//Destructing
const todo = {
  id: 1,
  title: 'take me home',
  user: {
    name: 'islam',
  },
};
const {
  id,
  title,
  user: { name },
} = todo;
console.log(id, title, name);
