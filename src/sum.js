export const sum = (first, second) => {
  const total = first + second;
  return total;
};

export const sumAll = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};
