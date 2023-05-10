//Break
for (let i = 1; i < 20; i++) {
  if (i == 10) {
    break;
  }
  console.log(i);
}

//Continue
for (let j = 1; j < 20; j++) {
  if (j === 13) {
    console.log('Skipping 13');
    continue;
  }
  console.log(j);
}
