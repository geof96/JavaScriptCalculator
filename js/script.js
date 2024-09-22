console.log("jeg er i guess my number")


//High, low, win or loss message
const lblMessage = document.querySelector(".message")
console.log(lblMessage)
console.log(lblMessage.textContent)

//Number to be guessed (Random number)
const lblNumber = document.querySelector(".number")
console.log(lblNumber)

//Player Score
const lblScore = document.querySelector(".score")
let currentScore;
console.log(lblScore)

//Player highscore
const highScore = document.querySelector(".highscore")
let highScoreValue = 0;

//PLayer guess
const inpGuess = document.querySelector(".guess")
console.log(inpGuess)


//Check and again buttons
//const bntAgain = document.querySelector(".btnAgain")
const bntAgain = document.querySelector(".again")
const bntCheck = document.querySelector(".btnCheck")


//Starts game and generates number
function startGame() {
    generateNumber();
    currentScore = 20
    lblScore.textContent = currentScore;
    lblMessage.textContent = "Start guessing..."
    lblNumber.textContent = "?"
    inpGuess.value = ""
    highScore.textContent;
}

startGame();

//This method returns a random number
function generateNumber() {
    return lblNumber.value = Math.trunc(Math.random() * 20) + 1;
}


console.log(lblNumber.value)

function checkAnswer() {
    const userGuess = Number(inpGuess.value);


    if (currentScore > 1) {
//Print out to high on the "message const".
        if (userGuess > lblNumber.value) {
            lblMessage.textContent = "The number is too high"
            currentScore--;
            lblScore.textContent = currentScore;
        }

        //Print out to low on the "message const".
        else if (userGuess < lblNumber.value) {
            lblMessage.textContent = "The number is too low"
            currentScore--;
            lblScore.textContent = currentScore;
        }

        //Else print out "you've guessed the right number".
        else {
            lblMessage.textContent = "You've guessed right!"
            lblNumber.textContent = String(userGuess);
            lblScore.textContent;
            if (currentScore > highScoreValue) {
                highScoreValue = currentScore;
                highScore.textContent = highScoreValue;
            }
        }
    } else {
        lblMessage.textContent = "You've lost the game. Press again to restart";
    }
}

function resetGame() {
    generateNumber();
    currentScore = 20
    lblScore.textContent = currentScore;
    lblMessage.textContent = "Start guessing..."
    lblNumber.textContent = "?"
    inpGuess.value = ""
    highScore.textContent;
}


bntAgain.addEventListener('click', resetGame);
bntCheck.addEventListener('click', checkAnswer)




