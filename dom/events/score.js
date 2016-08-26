// Exercise in the video used variables for holding the score. Instead I'm using the value in the
// webpage to hold that and converting it to integer when I need to increment.

var gameDone = false;
var playtoText = document.getElementById("playto");
// var playtoText = document.querySelector("p span"); // don't need id

var playtoValueChanger = document.querySelector("input");
var playtoValue = parseInt(playtoValueChanger.value, 10);

// All the players we can have of type Player.
var players = [];


if (playtoValue != NaN) {
    var Player = function(score, name) {
        this.score = score; // The player score element
        this.name = name; // the name which matches the id for the score and also the button
    };

    // Names of the buttons and of the scores, one for each player. 
    // Could get fancy and use the actual indices/number of score spans
    // then convert to text. This means the html will need to have id's
    // as numerals (text). Then we can easily add another player to the 
    // page.
    var buttonNames = ["one", "two"];
    buttonNames.forEach(function(name) {
        var scores = document.querySelectorAll("span");
        var score;
        for (var i = 0; i < scores.length; i++) {
            if (scores[i].id == name) {
                score = scores[i];
                break;
            }
        }
        
        var player = new Player(score, name);
        players.push(player);

        var button;
        var buttons = document.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].id === name) {
                button = buttons[i];
                break;
            }
        }

        if (button != undefined) {
            button.addEventListener("click", function() {
                if (gameDone) return;

                var scoreText = player.score.textContent;
                var score = parseInt(scoreText, 10);
                
                if (score == NaN) return;

                if (score < playtoValue) {
                    scoreText = (++score).toString();
                    if (score === playtoValue) {
                        player.score.classList.add("win-color");
                        gameDone = true;
                    } 
                    player.score.textContent = scoreText;
                } 
            });
        }
    });

    playtoValueChanger.addEventListener("change" /*"input"*/, function() {
        playtoValue = parseInt(this.value, 10);
        playtoText.textContent = this.value;
        // This logic allows playing to continue if the value is changed unless either
        // player is at the limit.
        // players.forEach(function(p) {
        //     if (p.score.textContent === playtoText.textContent) {
        //         p.score.classList.add("win-color");
        //         gameDone = true;
        //     }
        // })
        // OR If the game is over, reset
        reset();
    });

    function reset() {
        players.forEach(function(player) {
            player.score.textContent = "0";
            player.score.classList.remove("win-color");
            gameDone = false;
        });
    }
}
