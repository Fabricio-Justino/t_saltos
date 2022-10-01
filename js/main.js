const $body = document.body;
const $canvas = document.createElement('canvas');
const $btn = document.createElement('button');
$btn.innerHTML = 'next';
$btn.style = 'display:block';
const ctx = $canvas.getContext('2d');

$canvas.width = 600;
$canvas.height = 400;

const {width: w, height: h} = $canvas;
$body.appendChild($canvas);
$body.appendChild($btn);
const rectY = h/2 - 10;
const rectW = 600 / 11;
const rectH = 20;
const m = 20; // margin

let board = [2, 2, 3, 4];
let playerPos = 0;

cls();
function cls() {
    ctx.fillStyle = 'black';
    ctx.clearRect(0, 0, w, h);
    ctx.fillRect(0, 0, w, h);
}

function generateNumbers(arrLength, k, a, b, c) {
    const ar = [k];
    for (let i = 1; i < arrLength; i++) {
        ar.push(((ar[i-1] * a) % b) + c);
    }
    return ar;
}

