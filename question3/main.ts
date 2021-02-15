export class Connect4 {
    constructor() {
      this._isNewGameStart = true;
      this._isGameFinished = false;
      this._player1  = new Player1();
      this._player2  = new Player2();
      this._currentPlayer = this._player1;
    }
  
    play(col: number): string{
      var messageRes: string;
      if(this._isGameFinished) {
        messageRes = InstructionMessage.GameFinished;
        return messageRes;
      }
      messageRes =  this._playerMove(this._currentPlayer, col);
      return messageRes;
    }

    //field of private params
    _board= [ [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]
            ];

    _isNewGameStart: boolean ;
    _isGameFinished: boolean ;
    _player1 : PlayerInfo;
    _player2: PlayerInfo;
    _currentPlayer: PlayerInfo;

    _playerMove(player: PlayerInfo, col: number): string{
      let message : string;
      message = player.PlayerTurnMessage;
      let row = this._findNextRow(col);
      if(row == -1) {
        message = InstructionMessage.ColumnFull;
        return message;
      }
      this._board[row][col] = player.PlayerMoveSign;
      let isWin: boolean = this._checkWinner();
      if(isWin) {
        message = player.PlayerWinMessage;
      }
      else
      {
        this._swapPlayer(player);
      }
      return message;
    }

    _swapPlayer(player : PlayerInfo) : void {
      if( player instanceof Player1 ) this._currentPlayer = this._player2;
      else if ( player instanceof Player2 ) this._currentPlayer = this._player1;
      this._currentPlayer.ShouldPlayerMove = true;
    }

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

  enum InstructionMessage {
    "Player1Turn" = "Player 1 has a turn",
    "Player2Turn" = "Player 2 has a turn",
    "Player1Win" = "Player 1 wins!",
    "Player2Win" = "Player 2 wins!",
    "ColumnFull"  = "Column full!",
    "GameFinished" = "Game has finished!"
  }

 interface PlayerInfo {
    PlayerName: string ;
    PlayerTurnMessage: string ;
    PlayerWinMessage: string ;
    ShouldPlayerMove: boolean ;
    PlayerMoveSign: number;
  }

  class Player1 implements PlayerInfo{
    PlayerName = "Player1";
    PlayerTurnMessage = InstructionMessage.Player1Turn;
    PlayerWinMessage = InstructionMessage.Player1Win;
    PlayerMoveSign = 1;
    ShouldPlayerMove = true ;
  }

  class Player2 implements PlayerInfo{
    PlayerName = "Player2";
    PlayerTurnMessage = InstructionMessage.Player2Turn;
    PlayerWinMessage = InstructionMessage.Player2Win;
    PlayerMoveSign = 2;
    ShouldPlayerMove = false ;
  }