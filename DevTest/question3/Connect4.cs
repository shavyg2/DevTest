using System;

namespace DevTest
{
    class Connect4
    {
        private int[,] grid;
        private int playerNumber;
        private const int ROWS = 6;
        private const int COLUMNS = 7;
        private bool gameEnd;

        // constructor initializes all elements in the grid to 0
        // we will use the default 0 integer to indicate that
        // that position in the game is empty
        public Connect4()
        {
            grid = new int[ROWS, COLUMNS];
            playerNumber = 0;
            gameEnd = false;
        }

        public String play(int col)
        {
            setPlayerTurn();

            // A player has won
            if (gameEnd)
            {
                return "Game has finished!";
            }

            // If the final row has a disc in it
            // then the column is full
            if (grid[0, col] != 0)
            {
                return "Column full!";
            }

            // To visualize the grid like a
            // Connect 4 grid, we fill up from
            // the bottom up
            int row;
            for (row = 5; row >= 0; row--)
            {
                if (grid[row, col] == 0)
                {
                    grid[row, col] = playerNumber;
                    break;
                }
            }
            
            return validateStatus(row, col);
        }

        // we will perform 4 checks: vertical, horizontal
        // right diagonal ( / ), and left diagonal ( \ ).
        private String validateStatus(int row, int col)
        {

            if (VerticalTest(row,col) == 4 || 
                HorizontalTest(row,col) == 4 ||
                RightDiagTest(row,col) == 4 ||
                LeftDiagTest(row,col) == 4)
            {
                gameEnd = true;
                return "Player " + playerNumber + " wins!";
            }

            //Check is complete and player did not win
            return "Player " + playerNumber + " has a turn";
        }

        // only possibility is the latest addition
        // is the top most disc so we count the
        // number of discs that belong to the player
        // benath to see if there are exactly 4
        private int VerticalTest(int row, int col)
        {
            int counter = 1;

            for (int i = 1; i <= 3 && row + i < ROWS; i++)
            {
                if (grid[row + i,col] == playerNumber)
                {
                    counter++;
                }
            }

            return counter;
        }

        // we check the sequence of discs that belong to
        // the player left and right
        // setting j and k to an arbitrary large number
        // to avoid counting instances where the discs
        // are not consecutive
        private int HorizontalTest(int row, int col)
        {
            int counter = 1;

            for (int i = 1, j = 1, k = 1; i <= 3 && (col - i >= 0 || col + i < COLUMNS); i++, j++, k++)
            {
                if (col + j < COLUMNS && grid[row,col + j] == playerNumber)
                {
                    counter++;
                }
                else
                {
                    j = 1000000;
                }

                if (col - i >= 0 && grid[row,col - i] == playerNumber)
                {
                    counter++;
                }
                else
                {
                    k = 1000000;
                }
            }

            return counter;
        }

        // we check the sequence of the discs diagonally
        // in this shape ' / '
        // same concept as the horizontal test in terms
        // of j and k
        private int RightDiagTest(int row, int col)
        {
            int counter = 1;

            for (int i = 1, j = 1, k = 1; 
                (row + i < ROWS && col - i >= 0) || (row - i >= 0 && col + i < COLUMNS); 
                i++, j++, k++)
            {
                if ((row + j < ROWS && col - j >= 0) && grid[row + j,col - j] == playerNumber)
                {
                    counter++;
                }
                else
                {
                    j = 1000000;
                }
                if ((row - k >= 0 && col + k < COLUMNS) && grid[row - k,col + k] == playerNumber)
                {
                    counter++;
                }
                else
                {
                    k = 1000000;
                }
            }

            return counter;
        }

        // left diagonal is the same concept as the right
        // diagonal except shape is ' \ '
        private int LeftDiagTest(int row, int col) {

            int counter = 1;

            for (int i = 1, j = 1, k = 1;
                (row - i >= 0 && col - i >= 0) || (row + i < ROWS && col + i < COLUMNS);
                i++, j++, k++)
            {
                if ((row - j >= 0 && col - j >= 0) && grid[row - j, col - j] == playerNumber)
                {
                    counter++;
                }
                else
                {
                    j = 1000000;
                }
                if ((row + k < ROWS && col + k < COLUMNS) && grid[row + k, col + k] == playerNumber)
                {
                    counter++;
                }
                else
                {
                    k = 1000000;
                }
            }

            return counter;
        }
        private void setPlayerTurn()
        {
            if (playerNumber == 0)
            {
                playerNumber = 1;
            }
            else if(playerNumber == 1)
            {
                playerNumber = 2;
            }
            else if(playerNumber == 2)
            {
                playerNumber = 1;
            }
        }

        public void printGrid()
        {
            for (int i = 0; i < 6; i++)
            {
                for (int j = 0; j < 7; j++)
                {
                    Console.Write(grid[i,j] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
