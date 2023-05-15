//select single elements on the page

//document.getElementById();

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className); //empty because it has no class name added
console.log(document.getElementById('app-title').getAttribute('id'));

//Set Attributes
console.log((document.getElementById('app-title').title = 'Hello World'));
