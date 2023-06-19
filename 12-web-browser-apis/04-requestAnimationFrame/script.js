const image = document.querySelector('img');
let start;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const laps = timestamp - start;
  if (laps > 51000) {
    done = true;
  }

  if (done) {
    return;
  }

  image.style.transform = `translateX(${laps / 211}px) rotate(${laps / 1}deg)`;
  requestAnimationFrame(step);
}

requestAnimationFrame(step);
