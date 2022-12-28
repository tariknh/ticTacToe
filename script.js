function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('mouseover', () => {
    resetBtn.className = 'active'
})
resetBtn.addEventListener('mouseout', () => {
    resetBtn.className = 'idle'
})
/*(function game() {
  const board = ['', '', '', '', '', '', '', '', ''];
  const playerOne = new Player('john', 'X');
  const playerTwo = new Player('chris', 'O');
  return (playerOne, playerTwo, board);
}());
*/
let turn = false;
// eslint-disable-next-line no-unused-expressions
(function displayBoard() {
  const board = ['', '', '', '', '', '', '', '', ''];
  const playerOne = new Player('john', 'X');
  const playerTwo = new Player('chris', 'O');
  const webBoard = document.querySelector('section');
  board.forEach((tile) => {
    const createTile = document.createElement('div');
    createTile.addEventListener('click', () => {
      turn = !turn;
      if (turn) {
        tile = playerOne.marker;
        createTile.innerHTML = `<span>${tile}</span>`;
      } else {
        tile = playerTwo.marker;
        createTile.innerHTML = `<span>${tile}</span>`;
      }
    });
    webBoard.appendChild(createTile);
  });
  return (webBoard);
}());

/* function displayGameboard (){
    const boxOne =
}

for (const tile of gameBoard){

}
const playerOne = new Player('john', 'X');
const playerTwo = new Player('chris', 'O');
*/
