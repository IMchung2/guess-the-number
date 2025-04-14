let randomNumber;
let attempts = 0;

document.getElementById('guess-button').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const messageElement = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        messageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('restart-button').style.display = 'block';
        document.getElementById('guess-button').disabled = true;
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
    } else {
        messageElement.textContent = "Too high! Try again.";
    }
});

document.getElementById('restart-button').addEventListener('click', function() {
    startGame();
});

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess-input').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('restart-button').style.display = 'none';
    document.getElementById('guess-button').disabled = false;
}

startGame();