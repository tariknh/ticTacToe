/* eslint-disable no-console */
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
function clearBoard() {
  const allDivs = document.querySelectorAll('div');
  board = ['', '', '', '', '', '', '', '', ''];
  allDivs.forEach((eachDiv) => {
    eachDiv.innerHTML = '';
  });
}
let xTurn = false;
const displayWin = document.querySelector('body > section:nth-child(4) > h2');
let board = ['', '', '', '', '', '', '', '', ''];
function checkWin() {
  const checkDraw = board.reduce((first, second) => first + second)
  const firstRow = board[0] + board[1] + board[2];
  const secondRow = board[3] + board[4] + board[5];
  const thirdRow = board[6] + board[7] + board[8];
  const firstCol = board[0] + board[3] + board[6];
  const secondCol = board[1] + board[4] + board[7];
  const thirdCol = board[2] + board[5] + board[8];
  const rightCross = board[0] + board[4] + board[8];
  const leftCross = board[2] + board[4] + board[6];
  if (
    firstRow === 'XXX'
    || secondRow === 'XXX'
    || thirdRow === 'XXX'
    || firstCol === 'XXX'
    || secondCol === 'XXX'
    || thirdCol === 'XXX'
    || rightCross === 'XXX'
    || leftCross === 'XXX'
  ) {
    displayWin.innerHTML = 'X Is The Winner!';
    clearBoard();
  } else if (
    firstRow === 'OOO'
    || secondRow === 'OOO'
    || thirdRow === 'OOO'
    || firstCol === 'OOO'
    || secondCol === 'OOO'
    || thirdCol === 'OOO'
    || rightCross === 'OOO'
    || leftCross === 'OOO'
  ) {
    displayWin.innerHTML = 'O Is The Winner!';
    clearBoard();
  } else if (
    checkDraw.length === 9
  ) {
    displayWin.innerHTML = 'DRAW!';
    clearBoard();
  }
}
// eslint-disable-next-line no-unused-expressions
(function displayBoard() {
  const playerOne = new Player('john', 'X');
  const playerTwo = new Player('chris', 'O');
  const turnCount = 0;
  let boxID = 0;
  const webBoard = document.querySelector('body > section.sectionGrid');
  board.forEach((tile) => {
    const createTile = document.createElement('div');
    createTile.setAttribute('id', boxID);
    boxID += 1;
    createTile.addEventListener('click', (obj) => {
      if (xTurn) {
        if (createTile.innerHTML !== '') {
          return console.log('taken');
        }
        board[obj.currentTarget.id] = playerOne.marker;
        createTile.innerHTML = `<span>${playerOne.marker}</span>`;
        checkWin();
        xTurn = !xTurn;
      } else {
        if (createTile.innerHTML !== '') {
          return console.log('taken');
        }
        board[obj.currentTarget.id] = playerTwo.marker;
        createTile.innerHTML = `<span>${playerTwo.marker}</span>`;
        checkWin();
        xTurn = !xTurn;
      }
    });
    webBoard.appendChild(createTile);
  });
  return (webBoard);
}());
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('mouseover', () => {
  resetBtn.className = 'active';
});
resetBtn.addEventListener('mouseout', () => {
  resetBtn.className = 'idle';
});
resetBtn.addEventListener('click', () => {
  clearBoard();
});
/* function displayGameboard (){
    const boxOne =
}

for (const tile of gameBoard){

}
const playerOne = new Player('john', 'X');
const playerTwo = new Player('chris', 'O');
*/
