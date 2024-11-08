// initial count value ;
let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

// console.log(btns);
btns.forEach(function(item){
	// console.log(item);
	item.addEventListener("click", function(e){
		// console.log(e.target.classList)
		const className = e.target.classList;
		if(className.contains("decrease")){
			count--;
		}
		else if(className.contains("increase")){
			count++ ;
		}
		else {
			count = 0;
		}
		if(count < 0){
			value.style.color = "red"
		}
		if (count > 0) {
			value.style.color = "green"
		}
		if(count === 0){
			value.style.color = "black"
		}
		value.textContent = count
	})
})
