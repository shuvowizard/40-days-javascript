/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.


// Function to get computer's choice
function rockPaperScissorsGame() {
    console.log('Getting Started With the 🪨, Paper 🧻, or Scissors ✂️ Game');
    const userChoicePrompt = prompt('Please enter your choice: Rock, Paper, or Scissors');
    const userChoice = userChoicePrompt.toLowerCase();


    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1; // Generates a number between 1 and 3

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    console.log("User's choice:", userChoice);
    console.log("Computer's choice:", computerChoice);

    if (userChoice === computerChoice) {
        console.log("It's a tie!");

    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        console.log("You the User WINS! yay!!!");

    } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
               (userChoice === 'paper' && computerChoice === 'scissors') ||
               (userChoice === 'scissors' && computerChoice === 'rock')) {
        console.log("Oh Ho... Computer Wins!!!");
    } else {
        console.log("We didn't understand your input. Please enter Rock, Paper, or Scissors only.");
    } 


    const playAgainPrompt = prompt('Do you want to play again? (yes/no)');
    const playAgain = playAgainPrompt.toLowerCase();

    if (playAgain === 'yes') {
        rockPaperScissorsGame();
    } else {
        console.log('Thanks for playing! Goodbye!');
    }

}


// Start the game
rockPaperScissorsGame();