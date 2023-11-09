function playGame(playerMove) {
    let computerMove = pickComputerMove();
    let result = '';



    if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
            result = 'You lose'
        } else if (computerMove === 'Paper') {
            result = 'You win'
        } else if (computerMove === 'Scissor') {
            result = 'Tie'
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win'
        } else if (computerMove === 'Paper') {
            result = 'Tie'
        } else if (computerMove === 'Scissor') {
            result = 'You lost'
        }
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie'
        } else if (computerMove === 'Paper') {
            result = 'You lost'
        } else if (computerMove === 'Scissor') {
            result = 'You win'
        }
    }
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}






function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        computerMove = 'Rock'
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        computerMove = 'Paper'
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        computerMove = 'Scissor'
    }
    return computerMove;;
}