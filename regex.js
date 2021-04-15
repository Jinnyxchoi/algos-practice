var isPalindrome = function (s) {
  const lowerCase = s.toLowerCase();
  let leftPointer = 0;
  let rightPointer = s.length - 1;
  const regExp = /^[a-z0-9]+$/;

  while (leftPointer <= rightPointer) {
    if (!lowerCase[leftPointer].match(regExp)) {
      leftPointer++;
      continue;
    }
    if (!lowerCase[rightPointer].match(regExp)) {
      rightPointer--;
      continue;
    }

    if (lowerCase[leftPointer] !== lowerCase[rightPointer]) return false;

    leftPointer++;
    rightPointer--;
  }
  return true;
};
