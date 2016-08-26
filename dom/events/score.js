var gameDone = false;
var playtoText = document.getElementById("playto");

var playtoValueChanger = document.querySelector("input");
var playtoValue = parseInt(playtoValueChanger.value, 10);

if (playtoValue != NaN) {
    var Player = function(score, name) {
        this.score = score;
        this.name = name;
    };

    var players = [];

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
                var scoreText = player.score.textContent;
                var score = parseInt(scoreText, 10);
                
                if (score == NaN) return;

                if (score < playtoValue) {
                    scoreText = (++score).toString();
                    if (score === playtoValue && !gameDone) {
                        player.score.classList.add("win-color");
                        gameDone = true;
                    } 
                    player.score.textContent = scoreText;
                } 
            });
        }
    });

    playtoValueChanger.addEventListener("input", function() {
        // If the game is over, do we reset?
        playtoValue = parseInt(this.value, 10);
        playtoText.textContent = this.value;
    });

    document.getElementById("reset").addEventListener("click", function() {
        players.forEach(function(player) {
            player.score.textContent = "0";
            player.score.classList.remove("win-color");
            gameDone = false;
        });
    });
}
