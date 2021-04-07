function runLengthEncoding(string) {
  let newStr = '';
  let curChar = string[0];
  let count = 0;

  for (const char of string) {
    if (char === curChar && count < 9) count++;
    else {
      newStr += count;
      newStr += curChar;

      curChar = char;
      count = 1;
    }
  }
  newStr += count;
  newStr += curChar;
  return newStr;
}
