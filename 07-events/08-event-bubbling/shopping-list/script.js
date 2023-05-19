const button = document.querySelector('button');
const div = document.querySelector('form div:nth-child(2)');

button.addEventListener('click', () => {
  alert('clicked');
});

div.addEventListener('click', () => {
  alert('clicked');
});
