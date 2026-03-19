const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;

function draw() {
  requestAnimationFrame(draw);

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const n  = 100;
  const cx = canvas.width  / 2;
  const cy = canvas.height / 2;
  const R  = Math.min(canvas.width, canvas.height) * 0.4;
  const lineLength = R * 2;
  const left = cx - R;
  const up = cy - R
  const sx = cx + R;
  const sy = cy + R;

  for (let i = 0; i < n; i++) {
    const u = (i / n) * lineLength;
    if(u/lineLength < 0.25){
      let x = ((sx - u*4 - t * 10) - left) % lineLength;
      if (x < 0) x += lineLength;
      x += left;
      const y = cy+R;
      ctx.fillStyle = `hsl(30, 80%, 60%)`;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    else if(u/lineLength < 0.5)
    {
      let y = ((sy - u*4 + t * 10) - up) % lineLength;
      if (y < 0) y += lineLength;
      y += up;
      const x = cx+R;
      ctx.fillStyle = `hsl(30, 80%, 60%)`;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    else if(u/lineLength < 0.75){
      let x = ((sx - u*4 + t * 10) - left) % lineLength;
      if (x < 0) x += lineLength;
      x += left;
      const y = cy-R;
      ctx.fillStyle = `hsl(30, 80%, 60%)`;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    else if(u/lineLength < 1)
    {
      let y = ((sy - u*4 - t * 10) - up) % lineLength;
      if (y < 0) y += lineLength;
      y += up;
      const x = cx-R;
      ctx.fillStyle = `hsl(30, 80%, 60%)`;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  t += 0.02;
}

draw();