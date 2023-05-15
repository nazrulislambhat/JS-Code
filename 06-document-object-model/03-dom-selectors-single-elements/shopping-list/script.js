//select single elements on the page

//document.getElementById();

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className); //empty because it has no class name added
console.log(document.getElementById('app-title').getAttribute('id'));

//Set Attributes
console.log((document.getElementById('app-title').title = 'Hello World'));

//GET CHANGE CONTENT'
const title = document.getElementById('app-title');
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Worldd';

title.innerHTML = '<strong>Hello World</strong>';
title.style.color = 'Red';
title.style.backgroundColor = 'pink';

//document.querySelector
console.log(document.querySelector('h1')); //selects first h1 in the page
console.log(document.querySelector('.container')); //select class
console.log(document.querySelector('#app-title')); //select title
console.log(document.querySelector('input[text]')); //select attribute
