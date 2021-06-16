const userInput = document.getElementById('floatingTextarea');
const button = document.getElementById('submitButton');
const result = document.getElementById('result');
// calculate String length
const inputLength = () => userInput.value.length;
// count total no. of vowels
let vowels = [`a`,`e`,`i`,`o`,`u`,`A`,`E`,`I`,`O`,`U`];
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
		result.innerText = `There are ${countVowels()} vowel in your content.`;
	}
	else{
		result.innerText = `Please write something.`;
	}
}
const onKeyPress = (value) => {
	if(inputLength() > 0 && value.keyCode === 13) {
		button.click();
		() => {result.innerText = `There are ${countVowels()} vowel in your content.`;}		
	}
	else{
		result.innerText = `Please write something.`;
	}
}
button.addEventListener('click',onClick);
userInput.addEventListener('keypress',onKeyPress);
