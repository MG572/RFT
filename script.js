const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const balls = [];
const colors = ['#ff0000', '#0000ff', '#00ff00', '#ffff00'];
const sizes = [1, 2, 3, 4];
let score = 0;

//Az ideiglenes golyó
let previewBall = null;
const previewY = 536;

// Gravitáció
const gravity = 0.1;
const bounceStrength = 0.7;

// Score update
function drawScore() {
    // Canvas méretének beállitása kép méret alapján
    const dpr = window.devicePixelRatio || 1;
    canvas1.width = 150 * dpr;
    canvas1.height = 150 * dpr;

    ctx1.scale(dpr, dpr);

    ctx1.font = "20px Arial";
    ctx1.fillStyle = "black";
    ctx1.textAlign = "center";

    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

    ctx1.fillText("Score: " + score, canvas1.width / 2, canvas1.height / 6);
}
