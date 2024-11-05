const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask(){
	if (inputBox.value ==="") {
		alert("Must enter something");
	}
	else {
	let li = document.createElement("li");
	li.innerHTML = inputBox.value ;
	listContainer.appendChild(li);

	let spanElement = document.createElement("span");
	spanElement.innerHTML = "\u00d7";
	li.appendChild(spanElement);
	}
	inputBox.value = "";
	refreshData()
}

listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		refreshData()
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		refreshData()
	}
})

function refreshData(){
	localStorage.setItem("data", listContainer.innerHTML);
}

function showRefreshData(){
	listContainer.innerHTML = localStorage.getItem("data");
}
showRefreshData();