const x = 100;
if (true) {
  const y = 200;
  console.log(x);
}
for (var i = 0; i <= 10; i++) {
  //var is not block scopped its old
  console.log(i);
}
console.log(i);
