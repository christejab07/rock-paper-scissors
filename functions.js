function getComputerChoice(){
     var choices = ["scissors", "paper", "rock"]
     var el = choices[Math.floor(Math.random() * 3)];
     return el;
}
//How each round will be played
function playRound(playerSelection, computerSelection) {
     const winningMoves = {
       "rock": "scissors",
       "scissors": "paper",
       "paper": "rock"
     };
     if (playerSelection === computerSelection) {
       return "Tie!";
     }
     if (winningMoves[playerSelection] === computerSelection) {
       return "You Win!";
     } else {
       return "You Lose!";
     }
}
//Playing 5 times
function main() {
     let playerPoints = 0;
     let computerPoints = 0;
     for (let i = 0; i < 5; i++) {
       const playerSelection = prompt("Enter your selection (rock, scissors, or paper): ");
       console.log(`Player: ${playerSelection}`);
       const computerSelection = getComputerChoice();
       console.log(`Computer: ${computerSelection}`);
       const winner = playRound(playerSelection, computerSelection);
       if (winner === "You Win!") {
         playerPoints++;
       } else {
         computerPoints++;
       }
       console.log(`Player points: ${playerPoints} Computer points: ${computerPoints}`);
     }

     // Determine the winner of the game.
     if (playerPoints > computerPoints) {
       return "You won!";
     } else if (playerPoints < computerPoints) {
       return "Computer won!";
     } else {
       return "Tie!";
     }
   }
   console.log(main())