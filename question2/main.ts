export function findOutlier(integers: number[]): number {
  let odd: number[] = integers.filter(num => num % 2 === 0);
  let even: number[] = integers.filter(num => num % 2 !== 0);
  if (odd.length > even.length) {
    return even[0];
  } else if (odd.length < even.length) {
    return odd[0];
  } else {
    console.error('cannot find Outlier');
  }
}