/*
With bubbling the event is first captured and handeled by the innnermost element and then propagated to the outer elements eg

Button<<Div<<Body<<HTML<<Document


If we have click event on all these components the BUtton will be firred first & all other kinda bubbled on that &  the document witll be fired last
*/

const button = document.querySelector('button');
const div = document.querySelector('form div:nth-child(2)');

button.addEventListener('click', (e) => {
  alert('clicked');
  e.stopPropagation; //stops parent click
});

div.addEventListener('click', () => {
  alert('div clicked');
});
