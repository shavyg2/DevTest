export function findOutlier(integers: number[]): number {
  var evenArr = integers.filter(integer => integer % 2 === 0); 
  var oddArr = integers.filter(integer  => integer % 2 !== 0);
  return oddArr.length === 1 ? oddArr[0] : evenArr[0]
  }