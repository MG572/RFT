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
// Golyó objektum létrehozása
function Ball(x, y, sizeIndex, dx, dy) {
    this.x = x;
    this.y = y;
    this.sizeIndex = sizeIndex;
    this.radius = sizes[sizeIndex] * 10;
    this.color = colors[sizeIndex];
    this.dx = dx;
    this.dy = dy;

    this.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };

    this.update = function () {
        this.x += this.dx;
        this.y += this.dy;

        // Ütközés ellenőrzése a bal és jobb oldalakkal
        if (this.x - this.radius < 0 || this.x + this.radius > canvas2.width) {
            this.dx = -this.dx * bounceStrength; // Bounce off the walls with reduced strength
        }

        // Ütközés ellenőrzése a felső és alsó oldalakkal
        if (this.y + this.radius > canvas2.height) {
            this.y = canvas2.height - this.radius; // Snap to the ground
            this.dy = -this.dy * bounceStrength; // Bounce off the ground with reduced strength
        }

        // Gravitációs hatás
        this.dy += gravity;

        this.handleCollisions(); // Kollíziókezelés hozzáadása
        this.draw(ctx2);
    };

    this.handleCollisions = function () {
        // Ütközés kezelése másik golyóval
        for (let i = 0; i < balls.length; i++) {
            const otherBall = balls[i];
            if (otherBall !== this && this.isColliding(otherBall)) {
                this.resolveCollision(otherBall);
            }
        }
    };

    this.isColliding = function (otherBall) {
        const distance = Math.sqrt((this.x - otherBall.x) ** 2 + (this.y - otherBall.y) ** 2);
        return distance < this.radius + otherBall.radius;
    };