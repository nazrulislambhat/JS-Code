function removeButton() {
  document.querySelector('#clear').remove();
}
removeButton();

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}
//removeFirstItem();

//REMOVE ANY ITEM
function removeItem(number) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${number})`);
  ul.removeChild(li);
}

removeItem(1);
