const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelector('li');

function add() {
  //className
  console.log(itemList.className); //string of all the class names
  //text.className = 'dark card'; //overide removes previous

  //classList
  console.log(itemList.classList);
  text.classList.add('dark'); //keeps the class thats already on it
}

function remove() {
  text.classList.remove('dark');
}

function toggle() {
  text.classList.toggle('dark'); //dark light switcher
}

//REPLACE replaces two classes takes two arguments


document.querySelector('#add').onclick = add;
document.querySelector('#remove').onclick = remove;
document.querySelector('#toggle').onclick = toggle;
