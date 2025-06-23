let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let timeEl = document.getElementById('timeEl');

let isRunning = false;
let time = 120; // seconds
let countdownInterval;

startBtn.addEventListener('click', startCountdown);
resetBtn.addEventListener('click', resetCountdown);

function startCountdown() {
	isRunning = !isRunning;

	if (isRunning == true) {
		startBtn.innerText = 'Pause';
		countdownInterval = setInterval(() => {
			time = time - 1;
			let min = Math.floor(time / 60);
			let sec = time % 60;
			timeEl.innerText = min + ':' + sec;
			console.log(time);
			if (time == -1) {
				isRunning = false;
				startBtn.innerText = 'Start';
				time = 5;
				timeEl.innerText = time;
				clearInterval(countdownInterval);
			}
		}, 1000); // in milliseconds, 1000 is 1 second
	} else {
		startBtn.innerText = 'Start';
		clearInterval(countdownInterval);
	}
}

function resetCountdown() {
	clearInterval(countdownInterval);
	timeEl.innerText = '2:00';
	time = 120;
	startBtn.innerText = 'Start';
}
