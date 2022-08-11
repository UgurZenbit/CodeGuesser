/**
 * @param min included
 * @param max excluded
 * @returns a random number between min and max
 */
export const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(min + (max - min) * Math.random());
};

export const generateRandomGuess = () => {
  return generateRandomNumber(1000, 10000);
};
