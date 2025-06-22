let userScore = 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    //rock,paper,scissors
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame = ()=>{
    console.log("Game Draw");
    msg.innerText = "Game Draw! Play again";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("you win!");
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = `You Win :) Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose :( Computer's ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red";
    }
}

let playGame = (userChoice) =>{
    console.log("User choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin =  compChoice=== "scissors" ? false:true;
        }
        else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice, compChoice );
        
    }
}

choices.forEach((choice) => { 
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
