//global variables
var numberPicked = prompt("pick a number to FizzBuzz!");

setInterval( "alert('Hello')", 5000 );

for (i=0; i <=numberPicked; i++) {

	var currentNumber = document.createElement("li");
	currentNumber.innerHTML = i;
	document.body.appendChild(currentNumber);



	/*if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz!");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}*/
}
