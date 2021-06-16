const input = document.getElementById('input');
const enterButton = document.getElementById('addNoteButton');
const ul = document.querySelector('ul');
const inputLength = () =>  input.value.length;
const deleteNote = (event) => event.target.parentNode.remove();
const popUp = (event) => {
	event.target.parentNode.style.width = '70rem';
	event.target.parentNode.style.overflow = 'visible';
}
const hideUp = (event) => {
	event.target.parentNode.style.width = '18rem';
	event.target.parentNode.style.overflow = 'hidden';
}
const addNote = () => {
	var li =  document.createElement('li');
	li.setAttribute('class','liItem')
	var p = document.createElement('p');
	p.appendChild(document.createTextNode(input.value));
	li.appendChild(p);
	var button = document.createElement('button');
	button.appendChild(document.createTextNode('Delete'));
	button.setAttribute('class','btn btn-danger btn-sm');
	li.appendChild(button);
	button.onclick = deleteNote;
	var button = document.createElement('button');
	button.appendChild(document.createTextNode('Close'));
	button.setAttribute('class','btn btn-success btn-sm ms-2');
	li.appendChild(button);
	button.onclick = hideUp;
	li.childNodes[0].onclick = popUp;
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