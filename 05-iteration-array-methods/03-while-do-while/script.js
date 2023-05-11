let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

const arr = [20, 30, 40, 50, 60];
while (i <= arr.length) {
  console.log(arr[i]);
  i++;
}

//nest while loops
let j = 0;
while (j <= 10) {
  console.log('Table of ' + j);
  let k = 1;
  while (k <= 10) {
    console.log(`${j} * ${k} = ${j * k}`);
    k++;
  }
  j++;
}

//do
do {
  console.log('I AM DO');
} while (i < 0);
