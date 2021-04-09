function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let pointerA = 0;
  let pointerB = 0;
  let currentSmallestDiff = Infinity;
  let pair = [];
  //while they are both in range.
  while (pointerA < arrayOne.length && pointerB < arrayTwo.length) {
    const numOne = arrayOne[pointerA];
    const numTwo = arrayTwo[pointerB];
    let currentDiff;

    if ((numOne < 0 && numTwo > 0) || (numTwo < 0 && numOne > 0)) {
      currentDiff = Math.abs(numOne) + Math.abs(numTwo);
    } else {
      currentDiff = Math.abs(numOne - numTwo);
    }

    if (currentDiff < currentSmallestDiff) {
      currentSmallestDiff = currentDiff;
      pair = [numOne, numTwo];
    }

    if (numOne < numTwo) {
      pointerA++;
    } else {
      pointerB++;
    }
  }
  return pair;
}
