const element = document.querySelector(".grid");



for (let index = 0; index < 256; index++) {
    const gridSquare = document.createElement("div");
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'black';
    });
    element.appendChild(gridSquare);
}

const clearButton = document.createElement('button');
clearButton.textContent="Clear";
document.body.appendChild(clearButton);

clearButton.addEventListener('click',() =>{
    document.querySelectorAll('.grid div').forEach(gridSquare => {
        gridSquare.style.backgroundColor = 'white';
    });
});

/*["rock","paper","scissors"].forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice; 
    button.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        playRound(choice, computerChoice);
    });
    buttonsDiv.appendChild(button);
});*/

