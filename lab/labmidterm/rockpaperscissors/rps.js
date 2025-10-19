const playerImage = document.querySelectorAll('.player-image img');
const botImage = document.querySelectorAll('.bot-image img');
const resultDisplay = document.querySelector('.result');
const resetButton = document.querySelector('.btn-reset');

let gameActive = true;
const choice = ['r', 'p', 's'];

playerImage.forEach(img =>{
    img.addEventListener('click', gameProcess)
})
resetButton.addEventListener('click', resetGame)

function gameProcess(e){
    if(!gameActive) return;
    gameActive = false;

    const playerChoice = e.target.className;
    e.target.classList.add('clicked');

    const randomIndex = Math.floor(Math.random() * choice.length);
    const botChoice = choice[randomIndex];
    const selectBotImage = document.querySelector(`.bot-image .${botChoice}`);
    selectBotImage.classList.add('clicked');

    const winner = checkWin(playerChoice,botChoice);
    resultDisplay.textContent = winner;
}

function checkWin(player,bot){
    if(player === bot){ 
        return "Tie 🤝";
    }
    if((player === 'r' && bot === 's') || 
            (player === 'p' && bot === 'r') || 
            (player === 's' && bot === 'p')) 
    {
        return "Player Win 🎉";
    }
    else{
        return "Bot Win 🤖";
    }

}

function resetGame(){
    gameActive = true;
    
    playerImage.forEach(img =>{
        img.classList.remove('clicked');
    })

    botImage.forEach(img =>{
        img.classList.remove('clicked');
    })

    resultDisplay.textContent = '';
}