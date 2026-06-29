export function analyzeArray(numbers) {
  const length = numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  // Sum all numbers and divide by the length
  const average = numbers.reduce((sum, current) => sum + current, 0) / length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}
