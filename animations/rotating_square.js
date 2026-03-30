const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;

function draw() {
  requestAnimationFrame(draw);

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const n  = 200;
  const cx = canvas.width  / 2;
  const cy = canvas.height / 2;
  const R  = Math.min(canvas.width, canvas.height) * 0.3;
  const lineLength = R * 2;
  const left = cx - R;
  const up = cy - R
  const sx = cx + R;
  const sy = cy + R;

  for (let i = 0; i < n; i++) {
    const u = (i / n) * lineLength;
    let x = 1;
    let y = 1;
    if(u/lineLength < 0.25){
      x = ((sx - u*4 - t * 300) - left) % lineLength;
      if (x < 0) x += lineLength;
      x += left;
      y = cy+R;
    }
    else if(u/lineLength < 0.5)
    {
      y = ((sy - u*4 + t * 300) - up) % lineLength;
      if (y < 0) y += lineLength;
      y += up;
      x = cx+R;
    }
    else if(u/lineLength < 0.75){
      x = ((sx - u*4 + t * 300) - left) % lineLength;
      if (x < 0) x += lineLength;
      x += left;
      y = cy-R;
    }
    else if(u/lineLength < 1)
    {
      y = ((sy - u*4 - t * 300) - up) % lineLength;
      if (y < 0) y += lineLength;
      y += up;
      x = cx-R;
    }
    const dx = x - cx;
    const dy = y - cy;
    const rx = dx * Math.cos(-t) - dy * Math.sin(-t);
    const ry = dx * Math.sin(-t) + dy * Math.cos(-t);
    x = cx + rx;
    y = cy + ry;
    ctx.fillStyle = 'rgb(214, 128, 53)';
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
  
  t += 0.001;
}

draw();