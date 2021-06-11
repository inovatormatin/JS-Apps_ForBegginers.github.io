const userInput = document.getElementById('userInput');
const button = document.getElementById('submitButton');
// calculate String length
const inputLength = () => userInput.value.length;
// count total no. of vowels
let vowels = [`a`,`e`,`i`,`o`,`u`];
const countVowels = () => {
	var x = 0;
	for(var i = 0; i < inputLength(); i++) {
		if(vowels.includes(userInput.value[i])) {
			x++;
		}
	}
	userInput.value = '';
	return x;
}
// give output
const onClick = () => {
	if(inputLength() > 0) {
		alert(countVowels());
	}
}
const onKeyPress = (value) => {
	if(inputLength() > 0 && value.keyCode === 13) {
		alert(countVowels());
	}
}
button.addEventListener('click',onClick);
userInput.addEventListener('keypress',onKeyPress);