//Table of 17
let num = 17;
for (i = 1; i <= 10; i++) {
  console.log(`${num} X ${i} = ` + num * i);
}
//nest loops
for (let j = 1; j <= 10; j++) {
  console.log('Table of ' + j);
  for (let k = 1; k <= 10; k++) {
    console.log(`${j} * ${k} = ${j * k}`);
  }
}
//loop through a array
const name = ['brad', 'jhon', 'nazrul', 'ali'];
for (let n = 0; n < name.length; n++) {
  if (name[n] == 'nazrul') {
    console.log(`${name[n]} is the best`);
  }
  console.log(name[n]);
}
