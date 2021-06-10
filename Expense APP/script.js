const table = document.querySelector('table');
// user input
const expenseName = document.getElementById('expenseName'); // Expense name
const expenseDate = document.getElementById('date'); // Date
const expenseAmount = document.getElementById('expenseAmount'); // Amount
const button = document.getElementById('submit'); // Submit button
// calculation of total expense
const total = document.getElementById('total');
var totalAmount = 0;
const addAmountInTotal = (value) => {
	totalAmount = +totalAmount + +value;
	total.innerHTML = `Toatal : ${totalAmount}`;
}
// to clean input
const cleanInput = () => {
	expenseName.value = '';
	expenseDate.value = '';
	expenseAmount.value = '';
} 
// for deleting
const deleteIt = (event) => {
	totalAmount = +totalAmount - +event.target.parentNode.childNodes[2].textContent;
	total.innerHTML = `Toatal : ${totalAmount}`;
	event.target.parentNode.remove();
}
// function for adding new expense
const addExpense = () => {
	// if condition to check that , user provide ever input.
	if(expenseName.value.length !== 0 && expenseDate.value.length !== 0 && expenseAmount.value.length !== 0) {
		var tr = document.createElement('tr');
		var th = document.createElement('th');
		th.appendChild(document.createTextNode(expenseName.value));
		tr.appendChild(th);
		var th = document.createElement('th');
		th.appendChild(document.createTextNode(expenseDate.value));
		tr.appendChild(th);
		var th = document.createElement('th');
		th.appendChild(document.createTextNode(expenseAmount.value));
		tr.appendChild(th);
		addAmountInTotal(expenseAmount.value);
		var button = document.createElement('button');
		button.appendChild(document.createTextNode('x'));
		tr.appendChild(button);
		button.onclick = deleteIt;
		table.appendChild(tr);
		cleanInput();
	}
	else {
		alert('Please provide all information.')
	}
}
button.addEventListener('click', addExpense); // event listener for submit button