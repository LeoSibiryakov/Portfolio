let players = ['x', 'o'];
let activePlayer = 0; 
let square = [
    ['','',''],
    ['','',''],
    ['','','']
  ]

function startGame() {
  square = [
    ['','',''],
    ['','',''],
    ['','','']
  ]
activePlayer = 0;
renderBoard(square);
}

function click(row,column) {
  square[row][column] = players[activePlayer];
  let game = players[activePlayer];
    if (square[0][0]==game && square[0][1]==game && square[0][2]==game) {
      showWinner(activePlayer);
    } else if (square[0][0]==game && square[1][0]==game && square[2][0]==game) {
      showWinner(activePlayer);
    } else if (square[0][0]==game && square[1][1]==game && square[2][2]==game) {
      showWinner(activePlayer);
    } else if (square[0][2]==game && square[1][1]==game && square[2][0]==game) {
      showWinner(activePlayer);
    }
  renderBoard(square);
  activePlayer = activePlayer === 0 ? 1 : 0;
  }