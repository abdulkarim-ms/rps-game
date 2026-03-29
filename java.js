
function getComputerChoice() {
    r =     Math.floor(Math.random() * 3);
   return r===0 ? "rock" : r===1 ? "paper" : "scissors";

}
function getHumanChoice(){
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;}
    else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
} 
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        return `human`;
    } else {
        return `computer`;
    }
}
 function playGme() {
    let humanScore=0;
    let computerScore=0;
    
     for(let i=1; i<=5; i++) {
        const humanSelection= getHumanChoice();
        const computerSelection = getComputerChoice();
         const result=playRound(humanSelection,computerSelection);
     

        if (result==="human"){
           humanScore++;
        }
        else if(result==="computer"){
           computerScore++;
        } else{
          console.log("It's a tie game")
        }
     }
     if(humanScore>computerScore){
            return "HUrry! you win."
        } else if(computerScore>humanScore){
            return "You lose, computer wins"
        } else {
            return "it's a tie game"
        }
} console.log(playGme())