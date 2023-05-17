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

const onRightClick = () => console.log('right click event');

const onMouseDownClick = () => console.log('mouse down event');
const onMouseUpClick = () => console.log('mouse up event');

const onWheel = () => console.log('wheel');

const onMouseOut = () => console.log('mouse out');
const onMouseOver = () => console.log('mouse over');

const onDragStart = () => console.log('dragging started Start'); //only once on whick when dragging starts
const onDragEnd = () => console.log('dragging started end'); //only once on whick when dragging lets go

const onDrag = () => console.log('dragging'); //aslong as user is draggin or holding

//Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDownClick);
logo.addEventListener('mouseup', onMouseUpClick);
logo.addEventListener('wheel', onWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('dragend', onDragEnd);
logo.addEventListener('drag', onDrag);
