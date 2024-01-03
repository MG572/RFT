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