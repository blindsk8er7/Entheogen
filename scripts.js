const phrases = [
  "Welcome to the Edge of Reality",
  "Decode the Divine. Disturb the Norm.",
  "Your Awakening Has Already Begun"
];
let currentPhrase = 0;
let currentChar = 0;
const typeTarget = document.getElementById("typewriter");

function typeWriter() {
  if (currentChar < phrases[currentPhrase].length) {
    typeTarget.textContent += phrases[currentPhrase][currentChar];
    currentChar++;
    setTimeout(typeWriter, 80);
  } else {
    setTimeout(() => {
      typeTarget.textContent = '';
      currentChar = 0;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      typeWriter();
    }, 2000);
  }
}
typeWriter();

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
});

function generateSigil() {
  const canvas = document.getElementById("sigilCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const input = document.getElementById("sigilInput").value;
  const chars = input.split('');
  ctx.strokeStyle = "#ff00aa";
  ctx.lineWidth = 2;
  ctx.beginPath();

  let x = canvas.width / 2;
  let y = canvas.height / 2;
  for (let i = 0; i < chars.length; i++) {
    let angle = Math.random() * 2 * Math.PI;
    let radius = 50 + Math.random() * 100;
    let newX = x + Math.cos(angle) * radius;
    let newY = y + Math.sin(angle) * radius;
    ctx.moveTo(x, y);
    ctx.lineTo(newX, newY);
    x = newX;
    y = newY;
  }

  ctx.stroke();
}
