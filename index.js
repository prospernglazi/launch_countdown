let daysLeft = document.getElementById('unit--day');
let hoursLeft = document.getElementById('unit--hours');
let minutesLeft = document.getElementById('unit--minutes');
let secondsLeft = document.getElementById('unit--seconds');

const countDownDate = new Date('Dec 25, 2021 00:00:00').getTime();

const updateTimer = setInterval(() => {
	let now = new Date().getTime();
	let timeLeft = countDownDate - now;

	let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	daysLeft.innerHTML = days;
	hoursLeft.innerHTML = hours;
	minutesLeft.innerHTML = minutes;
	secondsLeft.innerHTML = seconds;

	if (timeLeft < 0) {
		clearInterval(myfunc);
		daysLeft.innerHTML = '';
		hoursLeft.innerHTML = '';
		minutesLeft.innerHTML = '';
		secondsLeft.innerHTML = '';
		document.getElementById('content__heading').innerHTML = 'TIME UP!!';
	}
}, 1000);
