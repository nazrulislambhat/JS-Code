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
