/**
 * Created by bijanfazeli on 7/25/17.
 */
var colors = generateRandomColors(6);

// Hook up components
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
    resetButton.textContent = "New Colors";

   // Generate all new colors
    colors = generateRandomColors(6);
    // Pick a Random color from array.
    pickedColor = pickColor();

    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    // Change colors of squares
    for(var i = 0; i < squares.length; ++i)
    {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; ++i) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add Click listeners to squares
    squares[i].addEventListener("click", function () {
       // Grab color of clicked square and compare to pickedColor
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
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

function generateRandomColors (num) {
    // Make an array
    var arr = [];

    // Add num random colors to arr
    for(var i = 0; i < num; ++i)
    {
        // Get random color and push into arr
        arr.push(randomColor());
    }

    // Return arr
    return arr;
}

function randomColor () {
    // Pick a 'red' from 0 - 255
    var color = "rgb(" + Math.floor(Math.random() * 256) + ", ";
    // Pick a 'green' from 0 - 255
    color += Math.floor(Math.random() * 256) + ", ";
    // Pick a 'blue' from 0 - 255
    color += Math.floor(Math.random() * 256) + ")";

    return color;
}