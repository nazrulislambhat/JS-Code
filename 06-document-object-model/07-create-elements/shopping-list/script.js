const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'my-element');

// div.innerText = 'Hello World'; //not the best way

const text = document.createTextNode('Hello World');
div.appendChild(text);

document.querySelector('ul').appendChild(div);
document.body.appendChild(div);

console.log(div);

//creating element & adding to DOM
//Quick & Dirty
function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

  document.querySelector('.items').appendChild(li);
}

//Clean

function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);
  console.log(li.innerHTML);
  document.querySelector('.items').appendChild(li);
}
createListItem('Eggs');
createNewItem('Cheese');
