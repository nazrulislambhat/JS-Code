let x;
let d = new Date();

x = Intl.DateTimeFormat('default').format(d);
console.log(x);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log(x);

x = d.toLocaleString('default', { month: 'short' });
console.log(x);


x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});
console.log(x);