const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;

function draw() {
  requestAnimationFrame(draw);

  // Efface avec une légère transparence → effet de traînée
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const n  = 100;
  const cx = canvas.width  / 2;
  const cy = canvas.height / 2;
  const R  = Math.min(canvas.width, canvas.height) * 0.4;
  const segLength = R*Math.sqrt(2)
  const half = segLength/2;
  for (let i = 0; i < n; i++) {
    const u = (i / n)*2*Math.PI;
    // Fonction mathématique :
    let x = cx + R*Math.cos(u-t);
    let y = cy + R*Math.sin(u-t);
    x = Math.max(Math.min(x,cx+half),cx-half)
    y = Math.max(Math.min(y,cy+half),cy-half)
    // Couleur qui change avec le temps
    //const hue = (i / n * 360 + t * 50) % 360;
    const hue = 30;
    ctx.fillStyle = `hsl(${hue}, 80%, 60%)`;

    // Dessin du point
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  t += 0.001;
}

draw();
