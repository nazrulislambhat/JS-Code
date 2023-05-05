const d = new Date(10, 30, 23, 9, 0, 0);
const hour = d.getHours();
// if (hour < 12) {
//   console.log('Good Morning');
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Evening');
// }
//Nested if

// if (hour < 12) {
//   console.log('Good Morning');
//   if (hour === 6) {
//     console.log('Wakey Wakey');
//   }
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Evening');
//   if (hour >= 20) {
//     console.log('Sleepy Sleepy');
//   }
// }

//Multiple conditions
if (hour <= 12 && hour >= 8) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Evening');
}
