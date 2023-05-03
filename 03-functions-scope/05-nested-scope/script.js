function first() {
  const x = 100;
  second();
  function second() {
    const y = 200;
    console.log(x + y);
  }
}
first();