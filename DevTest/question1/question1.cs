using System;

namespace DevTest.question1
{
    class question1
    {
        static void Main(string[] args)
        {
            String[] arr1 = { "n", "s", "n", "s", "n", "s", "n", "s", "n", "s" };
            Console.WriteLine(IsValidWalk(arr1));

            String[] arr2 = { "w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e" };
            Console.WriteLine(IsValidWalk(arr2));

            String[] arr3 = { "w" };
            Console.WriteLine(IsValidWalk(arr3));

            String[] arr4 = { "n", "n", "n", "s", "n", "s", "n", "s", "n", "s" };
            Console.WriteLine(IsValidWalk(arr4));
        }

        static bool IsValidWalk(String[] arr)
        {

            // we can't be early or late so the path has to be exactly
            // 10 mins (10 moves)
            if (arr.Length != 10)
            {
                return false;
            }

            // to check if we have moved vertically or horizontally relative
            // to the starting position
            int vertical = 0, horizontal = 0;

            foreach (String str in arr)
            {
                if (str.Equals("n"))
                    vertical++;
                else if (str.Equals("s"))
                    vertical--;
                else if (str.Equals("e"))
                    horizontal++;
                else if (str.Equals("w"))
                    horizontal--;
            }

            // the movements up, down and right, left cancel each other out
            // and we are back at the starting position
            if (vertical == 0 && horizontal == 0)
                return true;
            else return false;
        }
    }
}
