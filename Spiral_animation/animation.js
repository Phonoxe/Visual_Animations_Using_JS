const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;

function draw() {
  requestAnimationFrame(draw);

  // Efface avec une légère transparence → effet de traînée
  ctx.fillStyle = 'rgba(0, 0, 0, 0.0725)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const n  = 1000;
  const cx = canvas.width  / 2;
  const cy = canvas.height / 2;
  const R  = Math.min(canvas.width, canvas.height) * 0.4;
  for (let i = 0; i < n; i++) {
    const u = (i / n)*8*Math.PI;
    // Fonction mathématique :
    const x = cx + (R-u*12)*Math.cos(u-t);
    const y = cy + (R-u*12)*Math.sin(u-t);

    // Couleur qui change avec le temps
    const hue = (i / n * 360 + t * 50) % 360;
    //const hue = 30;
    ctx.fillStyle = `hsl(${hue}, 80%, 60%)`;

    // Dessin du point
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  t += 0.02;
}

draw();
