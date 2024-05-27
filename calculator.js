document.addEventListener("DOMContentLoaded", function () {

	const buttons = document.querySelectorAll(".btn");
	// console.log(btn1Value);

  let clickedValues = "";

	function handleButtonClick(event) {
    // console.log(event.target.id);
		// Get the value of the clicked button
		const buttonValue = event.target.value;
    // console.log(buttonValue);

    clickedValues += buttonValue;

		// Display the button value in the input
		document.getElementById("display").value = clickedValues;
	}

  buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
  }); 
});
