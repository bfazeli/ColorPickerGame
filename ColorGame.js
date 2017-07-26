/**
 * Created by bijanfazeli on 7/25/17.
 */
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

// Hook up components
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; ++i) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add Click listeners to squares
    squares[i].addEventListener("click", function () {
       // Grab color of clicked square and compare to pickedColor
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("Correct");
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        }
    });
}

function changeColors (color) {
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    return colors[Math.floor(Math.random() * colors.length)];
}