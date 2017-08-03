/**
 * Created by bijanfazeli on 7/25/17.
 */

var numSquares = 6;
var colors = [];
var pickedColor;

// Hook up components
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init () {

    // Mode btns Event Listeners
    setUpModeButtons();

    setUpSquares();

    reset();
}

function setUpSquares () {
    for(var i = 0; i < squares.length; ++i) {
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
}

function setUpModeButtons () {
    // Mode btns Event listeners
    for (var i = 0; i < modeButtons.length; ++i)
    {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            numSquares = this.textContent === "Easy" ? 3 : 6;

            reset();
        });
    }
}

function reset () {
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a Random color from array.
    pickedColor = pickColor();

    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    // Change colors of squares
    for(var i = 0; i < squares.length; ++i)
    {
        if (colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
            squares[i].style.display = "none";
    }

    h1.style.backgroundColor = "steelblue";
}

/*easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    messageDisplay.textContent = "";
    colors = generateRandomColors(3);
    pickedColor = pickColor();

    colorDisplay.textContent = pickColor();

    for(var i = 0, offSet = 3; colors[i]; ++i)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i + offSet].style.display = "none";
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    messageDisplay.textContent = "";
    colors = generateRandomColors(6);
    pickedColor = pickColor();

    colorDisplay.textContent = pickColor();

    for(var i = 0; i < squares.length; ++i)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});*/

resetButton.addEventListener("click", function () {
    reset();
});

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