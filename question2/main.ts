export function findOutlier(integers: number[]): number {
    //Determine the array is "even" or "odd" array
    //Just need to check 3 first elements
    var oddCount : number = 0;
    var isOddArr: boolean = false;
    var wrongNumber: number = null;
    for(var i: number = 0; i <=2 ; i++){
      if(integers[i]%2 === 1) oddCount++;
    }
    isOddArr = (oddCount == 2 || oddCount == 3) ? true : false;
    
    for(var i: number = 0; i < integers.length ; i++){
      if(isOddArr && integers[i]%2 === 0) wrongNumber = integers[i];
      if(!isOddArr && integers[i]%2 === 1) wrongNumber = integers[i];
    }
    return wrongNumber;
}