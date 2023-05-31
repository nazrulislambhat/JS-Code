// const intervalID = setInterval(myCallback, 1000);
// function myCallback() {
//   console.log(Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(fontBackgroundChange, 100);
  }
}

// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

// function changeRandomColor() {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = `#${randomColor}`;
// }

function fontBackgroundChange() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector('h2').style.color = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalID);
}

document.getElementById('stop').addEventListener('click', stopChange);
document.getElementById('start').addEventListener('click', startChange);
//document.getElementById('font').addEventListener('click', fontBackgroundChange);
