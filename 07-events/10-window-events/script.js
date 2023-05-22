// document.querySelector('h1').textContent = 'Hello World';
// //will output null because we're loading js on page top before the DOM is loaded

// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };
// //this will work like a kinda hack

// window.addEventListener('load', () => {
//   document.querySelector('h1').textContent = 'Hello World';
// }); //will wait for the entire page too load

// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('h1').textContent = 'Hello World';
// });//as soon as the DOM is parsed this will work

// window.addEventListener('resize', () => {
//   document.querySelector(
//     'h1'
//   ).innerText = `${window.innerWidth} x ${window.innerHeight}`;
// }); 

//we also have scroll 