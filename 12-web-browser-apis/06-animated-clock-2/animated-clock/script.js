const faceColor = document.getElementById('face-color');
const lineColor = document.getElementById('line-color');
const borderColor = document.getElementById('border-color');
const largeColor = document.getElementById('large-hand-color');
const secondColor = document.getElementById('second-hand-color');
const canvas = document.getElementById('canvas');

function clock() {
  const now = new Date();

  const ctx = canvas.getContext('2d');

  //Canvas setup

  ctx.save(); //save default
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); //put 0, 0 in the middle
  ctx.rotate(-Math.PI / 2); //rotate -90 deg

  //set default styles
  ctx.strokeStyle = '#002E2C';
  ctx.fillStyle = faceColor.value;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  //draw clock face/border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  //draw hour marks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  //draw minutes marks
  ctx.save();
  ctx.lineWidth = 3;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  //get cur time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  //draw hr hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = largeColor.value;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  //draw min hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = secondColor.value;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  //draw sec hand
  ctx.save();
  ctx.rotate(sec * (Math.PI / 30));
  ctx.strokeStyle = lineColor.value;
  ctx.fillStyle = borderColor.value;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore(); //restore default
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);
document.getElementById('save-btn').addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataURL;
  link.click();
});
