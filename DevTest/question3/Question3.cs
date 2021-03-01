using System;

namespace DevTest
{
    class Question3
    {
        static void Main(string[] args)
        {
            Connect4 game;

            game = new Connect4();
            Console.WriteLine(game.play(0)); // Player 1 has a turn
            Console.WriteLine(game.play(0)); // Player 2 has a turn
            Console.WriteLine();

            // Testing vertical and end game
            game = new Connect4();
            Console.WriteLine(game.play(0)); // Player 1 has a turn
            Console.WriteLine(game.play(1)); // Player 2 has a turn
            Console.WriteLine(game.play(0)); // Player 1 has a turn
            Console.WriteLine(game.play(1)); // Player 2 has a turn
            Console.WriteLine(game.play(0)); // Player 1 has a turn
            Console.WriteLine(game.play(1)); // Player 2 has a turn
            Console.WriteLine(game.play(0)); // Player 1 wins!
            Console.WriteLine();

            // Testing full column
            game = new Connect4();
            Console.WriteLine(game.play(4)); // Player 1 has a turn;
            Console.WriteLine(game.play(4)); // Player 2 has a turn;
            Console.WriteLine(game.play(4)); // Player 1 has a turn;
            Console.WriteLine(game.play(4)); // Player 2 has a turn;
            Console.WriteLine(game.play(4)); // Player 1 has a turn;
            Console.WriteLine(game.play(4)); // Player 2 has a turn;
            Console.WriteLine(game.play(4)); // Column full!
            Console.WriteLine();

            //Testing Horizontal
            game = new Connect4();
            Console.WriteLine(game.play(1)); // Player 1 has a turn
            Console.WriteLine(game.play(1)); // Player 2 has a turn
            Console.WriteLine(game.play(2)); // Player 1 has a turn
            Console.WriteLine(game.play(2)); // Player 2 has a turn
            Console.WriteLine(game.play(3)); // Player 1 has a turn
            Console.WriteLine(game.play(3)); // Player 2 has a turn
            Console.WriteLine(game.play(4)); // Player 1 wins!
            Console.WriteLine(game.play(4)); // Game has finished!
            Console.WriteLine();

            //Testing Right Diagonal
            game = new Connect4();
            Console.WriteLine(game.play(0)); // Player 1 has a turn
            Console.WriteLine(game.play(1)); // Player 2 has a turn
            Console.WriteLine(game.play(1)); // Player 1 has a turn
            Console.WriteLine(game.play(2)); // Player 2 has a turn
            Console.WriteLine(game.play(2)); // Player 1 has a turn
            Console.WriteLine(game.play(3)); // Player 2 has a turn
            Console.WriteLine(game.play(2)); // Player 1 has a turn
            Console.WriteLine(game.play(3)); // Player 2 has a turn
            Console.WriteLine(game.play(3)); // Player 1 has a turn
            Console.WriteLine(game.play(5)); // Player 2 has a turn
            Console.WriteLine(game.play(3)); // Player 1 wins
            Console.WriteLine();

            //Testing Left Diagonal
            game = new Connect4();
            Console.WriteLine(game.play(3)); // Player 1 has a turn
            Console.WriteLine(game.play(2)); // Player 2 has a turn
            Console.WriteLine(game.play(2)); // Player 1 has a turn
            Console.WriteLine(game.play(1)); // Player 2 has a turn
            Console.WriteLine(game.play(0)); // Player 1 has a turn
            Console.WriteLine(game.play(1)); // Player 2 has a turn
            Console.WriteLine(game.play(1)); // Player 1 has a turn
            Console.WriteLine(game.play(0)); // Player 2 has a turn
            Console.WriteLine(game.play(0)); // Player 1 has a turn
            Console.WriteLine(game.play(5)); // Player 2 has a turn
            Console.WriteLine(game.play(0)); // Player 1 wins
            Console.WriteLine();
        }
    }
}
