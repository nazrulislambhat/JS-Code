/*
3 Ways to add event listener in JS
1: Add directly in HTML (not recommended)
2: JS Event Listener
3: Modern Way use add event listener method
*/

// 2 JS Event Listener

const clearButton = document.querySelector('#clear');

// clearButton.onclick = function () {
//   alert('clear Items by named function');
// };

// 3 Add Event Listner Method

function onClear() {
  alert('named function');
}
clearButton.addEventListener('click', () => alert('Items Cleared')); //Blocking operation will not do anything else till alert is cleared

// clearButton.addEventListener('click', () => console.log('Items Cleared'));
clearButton.addEventListener('click', onClear);
