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
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  //   itemList.innerHTML = ''; Method 1
  //   items.forEach((item) => item.remove()); Method 2

  //most performant way
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// clearButton.addEventListener('click', () => alert('Items Cleared')); //Blocking operation will not do anything else till alert is cleared

// clearButton.addEventListener('click', () => console.log('Items Cleared'));
// clearButton.addEventListener('click', onClear);

// setTimeout(() => clearButton.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearButton.click(), 5000);

clearButton.addEventListener('click', onClear);
