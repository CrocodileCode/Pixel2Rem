// Selecting DOM elements
const pxInput = document.querySelector('#px');
const remOutput = document.querySelector('#rem');
const convertBtn = document.querySelector('#convert-btn');
const addBtn = document.querySelector('#add-btn');
const historyList = document.querySelector('#history-list');

// Converting pixel to rem
function pxToRem(px) {
	const baseFontSize = 16; // Set the base font size for the document
	return (px / baseFontSize) + 'rem'; // Return the rem value with a "rem" suffix
}

// Event listener for the convert button
convertBtn.addEventListener('click', () => {
	// Get the pixel value from the input field and convert it to rem
	const pxValue = parseFloat(pxInput.value);
	const remValue = pxToRem(pxValue);
	// Display the converted value in the output field
	remOutput.value = remValue;
});

// Event listener for the add to history button
addBtn.addEventListener('click', () => {
	// Get the pixel value and rem value from the input and output fields
	const pxValue = pxInput.value;
	const remValue = remOutput.value;
	// Create a new list item with the conversion values and add it to the history list
	const listItem = document.createElement('li');
	listItem.innerText = `${pxValue}px = ${remValue}`;
	historyList.appendChild(listItem);
});

// Load the conversion history from localStorage, if available
if (localStorage.getItem('history')) {
	historyList.innerHTML = localStorage.getItem('history');
}

// Save the conversion history to localStorage
function saveHistory() {
	localStorage.setItem('history', historyList.innerHTML);
}

// Add event listeners to save the history whenever a new item is added or removed
historyList.addEventListener('DOMNodeInserted', saveHistory);
historyList.addEventListener('DOMNodeRemoved', saveHistory);
