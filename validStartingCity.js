function validStartingCity(distances, fuel, mpg) {
  let lowestAmountofGas = [0, 0];
  let currentAmountOfGas = 0;

  for (let i = 1; i < distances.length; i++) {
    currentAmountOfGas += fuel[i - 1] * mpg;
    currentAmountOfGas -= distances[i - 1];

    if (currentAmountOfGas < lowestAmountofGas[0]) {
      lowestAmountofGas = [currentAmountOfGas, i];
    }
  }
  return lowestAmountofGas[1];
}
