export function findOutlier(integers: number[]): number {
    var oddArr: number[] = [];
    var evenArr: number[] = [];

    for(var i: number = 0; i < integers.length ; i++){
      if(integers[i]%2 === 0) evenArr.push(integers[i]);
      if(integers[i]%2 === 1) oddArr.push(integers[i]);
    }
    return (evenArr.length == 1) ? evenArr[0] : oddArr[0];
}