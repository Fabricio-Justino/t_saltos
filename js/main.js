const $body = document.body;
const $canvas = document.createElement('canvas');
const ctx = $canvas.getContext('2d');

$canvas.width = 600;
$canvas.height = 400;

const {width: w, height: h} = $canvas;
$body.appendChild($canvas);

const rectY = h/2 - 10;
const rectW = 600 / 10;
const rectH = 20;

let board = [];

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

