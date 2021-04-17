function hasSingleCycle(array) {
  let i = 0;
  let currentIdx = 0;

  while (i < array.length) {
    if (i > 0 && currentIdx === 0) return false;
    let jump = array[currentIdx];
    currentIdx = (jump + currentIdx) % array.length;
    if (currentIdx < 0) currentIdx = array.length + currentIdx;
    i++;
  }
  return currentIdx === 0;
}
