export class Connect4 {
  grid: any[][];
  turn: number;
  over: boolean;

  constructor() {
    this.grid = [[], [], [], [], [], [], []];
    this.turn = 1;
    this.over = false;
  }

  play(col: number): string {
    if (this.over) return "Game has finished!";
    if (this.grid[col].length === 6) return "Column full!";

    this.grid[col].push(this.turn);
    this.over = this.checkWin();

    const msg = this.over
      ? `Player ${this.turn} wins!`
      : `Player ${this.turn} has a turn`;
    this.turn = this.turn === 1 ? 2 : 1;
    return msg;
  }

  checkWin() {
    let win = false;
    const regex = new RegExp(`${this.turn}{4,7}`);
    let vertical = "";
    let diagonalUp = "";
    let diagonalDown = "";

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        vertical += i <= this.grid[j].length ? this.grid[j][i] : "-";
        if (i + j <= 6) diagonalUp += this.grid[i + j][j];
        if (i - j >= 0) diagonalDown += this.grid[i - j][j];
      }
      win =
        win ||
        regex.test(this.grid[i].join("")) ||
        regex.test(vertical) ||
        regex.test(diagonalUp) ||
        regex.test(diagonalDown);
      vertical = "";
      diagonalUp = "";
      diagonalDown = "";
    }

    for (let i = 1; i <= 2; i++) {
      for (let j = 0; j < 6; j++) {
        diagonalUp += this.grid[0 + j][j + i];
        diagonalDown += this.grid[6 - j][j + i];
      }
      win = win || regex.test(diagonalUp) || regex.test(diagonalDown);
      diagonalUp = "";
      diagonalDown = "";
    }

    return win;
  }
}
