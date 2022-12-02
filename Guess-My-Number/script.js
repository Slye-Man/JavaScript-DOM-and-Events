'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23

// secret number 
let secretNumber = Math.trunc(Math.random() * 20) + 1

// score
let score = 20;

//highscore
let highscore = 0

// functions for repeating code
function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

//adding click events
document.querySelector('.check').addEventListener(
    'click', 
    function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        //when there is no input
        if(!guess) {
            // document.querySelector('.message').textContent = '🚩 No number entered 🚩'
            displayMessage('🚩 No number entered 🚩')

        // when the player wins
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎈 Correct Number! 🎈'
            document.querySelector('.number').textContent = secretNumber
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'

            if(score > highscore) {
                highscore = score
                document.querySelector('.highscore').textContent = highscore
            }

        // when guess is wrong
        } else if (guess !== secretNumber) {
            document.querySelector('.message').textContent = 
                guess > secretNumber ? '📈 Too high!📈' : '📉 Too low!📉'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game💥'
            document.querySelector('.score').textContent = 0
        }
})

//adding click to again button
document.querySelector('.again').addEventListener(
    'click',
    function() {
        //restoring the score and secret number
        score = 20
        secretNumber = Math.trunc(Math.random() * 20) + 1

        // restoring the inital message and score
        document.querySelector('.message').textContent = 'Start guessing...'
        document.querySelector('.score').textContent = score
        document.querySelector('.number').textContent = '?'
        document.querySelector('.guess').textContent = ''

        //restoring the backgroundColor and width
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'

    }
)

// ownerproof-2466388-1669918995-cc6ab7db2a26