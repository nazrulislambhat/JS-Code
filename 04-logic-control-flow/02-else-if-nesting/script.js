const d = new Date(10, 30, 23, 13, 0, 0);
const hour = d.getHours();
if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Evening');
}
