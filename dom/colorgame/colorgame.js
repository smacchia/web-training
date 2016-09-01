var goalColor;
var goalText = document.getElementById("goal-color");
var message = document.querySelector("#message");

var easyButton = document.getElementById("easy");
easyButton.addEventListener("click", function() {
    setLevel(Math.floor(MAX_SQUARES / 2), easyButton, hardButton);
});

var hardButton = document.getElementById("hard");
hardButton.addEventListener("click", function() {
    setLevel(MAX_SQUARES, hardButton, easyButton);
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
    reset(numSquares);
});

var squares = document.getElementsByClassName("square");
const MAX_SQUARES = squares.length;
var numSquares = MAX_SQUARES;
var colors = [];

if (squares == null || squares == undefined || squares.length < numSquares) {
    alert("PROGRAMMING ERROR: there are not enough squraes in the html!");
} else {
    reset();
    setupSquareActions();
    setupButtonActions();
}

function setupButtonActions() {
    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        if (button.id !== "reset") {
            button.addEventListener("mouseover", function() {
                this.classlist.add("hover");
            });
            button.addEventListener("mouseout", function() {
                this.classlist.remove("hover");
            });
        }
    }
}

function setupSquareActions() {
    for (var i = 0; i < numSquares; i++) {
        squares[i].addEventListener("click", function() {
            if (this.style.backgroundColor !== goalColor) {
                this.style.backgroundColor = "";
                this.classList.add("body-color");
                message.textContent = "Try Again";
            } else {
                message.textContent = "Correct!";
                colorSquaresAllSame(goalColor);
                document.querySelector("h1").style.backgroundColor = goalColor;
                resetButton.textContent = "Play Again?";
            }
        });
    }
}

function reset() {
    message.textContent = "";
    colors = generateRandomColors(numSquares);
    goalColor = pickColor();
    colorSquares(numSquares);
    document.getElementById("goal-color").textContent = goalColor;
    document.querySelector("h1").style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
}

function colorSquares(numSquares) {
    for (var i = 0; i < numSquares; i++ ) {
        squares[i].style.backgroundColor = colors[i];
    }
}

function colorSquaresAllSame(color) {
    for (var j = 0; j < numSquares; j++) {
        squares[j].style.backgroundColor = goalColor; 
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
    var colors = [];

    for (var i = 0; i < num; i++) {
        var color = randomColor();
        if (colors.indexOf(color) !== -1) continue;
        colors.push(color);
    }

    return colors;
}

function randomColor() {
    return "rgb(" + randomColorPart() + ", " + randomColorPart() + ", " + randomColorPart() + ")"
}

function randomColorPart() {
    return Math.floor(Math.random() * 256);
}

function setLevel(max, buttonToSet, buttonToClear) {
    buttonToSet.classList.add("selected-level");
    buttonToClear.classList.remove("selected-level");
    numSquares = max;
    for (var i = max; i < squares.length; i++) {
        squares[i].style.backgroundColor = "transparent";
        // Can use the display of "block" for on and "none" for off
        // but that would require us to check the max and loop with
        // more complex logic.
        // squares[i].style.display = "none";
        squares[i].classList.add("body-color");
    }
    reset();
}

function hideUnusedSquares() {
    for (var i = numSquares; i < squares.length; i++) {
        squares[i].style.backgroundColor = "transparent";
        // Can use the display of "block" for on and "none" for off
        // but that would require us to check the max and loop with
        // more complex logic.
        // squares[i].style.display = "none";
        squares[i].classList.add("body-color");
    }

}
