const gameArea = document.getElementById('gameArea');
const emojiEl = document.getElementById('emojiEl');
const scoreEl = document.getElementById('scoreEl');

let score = 0;

// get the height of the emoji
const emojiWidth = emojiEl.offsetWidth;
const emojiHeight = emojiEl.offsetHeight;

// get width and height of game area and minus the height of the emoji
const w = gameArea.offsetWidth - emojiWidth; // 844
const h = gameArea.offsetHeight - emojiHeight; // 1398

renderEmoji();

console.log(w, h);
console.log(emojiWidth, emojiHeight);

function gameLogic() {
	// score = score + 1;
	score += 1;
	scoreEl.innerText = score;
}

function renderEmoji() {
	// get random number between 0 and width of the game area
	const x = Math.floor(Math.random() * w);
	// get random number between 0 and height of the game area
	const y = Math.floor(Math.random() * h);

	const randomFontSize = Math.random() * 150 + 50; // 50 - 200

	emojiEl.style.left = x + 'px';
	emojiEl.style.top = y + 'px';
	emojiEl.style.fontSize = randomFontSize + 'px';

	console.log(x, y);
}

setInterval(() => {
	renderEmoji();
}, 1000);

emojiEl.addEventListener('click', gameLogic);
