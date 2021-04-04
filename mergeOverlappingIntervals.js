function mergeOverlappingIntervals(array) {
  const sortedInt = array.sort((a, b) => a[0] - b[0]);
  const mergedInt = [];
  let currentInt = sortedInt[0];
  mergedInt.push(currentInt);
  //console.log("mergedInt")
  for (const nextInt of sortedInt) {
    console.log('nextInt', nextInt);
    const [_, currentIntEnd] = currentInt;
    const [nextIntStart, nextIntEnd] = nextInt;
    if (currentIntEnd >= nextIntStart) {
      currentInt[1] = Math.max(currentIntEnd, nextIntEnd);
    } else {
      currentInt = nextInt;
      mergedInt.push(currentInt);
      console.log('mergedInt', mergedInt);
    }
  }

  return mergedInt;
}
