// determines number of squares
var numSquares = 6

// stores colors values
var colors = [];

// stores the color clicked by user
var pickedColor;

// selects squares to paint them
var squares = document.querySelectorAll(".square");

// displays correct color name on h1
var colorDisplay = document.querySelector("#colorDisplay");

// displays messages on display bar
var messageDisplay = document.querySelector("#message");

// selects h1 to change its color
var h1 = document.querySelector("h1");

// selects button used to reset game
var resetButton = document.querySelector("#reset");

// selects button used to toggle easy/hard mode
var modeButtons = document.querySelectorAll(".mode");


// initializes game
init();


// defines the reset button logic
resetButton.addEventListener("click", function(){
	reset();
});


function init() {

	setUpSquares();

	setUpModeButtons();

	reset();
}


function setUpSquares() {
	// changes squares background color
	for (var i = 0; i < squares.length; i++) {

		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			// compare color to pickedColor
			if (clickedColor === pickedColor){
				// makes all squares the same color
				changeColors(clickedColor);
				// makes h1 the same color as the right one
				h1.style.background = clickedColor;
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again!"
			} else {
				// makes square the same color as background
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function setUpModeButtons() {
	// adds function to easy/hard button
	for (var i = 0; i < modeButtons.length; i++) {
		// loop through the buttons, pick the clicked one
		modeButtons[i].addEventListener("click", function(){
			// clears the class from buttos
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");

			// adds class to button clicked
			this.classList.add("selected");

			// sets numSquares based on button pressed
			if (this.textContent === "Easy"){
				numSquares = 3;
			} else {
				numSquares = 6;
			}

			// update game with new values
			reset();
		});
	}
}

// resets the game
function reset() {
	// generate new colors
	colors = generateRandomColors(numSquares);

	// pick new random color from array
	pickedColor = pickColor();

	// display name of color on h1
	colorDisplay.textContent = pickedColor;

	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		// determines if it'll show 3 or 6 squares
		if (colors[i]) {
			// assign colors to each square
			squares[i].style.backgroundColor = colors[i];
			// makes sure all blocks reappear
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}

	// changes h1 color back to blue
	h1.style.backgroundColor = "steelblue"

	// resets message display and reset button
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}


// makes all squares into the correct color
function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each color to match winning color
		squares[i].style.backgroundColor = color;
	}
}


// picks a random color
function pickColor() {
	// math.random gives a random decimal number between 0 and 1
	// math.floor clamps the decimal numbers
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


// generates random colors
function randomColor() {
	// pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);

	// pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);

	// pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


// generates an array with the random colors
function generateRandomColors(num) {
	// make an array
	var arr = [];

	// add num random colors to array
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}

