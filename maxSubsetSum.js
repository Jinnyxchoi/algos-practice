/* write a function that takes in an array of positive integers and returns the max sum of non-adjacent elements in the array.
if the input array is empty, the function should return 0 */

function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  else if (array.length === 1) return array[0];

  let idxMinusOne = Math.max(array[1], array[0]);
  let idxMinusTwo = array[0];

  for (let i = 2; i < array.length; i++) {
    const current = Math.max(idxMinusTwo + array[i], idxMinusOne);
    idxMinusTwo = idxMinusOne;
    idxMinusOne = current;
  }
  return idxMinusOne;
}
