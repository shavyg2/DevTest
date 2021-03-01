using System;

namespace DevTest
{
    class question2
    {
        static void Main(string[] args)
        {
            int[] arr1 = { 0, 1, 2 };
            Console.WriteLine(FindOutlier(arr1));

            int[] arr2 = { 1, 2, 3 };
            Console.WriteLine(FindOutlier(arr2));

            int[] arr3 = { 2, 6, 8, 10, 3 };
            Console.WriteLine(FindOutlier(arr3));

            int[] arr4 = { 0, 0, 3, 0, 0 };
            Console.WriteLine(FindOutlier(arr4));

            int[] arr5 = {1, 1, 0, 1, 1 };
            Console.WriteLine(FindOutlier(arr5));
        }

        static int FindOutlier(int[] arr)
        {
            int odd = 0, even = 0;

            // check if first two elements are odd or even
            for (int i = 0; i < 2; i++)
            {
                if (arr[i]%2 != 0)
                    odd++;
                else
                    even++;
            }

            // the outlier is even
            if (odd == 2)
            {
                foreach(int n in arr)
                {
                    if (n%2 == 0)
                        return n;
                }
            }

            // the outlier is odd
            else if (even == 2)
            {
                foreach(int n in arr)
                {
                    if (n%2 != 0)
                        return n;
                }
            }

            // the outlier is within the first 2 elements
            // check if the third element is the same
            // as the first or second element and return
            // the outlier
            else
            {
                if (arr[2] % 2 == arr[0] % 2)
                    return arr[1];
                else
                    return arr[0];
            }

            // will never reach this point based on the
            // assurances of the inputs (could maintain
            // the code but for simplicity in this case)
            return -1;
        }
    }
}
