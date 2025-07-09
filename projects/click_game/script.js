const gameArea = document.getElementById('gameArea');
const emojiEl = document.getElementById('emojiEl');
const scoreEl = document.getElementById('scoreEl');

let score = 0;

const emojiHeight = emojiEl.offsetHeight;

const w = gameArea.offsetWidth - emojiHeight; 
const h = gameArea.offsetHeight - emojiHeight; 

const x = Math.floor(Math.random() * w);
const y = Math.floor(Math.random() * h);

const randomFontSize = Math.random() * 150 + 50; 

emojiEl.style.left = x + 'px';
emojiEl.style.top = y + 'px';
emojiEl.style.fontSize = randomFontSize + 'px';

console.log(w, h);
console.log(x, y);

function gameLogic() {
	score += 1;
	scoreEl.innerText = score;
}

emojiEl.addEventListener('click', gameLogic);
