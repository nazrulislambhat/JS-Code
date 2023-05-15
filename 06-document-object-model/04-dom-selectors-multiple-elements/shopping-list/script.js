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
console.log(listItems);
