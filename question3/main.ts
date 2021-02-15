export class Connect4 {
    
    constructor() {
      this._isNewGameStart = true;
      this._isGameFinished = false;
      this._movingRecord["player1"] = true; 
    }
  
    play(col: number): string{
      if(this._isGameFinished) {
        this._message = InstructionMessage.GameFinished;
        return this._message;
      }
      if(this._movingRecord["player1"] == true){
        this._message = InstructionMessage.Player1Turn;
        let row = this._findNextRow(col);
        if(row == -1) {
          this._message = InstructionMessage.ColumnFull;
          return this._message;
        }
        this._board[row][col] = 1; 
        let isWin = this._checkWinner();
        if(isWin) this._message = "Player 1 wins!";
        else{
          this._movingRecord["player1"] = false;
          this._movingRecord["player2"] = true;
        }
        
      } 
      else if (this._movingRecord["player2"] == true){
        this._message = InstructionMessage.Player2Turn;
        let row = this._findNextRow(col);
        if(row == -1) {
          this._message = InstructionMessage.ColumnFull;
          return;
        }
        this._board[row][col] = 2; 
        let isWin = this._checkWinner();
        if(isWin) this._message = "Player 2 wins!";
        else{
          this._movingRecord["player1"] = true;
          this._movingRecord["player2"] = false;
        }
      } 

      //After playing moved:
      return this._message;
    }

    //area of private params
    _board= [ [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]
            ];

    _movingRecord = {"player1": true, "player2": false};
    _isNewGameStart: boolean ;
    _isGameFinished: boolean ;
    _message: string;

    _checkWinner() : boolean{
      let isWin = (this._checkAllRowSame() || this._checkAllColumnSame() || this._checkAllDiagonalSame());
      if(isWin) this._isGameFinished = true;
      return isWin;
    }

    _findNextRow(col:number):number{
      for(let i = 0; i<6; i++){
        if(this._board[i][col] == 0) return i;
      }
      return -1;
    }

    _checkAllRowSame() : boolean {
      let count = 0;
      for (let i = 0; i < 6; i++) {
        var flag : Boolean = true;
        for (let j = 0; j < 5 ; j++) 
        {
            if ( this._board[i][j] != 0) 
            { 
                flag = (this._board[i][j] == this._board[i][j + 1]);
                if(flag) count++; 
                if (count == 3) return true;
            } 
            else 
            {
                flag = false;
                count = 0; 
            }
        }
      }
      return false;
    }

    _checkAllColumnSame() : boolean {
      console.log(this._board);
      let count = 0;
      for (let i = 0; i < 6; i++) {
          var flag : Boolean = true;
          for (let j = 0; j < 5; j++) {
              if (this._board[j][i] !=0) { 
                  flag = (this._board[j][i] == this._board[j + 1][i]); 
                  if(flag) count++; 
                  if (count == 3) return true;
              } else {
                  flag = false;
                  count = 0;
              }
          }
      }
      return false;
    }

    _checkAllDiagonalSame() : boolean {
     
      let count = 0;
      for (let k = 0; k<=2; k++) {
        let j = 0;
        for(let i =0; i <= 4; i++){
          let flag : boolean = true;
          if (this._board[i][j] != 0) { 
              flag = this._board[i][j] == this._board[i + 1][j + 1];
              if(flag) count++; 
              if (count == 3) return true; 
          } else {
            flag = false;
            count = 0;
          }
          j++;
        }
      }

      for (let k = 1; k<=3; k++) {
        let j = 1;
        for(let i =0; i <= 4; i++){
          let flag : boolean = true;
          if (this._board[i][j] != 0) { 
              flag = this._board[i][j] == this._board[i + 1][j + 1];
              if(flag) count++; 
              if (count == 3) return true; 
          } else {
            flag = false;
            count = 0;
          }
          j++;
        }
      }

      for (let k = 3; k<=5; k++) {
        let j = 0;
        for(let i = 3; i <=5; i++){
          let flag : boolean = true;
          if (this._board[i][j] != 0) { 
              flag = this._board[i][j] == this._board[i -1][j + 1];
              if(flag) count++; 
              if (count == 3) return true; 
          } else {
            flag = false;
            count = 0;
          }
          j++;
        }
      }

      for (let k = 1; k<=3; k++) {
        let j = 1;
        for(let i =5; i >=0; i--){
          let flag : boolean = true;
          if (this._board[i][j] != 0) { 
              flag = this._board[i][j] == this._board[i -1][j + 1];
              if(flag) count++; 
              if (count == 3) return true; 
          } else {
            flag = false;
            count = 0;
          }
          j++;
        }
      }
      
      return false;
    }
    

  }

  enum InstructionMessage{
    "Player1Turn" = "Player 1 has a turn",
    "Player2Turn" = "Player 2 has a turn",
    "ColumnFull"  = "Column full!",
    "GameFinished" = "Game has finished!"
  }