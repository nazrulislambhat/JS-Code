const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  console.log(e.target.value);
  heading.textContent = e.target.value;
}

function onChecked(e) {
  console.log(e.target.checked);
}

function onFocus(e) {
  console.log('Focused');
}

function onBlur(e) {
  console.log('not Focused');
}

itemInput.addEventListener('input', onInput); //since key down wont work on select list use input as the eventlistener
priorityInput.addEventListener('change', onInput); //input can be used
checkbox.addEventListener('input', onChecked);

itemInput.addEventListener('focus', onFocus);

itemInput.addEventListener('blur', onBlur);
