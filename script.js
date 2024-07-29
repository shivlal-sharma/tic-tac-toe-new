let board = document.querySelector('.board');
let buttons = document.querySelectorAll('button');
let container = document.getElementsByClassName('container')[0];

let currPlayer = 'X';
let isGameActive = true;

let winninCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let isWinner = ()=>{
    return winninCombo.some(pattern=>{
        let [a,b,c] = pattern;
        return buttons[a].innerText && 
               buttons[a].innerText === buttons[b].innerText && 
               buttons[c].innerText === buttons[a].innerText;
    });
}

buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(!isGameActive) return;
        if(e.target.textContent) return;
        e.target.textContent = currPlayer;
        if(isWinner()){
            isGameActive = false;
            setTimeout(() => alert(`The winner is ${currPlayer}`),500);
        }
        else if(Array.from(buttons).every(button=>button.textContent !== '')){
            isGameActive = false;
            setTimeout(() => alert('Game Draw!!'),500);
        }
        else{
            currPlayer = currPlayer === 'X' ? 'O' : 'X';    
        }
    });
});

let resetButton = document.createElement('button');
resetButton.setAttribute('id','resetButton');
resetButton.textContent = 'Reset Game'
container.appendChild(resetButton);

resetButton.addEventListener('click',()=>{
    for(let i = 0; i<buttons.length; i++){
        buttons[i].textContent = '';
    }
    isGameActive = true;
});
