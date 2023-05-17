const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};
const onKeyUp = (e) => {
  console.log('key up');
};
const onKeyDown = (e) => {
  console.log('key down');

  //key
  console.log(e.key); //the key that is bing pressed
  //keycode
  console.log(e.keycode); //ANSII key codes https://www.toptal.com/developers/keycode
  //code
  console.log(e.code);

  if (e.key === 'Enter') {
    alert('Enter Is Pressed');
  }
};

itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
