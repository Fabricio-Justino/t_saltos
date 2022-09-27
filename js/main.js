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
const m = 20; // margin

let board = [1, 2, 3, 4];

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

function drawArray(arr, currentPos) {
    const value = arr[currentPos];

    ctx.beginPath();
    ctx.font = 'serif 12px';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.strokeStyle = 'white';
    arr.forEach((el, i) => {
        if (i === currentPos) {
            ctx.fillStyle = 'blue';
            ctx.fillRect(m + i * rectW,  rectY, rectW, rectH);
            ctx.strokeRect(m + i * rectW,  rectY, rectW, rectH);
        } else {
            ctx.strokeRect(m + i * rectW,  rectY, rectW, rectH);
        }
        ctx.strokeText(el, m + i * rectW + (rectW / 2), rectY + (rectH / 2) );
    });
    ctx.closePath();
}

drawArray(board, 0);
