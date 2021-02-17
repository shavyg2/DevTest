function Connect4 () {
  this.board = [];
    for (let row = 0; row < 6; row++) {
        this.board.push([]);
      for (let col = 0; col < 7; col++) {
        this.board[row].push(0);
      }
    }
  this.currentPlayer = 1;
  this.winner = null;
  this.moves = 0;
}


Connect4.prototype.columnFull = function(col) {
  let row = 0;
  while (this.board[row][col] !== 0) { 
    if (row === 5) return true;
    row++;
  }
}


Connect4.prototype.addToColumn = function(col) {
  let row = 5;
  while (this.board[row][col] === 1 || this.board[row][col] === 2) { row-- }
  this.board[row][col] = this.currentPlayer;
  this.moves += 1;
}


Connect4.prototype.checkForWinHV = function() {
  let p = this.currentPlayer;
  let horizontal = 0;
  let vertical = {};
  for (let row = 5; row > 0; row--) {
    for (let col = 0; col < 7; col++) {
      if (vertical[col] === undefined) vertical[col] = 0;
      vertical[col] = this.board[row][col] === p ? vertical[col] += 1 : 0;
      horizontal = this.board[row][col] === p ? horizontal += 1 : 0;
      if (horizontal === 4 || vertical[col] === 4) {
        return true;
      }
    }
  }
  return false;
}
  
  
Connect4.prototype.checkForWinDiag = function() {
  let p = this.currentPlayer;
  for (let r = 5; r > 2; r--) {
    for (let c = 0; c < 3; c++) {
      if (this.board[r][c] === p && this.board[r-1][c+1] === p) {
        if (this.board[r-2][c+2] === p && this.board[r-3][c+3]) {
          return true;
        }
      }
    }
    for (let c = 6; c > 3; c--) {
      if (this.board[r][c] === p && this.board[r-1][c-1] === p) {
        if (this.board[r-2][c-2] === p && this.board[r-3][c-3] === p) {
          return true;
        }
      }
    }
  }
  return false;
}


Connect4.prototype.declareWinner = function() {
  this.winner = this.currentPlayer;
  return 'Player ' + this.currentPlayer + ' wins!';
}


Connect4.prototype.play = function (col){
  if (this.winner) return 'Game has finished!';
  if (this.columnFull(col)) return 'Column full!';
  this.addToColumn(col);
  
  if (this.moves > 6) {
    if (this.checkForWinHV()) {
      return this.declareWinner();
    }
    if (this.checkForWinDiag()) {
      return this.declareWinner();
    }
  }
  
  this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  let justPlayed = this.currentPlayer === 1 ? 2 : 1;
  return 'Player ' + justPlayed + ' has a turn';
};

export default Connect4;