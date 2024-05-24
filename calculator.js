document.addEventListener('DOMContentLoaded', function() {
  const btn1 = document.getElementById('bt1');
// console.log(btn1Value);


function handleButtonClick(event) {
  // Get the value of the clicked button
  const buttonValue = event.target.value;

  // Display the button value in the input
  document.getElementById('display').value = buttonValue;
}

// Add event listeners to each button
btn1.addEventListener('click', handleButtonClick);

});



