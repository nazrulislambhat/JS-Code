const logo = document.querySelector('img');

const onClick = () => console.log('click event');

// const onDoubleClick = () => console.log('double click event');

const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'aquamarine') {
    document.body.style.backgroundColor = 'aquamarine';
    document.body.style.color = 'red';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

//Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
