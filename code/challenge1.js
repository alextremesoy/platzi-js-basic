// Game -> rock, paper, scissor
const prompt = require("prompt");

function requestEntry() {
    // Function request for the player entry.
    const props = [
        {
            name: "selection",
            warning: "Rock, paper or scissor"
        }
    ]

    prompt.start();
    prompt.get( props , (err, result) => {
        if (err) {
            return console.log(err);
        } 
        selection = result.selection;
    });
}

function enemySelection() {
    // Function generates a random option for the enemy selection;
    const options = ["0", "Rock", "Paper", "Scissor"];
    const randomOption = Math.floor(Math.random() * 3) + 1;
    return options[randomOption].toUpperCase();
}


function main() {
    
}



main();