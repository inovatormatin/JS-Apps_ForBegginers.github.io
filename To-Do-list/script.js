const input = document.getElementById('userInput');
const enter = document.getElementById('addButton');
const ul = document.querySelector('ul');
// to delete a node
const deleteNode = (event) => event.target.parentNode.remove();
// to create new element
const createElement = () => {
	// creating new node
	var li =  document.createElement('li');
	var p =  document.createElement('p');
	p.setAttribute('id','taskName');
	p.appendChild(document.createTextNode(input.value));
	li.appendChild(p);
	ul.appendChild(li);
	input.value = '';
	// adding done Button
	var button =  document.createElement('button');
	button.appendChild(document.createTextNode('Done'));
	button.setAttribute('id','doneBtn');
	li.appendChild(button);
	const doneNode = () => p.style = "text-decoration: line-through";
	button.onclick = doneNode;
	// adding delete Button
	var button =  document.createElement('button');
	button.appendChild(document.createTextNode('Delete'));
	button.setAttribute('id','deleteBtn');
	li.appendChild(button);
	button.onclick = deleteNode;
}
// response on click
const onClick = () => {
	if(input.value.length > 0) {
		createElement();
	}
}
// response on enter
const onKeyPress = (event) => {
	if(input.value.length > 0 && event.keyCode === 13) {
		createElement();
	}
}
enter.addEventListener('click', onClick);
input.addEventListener('keypress', onKeyPress);