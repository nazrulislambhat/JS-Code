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
