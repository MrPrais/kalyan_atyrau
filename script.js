const canvas = document.getElementById('smoke-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.radius = Math.random() * 20 + 10;
    this.speedY = Math.random() * -1 - 0.5;
    this.alpha = Math.random();
  }

  update() {
    this.y += this.speedY;
    if (this.y < -100) {
      this.y = canvas.height + 100;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "rgba(200,200,200," + this.alpha + ")";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 150; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();
