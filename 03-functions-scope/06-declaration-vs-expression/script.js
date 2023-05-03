//Decleration only available before decleration because of hoisting
function addDollerSign(value) {
  return '$' + value;
}
console.log(addDollerSign(200));


//Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};
console.log(addPlusSign(222));

