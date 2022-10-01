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

function drawArray(arr, currentPos) {
    cls();
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

function calcNewPosition(arr, currentPos, changeArray = true) {
    const cur = currentPos;
    const value = arr[cur];
    let newPosition = 0;
    
    /**
     * ===== RULES =====
     * 
     * value > 0 new possition is current possition plus value. 
     * arr[cur]--
     * value < 0 new new possition is current possition less the value.
     * arr[cur]++
     */

    if (value > 0) {
        newPosition = (currentPos + value) % arr.length; // surround the array
        arr[cur] -= changeArray ? 1 : 0;
    } else if (value < 0) {
        newPosition = (currentPos + value) % arr.length;
        newPosition += (newPosition < 0) ? arr.length : 0;
        arr[currentPos] += changeArray ? 1 : 0;
    } else {
        return cur;
    }

    return newPosition;
}

board = generateNumbers(10, 31, -11, 91, 30);
drawArray(board, playerPos);
function draw() {
    playerPos = calcNewPosition(board, playerPos, true);
    drawArray(board, playerPos);
}

$btn.addEventListener('click', draw)