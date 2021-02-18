export class Connect4 {
  private maps: string[][];
  private rows: number;
  private columns: number;
  private currentplayer: number;
  private currentcolor: 'R' | 'Y';
  private printString: string;
  private isWin: boolean;

  constructor() {
    // Good luck
    this.maps = Array(6).fill(null).map(() => Array(7));
    this.rows = 6;
    this.columns = 7;
    this.currentplayer = 1;
    this.currentcolor = 'R';
    this.printString = '';
    this.isWin = false;
  }
  play(col: number): string {
    // Good luck
    // checking if someone try to play after game is done.
    if (this.isWin) {
      this.printString = "Game has finished!";
      return this.printString;
    }

    //dropping checker
    for (let i = this.rows - 1; i >= 0; i--) {
      if (!this.maps[i][col]) {
        this.maps[i][col] = this.currentcolor;
        this.printString = "Player " + this.currentplayer + " has a turn";
        break;
      }
    }
    //checking who winner is
    this.checkingWinners();

    //switching player
    this.currentcolor = this.currentplayer === 1 ? 'Y' : 'R';
    this.currentplayer = this.currentcolor === 'R' ? 1 : 2;


    //checking full column
    if (this.maps[0][col] === this.currentcolor) {
      return "Column full!";
    }

    return this.printString;
  }

  checkingWinners() {
    // checking winner
    //vertical
    for (let i = 0; i < this.rows - 3; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.maps[i][j] === this.currentcolor && this.maps[i + 1][j] === this.currentcolor && this.maps[i + 2][j] === this.currentcolor && this.maps[i + 3][j] === this.currentcolor) {
          this.printString = "Player " + this.currentplayer + " wins!";
          this.isWin = true;
        }
      }
    }
    // horizontcal
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns - 3; j++) {
        if (this.maps[i][j] === this.currentcolor && this.maps[i][j + 1] === this.currentcolor && this.maps[i][j + 2] === this.currentcolor && this.maps[i][j + 3] === this.currentcolor) {
          this.printString = "Player " + this.currentplayer + " wins!";
          this.isWin = true;
        }
      }
    }

    // 1 diagonally
    for (let i = 3; i < this.rows; i++) {
      for (let j = 0; j < this.columns - 3; j++) {
        if (this.maps[i][j] === this.currentcolor && this.maps[i - 1][j + 1] === this.currentcolor && this.maps[i - 2][j + 2] === this.currentcolor && this.maps[i - 3][j + 3] === this.currentcolor) {
          this.printString = "Player " + this.currentplayer + " wins!";
          this.isWin = true;
        }
      }
    }

    //2 diagonally
    for (let i = 0; i < this.rows - 3; i++) {
      for (let j = 0; j < this.columns - 3; j++) {
        if (this.maps[i][j] === this.currentcolor && this.maps[i + 1][j + 1] === this.currentcolor && this.maps[i + 2][j + 2] === this.currentcolor && this.maps[i + 3][j + 3] === this.currentcolor) {
          this.printString = "Player " + this.currentplayer + " wins!";
          this.isWin = true;
        }
      }
    }
  }
}