let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let div = document.createElement("div");
	let li = document.createElement("li");
	let deleteButton = document.createElement("button");
	div.className = "task-wrapper";
	ul.appendChild(div);
	div.append(li, deleteButton);
	deleteButton.className = "delete-task-button";
	deleteButton.textContent = "Delete Task";
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleStrikeThrough(element) {
	if (element.target.tagName === "LI") {
		element.target.classList.toggle("done");
	}
}

function deleteItem(element) {
	if (element.target.className === "delete-task-button") {
		element.target.parentElement.remove();
	}
}

function handleUlClick(element) {
	toggleStrikeThrough(element);
	deleteItem(element);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", handleUlClick);
