let playerScore = 0;
          let computerScore = 0;
          let round = 0;
          function computerPlay() {
               const choices = ["Rock", "Paper", "Scissors"];
               return choices[Math.floor(Math.random() * choices.length)];
          }

          function playRound(playerSelection, computerSelection) {
               if (playerSelection === computerSelection) {
                    return "It's a tie!";
               } else if (
                    (playerSelection === "Rock" && computerSelection === "Scissors") ||
                    (playerSelection === "Paper" && computerSelection === "Rock") ||
                    (playerSelection === "Scissors" && computerSelection === "Paper")
               ) {
                    playerScore++;
                    return `Player: ${playerScore} <br />computer: ${computerScore} <br/> You win! ${playerSelection} beats ${computerSelection}.`;
               } else {
                    computerScore++;
                    return `Player: ${playerScore} <br />computer: ${computerScore} <br/> You lose! ${computerSelection} beats ${playerSelection}.`;
               }
          }

          function game(playerSelection) {
               if (round < 5) {
                    round++;
                    const computerSelection = computerPlay();
                    console.log(computerSelection);
                    const result = playRound(playerSelection, computerSelection);
                    document.getElementById("result").innerHTML = result;
               }
               else {
                    document.getElementById("player").innerHTML = `Player: ${playerScore}`;
                    document.getElementById("computer").innerHTML = `Computer: ${computerScore}`;
                    if (playerScore > computerScore) {
                         document.getElementById("result").innerHTML = "Game over. You won the game!";
                    } else if (computerScore > playerScore) {
                         document.getElementById("result").innerHTML = "Game over. You lost the game.";
                    } else {
                         document.getElementById("result").innerHTML = "Game over. It's a tie!";
                    }
               }
          }

          document.getElementById("rock").addEventListener("click", function () {
               game("Rock");
          });
          document.getElementById("paper").addEventListener("click", function () {
               game("Paper");
          });
          document.getElementById("scissors").addEventListener("click", function () {
               game("Scissors");
          });