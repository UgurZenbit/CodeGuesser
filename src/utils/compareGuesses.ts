export const compareGuesses = (
  correctGuess: string,
  currentGuess: string,
): boolean => {
  for (let i = 0; i < currentGuess?.length; i++) {
    const currentNumber = currentGuess[i];
    if (currentNumber !== correctGuess[i]) return false;
  }
  return true;
};
