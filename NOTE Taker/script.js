const input = document.getElementById('input');
const enterButton = document.getElementById('addNoteButton');
const ul = document.querySelector('ul');
const inputLength = () =>  input.value.length;
const deleteNote = (event) => event.target.parentNode.remove();
const addNote = () => {
	var li =  document.createElement('li');
	var p = document.createElement('p');
	p.appendChild(document.createTextNode(input.value));
	li.appendChild(p);
	var button = document.createElement('button');
	button.appendChild(document.createTextNode('x'));
	li.appendChild(button);
	button.onclick = deleteNote;
	ul.appendChild(li);
	input.value = '';
}
const onKeyPress = (event) => {
	if(inputLength() > 0 && event.keyCode === 13) {
		addNote();
	}
}
const onClick = () => {
	if(inputLength() > 0) {
		addNote();
	}
}
input.addEventListener('keypress', onKeyPress);
enterButton.addEventListener('click', onClick);