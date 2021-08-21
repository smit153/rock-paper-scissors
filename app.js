const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
let showIcon = 0;
let computerShowIcon =0;
const round = document.querySelector('.roundNumber');
let result = document.getElementById('result');
let roundnum = 1;


let computerScore = 1;
let playerScore = 1;
const rockIcon = "rock";
const paperIcon = "paper";
const scissorsIcon = "scissors";
const randomClasses = Math.floor(Math.random() * 3);

const tie = ()=>{
    result.innerHTML = "It's a Tie ! ";
    pScore.innerHTML = pScore.innerHTML;
    cScore.innerHTML = cScore.innerHTML;
    timeDelay();
}
const win = ()=>{
  
    result.innerHTML = "You Won ! ";
    pScore.innerHTML = playerScore;
    playerScore++;
    timeDelay();
    
}
const lose = ()=>{
    result.innerHTML = "You Loosed ! ";
    cScore.innerHTML = computerScore;
    computerScore++;
    timeDelay();
}

const game = () =>{
    if(showIcon === computerShowIcon){    
        tie();
    }
    else if(showIcon == rockIcon && computerShowIcon == scissorsIcon){
      
        win();
    }else if(showIcon == rockIcon && computerShowIcon == paperIcon){
        
        lose();
    }else if(showIcon == paperIcon && computerShowIcon == scissorsIcon){
       
        lose();
    }else if(showIcon == paperIcon && computerShowIcon == rockIcon){
        
        win();
    }else if(showIcon == scissorsIcon && computerShowIcon == rockIcon){
        
        lose();
    }else if(showIcon == scissorsIcon && computerShowIcon == paperIcon){
        win();
    }
}







const computerIcon = ()=>{
    const num=Math.floor(Math.random() * 3);
    if(num==0){
        document.getElementById('l2').setAttribute("class", "sci");
        computerShowIcon="scissors";
    }
    else if(num==1){
        document.getElementById('l2').setAttribute("class", "roc");
        computerShowIcon="rock";
    }
    else{
        document.getElementById('l2').setAttribute("class", "pap");
        computerShowIcon="paper";
    }
    game();
}

function sci()
{
    document.getElementById('l1').setAttribute("class", "sci");
    showIcon="scissors";
    computerIcon();
}
function roc()
{
    document.getElementById('l1').setAttribute("class", "roc");
    showIcon="rock";
    computerIcon();
}
function pap()
{
    document.getElementById('l1').setAttribute("class", "pap");
    showIcon="paper";
    computerIcon();
}

function timeDelay(){
setTimeout(function(){  
    document.getElementById('l1').setAttribute("class", "load");
    document.getElementById('l2').setAttribute("class", "load");
    result.innerHTML = "Choose One !";

    roundnum++;
    round.innerText = `${roundnum}`;
}, 1500);
}