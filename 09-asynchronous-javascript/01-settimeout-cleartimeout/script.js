// setTimeout(changeText, 5000); //will wait for the task queue to clear before running even if it is 0 sec

// console.log('Hello Outside');

function changeText() {
  document.querySelector('h1').textContent = 'Hello Callback';
}

const timerId = setTimeout(changeText, 3000);
document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerId);
  console.log(timerId);
});
