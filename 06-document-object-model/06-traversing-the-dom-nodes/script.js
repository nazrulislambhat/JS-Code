//get child elements from the parent
let output;

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.firstElementChild;
output = parent.lastElementChild;

//Get Parent Elements from CHild

const child = document.querySelector('.child');
output = child.parentElement; //outputting parent by using child

//Select Siblling elements

const child2 = document.querySelector('.child:nth-child(2)');
output = child2.previousElementSibling; //previous child1
output = child2.nextElementSibling; //next child3
console.log(output);
