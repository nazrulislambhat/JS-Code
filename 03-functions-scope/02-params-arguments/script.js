function registerUsers(user = 'Bot') {
  //default paramater
  return user + ' is registered ';
}
console.log(registerUsers());

//Rest parameters
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 31));

//objects as parms
function loginUser(user) {
  return `the user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
  id: 17,
  name: 'Nazrul Islam',
};

console.log(loginUser(user));

//arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
