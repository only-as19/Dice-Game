let player1Score = 0;
let player2Score = 0;
let active = true;


const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1ScoreBoard = document.getElementById("player1scoreboard");
const player2ScoreBoard = document.getElementById("player2scoreboard");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

rollBtn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*6)+1;
    console.log(random)
    if(active === true){
        player1Score += random;
        player1ScoreBoard.textContent = player1Score;
        player1Dice.innerText = random;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 turn";
    }else{
        player2Score += random;
        player2ScoreBoard.textContent = player2Score;
        player2Dice.innerText = random;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active")
        message.textContent = "Player 1 turn";
        
    }
    if( player1Score >= 20){
        message.textContent = "Player 1 Wins";
        rollBtn.style.display = "none";
        resetBtn.style.display = "block";
        
    }else if(player2Score >= 20) {
        message.textContent = "player 2 wins";
        rollBtn.style.display = "none";
        resetBtn.style.display = "block";
    }
    active = !active;
})


resetBtn.addEventListener('click', function(){
    reset();
})

function reset(){
        message.textContent = "Player 1 turn";
        player1ScoreBoard.textContent = "0";
        player2ScoreBoard.textContent = "0";
        player1Dice.textContent = "-";
        player2Dice.textContent = "-";
        player1Score = 0;
        player2Score = 0;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        resetBtn.style.display= "none";
        rollBtn.style.display= "block";



}