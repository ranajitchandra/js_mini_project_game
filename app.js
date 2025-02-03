let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user_score");
const comp_score = document.querySelector("#comp_score");

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame()
    }else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const genCompChoice = (userChoice) => {
    const opt = ["rock", "paper", "scissors"]
    const randNum = Math.floor(Math.random() * 3);
    return opt[randNum];
}

const drawGame = () => {
    msg.innerText = "Draw Game";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        user_score.innerText=userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comp_score.innerText=compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}