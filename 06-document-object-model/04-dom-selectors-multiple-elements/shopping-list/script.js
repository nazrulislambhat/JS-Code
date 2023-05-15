//querySelectorAll

const listItems = document.querySelectorAll('li');

// listItems.style.color = 'red';
//this wont work bacaue i am calling style on nodeList

//Style all
listItems.forEach((item) => {
  item.style.color = 'blue'; //color all blue
  if (item.innerText === 'Milk') {
    item.style.color = 'Yellow';
  } else if (item.innerText === 'Apples') {
    item.style.color = 'Red';
  } else if (item.innerText === 'Orange Juice') {
    item.style.color = 'Orange';
  } else if (item.innerText === 'Oreos') {
    item.style.color = 'DarkRed';
  }
});

const listItemsByClass = document.getElementsByClassName('item');
console.log(listItemsByClass); //HTML collection output

//Style all


// listItemsbyClass.forEach((item) => {
//   item.style.color = 'Pink'; //will not work because its an html collection
// });


//FIX
const convertToArray = Array.from(listItemsByClass);
convertToArray.forEach((item) => {
  item.style.color = 'Magenta'; 
});
console.log(listItems);
