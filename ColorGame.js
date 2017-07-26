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
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; ++i) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add Click listeners to squares
    squares[i].addEventListener("click", function () {
       // Grab color of clicked square and compare to pickedColor
        if (this.style.backgroundColor === pickedColor)
            alert("Correct");
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        }
    });
}