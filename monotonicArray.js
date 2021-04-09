function isMonotonic(array) {
  let direction = null;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      //increasing
      if (direction === 'decreasing') return false;
      else direction = 'increasing';
    } else if (array[i] < array[i - 1]) {
      if (direction === 'increasing') return false;
      else direction = 'decreasing';
    }
  }
  return true;
}
