const button = document.getElementById('shuffleButton');
const imageFlip =  document.querySelectorAll('img');
const start = document.getElementById('start');
const ul = document.getElementById('imageSection');
const result = document.getElementById('result');

var count = 0;
var temp;
var image1;
const countClick = () => {
	count++;
}
ul.addEventListener('click', countClick);
const match = () => {
	if(temp === image1){ result.innerText = 'wow ! You win. Press shuffle to replay.'}
	if(temp !== image1){ result.innerText = 'oops ! You lose. Press shuffle to replay.'}
}
var arr = [
	'https://robohash.org/1',
	'https://robohash.org/2',
	'https://robohash.org/3', 
	'https://robohash.org/1',
	'https://robohash.org/2',
	'https://robohash.org/3'
];
const shuffle = (array) => {
	var currentIndex = array.length, randomIndex;
	while(0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex],array[currentIndex]];
	}
	return array;
}
const shuffleImage = () => {
	shuffle(arr);
	for(var i = 0; arr.length > 0; i++){
		var img = `img${i}`;
		document.getElementById(img).src = arr[i];
		document.getElementById(img).style.opacity = '0%';
		count = 0;
		result.innerText = '';
	}
}
button.addEventListener('click', shuffleImage);
const flipIt = (event)  => {
	temp = event.target.src;
	if(count === 0) {
		image1 = temp;
		event.target.style.opacity = '100%';
	}
	if(count === 1) {
		event.target.style.opacity = '100%';
		match();
	}
	if(count > 1) {
	alert('Press shuffle to replay');}
}
for(var i = 0; i < imageFlip.length; i++) {
	imageFlip[i].onclick = flipIt;
}
const startGame = () => {
	document.getElementById('game').style.display = 'block';
	start.style.display = 'none';
	shuffleImage();
}
start.addEventListener('click', startGame);