const input = document.getElementById("item");
const submitButton = document.getElementById("submit");

const list = document.getElementById("list");
const generateButton = document.getElementById("generate");
const generated = document.getElementById("generated");

let itemsArray = [];

submitButton.addEventListener("click", () => {
	let itemName = input.value;

	if (itemName != "") {
		itemsArray.push(itemName);
		let itemElem = document.createElement("div");
		itemElem.classList.add("list-item");
		itemElem.innerText = itemName;
		list.appendChild(itemElem);
		input.value = "";
		return;
	}

	alert("Please enter an item");
});

generateButton.addEventListener("click", () => {
	generated.innerText = itemsArray[randomIndex(0, itemsArray.length)];
});
// Inclusive of min & max
// function randomIndex (min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function randomIndex (min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}